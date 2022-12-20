import React from 'react'

export default function Righttogglercontent({handleRighttogglecontent}) {
  return (
    <div className="righttoggler_content">
        <div className='righttoggler_content_div' onClick={handleRighttogglecontent}>Faq</div>
        <div className='righttoggler_content_div' onClick={handleRighttogglecontent}>Aman</div>
    </div>
  )
}
