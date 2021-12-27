import React, { useEffect, useState } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import Link from "next/link";

const TemplateFilter = (props) => {
  const { data: templateCategory } = props;
  const key = "title";

  return (
    <div className={`filter-popover ${props.showFilter ? "show" : ""}`}>
      {/**onsole.log(templateCategory)**/}
      <div className="filter-header d-flex align-items-center justify-content-between">
        <h5>
          <img
            src="/static/images/filter.svg"
            className="filter-icon"
            alt="filter"
            title="filter icon"
          />
          &nbsp; &nbsp;Filter Category
        </h5>
        <img
          src="/static/images/close.svg"
          alt="close"
          title="close icon"
          className="close"
          onClick={props.onClick}
        />
      </div>
      <Scrollbars
        universal
        autoHide
        style={{ height: "calc(100vh - 100px)", width: "100%" }}
      >
        <ul className="filter-item list-unstyled">
         <a href={`/email-templates/`}> <li onClick={props.clickFilterAll}>All</li> </a>
          {templateCategory.map((filterItem) => {
            return (
              <a className="item-detail" href={`/email-templates/categories/${filterItem.slug}/`}>{/**hotfix**/}
                <li onClick={() => props.clickFilter(filterItem.title)}>
                  {filterItem.title}
                </li>
              {/* END hotfix */}</a>
            );
          })}
        </ul>
      </Scrollbars>
    </div>
  );
};

export default TemplateFilter;
