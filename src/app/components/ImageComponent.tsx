'use client'
import React from "react";

function ImageComponent()
{
    function ImageChanger()
    {
        const imageElement = document.querySelector("img");
        if (imageElement)
        {
            const srcAttribute = imageElement.getAttribute("src");
            if (srcAttribute === "sovannara_tav.jpg")
            {
                imageElement.setAttribute("src", "pixel_uw_logo.png");
                imageElement.setAttribute("alt", "Image of pixel UW logo");
            }
            else
            {
                imageElement.setAttribute("src", "sovannara_tav.jpg");
                imageElement.setAttribute("alt", "Image of Sovannara Tav");
            }
        }
    }

    return (
        <div>
            <img src="sovannara_tav.jpg" alt="Image of Sovannara Tav" onClick={ImageChanger}/>
        </div>
    )
}

export default ImageComponent;