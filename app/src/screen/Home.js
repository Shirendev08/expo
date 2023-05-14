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
  navigation,
  FlatList,
} from "react-native";
import React, { useRef, useEffect } from 'react';
import {
  MaterialIcons,
  FontAwesome,
  AntDesign,
} from "react-native-vector-icons";
import Header from "./Header";

export default function Home({ navigation }) {
  const scrollViewRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      scrollViewRef.current?.scrollToEnd({ animated: true });
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);
  const categories = [
    { id: 1, name: 'Эдийн засаг, санхүү' },
    { id: 2, name: 'Философи, сэтгэл зүй' },
    { id: 3, name: 'Түүх, намтар' },
    { id: 4, name: 'Худь хүний хөгжил' },
    { id: 5, name: 'Манлайлал, менежмент' },
    { id: 6, name: 'Үлгэр' },
    { id: 7, name: 'Маркетинг, борлуулалт' },
    { id: 8, name: 'Ажил мэргэжил' },
    { id: 9, name: 'Эрүүл мэнд' },
    { id: 10, name: 'Бизнес' },
    { id: 11, name: 'Нийгэм, улс төр' },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <Header name="Header" />
      <ScrollView>
        <ScrollView horizontal={true} style={styles.scroll}>
          <View style={styles.sim3}>
          <Image
                    source={require("../../src/images/nc.jpg")}
                    style={styles.image3}
                  />
          </View>
          {/* <Pressable onPress={() => navigation.navigate("Detail")}>
            <View style={styles.bu}>
              <View style={styles.circle1}>
                <AntDesign name="plus" style={styles.plus} />
              </View>
              <View style={styles.vw2}>
                <Text>Бүтээгдэхүүн</Text>
                <Text>үйлчилгээ</Text>
              </View>
            </View>
          </Pressable> */}
        </ScrollView>
        <View>
        <ScrollView horizontal={true} style={styles.scroll1} showsVerticalScrollIndicator={false}>
          <View style={styles.sim1}> 
          <Image
                    source={require("../../src/images/1.jpg")}
                    style={styles.image}
                  />
          </View>
          <View style={styles.sim1}> 
          <Image
                    source={require("../../src/images/2.jpg")}
                    style={styles.image}
                  />
          </View>
          <View style={styles.sim1}> 
          <Image
                    source={require("../../src/images/3.jpg")}
                    style={styles.image}
                  />
          </View>
          <View style={styles.sim1}> 
          <Image
                    source={require("../../src/images/4.jpg")}
                    style={styles.image}
                  />
          </View>
          <View style={styles.sim1}> 
          <Image
                    source={require("../../src/images/5.jpg")}
                    style={styles.image}
                  />
          </View>
          <View style={styles.sim1}> 
          <Image
                    source={require("../../src/images/6.jpg")}
                    style={styles.image}
                  />
          </View>
          <View style={styles.sim1}> 
          <Image
                    source={require("../../src/images/7.jpg")}
                    style={styles.image}
                  />
          </View>
          <View style={styles.sim1}> 
          <Image
                    source={require("../../src/images/8.jpg")}
                    style={styles.image}
                  />
          </View>
          <View style={styles.sim1}> 
          <Image
                    source={require("../../src/images/9.jpg")}
                    style={styles.image}
                  />
          </View>
          <View style={styles.sim1}> 
          <Image
                    source={require("../../src/images/10.webp")}
                    style={styles.image}
                  />
          </View>
          <View style={styles.sim1}> 
          <Image
                    source={require("../../src/images/1.jpg")}
                    style={styles.image}
                  />
          </View>
         
        </ScrollView>

        <ScrollView horizontal={true} ref={scrollViewRef} style={styles.scroll5} showsVerticalScrollIndicator={false}>
        <View style={styles.dd1}>
                  <Image
                    source={require("../../src/images/ab.jpg")}
                    style={styles.image5}
                  />
          </View>
        <View style={styles.dd1}>
                  <Image
                    source={require("../../src/images/lec.png")}
                    style={styles.image5}
                  />
          </View>
        <View style={styles.dd1}>
                  <Image
                    source={require("../../src/images/off.jpg")}
                    style={styles.image5}
                  />
          </View>
      
        </ScrollView>
        </View>
        <View style={styles.textview}>     
          <Text style={styles.text}>Шинэ ном</Text>
        <Text style={styles.textnext}>Илүүг үзэх ></Text></View>
   
        
        <ScrollView horizontal={true} ref={scrollViewRef} style={styles.scroll2} showsVerticalScrollIndicator={false}>
          <View style={styles.sim2}> 
          <Image
                    source={require("../../src/images/1.jpg")}
                    style={styles.image2}
                  />
                      <View style={styles.desc}>
            <Text style={{fontWeight: 600}}>Нийгэм, Улс төр</Text>
            <Text style={{color: 'grey'}}>Бидний амьдарч буй нийгэм, улс төрийн</Text>
          </View>
          </View>
          <View style={styles.sim2}> 
          <Image
                    source={require("../../src/images/2.jpg")}
                    style={styles.image2}
                  />
                      <View style={styles.desc}>
            <Text style={{fontWeight: 500}}>Нийгэм, Улс төр</Text>
            <Text style={{color: 'grey'}}>Бидний амьдарч буй нийгэм, улс төрийн</Text>
          </View>
          </View>
          <View style={styles.sim2}> 
          <Image
                    source={require("../../src/images/3.jpg")}
                    style={styles.image2}
                  />
                      <View style={styles.desc}>
            <Text style={{fontWeight: 500}}>Нийгэм, Улс төр</Text>
            <Text style={{color: 'grey'}}>Бидний амьдарч буй нийгэм, улс төрийн</Text>
          </View>
          </View>
          <View style={styles.sim2}> 
          <Image
                    source={require("../../src/images/4.jpg")}
                    style={styles.image2}
                  />
                      <View style={styles.desc}>
            <Text style={{fontWeight: 500}}>Нийгэм, Улс төр</Text>
            <Text style={{color: 'grey'}}>Бидний амьдарч буй нийгэм, улс төрийн</Text>
          </View>
          </View>
          <View style={styles.sim2}> 
          <Image
                    source={require("../../src/images/5.jpg")}
                    style={styles.image2}
                  />
                      <View style={styles.desc}>
            <Text style={{fontWeight: 500}}>Нийгэм, Улс төр</Text>
            <Text style={{color: 'grey'}}>Бидний амьдарч буй нийгэм, улс төрийн</Text>
          </View>
          </View>
          <View style={styles.sim2}> 
          <Image
                    source={require("../../src/images/6.jpg")}
                    style={styles.image2}
                  />
                      <View style={styles.desc}>
            <Text style={{fontWeight: 500}}>Нийгэм, Улс төр</Text>
            <Text style={{color: 'grey'}}>Бидний амьдарч буй нийгэм, улс төрийн</Text>
          </View>
          </View>
          <View style={styles.sim2}> 
          <Image
                    source={require("../../src/images/7.jpg")}
                    style={styles.image2}
                  />
                      <View style={styles.desc}>
            <Text style={{fontWeight: 500}}>Нийгэм, Улс төр</Text>
            <Text>Бидний амьдарч буй нийгэм, улс төрийн</Text>
          </View>
          </View>
          <View style={styles.sim2}> 
          <Image
                    source={require("../../src/images/8.jpg")}
                    style={styles.image2}
                  />
                      <View style={styles.desc}>
            <Text style={{fontWeight: 500}}>Нийгэм, Улс төр</Text>
            <Text style={{color: 'grey'}}>Бидний амьдарч буй нийгэм, улс төрийн</Text>
          </View>
          </View>
          <View style={styles.sim2}> 
          <Image
                    source={require("../../src/images/9.jpg")}
                    style={styles.image2}
                  />
                      <View style={styles.desc}>
            <Text style={{fontWeight: 500}}>Нийгэм, Улс төр</Text>
            <Text>Бидний амьдарч буй нийгэм, улс төрийн</Text>
          </View>
          </View>
          <View style={styles.sim2}> 
          <Image
                    source={require("../../src/images/10.webp")}
                    style={styles.image2}
                  />
                      <View style={styles.desc}>
            <Text style={{fontWeight: 500}}>Нийгэм, Улс төр</Text>
            <Text style={{color: 'grey'}}>Бидний амьдарч буй нийгэм, улс төрийн</Text>
          </View>
          </View>
          <View style={styles.sim2}> 
          <Image
                    source={require("../../src/images/1.jpg")}
                    style={styles.image2}
                  />
                      <View style={styles.desc}>
            <Text style={{fontWeight: 500}}>Нийгэм, Улс төр</Text>
            <Text style={{color: 'grey'}}>Бидний амьдарч буй нийгэм, улс төрийн</Text>
          </View>
          </View>
         
        </ScrollView>
        <Text style={styles.text}>Номын төрөл</Text>
        <View style={{ height: 50, marginTop: 10 }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{height: 60}}>
        {categories.map(category => (
          <View key={category.id} style={styles.cat}>
            <Text style={styles.cattext1}>{category.name}</Text>
          </View>
        ))}
        
      </ScrollView>
    </View>

        <View style={styles.textview}>     
          <Text style={styles.text}>Түүвэр</Text>
        </View>
   
        
        <ScrollView horizontal={true} ref={scrollViewRef} style={styles.scroll2} showsVerticalScrollIndicator={false}>
          <View style={styles.sim2}> 
          <Image
                    source={require("../../src/images/5.jpg")}
                    style={styles.image2}
                  />
                  <View style={styles.desc}>
            <Text style={{fontWeight: 500}}>Нийгэм, Улс төр</Text>
            <Text style={{color: 'grey'}}>Бидний амьдарч буй нийгэм, улс төрийн</Text>
          </View>
          </View>
          <View style={styles.sim2}> 
          <Image
                    source={require("../../src/images/4.jpg")}
                    style={styles.image2}
                  />
                  <View style={styles.desc}>
            <Text style={{fontWeight: 500}}>Нийгэм, Улс төр</Text>
            <Text style={{color: 'grey'}}>Бидний амьдарч буй нийгэм, улс төрийн</Text>
          </View>
          </View>
          <View style={styles.sim2}> 
          <Image
                    source={require("../../src/images/3.jpg")}
                    style={styles.image2}
                  />
                  <View style={styles.desc}>
            <Text style={{fontWeight: 500}}>Нийгэм, Улс төр</Text>
            <Text style={{color: 'grey'}}>Бидний амьдарч буй нийгэм, улс төрийн</Text>
          </View>
          </View>
          <View style={styles.sim2}> 
          <Image
                    source={require("../../src/images/2.jpg")}
                    style={styles.image2}
                  />
                  <View style={styles.desc}>
            <Text style={{fontWeight: 500}}>Нийгэм, Улс төр</Text>
            <Text style={{color: 'grey'}}>Бидний амьдарч буй нийгэм, улс төрийн</Text>
          </View>
          </View>
          <View style={styles.sim2}> 
          <Image
                    source={require("../../src/images/1.jpg")}
                    style={styles.image2}
                  />
                  <View style={styles.desc}>
            <Text style={{fontWeight: 500}}>Нийгэм, Улс төр</Text>
            <Text style={{color: 'grey'}}>Бидний амьдарч буй нийгэм, улс төрийн</Text>
          </View>
          </View>
          <View style={styles.sim2}> 
          <Image
                    source={require("../../src/images/6.jpg")}
                    style={styles.image2}
                  />
                  <View style={styles.desc}>
            <Text style={{fontWeight: 500}}>Нийгэм, Улс төр</Text>
            <Text style={{color: 'grey'}}>Бидний амьдарч буй нийгэм, улс төрийн</Text>
          </View>
          </View>
          <View style={styles.sim2}> 
          <Image
                    source={require("../../src/images/7.jpg")}
                    style={styles.image2}
                  />
                  <View style={styles.desc}>
            <Text style={{fontWeight: 500}}>Нийгэм, Улс төр</Text>
            <Text style={{color: 'grey'}}>Бидний амьдарч буй нийгэм, улс төрийн</Text>
          </View>
          </View>
          <View style={styles.sim2}> 
          <Image
                    source={require("../../src/images/8.jpg")}
                    style={styles.image2}
                  />
                  <View style={styles.desc}>
            <Text style={{fontWeight: 500}}>Нийгэм, Улс төр</Text>
            <Text style={{color: 'grey'}}>Бидний амьдарч буй нийгэм, улс төрийн</Text>
          </View>
          </View>
          <View style={styles.sim2}> 
          <Image
                    source={require("../../src/images/9.jpg")}
                    style={styles.image2}
                  />
                  <View style={styles.desc}>
            <Text style={{fontWeight: 500}}>Нийгэм, Улс төр</Text>
            <Text style={{color: 'grey'}}>Бидний амьдарч буй нийгэм, улс төрийн</Text>
          </View>
          </View>
          <View style={styles.sim2}> 
          <Image
                    source={require("../../src/images/10.webp")}
                    style={styles.image2}
                  />
                  <View style={styles.desc}>
            <Text style={{fontWeight: 500}}>Нийгэм, Улс төр</Text>
            <Text style={{color: 'grey'}}>Бидний амьдарч буй нийгэм, улс төрийн</Text>
          </View>
          </View>
       
         
        </ScrollView>
        <View style={styles.textview}>     
          <Text style={styles.text}>Онцлох</Text>
        <Text style={styles.textnext}>Илүүг үзэх ></Text></View>
   
        
        <ScrollView horizontal={true} ref={scrollViewRef} style={styles.scroll4} showsVerticalScrollIndicator={false}>
          <View style={styles.sim5}> 
          <Image
                    source={require("../../src/images/N1.jpg")}
                    style={styles.image4}
                  />
          <View style={styles.desc}>
            <Text style={{fontWeight: 600}}>Түүх</Text>
            <Text>Хүн төрөлхтний түүхээр аялж,</Text>
          </View>
          </View>
          <View style={styles.sim5}> 
          <Image
                    source={require("../../src/images/n2.jpg")}
                    style={styles.image4}
                  />
                   <View style={styles.desc}>
            <Text style={{fontWeight: 600}}>Эдийн засаг</Text>
            <Text>Эдийн засгийн үйл ажиллагаангд өдөр</Text>
          </View>
          </View>
          <View style={styles.sim5}> 
          <Image
                    source={require("../../src/images/n3.jpg")}
                    style={styles.image4}
                  />
                   <View style={styles.desc}>
            <Text style={{fontWeight: 600}}>Бизнес</Text>
            <Text>Бизнес хийхэд ямар чадвар, мэдлэг</Text>
          </View>
          </View>
          <View style={styles.sim5}> 
          <Image
                    source={require("../../src/images/n4.jpg")}
                    style={styles.image4}
                  />
                   <View style={styles.desc}>
            <Text style={{fontWeight: 600}}>Маркетинг</Text>
            <Text>Өндөр чанартай бүтээгдэхүүн,</Text>
          </View>
          </View>
          <View style={styles.sim5}> 
          <Image
                    source={require("../../src/images/n5.jpg")}
                    style={styles.image4}
                  />
                   <View style={styles.desc}>
            <Text style={{fontWeight: 600}}>Нийгэм, Улс төр</Text>
            <Text>Бидний амьдарч буй нийгэм, улс төрийн</Text>
          </View>
          </View>
          
       
         
        </ScrollView>
        <View style={styles.textview}>     
          <Text style={styles.text}>Үлгэр</Text>
        <Text style={styles.textnext}>Илүүг үзэх ></Text></View>
   
        
        <ScrollView horizontal={true} ref={scrollViewRef} style={styles.scroll2} showsVerticalScrollIndicator={false}>
          <View style={styles.sim2}> 
          <Image
                    source={require("../../src/images/k1.webp")}
                    style={styles.image2}
                  />
                  <View style={styles.desc}>
            <Text style={{fontWeight: 500}}>Нийгэм, Улс төр</Text>
            <Text style={{color: 'grey'}}>Бидний амьдарч буй нийгэм, улс төрийн</Text>
          </View>
          </View>
          <View style={styles.sim2}> 
          <Image
                    source={require("../../src/images/k2.png")}
                    style={styles.image2}
                  />
                  <View style={styles.desc}>
            <Text style={{fontWeight: 500}}>Нийгэм, Улс төр</Text>
            <Text style={{color: 'grey'}}>Бидний амьдарч буй нийгэм, улс төрийн</Text>
          </View>
          </View>
          <View style={styles.sim2}> 
          <Image
                    source={require("../../src/images/k3.jpg")}
                    style={styles.image2}
                  />
                  <View style={styles.desc}>
            <Text style={{fontWeight: 500}}>Нийгэм, Улс төр</Text>
            <Text style={{color: 'grey'}}>Бидний амьдарч буй нийгэм, улс төрийн</Text>
          </View>
          </View>
          <View style={styles.sim2}> 
          <Image
                    source={require("../../src/images/k4.webp")}
                    style={styles.image2}
                  />
                  <View style={styles.desc}>
            <Text style={{fontWeight: 500}}>Нийгэм, Улс төр</Text>
            <Text style={{color: 'grey'}}>Бидний амьдарч буй нийгэм, улс төрийн</Text>
          </View>
          </View>
          <View style={styles.sim2}> 
          <Image
                    source={require("../../src/images/k5.jpg")}
                    style={styles.image2}
                  />
                  <View style={styles.desc}>
            <Text style={{fontWeight: 500}}>Нийгэм, Улс төр</Text>
            <Text style={{color: 'grey'}}>Бидний амьдарч буй нийгэм, улс төрийн</Text>
          </View>
          </View>
          <View style={styles.sim2}> 
          <Image
                    source={require("../../src/images/k6.avif")}
                    style={styles.image2}
                  />
                  <View style={styles.desc}>
            <Text style={{fontWeight: 500}}>Нийгэм, Улс төр</Text>
            <Text style={{color: 'grey'}}>Бидний амьдарч буй нийгэм, улс төрийн</Text>
          </View>
          </View>
          <View style={styles.sim2}> 
          <Image
                    source={require("../../src/images/k6.webp")}
                    style={styles.image2}
                  />
                  <View style={styles.desc}>
            <Text style={{fontWeight: 500}}>Нийгэм, Улс төр</Text>
            <Text style={{color: 'grey'}}>Бидний амьдарч буй нийгэм, улс төрийн</Text>
          </View>
          </View>
          <View style={styles.sim2}> 
          <Image
                    source={require("../../src/images/8.jpg")}
                    style={styles.image2}
                  />
                  <View style={styles.desc}>
            <Text style={{fontWeight: 500}}>Нийгэм, Улс төр</Text>
            <Text style={{color: 'grey'}}>Бидний амьдарч буй нийгэм, улс төрийн</Text>
          </View>
          </View>
          <View style={styles.sim2}> 
          <Image
                    source={require("../../src/images/9.jpg")}
                    style={styles.image2}
                  />
                  <View style={styles.desc}>
            <Text style={{fontWeight: 500}}>Нийгэм, Улс төр</Text>
            <Text style={{color: 'grey'}}>Бидний амьдарч буй нийгэм, улс төрийн</Text>
          </View>
          </View>
          <View style={styles.sim2}> 
          <Image
                    source={require("../../src/images/10.webp")}
                    style={styles.image2}
                  />
                  <View style={styles.desc}>
            <Text style={{fontWeight: 500}}>Нийгэм, Улс төр</Text>
            <Text style={{color: 'grey'}}>Бидний амьдарч буй нийгэм, улс төрийн</Text>
          </View>
          </View>
       
         
        </ScrollView>
        <View style={styles.textview}>     
          <Text style={styles.text}>Номын жагсаалт</Text>
    </View>
        <ScrollView horizontal={true} ref={scrollViewRef} style={styles.scroll3} showsVerticalScrollIndicator={false}>
        <View style={styles.sim3}>
          <Image source={require("../../src/images/book.jpg")}
            style={styles.image3}/>
          </View>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 10
  },
  image:{
    width: 90,
    height: 120,
    borderRadius: 17,
    flexDirection: "row",
  },
  image3:{
    flex: 1,
    width: 350,
    height: 110,
    borderRadius: 10,

  },
  image5:{
    flex: 1,
    width: 350,
    height: 150,
    borderRadius: 10,

  },
  image2:{
    width: 170,
    height: 270,
    borderRadius: 17,
    flexDirection: "row",
  },
  image4:{
    width: 150,
    height: 150,
    borderRadius: 17,
    flexDirection: "row",
  },
  sim: {
    width: 350,
    height: 85,
    backgroundColor: "midnightblue",
    borderRadius: 17,
    flexDirection: "row",
    marginLeft: 10,
  },
  sim3: {
    width: 350,
    height: 110,
    backgroundColor: "midnightblue",
    borderRadius: 17,
    flexDirection: "row",
    marginLeft: 10,
  },
  circle: {
    width: 45,
    height: 45,
    backgroundColor: "darkslateblue",
    borderRadius: 50,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 15,
  },
  txt: {
    color: "white",
    fontWeight: "bold",
    fontSize: 17,
    marginTop: 10,
  },
  txt1: {
    color: "mediumslateblue",
    fontWeight: "bold",
  },
  vw: {
    marginLeft: 12,
    marginTop: 3,
  },
  vw1: {
    flexDirection: "row",
  },
  icon: {
    color: "white",
    fontSize: 20,
  },
  icon1: {
    color: "mediumspringgreen",
    marginTop: 7,
    marginLeft: 3,
  },
  bu: {
    width: 195,
    height: 65,
    backgroundColor: "whitesmoke",
    borderRadius: 17,
    flexDirection: "row",
    marginLeft: 10,
    marginTop: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  circle1: {
    width: 45,
    height: 45,
    backgroundColor: "pink",
    borderRadius: 50,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 15,
  },
  plus: {
    color: "deeppink",
    fontSize: 20,
  },
  vw2: {
    marginTop: 13,
    marginLeft: 12,
  },
  text: {
    fontSize: 19,
    marginLeft: 15,
    fontWeight: "bold",
  },
  textview:{
    justifyContent: "space-between",
    flexDirection: "row",
  },
  textnext: {
    fontSize: 14,
    marginRight: 15,
    marginTop: 6,
  },
  dd: {
    backgroundColor: "midnightblue",
    width: 340,
    height: 150,
    borderRadius: 20,
    marginLeft: 18,
    marginTop: 15,
  },
  dd1: {
    backgroundColor: "midnightblue",
    width: 340,
    height: 150,
    borderRadius: 10,
    marginLeft: 15,
    marginRight: 15,
  },
  t: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  t1: {
    color: "mediumslateblue",
    fontWeight: "bold",
    fontSize: 15,
  },
  t2: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
  },
  t3: {
    color: "mediumslateblue",
    fontSize: 15,
    marginLeft: 10,
    marginTop: 10,
  },
  v: {
    flex: 3,
    justifyContent: "center",
    marginLeft: 20,
  },
  v1: {
    flex: 3,
    marginLeft: 20,
  },
  v2: {
    flex: 3,
    flexDirection: "row",
    marginLeft: 20,
    marginTop: -20,
  },
  circle2: {
    width: 38,
    height: 38,
    backgroundColor: "deeppink",
    borderRadius: 50,
    marginLeft: 65,
    justifyContent: "center",
    alignItems: "center",
  },
  plus1: {
    color: "pink",
    fontSize: 20,
  },
  sb: {
    backgroundColor: "whitesmoke",
    width: 340,
    height: 250,
    borderRadius: 20,
    marginLeft: 18,
    marginTop: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  e: {
    color: "black",
    fontWeight: "bold",
    fontSize: 20,
    margin: 18,
  },
  e1: {
    color: "mediumslateblue",
    fontWeight: "bold",
    fontSize: 15,
    marginLeft: 18,
  },
  a1: {
    backgroundColor: "white",
    width: 140,
    height: 60,
    borderRadius: 10,
    marginTop: 30,
    marginLeft: 25,
    borderWidth: 1,
    borderColor: "lightgray",
  },
  a2: {
    backgroundColor: "white",
    width: 140,
    height: 60,
    borderRadius: 10,
    marginTop: 30,
    marginLeft: 15,
    borderWidth: 1,
    borderColor: "lightgray",
  },
  a3: {
    backgroundColor: "white",
    width: 140,
    height: 60,
    borderRadius: 10,
    marginTop: 10,
    marginLeft: 25,
    borderWidth: 1,
    borderColor: "lightgray",
  },
  a: {
    flexDirection: "row",
  },
  at1: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 8,
    marginLeft: 20,
  },
  at2: {
    fontSize: 15,
    color: "deeppink",
    marginLeft: 22,
  },
  scroll: {
    height: 140,
  },
  scroll1: {
    height: 140,
  },
  scroll2: {
    height: 370,
  },
  scroll3: {
    height: 180,
    marginTop: 10,
  },
  scroll4: {
    height: 245,
  },
  scroll5: {
    height: 180,
  },

  sim1: {
    width: 90,
    height: 120,
    borderRadius: 17,
    flexDirection: "row",
    marginLeft: 10,
  },
  sim2: {
    width: 180,
    height: 300,
    borderRadius: 17,
    flexDirection: "column",
    marginLeft: 10,
    marginTop: 10,
  },
  sim5: {
    width: 150,
    height: 220,
    borderRadius: 17,
    flexDirection: "column",
    marginLeft: 10,
    marginTop: 10,
  },
  cat:{
    height: 40,
    backgroundColor:'#f5f5f5',
    borderRadius: 7,
    alignItems: 'center',
    alignContent: 'center',
    marginLeft: 10,
    marginRight: 5,
    textAlign: 'center',
  },
  cattext1:{
    color: 'grey',
    padding: 7
  },
  desc:{
    width: 150,
    marginLeft:15,
    marginTop: 10,
  }
});
