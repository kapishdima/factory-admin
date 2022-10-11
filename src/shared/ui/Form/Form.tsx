import classNames from 'classnames';
import React from 'react';

import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import { getClasses } from './classes';

export type FormChild = React.ReactElement<
  React.HTMLProps<HTMLInputElement>,
  string | React.JSXElementConstructor<any>
>;
type FormProps = {
  onSubmit: SubmitHandler<any>;
  children: FormChild | FormChild[];
  width?: string;
  className?: string;
  values?: any;
};

const Form: React.FC<FormProps> = ({ values, onSubmit, children, className }) => {
  const form = useForm({ defaultValues: values });
  const clasess = getClasses();
  console.log('values', values);

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={classNames(className, clasess)}>
        {children}
      </form>
    </FormProvider>
  );
};

export default Form;
