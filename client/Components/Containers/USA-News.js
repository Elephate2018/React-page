import React, { Component } from 'react';
import { Link } from 'react-router';
import usaToday_data from '../../../data/usa-today.json';
import ListComponent from '../presentational/List-presentation.js';

class UsaTodayNews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: usaToday_data
        }
    }

    get news() {
      return this.state.data.map((item, index) => {
        return  <ListComponent key={index} messages={item} id={index} path={`UsaToday/`}/>
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

export default UsaTodayNews;
