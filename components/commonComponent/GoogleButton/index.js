import Router from 'next/router';

const GoogleSignupButton = (props) => {

  const redirectUri = 'https://manage.mailmodo.com/auth/googleRedirect'

  const handleClick = () => {
    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?client_id=470844256400-hq3ji6me9kpgkf420lsdp4osk61cpdmi.apps.googleusercontent.com&redirect_uri=${redirectUri}&response_type=code&prompt=consent&scope=profile%20openid%20email&`;
  }


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
    <div onClick={handleClick} className={`btn-group align-items-center button-google-signup ${props.extraClass}`} role="group" aria-label="Basic example">
      <img
        className="google-icon"
        src="/static/images/icon/icon_google.svg"
        alt="mailmodo-icon-google"
        title="mailmodo-icon-google icon"
      />
      <a type="button" className="btn btn-text" id={props.trackingId}> Sign up with Google</a>
    </div>
  );
};

export default GoogleSignupButton;
