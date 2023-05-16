import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./src/screen/Home";
import BookScreen from "./src/screen/Book";
import ProfileScreen from "./src/screen/Profile";
import Header from "./src/screen/Header";
import Cal from "./src/screen/Cal";
import { Ionicons } from "@expo/vector-icons";

const HomeStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStackNavigation() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="home"
    >
      <HomeStack.Screen name="home" component={HomeScreen} />
      <HomeStack.Screen name="real" component={BookScreen} />
      <HomeStack.Screen name="profile" component={ProfileScreen} />
      <HomeStack.Screen name="Header" component={Header} />
      <HomeStack.Screen name="Cal" component={Cal} />
      
    </HomeStack.Navigator>
  );
}
function BottomTabNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === "Нүүр") {
              iconName = focused ? "home" : "home";
            } else if (rn === "Тусламж") {
              iconName = focused ? "book" : "book";
            }
            else if (rn === "Бай") {
              iconName = focused ? "earth" : "earth";
            }
             else if (rn === "Профайл") {
              iconName = focused
                ? "ios-person-circle-outline"
                : "ios-person-circle-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "white",
            height: 60,
            paddingHorizontal: 5,
            paddingTop: 0,
            position: "absolute",
            borderTopWidth: 0,
          },
          tabBarActiveTintColor: "deeppink",
          tabBarInactiveTintColor: "grey",
          tabBarlabelStyle: {
            fontWeight: "bold",
          },
        })}
      >
        <Tab.Screen
          name="Нүүр"
          component={HomeStackNavigation}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Тусламж"
          component={BookScreen}
          options={{ headerShown: false }}
        />
          <Tab.Screen
          name="Бай"
          component={Cal}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Профайл"
          component={ProfileScreen}
          options={{ headerShown: false }}
        />
      
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default BottomTabNavigation;
