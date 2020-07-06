import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Signin from './containers/Signin/Signin';
import Signup from './containers/Signup/Signup';
import './App.css';

function App() {
    return (
        <div>
            <Switch>
                <Route path='/signin' exact component={Signin} />
                <Route path='/signup' exact component={Signup} />
                <Route path='/' exact render={() => <p>Welcome!</p>} />
                <Route path='/' render={() => <p>Error: Page not found!</p>} />
            </Switch>
        </div>
    );
}

export default App;
