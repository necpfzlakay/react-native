/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { Text, View, Image, FlatList, Button } from 'react-native';
import axios from 'axios';
import useFetch from '../../hooks/useFetch/UseFetch';
import Loading from '../../components/loadingAnimate/Loading';
import Error from '../../components/errorAnimate/Error';
import styles from './detail.style';
// import useFetch from '../../hooks/useFetch/UseFetch';

const Detail = () => {


    const variable = useFetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata');
    const loading = variable.loading;
    const error = variable.error;
    const responseData = variable.responseData.meals;
    // console.log(variable);

    const meal = ({ item }) => {
        return (
            <View>

                <Image
                    style={styles.image}
                    source={{ uri: item.strMealThumb }}
                />
                <View style={{ margin: 15 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 25 }} > {item.strMeal} </Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 25 }} > {item.strArea} </Text>
                    <View style={{ width: 1000, borderColor: 'grey', borderWidth: 1, left: -100 }}></View>
                    <Text style={{ fontSize: 15 }}> {item.strInstructions} </Text>
                </View>
                <View style={{margin: 20}}>
                    <Button title="Go to Video" color="red" />
                </View>

            </View>
        );
    };


    if (error && !responseData !== '[]') {
        return (
            <Error />
        );
    }
    if (loading) {
        return (
            <Loading />
        );
    }
    return (

        <View>

            <FlatList
                data={responseData}
                renderItem={meal}
                keyExtractor={item => item.idMeal}
            />
            {/* <Button title="datagöster" onPress={fetchData} /> */}

        </View>

    );
};


export default Detail;
