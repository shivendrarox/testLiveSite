import Image from "next/image"
const FAQcard = (props) => {
  return (
    <div className="FAQ-card-container">
      <div className="question">
        <div className="image">
          {/* <Image layout="fixed" src={props.imageSrc} alt="mailmodo-question-icon" height="32" width="32"/> */}
          <img src={props.imageSrc} title="mailmodo-question-icon image" alt="mailmodo-question-icon" />
        </div>
        <div className="question-text">
          {props.question}
          <div className="answer">{props.answer}</div>
        </div>
      </div>
    </div>
  );
};

export default FAQcard;
