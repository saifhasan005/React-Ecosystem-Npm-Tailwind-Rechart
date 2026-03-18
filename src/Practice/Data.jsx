import React from 'react';
import { Star } from 'lucide-react';

const Data = ({ apidata }) => {
    const discountedPrice = (
        apidata.price - (apidata.price * apidata.discountPercentage / 100)
    ).toFixed(2);
    return (
        <div className='border p-4'>
            <img src={apidata.thumbnail} alt="" />
            <p className='text-xl font-bold mb-[7px]'>Regular Price :  ${apidata.price}</p>
            <p className='text-xl font-bold mb-[7px]'>Discount Price : <span className='text-green-400'>${discountedPrice}</span> </p>
            <p className='mb-[7px]'><span className='font-semibold text-xl'>Brand Name:</span> <span className='border rounded-full py-1 px-2 bg-green-400 text-black font-bold'>{apidata.brand}</span></p>
            <p><span className='flex  gap-1 text-[18px] mb-[7px]'><Star />{apidata.rating}</span></p>
            <h3 className='text-2xl font-semibold mb-[7px]'>{apidata.title}</h3>
            <p className='text-fuchsia-300'>{apidata.description}</p>
        </div>
    );
};

export default Data;