import React from 'react';
import CollectionItem from '../collection-item/CollectionItem'
import './Preview.scss';

const Preview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, i) => i < 4)
          .map(({id, ...itemProps}) => <CollectionItem key={id} {...itemProps} />
        )}
      </div>
    </div>
  );
};


export default Preview;