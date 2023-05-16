import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Pressable,
  Image,
  ScrollView,
} from "react-native";

import React,{useState} from "react";
import {  MaterialCommunityIcons,
  Ionicons,
  AntDesign,
  Feather,
  Octicons,} from "react-native-vector-icons";
  import {Calendar, LocaleConfig} from 'react-native-calendars';
  LocaleConfig.locales['fr'] = {
    monthNames: [
      '1-р сар',
      '2-р сар',
      '3-р сар',
      '4-р сар',
      '5-р сар',
      '6-р сар',
      '7-р сар',
      '8-р сар',
      '9-р сар',
      '10-р сар',
      '11-р сар',
      '12-р сар'
    ],
    monthNamesShort: ['Janv.', 'Févr.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
    dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
    dayNamesShort: ['Да', 'Мя', 'Лх', 'Пү', 'Ба', 'Бя', 'Ня'],
    today: "Aujourd'hui"
  };
  
  LocaleConfig.defaultLocale = 'fr';
  
export default function PIN({ navigation }) {
  const [selected, setSelected] = useState('');
  
  return (
    
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container1}>
       <SafeAreaView style={styles.container1}>
      
      <View style={styles.asd}>
      <Text style={styles.img}>Зорилт</Text>
      </View>
    </SafeAreaView>
        <View style={styles.sim3}>
          <Image
                    source={require("../../src/images/nc.jpg")}
                    style={styles.image3}
                  />
          </View>
    
    <Calendar
      onDayPress={day => {
        setSelected(day.dateString);
      }}
      style={{
        borderWidth: 1,
        borderColor: 'gray',
        height: 350,
        borderRadius: 20,
        marginTop: 20
      }}
      theme={{
        backgroundColor: '#ffffff',
        calendarBackground: '#ffffff',
        textSectionTitleColor: '#b6c1cd',
        selectedDayBackgroundColor: '#00adf5',
        selectedDayTextColor: '#ffffff',
        todayTextColor: '#00adf5',
        dayTextColor: '#2d4150',
        textDisabledColor: '#d9e'
       }}
      markedDates={{
        [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}
      }}
    />
    <Image
                    source={require("../../src/images/pr.jpg")}
                    style={styles.image4}
                  />
                  </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container1: {
    height: 50,
    marginTop: 7,
  },
  container:{
    flex: 1,
    backgroundColor: "white",
    borderRadius: 10,
    height: 1500,
  
  },
  sim3: {
    width: 350,
    height: 110,
    backgroundColor: "midnightblue",
    borderRadius: 17,
    flexDirection: "row",
    marginLeft: 10,
  },
  image3:{
    flex: 1,
    width: 350,
    height: 110,
    borderRadius: 10,

  },
  image4:{
    flex: 1,
    width: 350,
    height: 350,
    marginLeft: 10,
    borderRadius: 10,
    marginTop: 30

  },
  scroll: {
    height: 140,
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
