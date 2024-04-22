'use client'
import React, { useState } from "react";

function ListComponent()
{
    const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    function reorderList()
    {
        const newOrder = [...numbers].sort(() => Math.random() - 0.5);
        setNumbers(newOrder);
    }

    return (
        <div>
            <h2>List of Numbers</h2>
            <ul>
                {numbers.map((number) => (
                    <li key={number}>{number}</li>
                ))}
            </ul>
            <button onClick={reorderList}> Change Order</button>
        </div>
    );
}

export default ListComponent;