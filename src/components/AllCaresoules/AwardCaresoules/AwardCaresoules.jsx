import React from 'react'
import FrameComponent1 from '../../FrameComponent1'
import "./AwardCaresoules.css"
const AwardCaresoules = () => {
  return (
    <div className='Awards-Parent-container'>
      <div className="text">
        <img className="ppc-colour-block1" alt="" src="/ppc-colour-block.svg" />
        <div className="instance">
          <div className="awards">awards</div>
          <div className="text1">
            <div className="text-child" />
            <b className="sustainability">sustainability</b>
          </div>
          <div class="line1"></div>
        </div>
      </div>
      <FrameComponent1 />
    </div>
  )
}

export default AwardCaresoules
