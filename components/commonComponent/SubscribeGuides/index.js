import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import styles from '../../../assets/guides-slug.module.scss'
const SubscribeGuides = (props) => {
    const [email, setEmail] = useState('')

    const [successMessage, setSuccessMessage] = useState('');

    useEffect(() => {
        const scriptURL = 'https://api.mailmodo.com/api/v1/at/c/uRySaYGSVz/e9d47c43-8c59-5f7c-bae6-e9d2ef0b7d23';
        const form = document.forms['submit-to-google-sheet'];
        form.addEventListener('submit', e => {
            // debugger
            e.preventDefault();
            let formData = new FormData(form);
            let object = {};
            formData.forEach(function (value, key) {
                object[key] = value;
            });
            var json = JSON.stringify(object);
            fetch(scriptURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: json
            })
                .then(response => setSuccessMessage("Thank you for submitting the form. We will connect with you shortly"))
                .catch(error => setSuccessMessage("Something went wrong. Please retry"));
        });

        // let script = document.createElement("script")
        // script.src = scriptURL
        // script.async = true
    }, [])
    return (
        <form onSubmit={()=>{
            analytics.track("Newsletter Subscribed", {
                email:email,
                location:props.trackingIdArr[0]
        });console.log("submission working")}} name="submit-to-google-sheet">

            <div className={styles.cta_subscribe}>
                <h3>
                    Subscribe to our email newsletter
                </h3>
                <input onChange={(e) => {
                    setEmail(e.target.value)
                }} 
          className={styles.custom_input} type="text" placeholder="Your email address" ></input>
                <Button
                    text="Subscribe Now"
                    type="submit"
                    id={props.trackingIdArr[0]}
                    className=" mailmodo-primary-btn btn-success"
                />
                <div className={props.messageClass ?? styles.successMessage_guides}>
                    {successMessage}
                </div>
            </div>


        </form>
    );
};

export default SubscribeGuides;