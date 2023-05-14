import {
  StyleSheet,
  View,
  Text,
  navigation,
  Pressable,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
import {
  MaterialIcons,
  FontAwesome,
  AntDesign,
} from "react-native-vector-icons";
export default function Details({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.bu}>
          <Pressable onPress={() => navigation.goBack()}>
            <AntDesign name="left" style={styles.icon} />
          </Pressable>
          <Text style={styles.hed}>Бүтээгдэхүүн үйлчилгээ</Text>
        </View>
        <View style={styles.but}>
          <View style={styles.eSIM}>
            <Text style={styles.t1}>eSIM</Text>
            <View style={styles.zereg}>
              <Text style={styles.t2}>
                QR код уншуулаад утсанд суулгах боломжтой дижитал сим карт юм.
              </Text>
              <Image
                source={require("../../src/images/eSIM.jpg")}
                style={styles.gif}
              />
              <View style={styles.awah}>
                <Image
                  source={require("../../src/images/awah.jpg")}
                  style={styles.aw}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.but1}>
          <View style={styles.eSIM}>
            <Text style={styles.t1}>Биет сим</Text>
            <View style={styles.zereg1}>
              <Text style={styles.t2}>
                Энэ нь та бидний мэдэх уламжлалт үүртэй сим карт юм.
              </Text>
              <Image
                source={require("../../src/images/biytsim.jpg")}
                style={styles.gif}
              />
              <View style={styles.awah}>
                <Image
                  source={require("../../src/images/idewh.jpg")}
                  style={styles.aw1}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.but2}>
          <View style={styles.eSIM}>
            <Text style={styles.t1}> SuperNet</Text>
            <View style={styles.zereg2}>
              <Text style={styles.t2}>
                Өрх болон бизнесийн орчинд зориулсан интернет төхөөрөмж юм.
              </Text>
              <Image
                source={require("../../src/images/super.jpg")}
                style={styles.gif1}
              />
              <View style={styles.awah}>
                <Image
                  source={require("../../src/images/zo.jpg")}
                  style={styles.aw2}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  bu: {
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
  hed: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 55,
  },
  zereg: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 67,
    marginTop: 15,
    marginLeft: 15,
  },
  zereg1: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 50,
    marginTop: 15,
    marginLeft: 15,
  },
  zereg2: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 80,
    marginTop: 15,
    marginLeft: 15,
  },

  but: {
    backgroundColor: "black",
    width: 340,
    height: 245,
    borderRadius: 20,
    marginLeft: 18,
    marginTop: 25,
  },
  but1: {
    backgroundColor: "black",
    width: 340,
    height: 250,
    borderRadius: 20,
    marginLeft: 18,
    marginTop: 25,
  },
  but2: {
    backgroundColor: "black",
    width: 340,
    height: 285,
    borderRadius: 20,
    marginLeft: 18,
    marginTop: 25,
  },
  eSIM: {
    color: "pink",
    height: 250,
    width: 250,
  },
  gif: {
    width: 155,
    height: 160,
    // marginLeft: 180,
    marginTop: -20,
    borderRadius: 50,
  },
  gif1: {
    width: 170,
    height: 120,
    // marginLeft: 180,
    marginTop: -5,
    borderRadius: 50,
  },

  t1: {
    color: "white",
    fontSize: 23,
    fontWeight: "bold",
    marginTop: 30,
    marginLeft: 15,
  },
  t2: {
    color: "white",
    fontSize: 17,
  },
  aw: {
    fontSize: 20,
    width: 80,
    height: 45,
    marginTop: 110,
    marginLeft: -325,
  },
  aw1: {
    fontSize: 20,
    width: 140,
    height: 55,
    marginTop: 95,
    marginLeft: -325,
  },
  aw2: {
    fontSize: 20,
    width: 140,
    height: 60,
    marginTop: 120,
    marginLeft: -325,
  },
});
