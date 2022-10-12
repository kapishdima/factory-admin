import React from 'react';

import { usePhoneInput } from './hooks/usePhoneInput';
import { InputAttrs } from '../Input/types';

import InputField from '../Input/InputField';
import { useInput } from '../Input/hook/useInput';

import 'intl-tel-input/build/css/intlTelInput.css';
import './style.scss';

type PhoneInputProps = InputAttrs & {
  label: string;
  name: string;
  hint?: string;
};

const DEFAULT_ID = 'tel-input';
const COUNRTY_FIELD_NAME = 'country_code';

const PhoneInput: React.FC<PhoneInputProps> = ({ label, hint, ...props }) => {
  const { id = DEFAULT_ID, ...htmlAttrs } = props;
  const { attrs, classes } = useInput({ name: props.name });
  usePhoneInput({ id, name: COUNRTY_FIELD_NAME });

  return (
    <InputField id={id} label={label} hint={hint} errors={attrs.fieldState.error}>
      <input id={id} type="text" className={classes} {...attrs.field} {...htmlAttrs} />
    </InputField>
  );
};

export default PhoneInput;
