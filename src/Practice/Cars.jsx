import React from 'react';
import {use} from 'react';
import Car from './Car';
const Cars = ({CarApi}) => {
    const carData = use(CarApi);
    // console.log(carData);
    return (
        <div>
            {
                carData.carts.map(car=> <Car key={car.id} car={car}></Car>)
            }
        </div>
    );
};

export default Cars;