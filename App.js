import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import WelcomeScreen from './screens/WelcomeScreen';
// import LoginScreen from './screens/LoginScreen';
// import OtpScreen from './screens/OtpScreen';
// import OtpVerifiedScreen from './screens/OtpVerifiedScreen';
// import OnewayScreen from './screens/OnewayScreen';
// import BusesScreen from './screens/BusesScreen';
// import ProfileScreen from './screens/ProfileScreen';
// import NotificationScreen from './screens/NotificationScreen';
// import PaymentSettings from './screens/PaymentSettings';
// import TicketScreen from './screens/TicketScreen';
// import BookingsScreen from './screens/BookingsScreen';
// import DetailsScreen from './screens/DetailsScreen';
// import { Provider } from 'react-redux';
// import { store } from './redux/store';
// import BusDetailsScreen from './screens/BusDetailsScreen';
// import BookedSuccessfullyScreen from './screens/BookedSuccessfullyScreen';
import RecommemdedScreen from "./screens/new/RecommendedScreen";
import SuccessfullPayment from './screens/new/SuccessfullPayment';
import SplitBills from './screens/new/SplitBillScreen';
import FoodScreen from './screens/new/FoodScreen';

// import { View, Text } from "react-native";

const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

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
          {/* <Stack.Screen name="Login" component={LoginScreen}/>
          <Stack.Screen name="Otp" component={OtpScreen}/>
          <Stack.Screen name="OtpVerified" component={OtpVerifiedScreen}/>
          <Stack.Screen name="Details" component={DetailsScreen}/>
          <Stack.Screen name="Oneway" component={OnewayScreen}/>
          <Stack.Screen name="Buses" component={BusesScreen}/>
          <Stack.Screen name="BusDetails" component={BusDetailsScreen}/>
          <Stack.Screen name="Booked Successfully" component={BookedSuccessfullyScreen}/>
          <Stack.Screen name="Profile" component={ProfileScreen}/>
          <Stack.Screen name="Notifications" component={NotificationScreen}/>
          <Stack.Screen name="PaymentSettings" component={PaymentSettings}/>
          <Stack.Screen name="Tickets" component={TicketScreen}/>
          <Stack.Screen name="Bookings" component={BookingsScreen}/> */}
        </Stack.Navigator>
      </NavigationContainer>
      // <NavigationContainer>
      //   <Stack.Navigator>
      //     <Stack.Screen name="Home" component={HomeScreen} />
      //   </Stack.Navigator>
      // </NavigationContainer>
  )
}

// const CustomNavigator=()=>{
//   return(
//     <Tab.Navigator
//     screenOptions={{
//       headerShown:false
//     }}
//     >
//       <Tab.Screen name="Home" component={OnewayScreen}/>
//       <Tab.Screen name="Bookings" component={BookingsScreen}/>
//       <Tab.Screen name="Profile" component={ProfileScreen}/>
//     </Tab.Navigator>
//   )
// }

export default App
