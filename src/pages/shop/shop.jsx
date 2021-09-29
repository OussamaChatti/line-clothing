import React from 'react';
import { Route } from 'react-router-dom';
import {connect} from 'react-redux';

import CollectionsOverview from '../../components/collection-overview/collection-overview';
import CollectionPage from '../collection/collection';
import WithSpinner from '../../components/spinner/spinner';

import {firestore,convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';

import {updateCollections} from '../../redux/shop/shop.actions';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  state= {
    isLoading : true
  };

  unsubscribeFromSnapshot = null;

  componentDidMount(){
    const {updateCollections} = this.props;
    const collectionRef = firestore.collection('collections');

    collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({isLoading:false});
    })
  }

  render()  {
    const {match} = this.props;

    return(
      <div className='shop-page'>
         <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={this.state.isLoading} {...props} />} />
         <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={this.state.isLoading} {...props} />} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections : collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null,mapDispatchToProps)(ShopPage);