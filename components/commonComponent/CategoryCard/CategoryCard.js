import React from 'react';
import Link from 'next/link';
import styles from '../../../assets/guides-slug.module.scss'
const CategoryCard = ({ related }) => {
    return (related && related.length > 0 &&
        <div className={styles.category_card}>
            <h3>Related Articles</h3>
            <div className={styles.category_card_inner_wrapper}>
                <ul className="list-unstyled">
                    {related.map(blog => {
                        return <li>
                            <Link href={`/guides/${encodeURIComponent(blog.slug)}`}>
                                <a>{blog.title}</a>
                            </Link>
                        </li>
                    })
                    }

                </ul>
            </div>
        </div>
    );
};

export default CategoryCard;