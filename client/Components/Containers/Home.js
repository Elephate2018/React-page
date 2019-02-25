import React, { Component } from 'react';
import { Link } from 'react-router';
import time_data from '../../../data/time.json';

import ListComponent from '../presentational/List-presentation.js';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: time_data
        }
    }

    get news() {
      return this.state.data.map((item, index) => {
        return  <ListComponent key={index} messages={item} id={index} path={`news/`}/>
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

export default Home;
