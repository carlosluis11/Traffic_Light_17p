import React, { useState } from "react"

const TrafficLight = () => {
    const [click, setClick] = useState(null);

    const handleClick = (color) => {
        setClick(color);
    };
    return (
        <>
            <div className=" block rounded container  bg-black p-2">
                <button className={`circle-red m-auto mt-3 
                ${click === "circle-red" ? "glow-style" : ""}`}
                    onClick={() => handleClick("circle-red")}>
                </button>
                <button className={`circle-yellow m-auto mt-2
                ${click === "circle-yellow" ? "glow-style" : ""}`}
                    onClick={() => handleClick("circle-yellow")}>
                </button>
                <button className={`circle-green m-auto mt-2
                ${click === "circle-green" ? "glow-style" : ""}`}
                    onClick={() => handleClick("circle-green")}>
                </button>
            </div>
        </>
    );
};
export default TrafficLight;