// import styles from './style.module.scss';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown'
import Moment from "react-moment";

const icons = ["/static/images/icon/flash.svg",
    "/static/images/icon/mail-icon.svg",
    "/static/images/icon/mail-time.svg",
    "/static/images/icon/share.svg"
]

const Article = ({ featured }) => {
    return (
        <div className="article d-md-flex">
            <div className="article-content">
                <h2 className="article-heading">{featured.Title}</h2>
                <div className="content">
                    <ReactMarkdown source={featured.Description} />
                </div>
                {featured.ReadMoreArticle && <Link href={`/guides/${featured.ReadMoreArticle.slug}`}>
                    <a className="article-footer" title="Home Page">Read more</a>
                </Link>}
            </div>
            {/* <div className="featured-article">
                <div><b>Published On:</b></div>
                <Moment format="DD MMMM, YYYY" parse="YYYY-MM-DD"> {blog.date}</Moment>
            </div> */}
            <div className="featured-article">
                <h3 className="featured-heading">Featured Article</h3>
                <ul className="list-unstyled">
                    {featured.Articles && featured.Articles.map((e, index) => {
                        return (<Link href={`/guides/${e.slug}`}>
                            <li className="item-tile">
                                <img title="title icon" alt="icon" className="icon" src={icons[index % icons.length]} />
                                <p className="item-text">{e.title}</p>
                                <img title="icon right" alt = "arrow right" className="icon-right" src="/static/images/icon/arrow-right.svg" />
                            </li>
                        </Link>)
                    })}
                </ul>
            </div>
        </div >
    );
};

export default Article;