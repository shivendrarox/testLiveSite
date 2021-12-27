import Router from 'next/router'
import styles from '../type1.module.scss'

const SignupButton = (props) => {
  return (
    <a id={props.trackingId} className={styles.button_signup+` btn d-flex align-items-center ${props.extraClass}`}
      onClick={() => Router.push("https://manage.mailmodo.com/auth/signup")}>
      <span
        className={
          props.fontSize ? `button-text-${props.fontSize}` : 'button-text-large'
        }
      >
        Sign up with Email
      </span>
    </a>
  );
};

export default SignupButton;
