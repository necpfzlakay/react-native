/* eslint-disable prettier/prettier */
import { Dimensions, StyleSheet } from 'react-native';

export default StyleSheet.create({
    // container: {
    //     backgroundColor: 'black',
    //     height: Dimensions.get('window').height / 3.5,
    //     margin: 10,
    //     borderRadius: 20,

    // },
    container: {
        // backgroundColor: 'green',
        height: Dimensions.get('window').height / 3,
        margin: 10,
    },
    touchable: {
        flex: 1,
        borderRadius: 50,
    },
    image: {
        flex: 1,
        justifyContent: 'flex-end',
        resizeMode: 'cover',
        borderRadius: 50,
    },
    text: {
        color: 'white',
        fontSize: 32,
        lineHeight: 54,
        fontWeight: 'bold',
        paddingLeft: 10,
        backgroundColor: '#000000c0',
    },
});
