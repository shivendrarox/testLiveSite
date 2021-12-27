import React, { useEffect, useState } from 'react';

const LetterToSubscribe = (props) => {
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
                .then(response => setSuccessMessage("Thank you for subscribing!"))
                .catch(error => setSuccessMessage("Something went wrong. Please retry"));
        });

        // let script = document.createElement("script")
        // script.src = scriptURL
        // script.async = true
    }, [])
    return (
        <form name="submit-to-google-sheet" onSubmit={()=>{
            analytics.track("Newsletter Subscribed", {
                email:email,
                location:props.trackingIdArr[0]
        });}}>
            <div className="input-group">

                <input onChange={(e) => {
                    setEmail(e.target.value)
                }}  name="email" type="text" className="form-control my-auto" placeholder="Enter your email address" aria-label="" aria-describedby="basic-addon1" />
                <div className="input-group-append">
                    <button id={props.trackingIdArr[0]} className="btn btn-success" type="submit">Subscribe</button>
                </div>
            </div>
            <div className={props.messageClass ?? "successMessage_guides"}>
                {successMessage}
            </div>
        </form>
    );
};

export default LetterToSubscribe;