import React from 'react';
import { TouchableOpacityProps } from 'react-native'

import * as S from './styles'

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}
export function Button({ title, ...rest }: ButtonProps) {

  return (
    <S.Container
      {...rest}
    >
      <S.Text>
        {title}
      </S.Text>

    </S.Container>


  )
}

export default Button;