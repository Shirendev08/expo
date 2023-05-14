import { View, Text, StyleSheet, SafeAreaView, Pressable } from "react-native";
import React from "react";
import { AntDesign } from "react-native-vector-icons";

export default function Huwimed({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.huvi}>
        <Pressable onPress={() => navigation.navigate("profile")}>
          <AntDesign name="left" style={styles.icon} />
        </Pressable>
        <Text style={styles.huvi1}>Хувийн мэдээлэл</Text>
      </View>
      <View style={styles.Te}>
        <Text style={styles.t}>Эцэг/эхийн нэр </Text>
        <Text style={styles.t1}>Баяраа </Text>
      </View>
      <View style={styles.Te}>
        <Text style={styles.t}> Нэр </Text>
        <Text style={styles.t1}>Баясалмаа </Text>
      </View>
      <View style={styles.Te}>
        <Text style={styles.t}>Регистрийн дугаар </Text>
        <Text style={styles.t1}>ДН03311202 </Text>
      </View>
      <View style={styles.Te}>
        <Text style={styles.t}>Имэйл хаяг </Text>
        <Text style={styles.t1}>sw21d004@mandakh.edu.mn </Text>
      </View>
      <View style={styles.Te}>
        <Text style={styles.t}>Бүртгэлтэй дугаар </Text>
        <Text style={styles.t1}>99747583 </Text>
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
    marginTop: 23,
  },
  t: {
    color: "gray",
    fontSize: 15,
  },
  t1: {
    color: "gray",
    fontSize: 20,
  },
});
