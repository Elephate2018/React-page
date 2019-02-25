import React, { Component } from 'react';
import { Link } from 'react-router';
import ListComponent from '../presentational/List-presentation.js';
import nbc_data from '../../../data/nbc-news.json';

class NBCNews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: nbc_data
        }
    }

    get news() {
      return this.state.data.map((item, index) => {
        return  <ListComponent key={index} messages={item} id={index} path={`NBC_News/`}/>
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

export default NBCNews;
