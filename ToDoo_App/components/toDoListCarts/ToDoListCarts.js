/* eslint-disable prettier/prettier */
import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';

const ToDoListCarts = (props) => {
    // console.log(props);
    const isCompleted = props.dataa.item.isCompleted;
    return (
        <SafeAreaView>
            <View style={isCompleted ? styles.cartContainerTrue : styles.cartContainerFalse}>
                <Text
                    // disabled={props.dataa.item.isCompleted ? true : false}
                    style={isCompleted ? styles.cartTextNameTrue : styles.cartTextNameFalse}
                    onPress={() => props.completeToDo(props.dataa.item.id)} >
                    {props.dataa.item.name}
                </Text>
                <Text
                    // disabled={props.dataa.item.isCompleted ? true : false}
                    style={isCompleted ? styles.cartTextTimeTrue : styles.cartTextTimeFalse}
                    onPress={() => props.completeToDo(props.dataa.item.id)} >
                    {props.dataa.item.time}
                </Text>
            </View>
        </SafeAreaView >

    );
};


const styles = StyleSheet.create({
    cartContainerTrue: {
        backgroundColor: '#313739',
        padding: 10,
        margin: 10,
        borderRadius: 15,
        flexDirection: 'row',
        flex: 1,
        opacity: 10,
    },
    cartContainerFalse: {
        backgroundColor: '#ffa500',
        padding: 10,
        margin: 10,
        borderRadius: 15,
        flexDirection: 'row',
        flex: 1,
    },
    cartTextNameTrue: {
        color: 'white',
        flex: 2,
        fontSize: 20,
        fontWeight: '700',
        includeFontPadding: true,
        justifyContent: 'center',
        paddingLeft: 10,
        textDecorationLine: 'line-through',
        opacity: 10,
    },
    cartTextNameFalse: {
        color: 'white',
        flex: 2,
        fontSize: 20,
        fontWeight: '700',
        includeFontPadding: true,
        justifyContent: 'center',
        paddingLeft: 10,
    },
    cartTextTimeTrue: {
        flex: 1,
        textAlign: 'right',
        color: 'white',
        justifyContent: 'center',
        textDecorationLine: 'line-through',
    },
    cartTextTimeFalse: {
        flex: 1,
        textAlign: 'right',
        color: 'white',
        justifyContent: 'center',
    },
});
export default ToDoListCarts;
