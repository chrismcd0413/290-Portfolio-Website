import React, { useState } from "react";
import { IoArrowDownSharp, IoArrowUpSharp } from 'react-icons/io5';

function ProductQuantity() {
    const [quantity, setQuantity] = useState(0);

    const increase_func = () => setQuantity(quantity + 1);
    const decrease_func = () => setQuantity(quantity === 0 ? 0 : quantity - 1);

    return (
        <div>
            <IoArrowDownSharp onClick={decrease_func} class="quantity_display"/>
            <IoArrowUpSharp onClick={increase_func} />
            <span className="quantity_display">{ quantity }</span>
        </div>
    );
}

export default ProductQuantity;