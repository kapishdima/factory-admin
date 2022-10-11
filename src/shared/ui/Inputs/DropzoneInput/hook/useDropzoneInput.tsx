import { useState, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { useDropzone } from 'react-dropzone';

type UseDropzoneInputArgs = {
  name: string;
};

export const useDropzoneInput = ({ name }: UseDropzoneInputArgs) => {
  const { setValue, getValues } = useFormContext();
  const [files, setFiles] = useState<File[]>(getValues(name));

  const onDrop = (acceptedFiles: File[]) => {
    setFiles(acceptedFiles);
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: { 'application/zip': [] },
    onDrop,
  });

  useEffect(() => {
    setValue(name || '', files);
  }, [files]);

  return {
    root: getRootProps(),
    input: getInputProps(),
    files,
  };
};
