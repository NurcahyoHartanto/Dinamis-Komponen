import React from 'react'
import '../Dinamis Komponen/DinamisComponent.css'

const DinamisComponent = (props) => {
    return (
        <div className='card'>
                <img src= {props.img} alt="Logo React"/>
            <div className='card-body'>
            <p>{props.nama}</p>
            <p>{props.desc}</p>
            </div>
        </div>
    )
}

export default DinamisComponent;