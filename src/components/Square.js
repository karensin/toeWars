import React from 'react';
import '../index.css';


export default function Square(props) {
    return (
        <div className="squares">
            <button className="square" onClick={props.onClick}>
                {props.value}
            </button>

        </div>
    )
}
