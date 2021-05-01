import React from 'react';
import './shop.style.scss';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../Component/Collection-preview/Collection-preview';
class Shop extends React.Component{
    constructor(props){
        super(props);
        this.state={
            'collections':SHOP_DATA
        }
    }
    render(){
        return(
            <div className="">
                {
                 this.state.collections.map(({id,...othersCollectionProps})=>(
                <CollectionPreview key={id}{...othersCollectionProps}/>
        ))
                }
            </div>
        )
    }
}
export default Shop;