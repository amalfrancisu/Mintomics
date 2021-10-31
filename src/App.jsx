// import React from 'react'
// import Home from './pages/Home'
// import Footer from './components/Footer'
// import Header from './components/Header'
// import Create from './pages/Create'
// import Collection from './pages/Collection'
// import Publish from './pages/Publish'
// import ItemDetails from './pages/ItemDetails'
// import CreateSeries from './pages/CreateSeries'
// import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
// import User from './components/Footer/User'

// import FlowContext, {Provider as FlowContextProvider} from './context/Flow.jsx';


// const App = () => {
//   return (
//     <div>
//       <Router>
//         <Header/>
//             <Switch>
//               <Route exact path ='/' component={Home}/>
//               <Route path ='/itemdetails' component={ItemDetails}/>
//               <Route path ='/publish' component={Publish}/>
//               <Route path ='/collection' component={Collection}/>
//               <Route path ='/create' component={Create}/>
//               <Route path ='/createseries' component={CreateSeries}/>
//             </Switch>
//             <Footer/>
//         </Router>
//     </div>
//   )
// }

// export default App

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
// import Draw from './pages/Draw';
// import Trade from './pages/Trade';
import Account from './pages/Account';
import Create from './pages/Create'
import CreateSeries from './pages/CreateSeries'

import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import Navigation from './components/Navigation.jsx';
import Publish from './pages/Publish'
// import Publish1 from './pages/Publish1'

// import './App.css';
// import User from './components/Footer/User.jsx';
// import Collection from './pages/Home/Collection.jsx';
// import Collection from './pages/Collection'

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
