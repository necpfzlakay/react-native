/* eslint-disable prettier/prettier */
import { Dimensions, StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: 'green',
        height: Dimensions.get('window').height / 3,
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height / 3,
    },

});
