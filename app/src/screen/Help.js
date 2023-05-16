import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import React from "react";
import Header from "./Header";
import {
  MaterialCommunityIcons,
  Ionicons,
  AntDesign,
  Feather,

} from "react-native-vector-icons";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function Help() {
  return (
    <SafeAreaView style={styles.container}>
          <SafeAreaView style={styles.container1}>
      
      <View style={styles.asd}>
      <Text style={styles.img}>Таны ном</Text>

      {/* <Octicons name="pencil" style={{ fontSize: 20, marginRight: -120, marginLeft: 120}} /> */}
      </View>
    </SafeAreaView>
 
    
    </SafeAreaView>
  );
}
const BlankTabComponent = () => {
  return null;
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  container1: {
    height: 50,
    marginTop: 7,
  },
  img: {
    fontSize: 20,
    fontWeight: 400,
    borderRadius: 40,
    textAlign: 'center',

  },
  icon: {
    fontSize: 22,
    fontWeight: 300,
    marginRight: 20,
    marginTop: 1,
  },
  asd:{
    flexDirection: 'row',
    // justifyContent: "space-between",
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
