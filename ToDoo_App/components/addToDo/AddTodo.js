/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Dimensions, TextInput, Button } from 'react-native';

const AddToDo = (props) => {
    const [disableIt, setDisableIt] = useState(false);
    function onHandleText(item) {
        var date = new Date().getDate(); //Current Date
        var month = new Date().getMonth() + 1; //Current Month
        var year = new Date().getFullYear(); //Current Year
        var hours = new Date().getHours(); //Current Hours
        var min = new Date().getMinutes(); //Current Minutes
        // var sec = new Date().getSeconds(); //Current Seconds
        var dateTime = date + '/' + month + '/' + year + ' ' + hours + ':' + min;
        props.addNewValue.name = item;
        props.addNewValue.time = (dateTime).toString();
        setDisableIt(false);
        // console.log(value);
        // console.log(JSON.stringify(value));
    }

    function goAndAdd() {
        setDisableIt(true);
        props.addtodo(props.addNewValue);

    }
    return (
        // eslint-disable-next-line react-native/no-inline-styles
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.mainContainer}>
                <TextInput
                    placeholder="Add New To Do..."
                    style={styles.textInput}
                    placeholderTextColor="#808080"
                    onChangeText={onHandleText}
                />
                <View style={styles.buttonContainer}>
                    <Button
                        onPress={() => goAndAdd()}
                        title="Save"
                        color="#fb6025"
                        disabled={disableIt}
                    />
                </View>
            </View>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#37474f',
        width: Dimensions.get('window').width / 1.1,
        height: Dimensions.get('window').height / 10,
        margin: 20,
        borderRadius: 10,
        opacity: 10,
        bottom: 0,
        flexDirection: 'row',

    },
    textInput: {
        color: 'white',
        backgroundColor: 'transparent',
        // marginLeft: 10,
        // marginRight: 10,
        borderRadius: 10,
        // textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 15,
        borderBottomColor: '#808080',
        borderBottomWidth: 1,
        flex: 5,
        alignSelf: 'center',
        margin: 5,
    },
    buttonContainer: {
        // margin: 5,
        flex: 2,
        borderRadius: 30,
        // marginLeft: 30,
        // marginRight: 30,
        // paddingBottom: 3,
        alignSelf: 'center',
        margin: 5

    },
});

export default AddToDo;
