import React from 'react';
import {use} from 'react'; 
import Data from './Data'
const Practice = ({PracticeApi}) => {
    const ApiData = use(PracticeApi)
    // console.log(ApiData);
    return (
        <div className='grid max-w-[1200px] mx-auto sm:grid-cols-2 lg:grid-cols-3  gap-8'>
            {
                ApiData.products.map(product => (
                    <Data key={product.id} apidata={product} />
                ))
            }
        </div>
    );
};

export default Practice;