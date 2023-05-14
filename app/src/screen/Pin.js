import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Pressable,
  Image,
} from "react-native";
import React from "react";
import { MaterialIcons, AntDesign } from "react-native-vector-icons";

export default function PIN({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.huvi}>
        <Pressable onPress={() => navigation.navigate("profile")}>
          <AntDesign name="left" style={styles.icon} />
        </Pressable>
        <Text style={styles.huvi1}>Баталгаажуулалт</Text>
      </View>
      <View style={styles.Te}>
        <Text style={styles.t}>Доорх тооны нийлбэрийг оруулна уу </Text>
      </View>
      <View style={styles.huvi2}>
        <View style={styles.huvi3}>
          <Text style={styles.t1}> 1+9 =</Text>
          <Image
            source={require("../../src/images/IMG_7824.jpg")}
            style={styles.gif}
          />
        </View>
        <View style={styles.Te1}>
          <MaterialIcons name="settings-backup-restore" style={styles.ic} />
          <Text style={styles.t2}> Бодлого дахин авах</Text>
        </View>
      </View>
      <View style={styles.Te2}>
        <AntDesign name="infocirlce" style={styles.ic1} />
        <Text style={styles.t3}>
          Бодлого нь таныг робот биш гэдгийг баталгаажуулах юм.
        </Text>
      </View>
      <View style={styles.urgeljluuleh}>
        <Text style={styles.ug}>Үргэлжлүүлэх</Text>
        <AntDesign name="right" style={styles.sum} />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  huvi: {
    flexDirection: "row",
    marginLeft: 10,
    marginTop: 20,
    alignItems: "center",
  },
  t: {
    fontSize: 15,
    color: "black",
    marginLeft: 9,
  },
  icon: {
    color: "black",
    fontWeight: "bold",
    fontSize: 26,
  },
  huvi1: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 55,
  },
  Te: {
    marginLeft: 14,
    marginTop: 30,
  },
  t1: {
    color: "black",
    fontSize: 20,
  },

  huvi3: {
    backgroundColor: "lightgray",
    width: 150,
    height: 45,
    marginLeft: 18,
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
  },

  huvi2: { height: 100, flexDirection: "column" },
  t1: {
    fontSize: 35,
    fontWeight: "bold",
    color: "darkturquoise",
    marginLeft: 28,
  },
  Te1: {
    flexDirection: "row",
    marginLeft: 18,
    alignItems: "center",
    marginTop: 30,
  },
  Te2: {
    flexDirection: "row",
    marginLeft: 18,
    alignItems: "center",
    marginTop: 25,
  },
  ic: {
    color: "deeppink",
    fontWeight: "bold",
    fontSize: 26,
  },
  ic1: { color: "gray", fontWeight: "bold", fontSize: 26 },
  t2: {
    fontSize: 15,
    fontWeight: "bold",
    color: "black",
    marginLeft: 9,
  },
  t3: {
    fontSize: 15,
    color: "black",
    marginLeft: 9,
  },
  gif: {
    fontSize: 30,
    width: 90,
    height: 50,
    marginLeft: 90,
  },
  urgeljluuleh: {
    width: 300,
    height: 60,
    backgroundColor: "lightgray",
    borderRadius: 40,
    marginLeft: 35,
    marginTop: 370,
    flexDirection: "row",
    alignItems: "center",
  },
  ug: { color: "gray", fontSize: 15, marginLeft: 100 },
  sum: {
    color: "gray",
    fontSize: 20,
    marginLeft: 60,
  },
});
