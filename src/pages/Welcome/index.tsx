import React from "react";
import { Text, Image } from "react-native";
import wateringImg from "../../assets/watering.png";
import Button from "../../components/Button";
import { Feather } from "@expo/vector-icons";
import * as S from "./styles";
import {useNavigation} from '@react-navigation/core'

export function Welcome() {
  const navigation = useNavigation();


  function handleStart() {
    navigation.navigate('UserIdentification')
  }
  return (
    <>
      <S.Container>
        <S.Title>
          Gerencie {"\n"} suas plantas de {"\n"} forma fácil
        </S.Title>
        <Image source={wateringImg} resizeMode="contain" />

        <S.SubTitle>
          Não esqueça mais de regar suas {"\n"} plantas. Nós cuidamos de lembrar
          você sempre que precisar.
        </S.SubTitle>
        <S.ButtonSubmit activeOpacity={0.7}
           onPress={handleStart}
        >
          <Feather name="chevron-right" />
        </S.ButtonSubmit>
      </S.Container>
    </>
  );
}

export default Welcome;
