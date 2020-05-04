import React from 'react';
import styled from '@emotion/styled';
import tw from '@tailwindcssinjs/macro';

type Props = {
  name: string;
  picture: string;
  children?: never;
};

const Ctn = styled.div(tw`flex items-center`);
const Img = styled.img(tw`w-12 h-12 rounded-full mr-4`);
const Name = styled.div(tw`text-xl font-bold`);

export const Avatar: React.FC<Props> = ({ name, picture }) => {
  return (
    <Ctn>
      <Img src={picture} alt={name} />
      <Name>{name}</Name>
    </Ctn>
  );
};
