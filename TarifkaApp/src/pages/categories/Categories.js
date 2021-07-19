/* eslint-disable prettier/prettier */
import React from 'react';
import { View, FlatList } from 'react-native';
import Loading from '../../components/loadingAnimate/Loading';
import Error from '../../components/errorAnimate/Error';
import useFetch from '../../hooks/useFetch/UseFetch';
import styles from './categories.style';
import Cards from './cards/Cards';

const Categories = (props) => {
    const variable = useFetch('https://www.themealdb.com/api/json/v1/1/categories.php');
    const loading = variable.loading;
    const error = variable.error;
    const responseData = variable.responseData.categories;
    // console.log(variable);
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

    const goToPage = (pageName, categoryName) => {
        // console.log('Going to go Food Page', categoryName);
        props.navigation.navigate(pageName, categoryName);

    };
    function displayCards({ item }) {
        // console.log(item);
        return (
            <Cards
                item={item}
                goToPage={goToPage} />
        );
    }
    return (
        <View style={styles.container}>
            <FlatList
                data={responseData}
                renderItem={item => displayCards(item)}
                keyExtractor={item => item.idCategory}
            />
            {/* <Button onPress={() => props.navigation.navigate('detail')} title="Button" /> */}
        </View>
    );
};

export default Categories;
