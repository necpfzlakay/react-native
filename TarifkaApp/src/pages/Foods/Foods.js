/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, FlatList } from 'react-native';
import styles from './foods.style';
import useFetch from '../../hooks/useFetch/UseFetch';
import Loading from '../../components/loadingAnimate/Loading';
import Error from '../../components/errorAnimate/Error';
export default function Foods(props) {
    const variable = useFetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=' + props.route.params);
    const loading = variable.loading;
    const error = variable.error;
    const responseData = variable.responseData.meals;
    // console.log(responseData);

    const goToPage = (pageName, categoryName) => {
        // console.log('Going to go Food Page', categoryName);
        props.navigation.navigate(pageName, categoryName);

    };



    const cards = ({ item }) => {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.touchable}
                    onPress={() => goToPage('detail', '')}
                >
                    <ImageBackground
                        source={{ uri: item.strMealThumb }}
                        resizeMode="cover"
                        style={styles.image}

                    >
                        <Text style={styles.text}> {item.strMeal} </Text>
                    </ImageBackground>

                </TouchableOpacity>
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
        <View style={{ flex: 1 }}>
            <FlatList
                data={responseData}
                renderItem={cards}
                keyExtractor={item => item.idMeal}
            />
        </View>
    );
}
