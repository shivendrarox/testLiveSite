import BannerCarousel from "../../../components/commonComponent/Carousel/BannerCarousel";
import Link from 'next/link'
export default function Wow() {
    return (
        <div className="wow-fold">
        <div className="layout-padding"></div>
  
        <div className="container">
          <div className="row"> 
              <div className="col-md-6 px-0">
              <span class="helper"></span>
  
                <div className="carousel-banner">
                  <BannerCarousel /> 
                </div>
       
              </div>
  
              <div className="col-md-6 px-0">
                <div className="wow-container">
                  <h2 className="h-text">
                  What all can your mail<span>mo</span>do with forms in emails?
                  </h2>
         
                  <div className="label-cont">
                    <label>Newsletter</label>
                    <label>Webinar Booking</label>
                    <label>Surveys</label>
                    <label>Feedback</label>
                    <label>Cart-recovery</label>
                    <label>Appointment bookings</label>
                    <label>Market Research</label>
                    <label>CSAT Survey</label>
                    <label>Lead Generation</label>
                    <label>Pulse Surveys</label>
                    <label>Win-back emails</label>
                    <label>Polls</label>
                    <label>Calculators</label>
                    <label>Demo Booking</label>
                    <label>Onboarding</label>
                    <label>Product Updates</label>
                    <label>Product Recommendation</label>
                    <label>Transactional Emails</label>
                    <label>Account Notifications Emails</label>
  
                  </div>
                  <Link href="https://manage.mailmodo.com">
                  <button className="hero-btn">
                    <label className="hero-btn-text">
                    Create Your Template
                    </label>
                  </button>
                  </Link>
  
                </div>
              </div>
          </div>
  
        </div>
        <div className="layout-padding"></div>
        </div>
    )
  }