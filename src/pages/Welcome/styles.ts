import styled from 'styled-components/native'
import Button from '../../components/Button'

export const Container = styled.View`
flex:1;
align-items: center;
justify-content: space-around;
`;

export const Title = styled.Text`
font-size: 28px;
font-weight: bold;
text-align: center;
 color: #52665A; 
margin-top:  38;
font-family: 'Jost_400Regular';
line-height:  34px;
`;

export const Image = styled.Image`
height: Dimensions.get('window')width * 0.7;

`;

export const SubTitle = styled.Text`
text-align: center;
font-size: 18px;
padding-right: 20px;
font-family: 'Jost_400Regular';
`

export const ButtonSubmit = styled.TouchableOpacity`
background-color:#32B768;
justify-content: center;
align-items: center;
border-radius:16px;
margin-bottom: 10px;
height:56px;
width:56;

`;

  
