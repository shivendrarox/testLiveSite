import React from 'react';
import styles from '../../comparison.module.scss';

const Brands = (props) => {
    return (
      <>
      <div style={{backgroundColor:"#ffffff"}} className={styles.brands+" "}>
          <h2 className={styles.brands_heading+" "}>TRUSTED BY TEAMS WORLDWIDE</h2>
          
          <div className="container">
          <div className={styles.img_row+" row mt-5 "}>

                <div className="col-md-2">
                    <img src="/static/images/insta.png" className={styles.image}>
                    </img>
                </div>

                <div className="col-md-2">
                    <img src="/static/images/fund.png" className={styles.image}>
                    </img>
                </div>

                <div className="col-md-2">
                    <img src="/static/images/rupeek.png" className={styles.image}>
                    </img>
                </div>

                <div className="col-md-2">
                    <img src="/static/images/foyr.png" className={styles.image}>
                    </img>
                </div>

                <div className="col-md-2">
                    <img src="/static/images/click.svg" className={styles.image}>
                    </img>
                </div>

          </div>
          </div>

      </div>
      </>
    );
}
export default Brands;