import React, { Component } from 'react';
import { Link } from 'react-router';
import ListComponent from '../presentational/List-presentation.js';
import sport_data from '../../../data/fox-sports.json';

class SportNews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: sport_data
        }
    }

    get news() {
      return this.state.data.map((item, index) => {
        return  <ListComponent key={index} messages={item} id={index} path={`Sport/`}/>
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

export default SportNews;
