import React from 'react';
import {Link} from "react-router-dom";

const ProductView = () => {
    return (
        <div>
            <h1>생산품을 쌈뽕하게 보여주는!!</h1>
            <Link to={"/product"}>이전</Link>

        </div>
    );
};

export default ProductView;