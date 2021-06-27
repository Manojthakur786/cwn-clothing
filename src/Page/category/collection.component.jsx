import React from 'react';

import collectionItemComponent from '../../Component/collection-item/collection-item.component';
import { connect } from 'react-redux';

import { selectCollection } from '../../redux/shop/shop.selector';
import { Route } from 'react-router-dom';


import './collection.style.scss';
const CollectionPage=({match})=>{
    console.log(match);
    return(
    <div className='category'>
        <h2>CATEGORY PAGE</h2>
    </div>
)};
const mapStateToProps=(state,ownProps)=>({
    collection:selectCollection(ownProps.match.params.collectionId)(state)
});
export default connect(mapStateToProps)(CollectionPage);