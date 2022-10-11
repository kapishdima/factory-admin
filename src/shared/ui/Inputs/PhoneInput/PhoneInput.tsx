import React from 'react';

import { Container, Input } from 'shared/ui';
import { usePhoneInput } from './hooks/usePhoneInput';
import { InputAttrs } from '../Input/types';

import 'intl-tel-input/build/css/intlTelInput.css';
import './style.scss';

type PhoneInputProps = InputAttrs & {
  label: string;
  name: string;
  hint?: string;
};

const DEFAULT_ID = 'tel-input';
const COUNRTY_FIELD_NAME = 'country_code';

const PhoneInput: React.FC<PhoneInputProps> = ({ label, ...props }) => {
  const { id = DEFAULT_ID, ...htmlAttrs } = props;
  usePhoneInput({ id, name: COUNRTY_FIELD_NAME });

  return (
    <Input {...htmlAttrs}>
      {({ field }) => (
        <Container display="flex" direction="column" width="w-full" className="text-field">
          <label htmlFor={id} className="text-field__label">
            {label}
          </label>

          <input id={id} type="text" className="text-field__input" {...field} {...htmlAttrs} />
        </Container>
      )}
    </Input>
  );
};

export default PhoneInput;
