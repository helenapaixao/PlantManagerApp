import styled from 'styled-components/native'
import colors from '../../styles/colors'


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



