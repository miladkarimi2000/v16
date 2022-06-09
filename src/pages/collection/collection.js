import React from "react";
import { connect } from "react-redux";

import { selectCollection } from "../../redux/shop/shop.selectors";

import collectionItem from "../../components/collection-item/collection-item";

import './collection.scss';

const CollectionPage = ({ collection }) => {
    console.log(collection);
    return (
        <div className="collection-page">
            <h2>COLLECTION PAGE: {collection.title}</h2>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);