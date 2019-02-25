
import React, { Component } from 'react';

import time_data from '../../../data/time.json';
import abc_data from '../../../data/abc-news.json';
import bbc_data from '../../../data/bbc-news.json';
import cbc_data from '../../../data/cbc-news.json';
import fortune_data from '../../../data/fortune.json';
import fox_sport_data from '../../../data/fox-sports.json';
import nbc_data from '../../../data/nbc-news.json';
import neewsweek from '../../../data/newsweek.json';
import politico from '../../../data/politico.json';
import usa_today from '../../../data/usa-today.json';

class Detail extends Component {
  constructor(props) {
      super(props);
      this.state = {
          data: []
      }
  }
    componentDidMount() {
      const { page, title } = this.props.params
      var datas;
      if(page == 'news') datas = time_data;
      if(page == 'AbcNews') datas = abc_data;
      if(page == 'BBC_News') datas = bbc_data;
      if(page == 'CBC_News') datas = cbc_data;
      if(page == 'Money_News') datas = fortune_data;
      if(page == 'Sport') datas = fox_sport_data;
      if(page == 'NBC_News') datas = nbc_data;
      if(page == 'Neewsweek') datas = neewsweek;
      if(page == 'Policy') datas = politico;
      if(page == 'UsaToday') datas = usa_today;

      const single = datas.filter(item => item.title.replace(/ /g, "_") == title)
      this.setState({data: single, test: datas})
    }


  render() {
    return (
      <div>
        {
          this.state.data.map((item, index) => {
            return (
              <section key={index}>
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
                <img className="card-img-top"src={item.urlToImage} alt="Card image cap" width="300px" height="400px" />
                <div className="card-body">
                  <p className="card-content">{item.content}</p>
                  <a href={`${item.url}`} target="_blank" >link to the article</a>
                  <p className="card-author">Author: {item.author}</p>
                </div>
              </section>
            )
          })
        }
      </div>
    )
  }
}


export default Detail;
