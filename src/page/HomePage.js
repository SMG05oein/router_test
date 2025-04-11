import React from 'react';
import {Link} from "react-router-dom";

const HomePage = () => {
    return (
        <div>
            <h1>홈페이지</h1>
            <Link to={"/about"}>어바웃으로 이동</Link><br/>
            <Link to={"/product"}>게시물로 이동</Link>
        </div>
    );
};

export default HomePage;