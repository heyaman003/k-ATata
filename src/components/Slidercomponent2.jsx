import React from 'react'

const Slidercomponent2 = () => {
  const visible=true;
  return (
       <div className="logo-frame">
       <div className="frame-awards-stars-frame">
        <img className="ppc-colour-block7" alt="" src="/ppc-colour-block.svg" />
      </div>
          <div className="header-frame4">
        <div className="message-from-managing-container">
          <p className="managing-director delay1">Message from</p>
          <p className="managing-director delay2">Managing director</p>
      </div>
       </div>
       <div className={`rectangle-container ${visible ? 'visible' : ''}`} style={{ height:"620px",backgroundImage:`url('/rectangle-1095@2x.png')`}}>
         <img className="layer-1-icon" alt="" src="/layer-12.svg" />
         <div className={`frame-container `}>
           <div className="duciendantum-ad-mil-earchil-mi-parent">
             <div className="duciendantum-ad-mil">
               Duciendantum ad mil earchil minctem qui ommos untia dunt eate
               dus delis veni ducium quatetusam aut officim quid quostendam
               nonem quiduciatem. Ant harum sim quate pa velecab orepelit
               dolorit labo. Sum harum quae as nienime niscitia.
             </div>
             <img className="layer-1-icon1" alt="" src="/layer-13.svg" />
           </div>
           <div className="rajarshi-purkayastha-vice-pres-parent">
             <div className="rajarshi-purkayastha-vice-container">
               <p className="sustainability-vision">
                 <b className="rajarshi-purkayastha1">Rajarshi Purkayastha</b>
                 <span>
                   <span className="span"></span>
                 </span>
               </p>
               <p className="vice-president1">
                 <span>
                   <span className="vice-president2">Vice President</span>
                 </span>
               </p>
             </div>
             <div className="frame-div">
               <div className="rectangle-parent1">
                 <div className="rectangle-div" />
                 <b className="watch-video">watch video</b>
               </div>
               <img className="frame-child1" alt="" src="/group-56.svg" />
             </div>
           </div>
         </div>
       </div>
     </div>
  )
}

export default Slidercomponent2
