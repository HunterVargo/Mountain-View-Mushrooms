import React from "react";
import Mushcard from "./MushroomCard"
import "./ProductPageStyling.css"
import Header from "./Header"
export default function Product(){
    
    
    
    return(

        <div>
            <Header />
            <div id="ProductPageContainer">
                <Mushcard
                    Img="./Img/KingPearl.jpg"
                    Mushroom="King Blue Oyster"
                    Description="good mushy"
                />
                <Mushcard
                    Img="./Img/KingPearl.jpg"
                    Mushroom="King Blue Oyster"
                    Description="good mushy"
                />
                <Mushcard
                    Img="./Img/KingPearl.jpg"
                    Mushroom="King Blue Oyster"
                    Description="good mushy"
                />
            </div>
        </div>

    )
}