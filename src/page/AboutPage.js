import React from 'react';
import {useNavigate} from "react-router-dom";

const AboutPage = () => {

    const navigate = useNavigate();

    // const goToHomePage = () =>{
    //     navigate("/");
    // }

    return (
        <div>
            <button onClick={()=>navigate("/")}>홈페이지 이동</button>
            <h1>어버웃페이지</h1>
        </div>
    );
};

export default AboutPage;