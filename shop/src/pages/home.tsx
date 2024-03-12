import Axios from "axios";
import { useState, useEffect } from 'react';

export const Home = () => {
    const [titles, setTitles] = useState([]);

    useEffect(() => {
        Axios.get("https://fakestoreapi.com/products")
            .then((res) => {
                // Extracting titles from the array of products
                const productTitles = res.data.map(product => product.title);
                setTitles(productTitles);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div>
            <h1>Home Page</h1>
            {/* Displaying each title */}
            <ul>
                {titles.map((title, index) => (
                    <li key={index}>{title}</li>
                ))}
            </ul>
        </div>
    );
};
