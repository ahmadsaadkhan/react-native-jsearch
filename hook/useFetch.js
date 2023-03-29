import { useState, useEffect } from 'react'
import axios from 'axios'
// import { RAPID_API_KEY } from '@env';

const useFetch = ( endPoint, query ) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endPoint}`,
        headers: {
            'X-RapidAPI-Key': '5789d1bff0msh4a6a0069e95762fp1293afjsn4ac7d86e7df3',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: { ...query }
    };

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const response = await axios.request(options);
          //  console.log("response", response)
            setData(response.data.data)
            setIsLoading(false)
        } catch (error) {
            setError(error)
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    }

    return { data, isLoading, error, refetch }
}
export default useFetch;