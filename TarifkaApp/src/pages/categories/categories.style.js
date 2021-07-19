/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    categoryContainer: {
        margin: 10,
        marginRight: 0,
        backgroundColor: 'orange',
        minHeight: 100,
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
        textAlign: 'center',
        justifyContent: 'center',
    },
    rowContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        alignSelf: 'center',
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
    },
    thumbnail: {
        flex: 30,
        borderRadius: 50,
        margin: 10,
        justifyContent: 'center',
        resizeMode: 'cover',
    },
    categoryTitle: {
        flex: 1,
        justifyContent: 'center',
        fontSize: 25,
        margin: 10,
        alignContent: 'center',
        alignSelf: 'center',
        // backgroundColor: 'green',
        textAlign: 'right',
    },
    button: {
        justifyContent: 'center',
        margin: 5,
        right: 0,
        // backgroundColor: 'red',
        alignItems: 'flex-end',
    },
    buttonText: {
        borderWidth: 1,
        // borderColor: 'grey',
        marginRight: 5,
        borderRadius: 30,
        padding: 10,
        textAlign: 'center',
        maxWidth: 100,
        fontSize: 10,
    },
});