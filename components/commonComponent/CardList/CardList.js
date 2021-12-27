
import React from 'react';
import Link from "next/link";
import { getAllTemplateCategories, getAllTemplates, getTemplatesForCategory, getImageUrl } from '../../../lib/strapiApi'

const CardList = ({arr=[]}) => {
  let jsxVar=arr.map((template) => {
   return (<>
      {template.thumbnail && 
        <div className="card min-card-height">
          <div className="card-body">
            <Link className="item-detail" href={`/template/${template.slug}`}>
              <a title={template.title}>
                <img
                  src={getImageUrl((template.thumbnail.url))}
                  className="w-100 avtar"
                  alt={template.title}
                  title={template.title+" icon"}
                />
              </a>
            </Link>

            <div className="overlay">
               <div className="title"><h5 className="">{template.title}</h5></div>
               <div className="description" > <p >{template.description.slice(0, 80) + '...'}</p></div>
                <div className="btn-group">
                  <button className=" button-preview"  onClick={(e) => {e.preventDefault();window.location.href=`/template/${template.slug}`;}}>Preview</button>
                  <button className=" button-share" onClick={(e) => {e.preventDefault();window.location.href='mailto:support@mailmodo.com';}}><img title="Share template icon" alt="Share-template" src="/static/images/icon/Share-template.svg"></img> </button>
                </div>  
            </div>

          </div>
      </div>}
    </>)
  });

 

          return(
          <>
          {jsxVar}
          {  console.log(jsxVar)}
          </>
          );
}

export default CardList;