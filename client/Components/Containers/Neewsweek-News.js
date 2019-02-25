import React, { Component } from 'react';
import { Link } from 'react-router';
import ListComponent from '../presentational/List-presentation.js';
import neewsweek_data from '../../../data/newsweek.json';

class Neewsweek extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: neewsweek_data
        }
    }

    get news() {
      return this.state.data.map((item, index) => {
        return  <ListComponent key={index} messages={item} id={index} path={`Neewsweek/`}/>
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

export default Neewsweek;
