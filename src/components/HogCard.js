
import React, {useState} from "react"

import augustus_gloop from '../assets/augustus_gloop.jpg'
import babe from '../assets/babe.jpg'
import bailey from '../assets/bailey.jpg'
import cherub from '../assets/cherub.jpg'
import galaxy_note from '../assets/galaxy_note.jpg'
import leggo_my_eggo from '../assets/leggo_my_eggo.jpg'
import peppa from '../assets/peppa.jpg'
import piggy_smalls from '../assets/piggy_smalls.jpg'
import piglet from '../assets/piglet.jpg'
import porkchop from '../assets/porkchop.jpg'
import trouble from '../assets/trouble.jpg'
import truffle_shuffle from '../assets/truffle_shuffle.jpg'

import HogDetails from "./HogDetails.js"


function HogCard ( {name, specialty, greased, weight} ){

    const imageData = {
        augustus_gloop: augustus_gloop,
        babe: babe,
        bailey: bailey,
        cherub: cherub,
        galaxy_note: galaxy_note,
        leggo_my_eggo: leggo_my_eggo,
        peppa: peppa,
        piggy_smalls: piggy_smalls,
        piglet: piglet,
        porkchop: porkchop,
        trouble: trouble,
        truffle_shuffle: truffle_shuffle
    }

    const hogImage = imageData[name.toLowerCase().split(" ").join("_")]

    

    const [details, setDetails] = useState(false)

    function handleDetailsClick(e){
        setDetails(!details)
    }
 

    
    return (
        <div className ="ui eight wide column">
            <h1>{name}</h1>
            <img src={hogImage} alt={name}></img>
            <button onClick={handleDetailsClick}>
                {details ? <HogDetails specialty={specialty} weight={weight} greased={greased} />: "no-info"}
            </button>
        </div>
    )
}

export default HogCard 



