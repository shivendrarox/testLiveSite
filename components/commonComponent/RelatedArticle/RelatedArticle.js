import React from 'react';
import Link from 'next/link';

const RelatedArticle = ({featured}) => {
    return (featured && featured.length > 0 &&
        <div className="related-article">
            <h3 className="featured-heading">Featured Article</h3>
            <div className="related-article-wrapper">
                <ul className="list-unstyled">
                    {featured.map(blog => {
                        return <li className="item-tile">
                            <Link href={`/guides/${encodeURIComponent(blog.slug)}`}>
                            <a>
                             <img className="icon" title="mailmodo flash icon" alt="mailmodo-flash-icon" src="/static/images/icon/flash.svg" />
                                <p className="item-text">{blog.title}</p>
                            </a>                               
                            </Link>

                        </li>
                    })}
                </ul>
            </div>
        </div>
    );
};

export default RelatedArticle;