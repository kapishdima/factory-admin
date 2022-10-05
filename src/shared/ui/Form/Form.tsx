import React from 'react';

import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
  UseFormRegister,
} from 'react-hook-form';
import { Container, Input } from 'shared/ui';

export type FormChild = React.ReactElement<
  React.HTMLProps<HTMLInputElement>,
  string | React.JSXElementConstructor<any>
>;
type FormProps = {
  onSubmit: SubmitHandler<any>;
  children: FormChild[];
};

const registerChild = (register: UseFormRegister<FieldValues>, child?: FormChild) => {
  if (!child) {
    return null;
  }

  if (child.props.name) {
    return (
      <Input {...child.props} register={register}>
        {child}
      </Input>
    );
  }

  return child;
};

const Form: React.FC<FormProps> = ({ onSubmit, children }) => {
  const form = useForm();

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <Container display="flex" direction="column">
          {React.Children.map(children, (child: FormChild) => registerChild(form.register, child))}
        </Container>
      </form>
    </FormProvider>
  );
};

export default Form;
