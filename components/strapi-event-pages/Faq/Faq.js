import React, { useState, useContext } from 'react';
import styles from '../features.module.scss';

import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';


const Faq=(props)=>{
//console.log(props.content)
    return(
        <>
        <div style={{backgroundColor:"#ffffff"}} className={styles.Faq+" "}>
            <h2 className={styles.heading+" mt-2"}>FAQ</h2>
            {false && <p className={styles.desc+" mt-4 mb-3"}>Lorem ipsum doler amiti ukhdf oijoiejwo ikpp posodjf</p>}
            <div className="container mt-5">
                {props.content.faqs.map((element,index)=>{
                    return(<>
                        <Button color="link" className={styles.accord_btn}  id={"toggle"+index} style={{ marginBottom: '0rem' }}>
                        <ul><li>{element.question??"No Content"}</li></ul>
                     </Button>
                     <UncontrolledCollapse toggler={"#toggle"+index}>
                     <Card className={styles.accord_card}>
                         <CardBody>
                             {element.answer??"No Content"}
                         </CardBody>
                     </Card>
                     </UncontrolledCollapse>
                    </>)
                })}
            </div>

        </div>
        </>
    )
}

export default Faq

