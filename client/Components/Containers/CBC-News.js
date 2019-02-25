import React, { Component } from 'react';
import { Link } from 'react-router';
import ListComponent from '../presentational/List-presentation.js';
import cbc_data from '../../../data/cbc-news.json';

class CBCNews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: cbc_data
        }
    }

    get news() {
      return this.state.data.map((item, index) => {
        return  <ListComponent key={index} messages={item} id={index} path={`CBC_News/`}/>
      });
    }

    render() {
        return (
            <div>
             {this.news}
          </div>
        )
    }
}

export default CBCNews;
