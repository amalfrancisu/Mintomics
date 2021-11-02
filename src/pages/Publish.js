import {useReducer, useContext, useEffect} from 'react';
import classNames from 'classnames';
import {Link} from 'react-router-dom';

import FlowContext from '../context/Flow.jsx';

import React from 'react'

function reducer(state, action) {
    switch (action.type) {
      case 'setPicture': {
        return {
          ...state,
          picture: action.payload
        };
      }
      case 'startLoading': {
        return {
          ...state,
          message: null,
          isLoading: true
        };
      }
      case 'stopLoading': {
        return {
          ...state,
          isLoading: false
        };
      }
      case 'setMessage': {
        return {
          ...state,
          message: action.payload,
          isLoading: false
        };
      }
      default:
        return state;
    }
  }
  

function Publish(props) {

    const [state, dispatch] = useReducer(reducer, {
        // picture: new Picture(window.sessionStorage.getItem('drawingPicture') || '0000000000000000000000000'),
        message: null,
        isLoading: false
      });

    const flow = useContext(FlowContext);

    const onCreateCollection = async () => {
        if (!state.isLoading) {
          dispatch({type: 'startLoading'});
          try {
            const response = await flow.createCollection();
            if (response.statusCode === 0) {
              await flow.fetchCollection1();
              dispatch({type: 'stopLoading'});
            }
          } catch (error) {
            dispatch({
              type: 'setMessage',
              payload: {
                type: 'warning',
                contents: error.toString().replace('Error: ', '')
              }
            });
          }
        }
      };

      if (flow.state.collection === null) {
        return (
          <div>
            <h5 className="title is-5">Draw a Picture</h5>
            <p className="block">
              Before you can start drawing, please create a Picture Collection.
            </p>
            {state.message &&
              <div
                className={classNames({
                  'notification': true,
                  'is-warning': state.message.type === 'warning',
                  'is-success': state.message.type === 'success'
                })}
              >
                {state.message.contents}
              </div>
            }
            <div className="control block">
              <button
                className={classNames({
                  'button is-primary': true,
                  'is-loading': state.isLoading
                })}
                onClick={onCreateCollection}
              >
                Create Collection
              </button>
            </div>
          </div>
        );
      } 
    else {

    return (
        <div>
                <div className="no-bottom no-top" id="content">
                    <div id="top"></div>
                    
                    {/* <!-- section begin --> */}
                    <section id="subheader" className="text-light" style={{backgroundColor : "black"}} data-bgimage="url(assets/images/background/subheader.jpg) top">
                            <div className="center-y relative text-center">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12 text-center">
                                            <h1>Publish</h1>
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>
                                </div>
                            </div>
                    </section>
                    {/* <!-- section close --> */}
                    

                    {/* <!-- section begin --> */}
                    <section aria-label="section">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="spacer30"></div>
                                   
                                    <div className="tab-content" id="pills-tabContent">
                                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                            <div className="container">
                                            <div className="row">
                                                    <div className="col-md-10">
                                                        <button className="btn btn-dark btnfloat" style={{float: "right"}}><i className="fa fa-fw" aria-hidden="true" title="Copy to use plus-square"></i><a href="createSeries.html" style={{color:"white"}}>Series<span></span></a></button>
                                                        <h2>Select the Series</h2>
                                                        <div className="spacer-single"></div>
                
                                                        <ul className="activity-list">
                                                            <li >
                                                                <img src="assets/images/items/thumbnail-7.jpg" alt=""/>
                                                                <div className="act_list_text">
                                                                    <h4>Cute Astronout</h4>
                                                                    Number of episode : 2 
                                                                    <button className="btn btn-light btnfloat" style={{float: "right"}}><i className="fa fa-fw" aria-hidden="true" title="Copy to use plus-square"></i><a href="create.html">Episode<span></span></a></button>
                                                                    <span className="act_list_date">
                                                                        Published : 10/07/2021, 12:40, Minted : 10/08/2021, 2:40
                                                                    </span>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                            <p></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <!-- section close --> */}

                </div>
        </div>
    )
    }
}

export default Publish
