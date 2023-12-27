import React from "react";
//IMPORATAMOS LA TAB NAVIGATOR
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//IMPORTAMOS LA STACK NAVIGATOR
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

//Libreria de icons => https://pictogrammers.com/library/mdi/

//TODA LA NAVEGACION TIENE QUE IR DENTRO DE UN COMPONENTE => NavigationContainer
import { NavigationContainer } from "@react-navigation/native";

//IMPORTAMOS NUESTRA SCREENS
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import StackScreen from "./screens/StackScreen";

const Stack = createNativeStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen
        // options={{

        // }}
        name="Stack"
        component={StackScreen}
      />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "blue",
      }}
    >
      <Tab.Screen
        name="Home"
        options={{
          tabBarLabel: "Feeeeeedddddddddd",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
          headerShown: false,
          tabBarBadge: 10,
        }}
        component={MyStack}
      />
      {/* HEADERSHOW en false hace que no se vea */}
      <Tab.Screen
        name="Settings"
        options={{
          tabBarLabel: "settings",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cog" size={35} color={color} />
          ),
        }}
        component={SettingsScreen}
      />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
