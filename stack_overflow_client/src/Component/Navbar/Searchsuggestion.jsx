import React from 'react'

export default function Searchsuggestion({input,setinput,handleClick,inputdisplay}) {
  return (
    <div className={`search_suggestion ${inputdisplay==='searchmobileview'?('searchsuggestionview'):('')}`}>
        <div className={`search_suggestion_div ${inputdisplay==='searchmobileview'?('searchsuggestion_divview'):('')}`} onClick={handleClick}>
            {input}
        </div>
    </div>
  )
}
