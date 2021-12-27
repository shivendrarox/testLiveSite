import React from "react";
import Image from 'next/image'

export default function Awards() {
    return (
        <div className="awards-fold">
                    <div className="container">
                      <div className="row">
                          <div className="col-md-6 left-section">
        
                            <h2 className="awards-h2">
                                Backed by
                            </h2>
                            {/* <div className="badge-cont">
                                <img className="logo-yc" src="/static/images/yc.svg">
                                </img>
                                <img  className="logo-seq" src="/static/images/seq.svg">
                                </img>
                                <img  className="logo-al" src="/static/images/al.svg">
                                </img>
                            </div> */}
                            <Image
                              layout="responsive"
                              width="703"
                              height="46"
                              src="https://res.cloudinary.com/testcdn93451/image/upload/f_auto,q_50/v1627713121/left-vc_coikvd.webp"
                            />
        
                            
                          </div>
        
                          <div className="col-md-6 right-section">
        
                            <h2 className="awards-h2">
                                Featured on
                            </h2>
                            <div className="badge-cont">
                              
                              <img className="badge-icon" src="https://res.cloudinary.com/testcdn93451/image/upload/f_auto,q_50/v1627713714/producthunt_bmutcw.webp" alt="Mailmodo - Boost email conversions with interactive AMP emails. | Product Hunt"  />
        
                              <img className="badge-icon"  alt="Mailmodo is a leader in Email Marketing on G2" src="https://res.cloudinary.com/testcdn93451/image/upload/f_auto,q_50/v1627713812/G2_jfammo.webp" />
        
                            </div>
        
                          </div>
                      </div>
         
                    </div>
            </div>
          ) 
  }
