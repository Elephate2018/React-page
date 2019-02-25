import React, { Component } from 'react';
import { Link } from 'react-router';
import abc_data from '../../../data/abc-news.json';
import ListComponent from '../presentational/List-presentation.js';

class AbcNews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: abc_data
        }
    }

    get news() {
      return this.state.data.map((item, index) => {
        return  <ListComponent key={index} messages={item} id={index} path={`AbcNews/`}/>
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

export default AbcNews;
