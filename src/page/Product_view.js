import React from 'react';
import {Link, useParams} from "react-router-dom";

const ProductView = () => {
    // const params = useParams()
    const {id} = useParams();
    const {mon} = useParams()
    return (
        <div>
            {/*<h1>{params['id']}번째 생산품을 쌈뽕하게 보여주는!!</h1><br/>*/}
            {/*<h1>가격 {params['mon']}원</h1><br/>*/}
            <h1>{id}번째 생산품을 쌈뽕하게 보여주는!!</h1><br/>
            <h1>가격 {mon}원</h1><br/>
            <h1>예 맞습니다 예외처리는 성능을 위해 안 했습니다!</h1>
            <Link to={"/product"}>이전</Link>

        </div>
    );
};

export default ProductView;