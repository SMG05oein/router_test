import React from 'react';
import {Link} from "react-router-dom";

const ProductPag = () => {
    return (
        <div>
            <h1>모든 생산품 보여주는!!</h1>
            {/*<Link to={"/product/:id/:mon"}>자세히 보기</Link><br/>*/}
            <Link to={"/product/" + "temp" + "/" + "123456789"}>자세히 보기</Link><br/>
            <Link to={"/"}>이전</Link>


        </div>
    );
};

export default ProductPag;