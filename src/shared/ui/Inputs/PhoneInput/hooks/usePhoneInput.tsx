import React, { useEffect } from 'react';
import intlTelInput from 'intl-tel-input';
import { useForm, useFormContext } from 'react-hook-form';

type UsePhoneInputArgs = {
  id: string;
  name: string;
};

type CreateIntlTelInputArgs = {
  id: string;
  onCountryChange: (iti: intlTelInput.Plugin) => void;
};

const createIntlTelInput = ({ id, onCountryChange }: CreateIntlTelInputArgs) => {
  const inputEl = document.getElementById(id);
  const intlTelOptions: intlTelInput.Options = {
    separateDialCode: true,
  };
  if (!inputEl) {
    throw new Error('Cannot find input element');
  }

  const iti = intlTelInput(inputEl, intlTelOptions);

  inputEl.addEventListener('countrychange', () => {
    onCountryChange(iti);
  });

  return iti;
};

export const usePhoneInput = ({ id, name }: UsePhoneInputArgs) => {
  const intlTelInputRef = React.useRef<intlTelInput.Plugin>();
  const form = useFormContext();

  const onCountryChange = (iti: intlTelInput.Plugin) => {
    const country = iti.getSelectedCountryData();
    form.setValue(name, country.dialCode);
  };

  useEffect(() => {
    intlTelInputRef.current = createIntlTelInput({ id, onCountryChange });

    return () => {
      if (intlTelInputRef.current) {
        intlTelInputRef.current.destroy();
      }
    };
  }, []);

  useEffect(() => {
    if (intlTelInputRef.current) {
      const country = intlTelInputRef.current.getSelectedCountryData();
      form.setValue(name, country.dialCode);
    }
  }, [intlTelInputRef.current?.getSelectedCountryData()]);

  return intlTelInputRef.current;
};
