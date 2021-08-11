import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Home';
import PlusPage from './PlusPage';
import NotFound from './NotFound';
import Components from './Components';

const App = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/dynamic" component={PlusPage} />
                    <Route exact path="/components" component={Components} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;