/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';

const Carts = item => {
  // console.log(item.productItem.imgURL);
  return (
    <View style={styles.cartContainer}>
      <Image
        style={styles.cartImage}
        // source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        source={{
          uri: item.productItem.imgURL,
        }}
      />
      <Text style={styles.title}> {item.productItem.title} </Text>
      <Text style={styles.price}> {item.productItem.price} </Text>
    </View>
  );
};
// data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==
const styles = StyleSheet.create({

  cartContainer: {
    // flex: 3,
    // flex: 1,
    backgroundColor: '#e0e0e0',
    width: Dimensions.get('window').width / 2.2,
    margin: 5,
    borderColor: 'gray',
    borderRadius: 15,
    height: Dimensions.get('window').height / 2,
    justifyContent: 'center',
    padding: 15,
  },
  title: {
    color: 'black',
    fontSize: 17,
    fontWeight: 'bold',
  },
  cartImage: {
    height: Dimensions.get('window').height / 3,
    backgroundColor: 'white',
    borderColor: 'red',
    borderWidth: 3,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    marginTop: 20,
  },
  price: {
    color: 'grey',
    fontWeight: '700',
  },
});
export default Carts;
