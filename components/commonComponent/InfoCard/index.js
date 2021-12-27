import Image from 'next/image'
import { getImageUrl } from '../../../lib/strapiApi';
const InfoCard = (props) => {
  return (
    <div className="card-container col-md-4">
      <div className={`info-card-${props.primaryColor}`}>
        <div className="img-container">
        <div style={{ position: 'relative', width: '102px', height: '92px' }}>
        <Image
          src={getImageUrl(props.imageSrc)}
          alt={`Picture of the ${props.personName}`}
          objectFit="contain"
          layout='fill'
        />
        </div>

          {/* <img src={props.imageSrc} alt={`mailmodo-image-${props.personName}`} /> */}
          <div className="info-text">
            {props.primaryTitle}
            <div>{props.secondaryTitle}</div>
          </div>
          <div className="info-name">{props.personName}</div>
          <div className="info-content">{props.content}</div>
          <hr />
          <div className="info-person-title">{props.jobTitle}</div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
