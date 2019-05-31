import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './App.css'

import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from '../src/pages/home/home';
import ServiceDetail from './pages/service_detail/service_detail';
import OrderDetail from '../src/pages/order_detail/order_detail';
import ReviewList from '../src/pages/review_list/review_list'
import AbleList from '../src/pages/able_list/able_list'

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/service_detail" component={ServiceDetail} />
            <Route path="/order_detail" component={OrderDetail} />
            <Route path="/review_list" component={ReviewList} />
            <Route path="/able_list" component={AbleList} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
