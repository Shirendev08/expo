import {
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  StatusBar,
  Platform,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import Header from "./Header";
import {
  MaterialCommunityIcons,
  Feather,
  EvilIcons,
  MaterialIcons,
  Entypo,
} from "react-native-vector-icons";
import huwimed from "./Huwimed";
export default function Profile({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Header name="Header" />
      <ScrollView>
        <View style={styles.view1}>
          <Image
            source={require("../../src/images/sansar.jpeg")}
            style={styles.img}
          />
          <Text style={styles.text}>Баясалмаа</Text>
          <Pressable onPress={() => navigation.navigate("Huwi")}>
            <View style={styles.huree}>
              <Feather name="user" style={styles.sim2} />
              <Text style={styles.te1}> Хувийн Мэдээлэл</Text>
              <MaterialCommunityIcons
                name="chevron-right"
                style={styles.rsum}
              />
            </View>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("Pin")}>
            <View style={styles.huree}>
              <EvilIcons name="lock" style={styles.sim1} />
              <Text style={styles.te}>PIN кодоо мартсан</Text>
              <MaterialCommunityIcons
                name="chevron-right"
                style={styles.rsum}
              />
            </View>
          </Pressable>
        </View>
        <View style={styles.view2}>
          <View style={styles.huree2}>
            <MaterialIcons name="charging-station" style={styles.sim2} />
            <Text style={styles.te}> Бусдын дугаар цэнэглэх</Text>
            <MaterialCommunityIcons name="chevron-right" style={styles.rsum} />
          </View>
          <View style={styles.huree2}>
            <EvilIcons name="location" style={styles.sim1} />
            <Text style={styles.te}>Биет сим борлуулах цэг</Text>
            <MaterialCommunityIcons name="chevron-right" style={styles.rsum} />
          </View>
        </View>
        <View style={styles.view3}>
          <View style={styles.huree3}>
            <Entypo name="log-out" style={styles.sim3} />
            <Text style={styles.te}>Гарах</Text>
            <MaterialCommunityIcons name="chevron-right" style={styles.rsum3} />
          </View>
        </View>
        <Text style={styles.ver}>Version 1.0.7-18</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view1: {
    backgroundColor: "white",
    alignItems: "center",
    width: 330,
    height: 270,
    marginLeft: 23,
    borderRadius: 20,
  },
  img: {
    width: 60,
    height: 60,
    borderRadius: 150,
    marginTop: 15,
    marginRight: 220,
  },
  text: {
    fontSize: 22,
    fontWeight: "bold",
    color: "black",
    marginTop: -40,
  },
  // line: {
  //   width: 250,
  //   height: 1,
  //   marginTop: 50,
  //   color: "gray",
  // },

  huree: {
    width: 45,
    height: 40,
    backgroundColor: "black",
    borderRadius: 10,
    marginTop: 45,
    marginRight: 240,

    flexDirection: "row",
  },
  sim1: {
    color: "white",
    fontSize: 30,
    marginLeft: 7,
    marginTop: 9,
  },

  rsum: {
    color: "gray",
    fontSize: 35,
    marginTop: 6,
    marginLeft: 23,
  },

  // te: {
  //   fontWeight: "bold",
  //   color: "gray",
  //   width: 220,
  //   height: 90,
  //   marginLeft: 20,
  //   fontSize: 16,
  //   marginTop: 10,
  // },
  ra: {
    color: "white",
    fontSize: 38,
    marginLeft: 20,
    marginTop: 15,
  },
  view2: {
    backgroundColor: "white",
    alignItems: "center",
    width: 330,
    height: 180,
    marginLeft: 23,
    borderRadius: 20,
    marginTop: 25,
  },
  sim1: {
    color: "white",
    fontSize: 30,
    marginLeft: 7,
    marginTop: 7,
  },

  rsum: {
    color: "gray",
    fontSize: 35,
    marginTop: 5,
    marginLeft: -20,
  },

  te: {
    // fontWeight: "bold",
    color: "black",
    width: 220,
    height: 80,
    marginLeft: 20,
    fontSize: 16,
    marginTop: 10,
  },
  te1: {
    color: "black",
    width: 220,
    height: 80,
    fontSize: 16,
    marginTop: 15,
    marginLeft: 18,
  },
  ra: {
    color: "white",
    fontSize: 38,
    marginLeft: 20,
    marginTop: 15,
  },
  huree2: {
    width: 45,
    height: 40,
    backgroundColor: "navy",
    borderRadius: 10,
    marginTop: 38,
    marginRight: 240,

    flexDirection: "row",
  },
  sim2: {
    color: "white",
    fontSize: 30,
    marginLeft: 7,
    marginTop: 5,
  },
  huree3: {
    width: 45,
    height: 40,
    backgroundColor: "deeppink",
    borderRadius: 10,
    marginTop: 30,
    marginRight: 240,

    flexDirection: "row",
  },
  view3: {
    backgroundColor: "white",
    alignItems: "center",
    width: 330,
    height: 100,
    marginLeft: 23,
    borderRadius: 20,
    marginTop: 25,
  },
  sim3: {
    color: "white",
    fontSize: 20,
    marginLeft: 13,
    marginTop: 10,
  },
  rsum3: {
    color: "gray",
    fontSize: 35,
    marginTop: 5,
    marginLeft: -20,
  },
  ver: {
    color: "black",
    fontSize: 14,
    marginTop: 20,
    marginLeft: 140,
  },
});
