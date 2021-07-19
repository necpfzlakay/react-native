/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url) => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [responseData, setResponseData] = useState([]);

    const fetchData = async() => {
        try {
            const veri = await axios.get(url);
            console.log('Axios Fetch Data --> ', veri.data);
            setResponseData(veri.data);
            setLoading(false);
        } catch (err) {
            setError(err.message);
        }

    };
    useEffect(() => {
        fetchData();
    }, []);

    return { error, loading, responseData };
};
export default useFetch;