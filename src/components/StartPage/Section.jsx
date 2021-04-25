import React from 'react'
import xss from 'xss';

//Renderar ut SECTION på STARTSIDAN

export default function Section({props: {section_image, section_illustration, section_title, section_text}}) {

    const content = section_text
    return (
        <section className="startpage-section">

            
            <div className="section_image-wrapper" >
                {section_image ? <img src={section_image.url} alt={section_image.alt}/> : ""}
            </div>
            
                
               
           
            <div className="section_illustration">
            <h3>{section_title}</h3>
                <div className="section_illustration-wrapper">
                {section_illustration ? <img src={section_illustration.url} alt={section_illustration.alt} /> : ""}
                {/* Använder xss för att sanitera text från backend */}
                <div className="section_illustration-text" dangerouslySetInnerHTML={{__html: xss(content) }}></div>
                </div>
            </div>
            
        </section>
    )
}

