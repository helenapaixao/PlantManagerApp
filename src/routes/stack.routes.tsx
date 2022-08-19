import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'


import { Welcome } from '../pages/Welcome';
import {UserIdentification} from '../pages/UserIdentification'


const stackRoutes = createStackNavigator();
const AppRoutes: React.FC = () => (
  <stackRoutes.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {
      backgroundColor: "#FFF"
      }
      
    }}
  >

    <stackRoutes.Screen
      name="Welcome"
      component={Welcome}
    />

     <stackRoutes.Screen
      name="UserIdentification"
      component={UserIdentification}
    />
    




  </stackRoutes.Navigator>

)

export default AppRoutes;