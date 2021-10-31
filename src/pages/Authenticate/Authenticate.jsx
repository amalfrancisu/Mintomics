import {useContext, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import Footer from '../../components/Footer/Footer.js';
import Publish from '../Publish.js';

import FlowContext from '../../context/Flow.jsx';
import Home from '../Home/Home.js';

function Authenticate(props) {
  const flow = useContext(FlowContext);
  const history = useHistory();

  useEffect(() => {
    if (flow.state.user && flow.state.user.loggedIn) {
      history.push('/');
      // <Home />
    }
  }, [flow.state.user, history]);

  return (
    <>
      <Home/>
    </>
  );
}

export default Authenticate;