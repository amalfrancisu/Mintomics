import {useContext, useEffect} from 'react';
import {useHistory} from 'react-router-dom';

import FlowContext from '../context/Flow.jsx';
import Publish from './Publish.js';

function Publish1(props) {
    // const flow = useContext(FlowContext);
    // const history = useHistory();
  
    // useEffect(() => {
    //   if (flow.state.user && flow.state.user.loggedIn) {
    //     history.push('/');
    //     // <Home />
    //   }
    // }, [flow.state.user, history]);
  
    return (
      <>
        <Publish/>
      </>
    );
  }
  
  export default Publish1;
