import React from 'react';
import './shop.style.scss';

import { Route, Switch } from 'react-router-dom';

import CollectionOverview from '../../Component/collection-overview/collection-overview.component';
import CollectionPage from '../category/collection.component';

const Shop = ({ match }) =>{
console.log(match);
return(

    <div className="shop-page">
        <Switch>
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
        </Switch>
    </div>
)};

export default Shop;