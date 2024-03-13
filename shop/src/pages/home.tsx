import Axios from "axios";
import { useState, useEffect } from 'react';
import {Card} from '../components/card';
import '../css/home.css';

export const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        Axios.get("https://fakestoreapi.com/products")
            .then((res) => {
                setProducts(res.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div>
            <h1>Shop Page</h1>
            {/* Displaying each card */}
            <div className="cards">
                {products.map((product, index) => (
                    <Card product={product} key={index}/>
                ))}
            </div> 
        </div>
    );
};
