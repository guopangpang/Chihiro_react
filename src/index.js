import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './App.css'

import { BrowserRouter, HashRouter, Route, Switch} from 'react-router-dom';

import Home from '../src/pages/home/home';
import Question from '../src/pages/question/question'
import ServiceDetail from './pages/service_detail/service_detail';
import OrderDetail from '../src/pages/order_detail/order_detail';
import ReviewList from '../src/pages/review_list/review_list'
import AbleList from '../src/pages/able_list/able_list'
import My from '../src/pages/my/my'
import AddAble from '../src/pages/add_able/add_able'
import OrderList from '../src/pages/order_list/order_list'

//gh-pages对BrowserRouter无法兼容

ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route path="/" exact={true} strict  name={'首页'} component={Home} />
            <Route path="/question" name={'问题'} component={Question} />
            <Route path="/order_detail" name={'详情'} component={OrderDetail} />
            <Route path="/review_list" component={ReviewList} />
            <Route path="/able_list" component={AbleList} />
            <Route path="/service_detail" component={ServiceDetail} />
            <Route path="/my" component={My} />
            <Route path="/add_able" component={AddAble} />
            <Route path="/order_list" component={OrderList} />
        </Switch>
    </HashRouter>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
