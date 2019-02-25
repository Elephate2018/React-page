import React from 'react';
import { Link } from 'react-router';

const ListComponent = (props) => (
  <article>
      <div>
        <Link to={props.path + props.messages.title.replace(/ /g, "_")}><span>- {props.messages.title}</span></Link>
        <p>{props.messages.description}</p>
      </div>
  </article>
)


export default ListComponent;
