import React from 'react';

import { Container, Input, Spacer, Text } from 'shared/ui/';
import { FeaturedIcon } from 'shared/ui/Icons';

import { InputAttrs } from '../Input/types';
import { getClasses } from './classes';
import { useDropzoneInput } from './hook/useDropzoneInput';

type DropzoneInputProps = InputAttrs;

const DropzoneInput: React.FC<DropzoneInputProps> = ({ ...htmlAttrs }) => {
  const { container } = getClasses();
  const { root, input, files } = useDropzoneInput({ name: htmlAttrs.name || '' });

  return (
    <Input {...htmlAttrs}>
      {() => (
        <Container display="flex" direction="column" width="w-full">
          <Container display="flex" width="w-full" className={container} {...root}>
            <Container
              display="flex"
              width="w-full"
              direction="column"
              xAlignment="center"
              yAlignment="center">
              <input {...input} />
              <FeaturedIcon />
              <Text size="sm" weight="400" color="text-gray-600">
                <Text size="sm" weight="600" color="text-primary-700">
                  Click to upload{' '}
                </Text>
                or drag and drop
              </Text>
              <Spacer bottom={1} />
              <Text size="xs" weight="400" color="text-gray-600">
                please compress all the files in .zip format and upload here
              </Text>
            </Container>
          </Container>
          <Spacer bottom={2} />
          {files?.map((file) => {
            return (
              <Text key={file.name} size="sm" color="text-gray-700">
                {file.name}
              </Text>
            );
          })}
        </Container>
      )}
    </Input>
  );
};

export default DropzoneInput;
