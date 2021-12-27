import styles from '../features.module.scss'
import Link from 'next/link'
const SignupButton = (props) => {
  return (
    <Link href={"https://manage.mailmodo.com/auth/signup"} passHref >
    <a id={props.trackingId} >
    <button className={`mm-secondary-button-regular  ${props.extraClass} `} >Sign Up</button>
    </a>
    </Link>

    // <a id={props.trackingId} className={styles.button_signup+` btn d-flex align-items-center ${props.extraClass}`}
    //   onClick={() => Router.push("https://manage.mailmodo.com/auth/signup")}>
    //   <span
    //     className={
    //       props.fontSize ? `button-text-${props.fontSize}` : 'button-text-large'
    //     }
    //   >
    //     Sign up with Email
    //   </span>
    // </a>
  );
};

export default SignupButton;
