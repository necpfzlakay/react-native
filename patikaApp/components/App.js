/* eslint-disable prettier/prettier */
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  FlatList,
  View,
  TextInput,
  Dimensions,
} from 'react-native';
import Carts from './cart/Carts';
import products from './Products.json';

const productRender = (item) => {
  return (
    <Carts productItem={item} />
  );
};
const number = '';
function onChangeNumber() {

}

const App = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar barStyle={'light-content'} />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Search"
        keyboardType="numeric"
      />
      <View>
        <Text style={styles.HeaderTitle}> Patik Store</Text>
        <FlatList
          style={styles.flatlist}
          data={products}
          renderItem={({ item }) => productRender(item)}
          keyExtractor={item => item.id.toString()}
          numColumns={2}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  HeaderTitle: {
    fontSize: 30,
    color: 'purple',
    fontWeight: 'bold',
  },
  flatlist: {
    // flex:1,
    margin: 10,
  },
  input: {
    borderColor: 'black',
    width: Dimensions.get('window').width / 1.1,
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});

export default App;
