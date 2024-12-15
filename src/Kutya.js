import React, { useState } from 'react';

function Kutya(props){
    let [kutyaInfok, setkutyaInfok] = useState(props.Kutya);

    let [doubleClicked, setDoubleClicked] = useState(false);

    return (
        <>
        {
            doubleClicked ? (<KutyaKiiras kutyaInfok={kutyaInfok}></KutyaKiiras>) : (<></>)
        }
            <button type="button"onDoubleClick={() => {setDoubleClicked(!doubleClicked);}}> Kutya információk megjelenítése </button>
        </>
    )
}

function KutyaKiiras(props){
    return (
    <>
        <p>Név: {props.kutyaInfok.nev}</p>
        <p>Faj: {props.kutyaInfok.faj}</p>
        <p>Szín: {props.kutyaInfok.szin}</p>
    </>
    )
}

export default Kutya;