import React from 'react';
import classNames from 'classnames';

import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import { getClasses } from './classes';
import { AnyObjectSchema } from 'yup';

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
  schema?: AnyObjectSchema;
};

const Form: React.FC<FormProps> = ({ values, onSubmit, children, className, schema }) => {
  const form = useForm({
    defaultValues: values,
    resolver: schema ? yupResolver(schema) : undefined,
  });
  const clasess = getClasses();

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={classNames(className, clasess)}>
        {children}
      </form>
    </FormProvider>
  );
};

export default Form;
