import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  Pressable,
} from "react-native";
import React from "react";
import { Octicons } from "@expo/vector-icons";

export default function Header({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.asd}>
      <Text style={styles.img}>Нүүр хуудас</Text>

      <Octicons name="bell" style={{marginLeft:145, fontSize:20,marginTop: 1,}} />
      <Octicons name="search" style={styles.icon} />
      </View>
     
    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    marginTop: 7,
  },
  img: {
    fontSize: 20,
    marginLeft:15,
    fontWeight: 400,
    borderRadius: 40,
  },
  icon: {
    fontSize: 22,
    fontWeight: 300,
    marginRight: 20,
    marginTop: 1,
  },
  asd:{
    flexDirection: 'row',
    justifyContent: "space-between",
    marginTop: 10,
  }
});
