import Image from 'next/image'
export default function Companies() {
    return (
        <div className="companies_fold">
        <h2 className="fold_h2">  
        Trusted by companies across industries
        </h2>
        <div className="layout-gap"></div>

        <div className="companies_img_cont">
   
          <Image 
          src="https://res.cloudinary.com/testcdn93451/image/upload/q_50/v1627715761/companies_tieqwe.webp"
          height="512"
          width="1292"
          layout="responsive"
          />
            
           {/* <img src="/static/images/companies.svg"> 
          </img> */}
        </div>
        <div className="companies_img_cont_mobile">
            {/* 
            <img src="/static/images/mobile-companies/Fintech_Mobile.svg">
            </img>
            <img src="/static/images/mobile-companies/Edtech___Jobs_Mobile.svg">
            </img>
            <img src="/static/images/mobile-companies/saas_Mobile.svg">
            </img>
            <img src="/static/images/mobile-companies/ecommerce_Mobile.svg">
            </img>
            <img src="/static/images/mobile-companies/b2c_services_Mobile.svg">
            </img> */}
            <Image width="410" height="225" src="https://res.cloudinary.com/testcdn93451/image/upload/q_50/v1627716414/Fintech_Mobile_hrmg4z.webp" />
            <div className="layout-padding"></div>
            <Image width="410" height="225" src="https://res.cloudinary.com/testcdn93451/image/upload/q_50/v1627716414/Fintech_Mobile_hrmg4z.webp" />
            <div className="layout-padding"></div>
            <Image width="410" height="225" src="https://res.cloudinary.com/testcdn93451/image/upload/q_50/v1627716414/Fintech_Mobile_hrmg4z.webp" />
            <div className="layout-padding"></div>
            <Image width="410" height="225" src="https://res.cloudinary.com/testcdn93451/image/upload/q_50/v1627716414/Fintech_Mobile_hrmg4z.webp" />
            <div className="layout-padding"></div>
            <Image width="410" height="225" src="https://res.cloudinary.com/testcdn93451/image/upload/q_50/v1627716414/Fintech_Mobile_hrmg4z.webp" />

        </div>
    </div>
    
    )
  }