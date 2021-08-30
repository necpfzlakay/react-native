/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, FlatList } from 'react-native';
import Jobcards from '../../components/jobcards.js/Jobcards';

const data = [{}, {}, {}];

export default function JobList() {
    return (
        <View>




            <Text> Job Listing Component... </Text>

            <FlatList
                data={data}
                renderItem={item => <Jobcards />}

            />



        </View>
    );
}
