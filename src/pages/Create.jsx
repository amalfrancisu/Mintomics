import {useReducer, useContext, useEffect} from 'react';
import classNames from 'classnames';
import {Link} from 'react-router-dom';
import fs from 'fs'
// import fs from 'promise-fs';
import { NFTStorage, Blob } from 'nft.storage'

import FlowContext from '../context/Flow.jsx';
import React, { useState } from "react";
import { authorization } from '@onflow/fcl';

// import React from 'react'


const endpoint = 'https://api.nft.storage' // the default
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDFGMTkwQTREMTY4ZDk0YzRCQTYzNTVkYzk2OTgwREJiYWRDNzc4MkQiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTYzNTU4NzE2MTc0OCwibmFtZSI6ImhlbGxvIn0.SKqssKcS4I6b5rovurGGWItVL10Lc6ezDilY8REbvb8' // your API key from https://nft.storage/manage

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
  


function Create() {

    const [state, dispatch] = useReducer(reducer, {
        // picture: new Picture(window.sessionStorage.getItem('drawingPicture') || '0000000000000000000000000'),
        message: null,
        isLoading: false
      });

    const [selectedFile, setSelectedFile] = useState(null);
    const [description, setDescription] = useState('');
    const [title, setTitle] = useState('');
    const [genre, setGenre] = useState('');
    
    
    const flow = useContext(FlowContext);

    const onCreateCollection = async () => {
        if (!state.isLoading) {
          dispatch({type: 'startLoading'});
          try {
            console.log("going to creating collection")
            const response = await flow.createCollection();
            // console.log("before state of collection : "+ flow.collection.toString)
            console.log("created collection")
            if (response.statusCode === 0) {
              await flow.fetchCollection1();
              dispatch({type: 'stopLoading'});
              console.log("created properly ig")
              // console.log("This is collection : "+ flow.state.collection)
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

      const onMinting = async (ipfsValue) => {
        if (!state.isLoading) {
          console.log("Reached not state is loading in onMinting")
          dispatch({type: 'startLoading'});
          try {
            // const response = await flow.printPicture(state.picture);
            const response = await flow.mintComic(ipfsValue);
            console.log("Response after minting is :" )
    
            // if (response === null) {
            //   return dispatch({
            //     type: 'setMessage',
            //     payload: {
            //       type: 'warning',
            //       contents: <p><code>print.cdc</code> not yet implemented using <code>fcl.send</code>.</p>
            //     }
            //   });
            // }
    
            // const didSucceed = response.events.find((event) => event.type.endsWith(`${process.env.REACT_APP_ARTIST_CONTRACT_NAME}.PicturePrintSuccess`));
            // const didFail = response.events.find((event) => event.type.endsWith(`${process.env.REACT_APP_ARTIST_CONTRACT_NAME}.PicturePrintFailure`));
            // if (didSucceed) {
            //   dispatch({
            //     type: 'setMessage',
            //     payload: {
            //       type: 'success',
            //       contents: <p>Awesome! This Picture (<span className="tag is-family-monospace">{state.picture.pixels}</span>) was added to your <Link to="/">collection</Link>.</p>
            //     }
            //   });
            // } else if (didFail) {
            //   dispatch({
            //     type: 'setMessage',
            //     payload: {
            //       type: 'warning',
            //       contents: <p>Oops! This Picture (<span className="tag is-family-monospace">{state.picture.pixels}</span>) already exists. Try drawing something else.</p>
            //     }
            //   });
            // } else {
    
            // }
            // if (response.statusCode === 0) {
            //   await flow.fetchCollection();
            //   dispatch({type: 'stopLoading'});
            // }
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

      const handleSubmit = async () => {

        const storage = new NFTStorage({ endpoint, token })
        const cid = await storage.storeBlob(new Blob([selectedFile]))
        console.log({ cid })
        const ipfsd = { cid }
        console.log("This is the ipfs key:" + Object.values(ipfsd)[0])
        const ipfsValue = Object.values(ipfsd)[0]
        const status = await storage.status(cid)
        console.log("Going to call onMinting")
        onMinting(ipfsValue)
        // console.log(status.pin)
        // console.log(description)

      }
    
    if (flow.state.collection === null){
        return (
            <div>
            <section id="subheader" className="text-light" style={{backgroundColor : "black"}} data-bgimage="url(assets/images/background/subheader.jpg) top">
                <div className="center-y relative text-center">
                    <div className="container">
                        <div className="row">

                            <div className="col-md-12 text-center">
                                <h1>Add Comic</h1>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                </div>
            </section>
            <br/><br/><br/>
            <div style={{margin: "auto"}}  className="container">
              <h5 className="title is-5">Create Collection</h5>
              <p className="block">
                Before you create a comic, please create a Collection.
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
                <button className="btn-main"
                  className={classNames({
                    'button is-primary': true,
                    'is-loading': state.isLoading,
                  })}
                  onClick={onCreateCollection}
                >
                  Create Collection
                </button>
                </div>
              </div>
              <br/><br/><br/>
            
            </div>
          );
    }
    else
    {
    return (
        <div>
                <div className="no-bottom no-top" id="content">
            <div id="top"></div>

            <section id="subheader" className="text-light" style={{backgroundColor : "black"}} data-bgimage="url(assets/images/background/subheader.jpg) top">
                <div className="center-y relative text-center">
                    <div className="container">
                        <div className="row">

                            <div className="col-md-12 text-center">
                                <h1>Add Comic</h1>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                </div>
            </section>


            <section aria-label="section">

                <div className="container">
                    <form id="form-create-item" className="form-border" method="post" >
                        <div className="row fadeIn">
                            <div className="col-lg-7 offset-lg-1">

                                <div className="field-set">

                                    <h3>Title</h3>
                                    <input type="text" name="item_title" id="item_title" className="form-control"
                                        placeholder="e.g. 'Naruto'" onChange={event => setTitle(event.target.value)} />

                                    <div className="spacer-10"></div>
                                    <div className="spacer-10"></div>


                                    <h3 className="page-header">Upload Comic</h3>

                                    {/* <div className="form-group">
                                        <label for="photo" className="col-sm-2 control-label">Upload</label>
                                        <div className="col-sm-10">
                                            <input type="file" className="form-control" name="photo" id="photo"
                                                accept=".png, .jpg, .jpeg" onchange="readFile(this);" multiple />
                                        </div>
                                    </div>

                                    <div id="status"></div>
                                    <div id="photos" className="row"></div> */}
                                    <input type="file" name="file" onChange={(e) => setSelectedFile(e.target.files[0])} className="formcontrol" placeholder="Add the Comic" />


                                    <div className="spacer-single"></div>

                                    <h5>Genre</h5>
                                    <input type="text" name="item_title" id="item_title" className="form-control"
                                        placeholder="e.g. 'Superhero'" onChange={event => setGenre(event.target.value)} />
                                    <div className="spacer-single"></div>
                                    <div className="spacer-10"></div>

                                    {/* <div className="de_tab_content">

                                        <div id="tab_opt_1">
                                            <h5>Mint Price</h5>
                                            <input type="number" name="item_price" id="item_price" className="form-control"
                                                placeholder="enter price for one item (Flow)" />
                                        </div>

                                        <div id="tab_opt_2">
                                            <h5>Minimum bid</h5>
                                            <input type="text" name="item_price_bid" id="item_price_bid"
                                                className="form-control" placeholder="enter minimum bid" />

                                            <div className="spacer-10"></div>

                                            <div className="row">
                                                <div className="col-md-6">
                                                    <h5>Starting date</h5>
                                                    <input type="date" name="bid_starting_date" id="bid_starting_date"
                                                        className="form-control" min="1997-01-01" />
                                                </div>
                                                <div className="col-md-6">
                                                    <h5>Expiration date</h5>
                                                    <input type="date" name="bid_expiration_date"
                                                        id="bid_expiration_date" className="form-control" />
                                                </div>
                                                <div className="spacer-single"></div>
                                            </div>
                                        </div>

                                        <div id="tab_opt_3">
                                        </div>

                                    </div> */}
                                        <h5>Description</h5>
                                        <textarea rows="4" cols="50" data-autoresize name="item_desc" id="item_desc"
                                            className="form-control" placeholder=" Less than 1000 characters" onChange={event => setDescription(event.target.value)}></textarea>
                                        <div className="spacer-single"></div>
                                        <div className="spacer-10"></div>


                                
                                
                                </div>



                                {/* <h3>Mint Price</h3>
                                <input type="number" name="mint_price" id="mint_price" className="form-control"
                                    placeholder="Price in Flow" />

                                <div className="spacer-10"></div>


                                <h3>Number of Tokens</h3>
                                <input type="number" name="token_no" id="token_no" className="form-control"
                                    placeholder="eg. 1,10,100" />

                                <div className="spacer-single"></div> */}

                                <input type="button" id="submit" onClick={handleSubmit} className="btn-main" value="Create Item"/> 
                            </div>


                        {/* <div className="col-lg-3 col-sm-6 col-xs-12">
                            <h5>Upload thumbnail</h5>
                            <div className="nft__item">

                                    <input accept="image/*" type='file' id="imgInp" />
                                    <img id="blah" className="nft__item_wrap" src="#" alt="your image" />

                            </div>

                        </div> */}

                    </div>


                    </form>
                        </div>
                    </section>

                </div>            
        </div>
    )
    }
}

export default Create
