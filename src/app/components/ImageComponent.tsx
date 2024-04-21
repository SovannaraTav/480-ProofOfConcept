'use client'
import React, { useState } from "react";
import Image from "next/image";

function ImageComponent()
{
    const [src, setSrc] = useState("/sovannara_tav.jpg");
    const [alt, setAlt] = useState("Image of Sovannara Tav");
    
    function ImageChanger()
    {
        if (src === "/sovannara_tav.jpg")
        {
            setSrc("/pixel_uw_logo.png");
            setAlt("Image of pixel UW logo");
        }
        else
        {
            setSrc("/sovannara_tav.jpg");
            setAlt("Image of Sovannara Tav");
        }
    }

    return (
        <div>
            <Image
                src={src}
                alt={alt}
                onClick={ImageChanger}
                width={200}
                height={200}
            />
        </div>
    )
}

export default ImageComponent;