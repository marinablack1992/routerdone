import React from 'react';
import {Switch, Route} from 'react-router-dom';
import App from './App.js'

export default(
    <Switch>
    <Route exact path ='/' render={() => <div>Home</div>}/>
    </Switch>
)