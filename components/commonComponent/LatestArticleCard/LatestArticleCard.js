import styles from './article.module.scss';
import Moment from "react-moment";
import Link from 'next/link';

const LatestArticleCard = (props) => {
    return (
        <Link href={props.href}>
            <div className={styles.articleCard}>
                <img className={styles.image} src={props.image || "https://res.cloudinary.com/mailmodo/image/upload/v1631275106/strapi/Default_Image_a1d16f8d39.png"} title="article image" alt="article" />
                <div className={styles.articleDetail}>
                    {/*<label className={styles.date}>
                        <Moment format="DD-MM-YYYY" parse="YYYY-MM-DD"> {props.date}</Moment>
    </label>*/}
                    <h3 className={styles.title}>{props.title}</h3>
                    <img className={styles.arrowRignt} title="mailmodo-arrow-right icon" alt="mailmodo-arrow-right" src="/static/images/icon/arrow-right.svg" />
                </div>
            </div>
        </Link>

    );
};

export default LatestArticleCard;