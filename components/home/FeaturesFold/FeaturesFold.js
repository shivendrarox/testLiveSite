import Image from 'next/image'
export default function FeaturesFold() {
    return (<>
         <div className="features-fold">
      <div className="layout-gap"></div>

        <h2 className="features-h2">
        <span>More Features,</span> More power 
        </h2>
        <div className="layout-padding"></div>

        <div className="container img-cont">
          <div className="row justify-content-center">
            <div className="col-md-4">
              {/* <img  style={{width:"53%"}} className="li-img" src="/static/images/Feature_1.svg">
              </img> */}
              <div className=" special-mobile">
              <Image height="264" width="225" src="/static/images/Feature_1.svg"  />

              </div>
            </div>

            <div className="col-md-4">
              {/* <img className="li-img" src="/static/images/Feature_2.svg">
              </img> */}
                            <div className="li-img">
              <Image height="264" width="225" src="/static/images/Feature_2.svg"  />

              </div>
            </div>

            <div className="col-md-4">
              {/* <img className="li-img" src="/static/images/Feature_3.svg">
              </img> */}
                            <div className="li-img">
              <Image height="264" width="225" src="/static/images/Feature_3.svg"  />

              </div>
            </div>
          </div>

        </div>
        {/* <div className="list-container">
        <ul className="features-list">
                  <li>
                    <div className="list_container">
                      <img className="icon_img" src="/static/images/home/1.svg"></img>
                      <p>HTML/AMP emails</p>
                    </div>
                  </li>
                  <li>
                    <div className="list_container">
                      <img className="icon_img" src="/static/images/home/1.svg"></img>
                      <p>50+ templates</p>
                    </div>
                  </li>
                  <li>
                    <div className="list_container">
                      <img className="icon_img" src="/static/images/home/1.svg"></img>
                      <p>Step-by-step forms</p>
                    </div>
                  </li>
                  <li>
                    <div className="list_container">
                      <img className="icon_img" src="/static/images/home/1.svg"></img>
                      <p>Conditional forms</p>
                    </div>
                  </li>
                  <li>
                    <div className="list_container">
                      <img className="icon_img" src="/static/images/home/1.svg"></img>
                      <p>Mobile responsive</p>
                    </div>
                  </li>
                  <li>
                    <div className="list_container">
                      <img className="icon_img" src="/static/images/home/1.svg"></img>
                      <p>Personalize emails</p>
                    </div>
                  </li>
                  <li>
                    <div  className="list_container">
                      <img className="icon_img" src="/static/images/home/1.svg"></img>
                      <p>Manage contacts</p>
                    </div>
                  </li>
                  <li>
                    <div className="list_container">
                      <img className="icon_img" src="/static/images/home/1.svg"></img>
                      <p>Sync calendar</p>
                    </div>
                  </li>
                  <li>
                    <div className="list_container">
                      <img className="icon_img" src="/static/images/home/1.svg"></img>
                      <p>Sync Shopify contacts</p>
                    </div>
                  </li>
                  <li>
                    <div className="list_container">
                      <img className="icon_img" src="/static/images/home/1.svg"></img>
                      <p>Journey builder</p>
                    </div>
                  </li>
                  <li>
                    <div className="list_container">
                      <img className="icon_img" src="/static/images/home/1.svg"></img>
                      <p>APIs & Webhooks</p>
                    </div>
                  </li>
                  
                  <li>
                    <div className="list_container">
                      <img className="icon_img" src="/static/images/home/1.svg"></img>
                      <p>Managed deliverability</p>
                    </div>
                  </li>
                                    
                  <li>
                    <div className="list_container">
                      <img className="icon_img" src="/static/images/home/1.svg"></img>
                      <p>Custom domain</p>
                    </div>
                  </li>
                                                      
                  <li>
                    <div className="list_container">
                      <img className="icon_img" src="/static/images/home/1.svg"></img>
                      <p>Upload HTML</p>
                    </div>
                  </li>
                  <li>
                    <div className="list_container">
                      <img className="icon_img" src="/static/images/home/1.svg"></img>
                      <p>Subject line A/B testing</p>
                    </div>
                  </li>
                  
                  <li>
                    <div className="list_container">
                      <img className="icon_img" src="/static/images/home/1.svg"></img>
                      <p>Detailed analytics</p>
                    </div>
                  </li>
                  <li>
                    <div className="list_container">
                      <img className="icon_img" src="/static/images/home/1.svg"></img>
                      <p>Technical Support</p>
                    </div>
                  </li>
                  <li>
                    <div className="list_container">
                      <img className="icon_img" src="/static/images/home/1.svg"></img>
                      <p>Professional Services</p>
                    </div>
                  </li>
               </ul>
        </div>
    */}
          <div className="layout-gap"></div>
      </div>


    </>)
  }