import React from 'react';
import { CircleCheck  } from 'lucide-react';

const PricingCard = ({price}) => {
    return (
        <div className='border bg-amber-600 rounded-2xl p-[20px] flex flex-col'>
            <div>
                <h1 className="text-3xl">{price.name}</h1>
                <h4 className='text-2xl'>{price.price}</h4>
                <p>{price.description}</p>
            </div>
            <div className='bg-yellow-500 flex-1 rounded-2xl p-5 mt-[20px]'>
                <p className='font-bold text-black text-2xl'>Gym Features: </p>
                 {price.features.map((feature, index) => (
                    <p key={index} className='flex items-center gap-2 mt-1'>
                        <CircleCheck /> {feature}
                    </p>
                ))}
            </div>
            <button className='btn btn-success mt-[10px] rounded-lg'>Subscribe</button>
        </div>
    );
};

export default PricingCard;