import { useState, useEffect } from 'react';
import axios from 'axios';




const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        hostname: 'jsearch.p.rapidapi.com/${endpoint}',
        headers: {
            'x-rapidapi-key': 'cf004553c2mshdc970cfce46998cp1c065ajsnb82ec20d74e8',
            'x-rapidapi-host': 'jsearch.p.rapidapi.com'
        },
        port: null,
        path: '/estimated-salary?job_title=NodeJS%20Developer&location=New-York%2C%20NY%2C%20USA&radius=100',
        params: { ...query },
    };



    const fetchData = async ()=> {
        setIsLoading(true);

        try{
            const response = await axios.request(options);

            setData(response.data.data);
            setisLoading(false);
        }catch(error){
            setError(error);
            alert("There is an error")
            
        }finally{
            setLoading(false);
        }
    }


useEffect(()=>{
fetchData();


}, [])

const refetch = () => {
    setIsLoading(true);
    fetchData();
}


return {data, isLoading, error, refetch};

}

export default useFetch;