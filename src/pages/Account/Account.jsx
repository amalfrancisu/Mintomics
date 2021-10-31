import React, {useContext, useState, useEffect, useCallback} from 'react';
import {useParams} from 'react-router';

import FlowContext from '../../context/Flow.jsx';

import Collection from '../Home/Collection.jsx';

function Account(props) {
  const params = useParams();
  const [address, setAddress] = useState(null);
  const [collection, setCollection] = useState(undefined);
  const flow = useContext(FlowContext);

  const fetchCollection = useCallback(
    async (addresss) => {
      const collection = await flow.fetchCollection1(addresss);
      setCollection(collection);
    },
    [flow]
  );

  useEffect(() => {
    if (address !== params.address) {
      setAddress(params.address);
      setCollection(null);
      fetchCollection(params.address);
    }
  }, [address, params.address, fetchCollection]);

  return (
    <div>
    {/* <React.Fragment> */}
    <section id="subheader" className="text-light" style={{ backgroundColor : "black" }} data-bgimage="url(assets/images/background/subheader.jpg) top">
                            <div className="center-y relative text-center">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12 text-center">
                                            <h1>Account</h1>
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>
                                </div>
                            </div>
                  </section>


                  <br/><br/><br/>
      <div className="no-bottom no-top" id="content">
      <h2>
        Collection
      </h2>
      <div >
        <div>
          <span className="tag">Account : </span>
          <span className="tag is-info">{params.address}</span>
        </div>
      </div>
      <Collection
        collection={collection}
        noCollectionNotification={
          <div className="notification">
            This account doesn't have a Picture collection.
          </div>
        }
        emptyCollectionNotification={
          <div className="notification">
            This collection is empty.
          </div>
        }
      />
    {/* </React.Fragment> */}
    </div>
    <br/><br/><br/>
    </div>
  );
}

export default Account;