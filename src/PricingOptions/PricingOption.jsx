import React from 'react';
import {use} from 'react';
import PricingCard from '../Component/Pricing card/PricingCard';
const PricingOption = ({pricingPromise}) => {
    const pricingData= use(pricingPromise);
    return (
        <div>
            <h2 className='text-5xl mb-[20px]'>Get Our Membership</h2>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    pricingData.map(price=><PricingCard key={price.id} price= {price}></PricingCard>)
                }
            </div>
        </div>
    );
};

export default PricingOption;