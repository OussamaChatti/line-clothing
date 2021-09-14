import React from 'react';

import CollectionPreview from '../../components/preview-collection/preview-collection.jsx';

import SHOP_DATA from './shop.data.js';

import './shop.scss'

class ShopPage extends React.Component{
 constructor(){
  super()
  this.state={
   collection : SHOP_DATA
  }
 }
 render(){
  return (
      <div className='shop-page'>
        {this.state.collection.map( ({id, ...other}) => (<CollectionPreview key ={id} {...other}/>))}
      </div>
);
 }
}
export default ShopPage;
