import React from 'react';

import { Container } from 'shared/ui';

import './style.scss';
import 'intl-tel-input/build/css/intlTelInput.css';
import { usePhoneInput } from './hooks/usePhoneInput';

type PhoneInputProps = React.HTMLProps<Omit<HTMLInputElement, 'ref'>> & {
  label: string;
  hint?: string;
};

const DEFAULT_ID = 'tel-input';
const COUNRTY_FIELD_NAME = 'country_code';

const PhoneInput = React.forwardRef<HTMLInputElement, PhoneInputProps>(
  ({ label, hint, ...props }, ref) => {
    const { id = DEFAULT_ID, ...htmlAttrs } = props;
    usePhoneInput({ id, name: COUNRTY_FIELD_NAME });

    return (
      <Container display="flex" direction="column" width="w-full" className="text-field">
        <label htmlFor={id} className="text-field__label">
          {label}
        </label>

        <input ref={ref} id={id} type="text" className="text-field__input" {...htmlAttrs} />
      </Container>
    );
  },
);

export default PhoneInput;
