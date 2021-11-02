import {useContext} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import FlowContext, {Provider as FlowContextProvider} from './context/Flow.jsx';

import Authenticate from './pages/Authenticate';
import Home from './pages/Home';
import Account from './pages/Account';
import Create from './pages/Create'
import CreateSeries from './pages/CreateSeries'

import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import Publish from './pages/Publish'

function PrivateRoute(props) {
  const flow = useContext(FlowContext);
  
  if (!flow.isReady) {
    if (flow.state.user && !flow.state.user.loggedIn) {
      return (
        <Redirect to="/authenticate" />
      );
    } else {
      return (
        <div className="notification">
          {/* Loading... */}
        </div>
      );
    }
  } else if (flow.state.user.loggedIn) {
    return (
      <Route {...props} />
      // <Redirect to="/"/>
    );
  } else {
    return (
      <Redirect to="/authenticate" />
    );
  }
};

function App() {
  return (
    <div id="App">
      <Header />
      {/* <Publish /> */}
      <Switch>
        <Route path="/public">
          <Redirect to="/" />
        </Route>

        <Route path="/account/:address">
          {/* <Body> */}
            <Account />
          {/* </Body> */}
        </Route>
        <Route path="/*">
        {/* <Switch> */}
        {/* <Route path="/*"> */}
          {/* <Navigation /> */}
            {/* <Body> */}
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/create">
                <Create />
              </Route>
              <Route path="/createseries">
                <CreateSeries />
              </Route>
              <Route path="/publish">
                <Publish />
              </Route>
              <Route path="/authenticate">
                <Authenticate />
              </Route>
            </Switch>
            {/* </Body> */}
          {/* </Route>
          </Switch> */}
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

function WrappedApp() {
  return (
    <FlowContextProvider>
      <Router>
        <App />
      </Router>
    </FlowContextProvider>
  );
}

export default WrappedApp;
