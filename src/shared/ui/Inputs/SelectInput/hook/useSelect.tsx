import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';

export type SelectOption = {
  value: string;
  label: string;
};

type UseSelectArgs = {
  name: string;
  placeholder: string;
};

export const useSelect = ({ name, placeholder }: UseSelectArgs) => {
  const DEFAUL_SELECTED_OPTION = { value: '', label: placeholder };
  const [isOpened, setOpen] = useState(false);
  const [selected, setSelected] = useState<SelectOption>(DEFAUL_SELECTED_OPTION);
  const form = useFormContext();

  const open = () => {
    setOpen(true);
  };

  const close = () => {
    setOpen(false);
  };

  const onSelectClick = () => {
    isOpened ? close() : open();
  };

  const onSelectOptionClick = (option: SelectOption) => {
    setSelected(option);
    form.setValue(name, option.value);
    close();
  };

  return { onSelectClick, onSelectOptionClick, selected, isOpened };
};
