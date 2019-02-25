import React, { Component } from 'react';
import { Link } from 'react-router';
import bbc_data from '../../../data/bbc-news.json';
import ListComponent from '../presentational/List-presentation.js';

class BBCNews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: bbc_data
        }
    }

    get news() {
      return this.state.data.map((item, index) => {
        return  <ListComponent key={index} messages={item} id={index} path={`BBC_News/`}/>
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

export default BBCNews;
