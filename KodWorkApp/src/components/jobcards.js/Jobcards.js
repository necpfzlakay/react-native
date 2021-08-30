/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

function Jobcards() {
    return (
        <View style={styles.container}>
            <View style={styles.containerFluid}>

                <Text style={styles.textHeader}>
                    Managed Services Consultant
                </Text>
                <Text style={styles.textSubHeader}>
                    Sprinklr
                </Text>
                <View style={styles.badge}>
                    <Text style={styles.textBadge}>
                        Flexible / Remote
                    </Text>
                </View>
                <Text style={styles.level}>
                    Mid Level
                </Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'gray',
        margin: 15,
        borderRadius: 15,
        height: Dimensions.get('window').height / 5,
    },
    containerFluid: {
        padding: 15,
    },
    badge: {
        borderColor: 'black',
        maxWidth: '50%',
        marginTop: 10,
    },
    textHeader: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    textSubHeader: {
        color: 'lightgrey',
        fontWeight: 'bold',
        fontSize: 15,
    },
    textBadge: {
        borderColor: 'black',
        fontSize: 16,
        borderWidth: 1,
        borderRadius: 25,
        padding: 5,
        backgroundColor: 'red',
        color: 'white',
        textAlign: 'center',
    },
    level: {
        color: 'red',
        textAlign: 'right',
        fontSize: 16,
    },
});

export default Jobcards;
