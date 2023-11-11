import { useState, useEffect } from 'react';
import axios from 'axios';

export const useGet = (url, params) =>
{
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() =>
    {
        const fetchData = async () =>
        {
            try
            {
                setLoading(true);
                const { data } = await axios.get(url, { params });
                setData(data);
                setError(null);
            } catch (error)
            {
                setError(error);
            } finally
            {
                setLoading(false);
            }
        };

        fetchData();
    }, [url, params]);

    return { data, loading, error };
};
