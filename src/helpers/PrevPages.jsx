// React
import React from "react";

export default function PrevPages({data , setActivePage}){
    return (
        <div>
            {data.map((el , i) =>{
                return (
                    <button key = {el.name + i} onClick = {(e) =>{
                        e.preventDefault();
                        setActivePage(el.prevPage)
                    }}>{el.name}</button>
                )
            })}
        </div>
    )
}