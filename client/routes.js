import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Navigation from './Components/presentational/navigation.js';
import Home from './Components/Containers/Home.js';
import NotFound from './Components/presentational/not-found.component.js';
import AbcNews from './Components/Containers/ABC-News.js';
import BBCNews from './Components/Containers/BBC-News.js';
import CBCNews from './Components/Containers/CBC-News.js';
import MoneyNews from './Components/Containers/Money-News.js';
import SportNews from './Components/Containers/Sport-News.js';
import NBCNews from './Components/Containers/NBC-News.js';
import Neewsweek from './Components/Containers/Neewsweek-News.js';
import PolicyNews from './Components/Containers/Policy-News.js';
import USANews from './Components/Containers/USA-News.js';
import Detail from './Components/presentational/Details.js';

export default (
    <Route path="/" component={Navigation}>
        <IndexRoute component={Home} />
        <Route path="AbcNews" component={AbcNews} />
        <Route path="BBC_News" component={BBCNews} />
        <Route path="CBC_News" component={CBCNews} />
        <Route path="Money_News" component={MoneyNews} />
        <Route path="Sport" component={SportNews} />
        <Route path="NBC_News" component={NBCNews} />
        <Route path="Neewsweek" component={Neewsweek} />
        <Route path="Policy" component={PolicyNews} />
        <Route path="UsaToday" component={USANews} />
        <Route path="/:page/:title" component={Detail} />

        <Route path='*' component={NotFound} />
    </Route>
);
