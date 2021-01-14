import React from 'react'


function HogDetails (props){
    return (
        <div>
            <p>Specialty:{props.specialty}</p>
            <p>Greased:{props.greased}</p>
            <p>Weight:{props.weight}</p>
        </div>
    )
}

export default HogDetails 