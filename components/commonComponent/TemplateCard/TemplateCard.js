import React from 'react';

import Link from "next/link";

const TemplateCard = (props) => {
    return (
        <Link href={`/template/${props.templateId}`}>
            <div className="template-card">
                <img title={props.caption} className="avtar" src={props.imgUrl} alt={props.alt} />
                <h3 className="title">{props.caption}</h3>
            </div>
        </Link>
    );
};

export default TemplateCard;