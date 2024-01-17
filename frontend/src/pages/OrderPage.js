import React, { useState } from 'react';
import ProductRow from '../components/ProductRow.js'; 
import products from '../data/products.js';

function OrderPage() {
    console.log('Products List:', products);
    return (
        <>
        <h2>Order</h2>
        <article>
            <p>
                Here, you can order a variety of our innovative pet products. Fill out this form and we will process your order ASAP!
            </p>
                <table>
                    <caption>Enter the quantity of product you would like to order.</caption>
                    <thead>
                        <tr>
                            <th>Company</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Choice</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, i) => <ProductRow item={product} key={i} />)}
                    </tbody>
                </table>
        </article>
        </>   
    );
}
export default OrderPage;