import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import WelcomeScreen from './screens/WelcomeScreen';
import RecommemdedScreen from "./screens/new/RecommendedScreen";
import SuccessfullPayment from './screens/new/SuccessfullPayment';
import SplitBills from './screens/new/SplitBillScreen';
import FoodScreen from './screens/new/FoodScreen';


const Stack = createNativeStackNavigator();



const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome" screenOptions={{
          headerShown:false,
        }}>
          <Stack.Screen name="Welcome" component={WelcomeScreen}/>
          <Stack.Screen name="Recommended" component={RecommemdedScreen}/>
          <Stack.Screen name="SuccessfullPayment" component={SuccessfullPayment}/>
          <Stack.Screen name="SplitBills" component={SplitBills}/>
          <Stack.Screen name="Food" component={FoodScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;
