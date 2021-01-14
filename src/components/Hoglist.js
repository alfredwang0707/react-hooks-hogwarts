import React from 'react'
import HogCard from "./HogCard.js"




function RenderHogs({ hogs }){

    
   
    const eachHog = hogs.map(function(hog){
        return (
          <div>
              <HogCard className="ui eight wide column" name={hog.name} specialty={hog.specialty} greased={hog.greased} weight={hog.weight} />
          </div>
        )
    })
    return (
        <div>
            <h1>{eachHog}</h1>
        </div>
    )

}


// function handleClick(e){
    // moreDetails = hogs.map(function(hog
        //
    // if(hog.name === e.target.name){
            //<div>
            //<p>hog.weight</p>
            //<p>hog.specialty</p>
    //}
// }
//
    //<HogCard onClick={handleClick}
//






export default RenderHogs
