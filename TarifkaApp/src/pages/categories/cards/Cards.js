/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../categories.style';
const Cards = ({ item, goToPage }) => {
    // console.log("goToPage", goToPage);
    return (
        <View>
            <View style={styles.categoryContainer}
                onPress={() => goToPage('Foods', item.strCategory)}>
                <View style={styles.rowContainer}
                    onPress={() => goToPage('Foods', item.strCategory)}>
                    <Image
                        style={styles.thumbnail}
                        source={{ uri: item.strCategoryThumb }}
                        onPress={() => goToPage('Foods', item.strCategory)}
                    />
                    <View style={{ flex: 30 }}>
                        <View style={{ flex: 1, alignSelf: 'flex-end' }}>
                            <Text
                                style={styles.categoryTitle}
                                color="white"
                                onPress={() => goToPage('Foods', item.strCategory)}
                            > {item.strCategory}</Text>
                        </View>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => goToPage('Foods', item.strCategory)}
                        >
                            <Text
                                style={styles.buttonText}
                            > Go To Page </Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </View>
        </View >
    );
};

export default Cards;
