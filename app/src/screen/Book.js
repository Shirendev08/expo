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
 
    
      <ScrollView horizontal={true} style={styles.scroll2} showsVerticalScrollIndicator={false}>
          <View style={styles.sim2}> 
          <Image
                    source={require("../../src/images/1.jpg")}
                    style={styles.image2}
                  />
                      <View style={styles.desc}>
            <Text style={{fontWeight: 600}}>Нийгэм, Улс төр</Text>
            <Text style={{color: 'grey'}}>100% уншсан</Text>
          </View>
          </View>
          <View style={styles.sim2}> 
          <Image
                    source={require("../../src/images/5.jpg")}
                    style={styles.image2}
                  />
                      <View style={styles.desc}>
            <Text style={{fontWeight: 500}}>Нийгэм, Улс төр</Text>
            <Text style={{color: 'grey'}}>96% уншсан</Text>
          </View>
          </View>
          <View style={styles.sim2}> 
          <Image
                    source={require("../../src/images/8.jpg")}
                    style={styles.image2}
                  />
                      <View style={styles.desc}>
            <Text style={{fontWeight: 500}}>Нийгэм, Улс төр</Text>
            <Text style={{color: 'grey'}}>80% уншсан</Text>
          </View>
          </View>
          <View style={styles.sim2}> 
          <Image
                    source={require("../../src/images/2.jpg")}
                    style={styles.image2}
                  />
                      <View style={styles.desc}>
            <Text style={{fontWeight: 500}}>Нийгэм, Улс төр</Text>
            <Text style={{color: 'grey'}}>70% уншсан</Text>
          </View>
          </View>
          <View style={styles.sim2}> 
          <Image
                    source={require("../../src/images/3.jpg")}
                    style={styles.image2}
                  />
                      <View style={styles.desc}>
            <Text style={{fontWeight: 500}}>Нийгэм, Улс төр</Text>
            <Text style={{color: 'grey'}}>15% уншсан</Text>
          </View>
          </View>
          <View style={styles.sim2}> 
          <Image
                    source={require("../../src/images/6.jpg")}
                    style={styles.image2}
                  />
                      <View style={styles.desc}>
            <Text style={{fontWeight: 500}}>Нийгэм, Улс төр</Text>
            <Text style={{color: 'grey'}}>40% уншсан</Text>
          </View>
          </View>
          <View style={styles.sim2}> 
          <Image
                    source={require("../../src/images/7.jpg")}
                    style={styles.image2}
                  />
                      <View style={styles.desc}>
            <Text style={{fontWeight: 500}}>Нийгэм, Улс төр</Text>
            <Text>55% уншсан</Text>
          </View>
          </View>
          <View style={styles.sim2}> 
          <Image
                    source={require("../../src/images/8.jpg")}
                    style={styles.image2}
                  />
                      <View style={styles.desc}>
            <Text style={{fontWeight: 500}}>Нийгэм, Улс төр</Text>
            <Text style={{color: 'grey'}}>0% уншсан</Text>
          </View>
          </View>
          <View style={styles.sim2}> 
          <Image
                    source={require("../../src/images/9.jpg")}
                    style={styles.image2}
                  />
                      <View style={styles.desc}>
            <Text style={{fontWeight: 500}}>Нийгэм, Улс төр</Text>
            <Text>4% уншсан</Text>
          </View>
          </View>
          <View style={styles.sim2}> 
          <Image
                    source={require("../../src/images/10.webp")}
                    style={styles.image2}
                  />
                      <View style={styles.desc}>
            <Text style={{fontWeight: 500}}>Нийгэм, Улс төр</Text>
            <Text style={{color: 'grey'}}>1% уншсан</Text>
          </View>
          </View>
          <View style={styles.sim2}> 
          <Image
                    source={require("../../src/images/1.jpg")}
                    style={styles.image2}
                  />
                      <View style={styles.desc}>
            <Text style={{fontWeight: 500}}>Нийгэм, Улс төр</Text>
            <Text style={{color: 'grey'}}>11% уншсан</Text>
          </View>
          </View>
         
        </ScrollView>
     
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
  },
  scroll2: {
    height: 370,
  },
  sim2: {
    width: 180,
    height: 300,
    borderRadius: 17,
    flexDirection: "column",
    marginLeft: 10,
    marginTop: 10,
  },
  image2:{
    width: 170,
    height: 270,
    borderRadius: 17,
    flexDirection: "row",
  },
  desc:{
    width: 150,
    marginLeft:15,
    marginTop: 10,
  },
});
