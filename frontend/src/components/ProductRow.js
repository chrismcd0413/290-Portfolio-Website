import React, { useState } from 'react';
import ProductQuantity from './ProductQuantity';       

function ProductRow({ item }) {
    console.log('Product: ', item);
    return (
        <tr>
            <td>{ item.company }</td>
            <td>{ item.product }</td>
            <td>{ item.price.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD',
                    currencyDisplay: 'symbol',
                    maximumFractionDigits: 2,
                    minimumFractionDigits: 2}) }
            </td>
            <td><ProductQuantity /></td>
        </tr>
    );
}
export default ProductRow;