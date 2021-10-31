import React, {useContext} from 'react';
import {Link} from 'react-router-dom';

import FlowContext from '../../context/Flow.jsx';

 function User(props) {

    
    const flow = useContext(FlowContext);

    if (flow.state.user && flow.state.user.loggedIn) {
    return (
        <>
            <div className="menu_side_area">
                <button onClick={flow.logOut} className="btn-main"><span>Log Out</span></button>
                <span id="menu-btn"></span>
            </div>
            <span className="icon-text">
                {/* <svg className="icon" viewBox="0 0 24 24">
                <path fill="#000000" d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />
                </svg> */}
                <span>
                <Link to={`/account/${flow.state.user.addr}`}>
                    {flow.state.user.addr}
                </Link>
                </span>
            </span>
        </>
    )
    }
    else {
        return (
            <>
                <div className="menu_side_area">
                    <button onClick={flow.logIn} className="btn-main"><span>Authenticate</span></button>
                    <span id="menu-btn"></span>
                </div>
            </>
        )
    }
}

export default User
