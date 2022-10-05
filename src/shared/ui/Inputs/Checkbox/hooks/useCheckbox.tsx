import { useState } from 'react';

type UseCheckboxArgs = {
  checked?: boolean;
};

export const useCheckbox = (args: UseCheckboxArgs) => {
  const [checked, setChecked] = useState(args.checked);

  const onChange = () => {
    setChecked((_checked) => !_checked);
  };

  return {
    checked,
    onChange,
  };
};
