import React from "react";
import { Text, Image } from "react-native";
import wateringImg from "../../assets/watering.png";

import * as S from "./styles";

export function Welcome() {
  return (
    <S.Container>
      <S.Title>
        Gerencie {"\n"} suas plantas de {"\n"} forma fácil
      </S.Title>
      <Image source={wateringImg} resizeMode="contain" />

      <S.SubTitle>
        Não esqueça mais de regar suas {"\n"} plantas. Nós cuidamos de lembrar
        você sempre que precisar.
      </S.SubTitle>
    </S.Container>
  );
}

export default Welcome;
