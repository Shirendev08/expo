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
  Octicons,
} from "react-native-vector-icons";
export default function Help() {
  return (
    <SafeAreaView style={styles.container}>
      <Header name="Header" />
      <ScrollView>
        <View style={styles.view1}>
          <Image
            source={require("../../src/images/32aCG.png")}
            style={styles.img}
          />
          <Text style={styles.text}>Танд яаж туслах уу?</Text>
          <View style={styles.t}>
            <View style={styles.ta}>
              <View style={styles.circlee}>
                <MaterialCommunityIcons
                  name="chat-question"
                  style={styles.chat}
                />
              </View>
              <Text style={styles.ta1}>Түгээмэл</Text>
              <Text style={styles.ta3}>асуулт</Text>
            </View>
            <View style={styles.ta}>
              <View style={styles.circlee}>
                <MaterialCommunityIcons
                  name="phone-classic"
                  style={styles.woman}
                />
              </View>
              <Text style={styles.ta1}>Утсаар</Text>
              <Text style={styles.ta2}>холбогдох</Text>
            </View>
            <View style={styles.ta}>
              <View style={styles.circlee}>
                <MaterialCommunityIcons
                  name="facebook-messenger"
                  style={styles.mess}
                />
              </View>
              <Text style={styles.ta1}>Чатаар </Text>
              <Text style={styles.ta2}>холбогдох</Text>
            </View>
          </View>
        </View>
        <Text style={styles.text1}>Хялбар заавар</Text>

        <View style={styles.huree}>
          <MaterialCommunityIcons name="sim" style={styles.sim1} />
          <AntDesign name="android1" style={styles.and} />
          {/* <View> */}
          <Text style={styles.te}> Android eSIM суулгах заавар</Text>
          <MaterialCommunityIcons name="chevron-right" style={styles.rsum} />
          <Image
            source={require("../../src/images/line.jpeg")}
            style={styles.l}
          />
          {/* </View> */}
        </View>
        <View style={styles.huree}>
          <MaterialCommunityIcons name="sim" style={styles.sim1} />
          <AntDesign name="apple1" style={styles.ios} />
          {/* <View> */}
          <Text style={styles.te}> iOS eSIM суулгах заавар</Text>
          <MaterialCommunityIcons name="chevron-right" style={styles.rsum} />
          {/* </View> */}
        </View>
        <View style={styles.huree}>
          <Ionicons name="ios-radio-sharp" style={styles.ra} />

          {/* <View> */}
          <Text style={styles.te}> Hotspot заавар</Text>
          <MaterialCommunityIcons name="chevron-right" style={styles.rsum} />
          {/* </View> */}
        </View>
        <View style={styles.huree}>
          <MaterialCommunityIcons
            name="integrated-circuit-chip"
            style={styles.sim1}
          />
          <Feather name="arrow-up-left" style={styles.left} />

          {/* <View> */}
          <Text style={styles.te}>Биет сим идэвхжүүлэх</Text>
          <MaterialCommunityIcons name="chevron-right" style={styles.rsum} />
          {/* </View> */}
        </View>
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
    height: 330,
    marginLeft: 23,
    borderRadius: 20,
  },
  img: {
    width: 140,
    height: 140,
    borderRadius: 150,
    marginTop: 10,
  },
  le: {},
  l: {
    width: 50,
    height: 50,
    color: "black",
  },
  text: {
    fontSize: 19,
    fontWeight: "bold",
    color: "deeppink",
    marginTop: 20,
  },
  t: {
    flexDirection: "row",
  },
  ta: {
    marginTop: 25,
    margin: 8,
    alignItems: "center",
    marginLeft: 8,
  },
  ta1: {
    color: "black",
    // fontWeight: "bold",
    fontSize: 13,
    marginLeft: 8,
  },
  ta2: {
    color: "black",
    // fontWeight: "bold",
    fontSize: 13,
  },
  ta3: {
    color: "black",
    // fontWeight: "bold",
    fontSize: 13,
    marginLeft: 15,
  },
  circlee: {
    width: 60,
    height: 60,
    backgroundColor: "black",
    borderRadius: 50,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 15,
    marginHorizontal: 10,
  },
  chat: {
    color: "deeppink",
    fontSize: 38,
    marginLeft: 3,
  },
  woman: {
    color: "deeppink",
    fontSize: 35,
    marginLeft: 2,
    marginTop: -2,
  },
  mess: {
    color: "deeppink",
    fontSize: 35,
    marginLeft: 2,
    marginTop: 2,
  },
  text1: {
    fontSize: 19,
    marginLeft: 15,
    marginTop: 30,
    fontWeight: "bold",
    marginLeft: 23,
  },
  huree: {
    width: 75,
    height: 70,
    backgroundColor: "black",
    borderRadius: 10,
    marginTop: 40,
    marginLeft: 23,

    flexDirection: "row",
  },
  sim1: {
    color: "white",
    fontSize: 40,
    marginLeft: 15,
    marginTop: 15,
  },
  and: {
    color: "aliceblue",
    marginLeft: -10,
    marginTop: 43,
    fontSize: 18,
  },
  ios: {
    color: "aliceblue",
    marginLeft: -10,
    marginTop: 43,
    fontSize: 18,
  },
  left: {
    color: "aliceblue",
    marginLeft: -10,
    marginTop: 43,
    fontSize: 18,
  },
  rsum: {
    color: "gray",
    fontSize: 35,
    marginTop: 20,
    marginLeft: -5,
  },
  g: {},
  te: {
    fontWeight: "bold",
    color: "gray",
    width: 220,
    height: 80,
    marginLeft: 30,
    fontSize: 16,
    marginTop: 23,
  },
  ra: {
    color: "white",
    fontSize: 38,
    marginLeft: 20,
    marginTop: 15,
  },
});
