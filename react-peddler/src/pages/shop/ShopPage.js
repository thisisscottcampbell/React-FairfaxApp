import React, { useState } from 'react';
import Shop_Data from '../../ShopData';
import Preview from '../../components/preview/Preview'


const ShopPage = props => {
  const [collections, setCollections] = useState(Shop_Data);

  console.log(collections);

  return (

    <div className='shop-page'>
      {
        collections.map(({id, ...collections}) => <Preview key={id} {...collections} /> )
      }
    </div>
  );
};


export default ShopPage;