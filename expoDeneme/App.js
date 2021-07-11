import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableHighlight, Button, Alert, SectionList, Dimensions, SafeAreaView } from 'react-native';

export default function App() {

  const [kilo, kiloHandler] = useState("0");
  const [boy, boyHandler] = useState("0");
  const [endex, endexHandler] = useState("0");

  function addAlert(kiloa, boya) {
    try {
      let result = kiloa / ((boya / 100) * (boya / 100));
      result = parseInt(result.toString())
      console.log(result);
      endexHandler(result.toString());
    } catch (error) {
      Alert.alert(error + " \nLütfen bir Sayı Değeri Giriniz!")
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      {/* <Image source={favicon} style={{ width: '100%', height: '40%'}} />  */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}> Vücut Kütle Endexi </Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Kilo"
        onChangeText={text => kiloHandler(text)}
        value={kilo}
      />
      <TextInput
        style={styles.input}
        placeholder="boy"
        onChangeText={text => boyHandler(text)}
        value={boy}
      />
      <Button
        color="#fb6d25"
        title="Hesapla"
        onPress={() => addAlert(kilo, boy)}
      />

      <View style={styles.resultContainer}>
        <View style={styles.item}>
          <Text style={styles.header}>Boy:<Text style={styles.title}> {boy} </Text> </Text>

        </View>
        <View style={styles.item}>
          <Text style={styles.header}>Kilo:<Text style={styles.title}> {kilo} </Text> </Text>

        </View>
        <View style={styles.item}>
          <Text style={styles.header}>Endex:  <Text style={styles.title}> {endex} </Text></Text>

        </View>
      </View>
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: '#fb6d25',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 5,
    backgroundColor: '#fb6d25',
    top: 0,
    color: 'black',
    justifyContent: 'flex-end'
  },
  headerText: {
    bottom: 0,
    justifyContent: 'flex-end',
    alignSelf: 'center',
    fontSize: 35,
    fontWeight: 'bold',
    color: 'white'
  },
  button: {
    backgroundColor: '#fb6d25',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    width: '90%',
    textAlign: 'center',
    backgroundColor: 'white',
    borderRadius: 30,
  },
  resultContainer: {
    backgroundColor: '#fb6d25',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 20,
    marginTop: 20

  },
  textt: {
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    justifyContent: 'flex-start',
    backgroundColor: 'black',

  },
  item: {
    backgroundColor: "#fb6d25",
    padding: 10,
    marginVertical: 8,
    width: Dimensions.get('window').width / 1.2,
    justifyContent: 'flex-start',
    margin: 10,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    backgroundColor: "#fff",
    justifyContent: 'center',
    borderRadius: 10,
    alignSelf: 'center',
    width: 300
  },
  title: {
    fontSize: 22,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    borderColor: 'black'

  },
  SectionList: {
    justifyContent: 'flex-end'
  }
});