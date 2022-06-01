import React from "react";
import DesignCom from "../../components/DesignCom/DesignCom";
import FeaturedCom from "../../components/FeaturedCom/FeaturedCom";
import CustomCom from "../../components/CustomCom/CustomCom";
import JoinCom from "../../components/JoinCom/JoinCom";

const HomeCom = () => {
    return (
        <div>
            <DesignCom/>
            <FeaturedCom/>
            <CustomCom/>
            <JoinCom/>
        </div>
    )
}

export default HomeCom;