import React from "react";
import PropTypes from "prop-types";
import "./Dust.css";


function Dust({name, pm10, pm25, so2, co, o3, no2}) {
    return (
        <div className= "each_and_name">
            <h1 className = "element_name">{name}</h1>
            <div className = "each_element">
                <h3>미세먼지(pm10) : {pm10} ㎍/㎥</h3>
                <h3>미세먼지(pm2.5) : {pm25} ㎍/㎥</h3>
                <h3>아황산가스 : {so2} ppm</h3>
                <h3>일산화탄소 : {co} ppm</h3>
                <h3>오존 : {o3} ppm</h3>
                <h3>이산화질소 : {no2} ppm</h3>
            </div>
        </div>
    )
}

Dust.propTypes = {
    name: PropTypes.string.isRequired,
    pm10: PropTypes.string.isRequired
}

export default Dust;