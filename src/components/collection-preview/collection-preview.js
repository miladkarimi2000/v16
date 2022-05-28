import React from 'react';
import './collection-preview.scss';

import CollectionItem from '../collection-item/collection-item';

const CollectionPreview = ({ title, items }) => {
    return (
        <div className='collection-preview'>
            <h1 className='title'>{title}</h1>
            <div className='preview'>
                {
                    items
                        .filter((item, index) => index < 4)
                        .map(({ id, ...restProps }) =>
                            <CollectionItem key={id} {...restProps} />
                        )
                }
            </div>
        </div>
    );
}

export default CollectionPreview;
