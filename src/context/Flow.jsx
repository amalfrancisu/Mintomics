import React, {useReducer, useEffect, useCallback} from 'react';
import * as fcl from "@blocto/fcl";

import * as FlowTypes from '@onflow/types';


import Picture from '../model/Picture.js';
import { Route } from 'react-router';
import Authenticate from '../pages/Authenticate/Authenticate.jsx';
import { Link } from 'react-router-dom';

const Context = React.createContext({});

const constants = {
  flowFormat: new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 4
  })
};

function reducer(state, action) {
  switch (action.type) {
    case 'setUser': {
      return {
        ...state,
        user: action.payload
      };
    }
    // case 'setBalance': {
    //   return {
    //     ...state,
    //     balance: action.payload
    //   };
    // }
    case 'setCollection': {
      if (action.payload) {
        return {
          ...state,
          collection: action.payload
        };
      } else {
        return {
          ...state,
          collection: action.payload
        };
      }
    }
    default:
      return state;
  }
}

function Provider(props) {
  const [state, dispatch] = useReducer(reducer, {
    user: null,
    // balance: null,
    collection: null
  });

  const isReady = (
    // state.balance !== null &&
    state.collection !== null
  );

  // const fetchBalance = useCallback(
  //   async () => {
  //     if (state.user.addr && state.user.addr !== '0xLocalArtist') {
  //       // A sample script execution.
  //       // Query for the account's FLOW token balance.
  //       const balance = await fcl.send([
  //         fcl.script`
  //           import FungibleToken from 0x9a0766d93b6608b7
  //           import FlowToken from 0x7e60df042a9c0868
  
  //           pub fun main(address: Address): UFix64 {
  //             let vaultRef = getAccount(address)
  //               .getCapability(/public/flowTokenBalance)
  //               .borrow<&FlowToken.Vault{FungibleToken.Balance}>()
  //               ?? panic("Could not borrow Balance reference to the Vault");
  
  //             return vaultRef.balance;
  //           }
  //         `,
  //         fcl.args([
  //           fcl.arg(state.user.addr, FlowTypes.Address)
  //         ])
  //       ]).then(fcl.decode);

  //       dispatch({type: 'setBalance', payload: balance});
  //     } else {
  //       return dispatch({type: 'setBalance', payload: -42});
  //     }
  //   },
  //   [state.user]
  // );
 
  const createCollection = useCallback(
    async () => {
      const transactionId = await fcl.send([
        fcl.transaction`
        prepare(acct: AuthAccount) {

          // Return early if the account already has a collection
          if acct.borrow<&SimpleNFTContract.Collection>(from: /storage/NFTCollection) != nil {
              return
          }
  
          // Create a new empty collection
          let collection <- SimpleNFTContract.createEmptyCollection()
  
          // save it to the account
          acct.save(<-collection, to: /storage/NFTCollection)
  
          // create a public capability for the collection
          acct.link<&{SimpleNFTContract.SimpleNFTCollectionPublic, NonFungibleToken.CollectionPublic}>(
              /public/NFTCollection,
              target: /storage/NFTCollection
          )
  
          let collectionRef = acct.getCapability<&{SimpleNFTContract.SimpleNFTCollectionPublic, NonFungibleToken.CollectionPublic}>(/public/NFTCollection)
          assert(collectionRef.borrow() != nil, message: "Missing or mis-typed Collection")
      }
  }
        `,
        fcl.payer(fcl.authz),
        fcl.proposer(fcl.authz),
        fcl.authorizations([fcl.authz]),
        fcl.limit(9999)
      ]).then(fcl.decode);
      
      return fcl.tx(transactionId).onceSealed();
    },
    []
  );
  const destroyCollection = useCallback(
    async () => {
      const transactionId = await fcl.send([
        fcl.transaction`
          import LocalArtist from 0x7c3f941bf95de19b

          transaction() {
            prepare(account: AuthAccount) {
              account.unlink(/public/LocalArtistPictureReceiver)
              let collection <- account.load<@LocalArtist.Collection>(from: /storage/LocalArtistPictureCollection)
              destroy collection
            }
          }
        `,
        fcl.payer(fcl.authz),
        fcl.proposer(fcl.authz),
        fcl.authorizations([fcl.authz]),
        fcl.limit(9999)
      ]).then(fcl.decode);

      return fcl.tx(transactionId).onceSealed();
    },
    []
  );

  const fetchCollection1 = useCallback(
    async (address) => {
      if (address || state.user.addr) {
        try {
          let args = null;
          if (address) {
            // eslint-disable-next-line
            args = fcl.args([
              fcl.arg(address, FlowTypes.Address)
            ]);
          } else {
            // eslint-disable-next-line
            args = fcl.args([
              fcl.arg(state.user.addr, FlowTypes.Address)
            ]);
          }
          console.log("It reached fetch")
          
          const collection = await fcl.send([
            fcl.script`
            import NonFungibleToken from 0x631e88ae7f1d7c20
      
              pub fun main(account: Address): [UInt64] {
                // Get the public collection of the owner of the token
                let collectionRef = getAccount(account)
                    .getCapability(/public/NFTCollection)
                    .borrow<&{NonFungibleToken.CollectionPublic}>()
                    ?? panic("Could not borrow capability from public collection")
            
                // Borrow a reference to a specific NFT in the collection
                let nfts = collectionRef.getIDs()
            
                return nfts
            }
            `,
            args
          ]).then(fcl.decode);
          console.log("Collection : " + collection)
          if (address) {
            return collection;
          } else {
            console.log("reached dispatch")
            dispatch({type: 'setCollection', payload: collection});
          }
        } catch (error) {
          console.log("failed and catched")
          if (address) {
            return null;
          } else {
            dispatch({type: 'setCollection', payload: null});
          }
        }
      }
    },
    [state.user]
  );


  const fetchCollection = useCallback(
    async (address) => {
      console.log("It is fetching")
      if (address || state.user.addr) {
        try {
          let args = null;
          if (address) {
            // eslint-disable-next-line
            args = fcl.args([
              fcl.arg(address, FlowTypes.Address)
            ]);
          } else {
            // eslint-disable-next-line
            args = fcl.args([
              fcl.arg(state.user.addr, FlowTypes.Address)
            ]);
          }
          
          const collection = await fcl.send([
            fcl.script`
              import LocalArtist from 0x7c3f941bf95de19b
      
              pub fun main(address: Address): [LocalArtist.Canvas] {
                let account = getAccount(address)
                let pictureReceiverRef = account
                  .getCapability<&{LocalArtist.PictureReceiver}>(/public/LocalArtistPictureReceiver)
                  .borrow()
                  ?? panic("Couldn't borrow picture receiver reference.")
              
                return pictureReceiverRef.getCanvases()
              }
            `,
            args
          ]).then(fcl.decode);
          const mappedCollection = collection.map(
            (serialized) => new Picture(
              serialized.pixels,
              serialized.width,
              serialized.height
            )
          );

          if (address) {
            return mappedCollection;
          } else {
            dispatch({type: 'setCollection', payload: mappedCollection});
          }
        } catch (error) {
          if (address) {
            return null;
          } else {
            dispatch({type: 'setCollection', payload: null});
          }
        }
      }
    },
    [state.user]
  );


  const mintComic = useCallback(
    async (ipfsValue) => {
      console.log("Inside mintComic")
      const transactionId = await fcl.send([
        fcl.transaction`
        import SimpleNFTContract from 0x2b5c95910413da9a
        import NonFungibleToken from 0x631e88ae7f1d7c20

        transaction(recipient: Address, ipfsHash: String) {

          // The reference to the Minter resource stored in account storage
          let minterRef: &SimpleNFTContract.NFTMinter
      
          prepare(acct: AuthAccount) {
              // borrow a reference to the NFTMinter resource in storage
              self.minterRef = acct.borrow<&SimpleNFTContract.NFTMinter>(from: /storage/NFTMinter)
                  ?? panic("Could not borrow a reference to the NFT minter")
              // Borrow the recipient's public NFT collection reference
              let receiver = getAccount(recipient)
                  .getCapability(/public/NFTCollection)
                  .borrow<&{NonFungibleToken.CollectionPublic}>()
                  ?? panic("Could not get receiver reference to the NFT Collection")
      
              // Mint the NFT and deposit it to the recipient's collection
              self.minterRef.mintNFT(recipient: receiver, ipfsHash: ipfsHash)
          }
      
          execute {
      
          }
      }
        `,
        fcl.args([
          // fcl.arg(picture.width, FlowTypes.Int),
          // fcl.arg(picture.height, FlowTypes.Int),
          // fcl.arg(picture.pixels, FlowTypes.String)
          fcl.arg(state.user.addr, FlowTypes.Address),
          fcl.arg(ipfsValue, FlowTypes.String)
        ]),
        fcl.payer(fcl.authz),
        fcl.proposer(fcl.authz),
        fcl.authorizations([fcl.authz]),
        fcl.limit(9999)
      ]).then(fcl.decode);
      
      return fcl.tx(transactionId).onceSealed();
    },
    []
  );
  const printPicture = useCallback(
    async (picture) => {
      const transactionId = await fcl.send([
        fcl.transaction`
          import LocalArtist from 0x7c3f941bf95de19b

          transaction(width: Int, height: Int, pixels: String) {
            
            let picture: @LocalArtist.Picture?
            let collectionRef: &{LocalArtist.PictureReceiver}

            prepare(account: AuthAccount) {
              // TODO: Change to your contract account address.
              let printerRef = getAccount(0x7c3f941bf95de19b)
                .getCapability<&LocalArtist.Printer>(/public/LocalArtistPicturePrinter)
                .borrow()
                ?? panic("Couldn't borrow printer reference.")
                
              self.picture <- printerRef.print(
                width: width,
                height: height,
                pixels: pixels
              )
              self.collectionRef = account
                .getCapability<&{LocalArtist.PictureReceiver}>(/public/LocalArtistPictureReceiver)
                .borrow()
                ?? panic("Couldn't borrow picture receiver reference.")
            }
            execute {
              if self.picture == nil {
                destroy self.picture
              } else {
                self.collectionRef.deposit(picture: <- self.picture!)
              }
            }
          }
        `,
        fcl.args([
          fcl.arg(picture.width, FlowTypes.Int),
          fcl.arg(picture.height, FlowTypes.Int),
          fcl.arg(picture.pixels, FlowTypes.String)
        ]),
        fcl.payer(fcl.authz),
        fcl.proposer(fcl.authz),
        fcl.authorizations([fcl.authz]),
        fcl.limit(9999)
      ]).then(fcl.decode);
      
      return fcl.tx(transactionId).onceSealed();
    },
    []
  );
  const fetchListings = useCallback(
    async () => {
      const listings = await fcl.send([
        fcl.script`
          import LocalArtistMarket from 0x7c3f941bf95de19b
  
          pub fun main(): [LocalArtistMarket.Listing] {
            let account = getAccount(0x7c3f941bf95de19b)
            let marketInterfaceRef = account
              .getCapability(/public/LocalArtistMarket)
              .borrow<&{LocalArtistMarket.MarketInterface}>()
              ?? panic("Couldn't borrow market interface reference.")
          
            return marketInterfaceRef.getListings()
          }
        `
      ]).then(fcl.decode);

      return listings;
    },
    []
  );
  const postListing = useCallback(
    async (picture, price) => {
      const transactionId = await fcl.send([
        fcl.transaction`
          import LocalArtist from 0x7c3f941bf95de19b
          import LocalArtistMarket from 0x7c3f941bf95de19b

          transaction(pixels: String, price: UFix64) {
            
            let picture: @LocalArtist.Picture?
            let seller: Address
            let marketRef: &{LocalArtistMarket.MarketInterface}

            prepare(account: AuthAccount) {
              // TODO: Change to your contract account address.
              self.marketRef = getAccount(0x7c3f941bf95de19b)
                .getCapability(/public/LocalArtistMarket)
                .borrow<&{LocalArtistMarket.MarketInterface}>()
                ?? panic("Couldn't borrow market reference.")
              
              let collection <- account.load<@LocalArtist.Collection>(from: /storage/LocalArtistPictureCollection)!
              self.picture <- collection.withdraw(pixels: pixels)
              account.save<@LocalArtist.Collection>(<- collection, to: /storage/LocalArtistPictureCollection)

              self.seller = account.address
            }
            execute {
              if self.picture == nil {
                destroy self.picture
              } else {
                self.marketRef.sell(picture: <- self.picture!, seller: self.seller, price: price)
              }
            }
          }
        `,
        fcl.args([
          fcl.arg(picture.pixels, FlowTypes.String),
          fcl.arg(`${constants.flowFormat.format(price)}`, FlowTypes.UFix64),
        ]),
        fcl.payer(fcl.authz),
        fcl.proposer(fcl.authz),
        fcl.authorizations([fcl.authz]),
        fcl.limit(9999)
      ]).then(fcl.decode);
      
      return fcl.tx(transactionId).onceSealed();
    },
    []
  );
  const withdrawListing = useCallback(
    async (listingIndex) => {
      const transactionId = await fcl.send([
        fcl.transaction`
          import LocalArtist from 0x7c3f941bf95de19b
          import LocalArtistMarket from 0x7c3f941bf95de19b

          // TODO: Complete this transaction by calling LocalArtistMarket.withdraw().
          transaction(listingIndex: Int) {
          }
        `,
        fcl.args([
          fcl.arg(listingIndex, FlowTypes.Int)
        ]),
        fcl.payer(fcl.authz),
        fcl.proposer(fcl.authz),
        fcl.authorizations([fcl.authz]),
        fcl.limit(9999)
      ]).then(fcl.decode);
      
      return fcl.tx(transactionId).onceSealed();
    },
    []
  );
  const buy = useCallback(
    async (listingIndex) => {
      const transactionId = await fcl.send([
        fcl.transaction`
          import LocalArtist from 0x7c3f941bf95de19b
          import LocalArtistMarket from 0x7c3f941bf95de19b
          import FungibleToken from 0x9a0766d93b6608b7
          import FlowToken from 0x7e60df042a9c0868

          // TODO: Complete this transaction by calling LocalArtistMarket.buy().
          transaction(listingIndex: Int) {
          }
        `,
        fcl.args([
          fcl.arg(listingIndex, FlowTypes.Int)
        ]),
        fcl.payer(fcl.authz),
        fcl.proposer(fcl.authz),
        fcl.authorizations([fcl.authz]),
        fcl.limit(9999)
      ]).then(fcl.decode);
      
      return fcl.tx(transactionId).onceSealed();
    },
    []
  );

  const setUser = (user) => {
    dispatch({type: 'setUser', payload: user});
  };
  const logIn = () => {
    fcl.logIn();
  };
  const logOut = () => {
    fcl.unauthenticate();
  };

  useEffect(() => {
    fcl.currentUser().subscribe(setUser);
  }, []);

  useEffect(() => {
    if (state.user && state.user.addr) {
      // fetchBalance();
      fetchCollection1();
    }
  }, [state.user, fetchCollection1]);

  return (
    <Context.Provider
      value={{
        state,
        isReady,
        dispatch,
        logIn,
        logOut,
        // fetchBalance,
        fetchCollection,
        createCollection,
        destroyCollection,
        // printPicture,
        fetchListings,
        postListing,
        withdrawListing,
        buy,
        fetchCollection1,
        mintComic
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export {
  Context as default,
  Provider
};