import React from 'react'

const SliderComponet3 = () => {
  const visible2=true;
  return (
       <div className="logo-frame1">
       <div className="frame-awards-stars-frame">
        <img className="ppc-colour-block7" alt="" src="/ppc-colour-block.svg" />
      </div>
          <div className="header-frame4">
        <div className="message-from-managing-container">
          <p className="managing-director delay1">Message from</p>
          <p className="managing-director delay2">Managing director</p>
        </div>
       </div>
       <div className={`rectangle-container ${visible2 ? 'visible' : ''}`} style={{height:"620px",backgroundImage:`url('/rectangle-1097@2x.png')`}}>
         <img className="layer-1-icon" alt="" src="/layer-14.svg" />
         <div className="frame-container">
           <div className="duciendantum-ad-mil-earchil-mi-parent">
             <div className="duciendantum-ad-mil">
               Duciendantum ad mil earchil minctem qui ommos untia dunt eate
               dus delis veni ducium quatetusam aut officim quid quostendam
               nonem quiduciatem. Ant harum sim quate pa velecab orepelit
               dolorit labo. Sum harum quae as nienime niscitia.
             </div>
             <img className="layer-1-icon1" alt="" src="/layer-15.svg" />
           </div>
           <div className="aadesh-goyal-chro-parent">
             <div className="rajarshi-purkayastha-vice-container">
               <p className="sustainability-vision">
                 <b className="aadesh-goyal1">Aadesh Goyal</b>
                 <span>
                   <span className="span"></span>
                 </span>
               </p>
               <p className="sustainability-vision">
                 <span>
                   <span className="chro2">chro</span>
                 </span>
               </p>
             </div>
             <div className="frame-parent2">
               <div className="rectangle-parent3">
                 <div className="frame-child3" />
                 <b className="watch-video">watch video</b>
               </div>
               <img className="frame-child1" alt="" src="/group-57.svg" />
             </div>
           </div>
         </div>
       </div>
     </div>
  )
}

export default SliderComponet3
