import Router from 'next/router'
const SignupButton = (props) => {
  return (
    <a id={props.trackingId} className={`button-signup btn d-flex align-items-center ${props.extraClass}`}
      onClick={() => Router.push("https://manage.mailmodo.com/auth/signup")}>
      <span
        className={
          props.fontSize ? `button-text-${props.fontSize}` : 'button-text-large'
        }
      >
        {props.btn_text??"Sign up with email"}
      </span>
    </a>
  );
};

export default SignupButton;
