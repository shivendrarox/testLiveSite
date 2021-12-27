import Link from 'next/link'
const GoogleSignupButton = (props) => {

  return (
    // <button className="button-google-signup btn d-flex align-items-center">
    //   <img
    //     className="google-icon"
    //     src="/static/images/icon/icon_google.svg"
    //   />
    //   <span
    // className={
    //   props.fontSize
    //     ? `button-text-${props.fontSize}`
    //     : 'button-text-large'
    // }
    //   >
    //     Sign up with Google
    //   </span>
    // </button>
    <Link href={`https://accounts.google.com/o/oauth2/v2/auth?client_id=470844256400-hq3ji6me9kpgkf420lsdp4osk61cpdmi.apps.googleusercontent.com&redirect_uri=${'https://manage.mailmodo.com/auth/googleRedirect'}&response_type=code&prompt=consent&scope=profile%20openid%20email&`} passHref >
    <a id={props.trackingId} >
    <button className={`mm-primary-button-regular  ${props.extraClass} `} >Sign Up with Google</button>
    </a>
    </Link>
    // <div onClick={handleClick} className={styles.button_google_signup+` btn-group ${props.extraClass}`} role="group" aria-label="Basic example">
    //   <img
    //     className={styles.google_icon}
    //     src="/static/images/icon/icon_google.svg"
    //     alt="mailmodo-icon-google"
    //   />
    //   <a type="button" className={styles.btn_text+" btn "} id={props.trackingId}> Sign up with Google</a>
    // </div>
  );
};

export default GoogleSignupButton;
