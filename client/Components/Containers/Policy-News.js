import React, { Component } from 'react';
import { Link } from 'react-router';
import ListComponent from '../presentational/List-presentation.js';
import policy_data from '../../../data/politico.json';

class PolicyNews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: policy_data
        }
    }

    get news() {
      return this.state.data.map((item, index) => {
        return  <ListComponent key={index} messages={item} id={index} path={`Policy/`}/>
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

export default PolicyNews;
