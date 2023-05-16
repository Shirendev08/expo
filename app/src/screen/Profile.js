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
  Ionicons,
  Octicons,
  AntDesign,
} from "react-native-vector-icons";

export default function Profile({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.container3}>
         <SafeAreaView style={styles.container1}>
      <View style={styles.asd}>
      <Text style={styles.img}>Гишүүнчлэл</Text>
      </View>
    </SafeAreaView>
    <ScrollView>
      <Text style={styles.txt}>ХЭРЭГЛЭГЧ</Text>
    <View style={styles.view}>
      <View style={styles.vw}>
      <Text style={styles.txt11}>shirendevbold@yahoo.com</Text>
      </View>
      <View style={{width: '90%', backgroundColor:'#f5f5f5', height: 1, alignSelf: "center"}}></View>
      <View style={styles.vw}>
        
      <EvilIcons name="user" style={styles.icon} />
      <Text style={styles.txt1}>Ерөнхий мэдээлэл</Text>
      <Entypo name="chevron-small-right" style={styles.icon1} />
      </View>
      <View style={{width: '90%', backgroundColor:'#f5f5f5', height: 1, alignSelf: "center"}}></View>
      <View style={styles.vw}>
      <AntDesign name="key" style={styles.icon}/>
      <Text style={styles.txt1}>Нууц үг солих</Text>
      <Entypo name="chevron-small-right" style={styles.icon1} />
      </View>
      <View style={{width: '90%', backgroundColor:'#f5f5f5', height: 1, alignSelf: "center"}}></View>
      <View style={styles.vw}>
      <MaterialIcons name="logout" style={styles.icon}/>
      <Text style={styles.txt1}>Гарах</Text>
      <Entypo name="chevron-small-right" style={styles.icon1} />
      </View>
    </View>
    <Text style={styles.txt}>БАГЦ</Text>
    <View style={styles.view2}>
      <View style={styles.vw}>
      <AntDesign name="staro" style={styles.icon} />
      <Text style={styles.txt1}>Миний багц</Text>
      <Entypo name="chevron-small-right" style={styles.icon1} />
      </View>
      <View style={{width: '90%', backgroundColor:'#f5f5f5', height: 1, alignSelf: "center"}}></View>
      <View style={styles.vw}>
      <Entypo name="flower" style={styles.icon} />
      <Text style={styles.txt1}>Багц түрээслэх</Text>
      <Entypo name="chevron-small-right" style={styles.icon1} />
      </View>
    </View>
    <Text style={styles.txt}>БИДНИЙ ТУХАЙ</Text>
    <View style={styles.view3}>
      <View style={styles.vw}>
      <EvilIcons name="lock" style={styles.icon} />
      <Text style={styles.txt1}>Нууцлалын бодлого</Text>
      <Entypo name="chevron-small-right" style={styles.icon1} />
      </View>
      <View style={{width: '90%', backgroundColor:'#f5f5f5', height: 1, alignSelf: "center"}}></View>
      <View style={styles.vw}>
      <Ionicons name="document-outline" style={styles.icon} />
      <Text style={styles.txt1}>Үйлчилгээний нөхцөл</Text>
      <Entypo name="chevron-small-right" style={styles.icon1} />
      </View>
      <View style={{width: '90%', backgroundColor:'#f5f5f5', height: 1, alignSelf: "center"}}></View>
      <View style={styles.vw}>
      <MaterialCommunityIcons name="theme-light-dark" style={styles.icon}/>
      <Text style={styles.txt1}>Dark mode</Text>
      <Entypo name="chevron-small-right" style={styles.icon1} />
      </View>
    </View>   
    <View style={styles.view5}>
      <View style={styles.vw1}>
      
      <Text style={styles.txt1}>shirendevbold@yahoo.com</Text>
    
      </View>
     
    </View>
    </ScrollView>
    </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  container3:{
    flex:0,
    backgroundColor: '#f3f3f3'
  },
  view:{
    height: 205,
    backgroundColor: "white",
  },
  view2:{
    height: 105,
    backgroundColor: "white",
  },
  view3:{
    height: 155,
    backgroundColor: "white",
  },
  view5:{
    height: 50,
    backgroundColor: "white",
  },
  vw:{
    height: 50,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  vw1:{
    height: 50,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 30,
  },
  txt1:{
    fontSize:15,
    marginTop: 15,
    flex:1,
    flexDirection: 'row',
  },
  txt11:{
    fontSize:15,
    marginTop: 15,
    marginLeft:44,
    flex:1,
    flexDirection: "row",
  },
  txt:{
    color: '#grey',
    marginTop: 20,
    marginBottom: 13,
    marginLeft: 20,
    height: 20,
  },
  container1: {
    height: 50,
    backgroundColor: 'white',
  },
  img: {
    fontSize: 20,
    fontWeight: 400,
    borderRadius: 40,
    textAlign: 'center',
    fontWeight: 400,
  },
  icon: {
    fontSize: 30,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 7,
    height: 30,
    width: 30,
    borderRadius: 7,
    backgroundColor: '#f3f3f3',
    flexDirection: 'row-reverse',
    flex: 0,
    
  },
  icon1: {
    fontSize: 30,
    marginTop: 10,
    marginLeft: 120,
    marginRight: 7,
    height: 30,
    borderRadius: 7,
  },
  asd:{
    flexDirection: 'row',
    // justifyContent: "space-between",
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
 
  }
});
