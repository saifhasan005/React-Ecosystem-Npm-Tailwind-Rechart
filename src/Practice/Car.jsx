import React from 'react';

const Car = ({car}) => {
    return (
        <div>
            {car.products.map(product => (
                <div key={product.id}>
                    <h2>{product.title}</h2>
                    {/* <h2>{product.price}</h2> */}
                </div>
            ))}
        </div>
    );
};

export default Car;