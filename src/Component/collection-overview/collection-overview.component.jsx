import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionPreview from '../Collection-preview/Collection-preview';

import { selectCollections } from '../../redux/shop/shop.selector';

import './collection-overview.style.scss';

const CollectionOverview=({collections})=>(
    <div className='collections-overview'>
        {
            collections.map(({ id, ...othersCollectionProps }) => (
                <CollectionPreview key={id}{...othersCollectionProps} />
            ))
        }
        
    </div>
);
const mapStateToProps=createStructuredSelector({
    collections:selectCollections
});
export default connect(mapStateToProps)(CollectionOverview);