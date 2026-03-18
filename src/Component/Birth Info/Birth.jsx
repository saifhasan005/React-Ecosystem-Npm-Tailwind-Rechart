import React from 'react';
import { CartesianGrid, Tooltip, Legend, Line, LineChart, XAxis, YAxis, ResponsiveContainer } from 'recharts';
const birthInfo = [
  {
    "id": 1,
    "name": "Rahul Ahmed",
    "birthYear": 2003,
    "birthPlace": "Dhaka, Bangladesh",
    "gender": "Male",
    "bloodGroup": "A+"
  },
  {
    "id": 2,
    "name": "Priya Sharma",
    "birthYear": 2007,
    "birthPlace": "Chittagong, Bangladesh",
    "gender": "Female",
    "bloodGroup": "B+"
  },
  {
    "id": 3,
    "name": "Karim Hossain",
    "birthYear": 2005,
    "birthPlace": "Sylhet, Bangladesh",
    "gender": "Male",
    "bloodGroup": "O+"
  },
  {
    "id": 4,
    "name": "Sadia Islam",
    "birthYear": 2004,
    "birthPlace": "Rajshahi, Bangladesh",
    "gender": "Female",
    "bloodGroup": "AB+"
  },
  {
    "id": 5,
    "name": "Tanvir Hassan",
    "birthYear": 2006,
    "birthPlace": "Khulna, Bangladesh",
    "gender": "Male",
    "bloodGroup": "A-"
  },
  {
    "id": 6,
    "name": "Nusrat Jahan",
    "birthYear": 2008,
    "birthPlace": "Barisal, Bangladesh",
    "gender": "Female",
    "bloodGroup": "O-"
  },
  {
    "id": 7,
    "name": "Arif Khan",
    "birthYear": 2003,
    "birthPlace": "Comilla, Bangladesh",
    "gender": "Male",
    "bloodGroup": "B-"
  },
  {
    "id": 8,
    "name": "Mim Akter",
    "birthYear": 2006,
    "birthPlace": "Mymensingh, Bangladesh",
    "gender": "Female",
    "bloodGroup": "AB-"
  },
  {
    "id": 9,
    "name": "Sabbir Rahman",
    "birthYear": 2005,
    "birthPlace": "Rangpur, Bangladesh",
    "gender": "Male",
    "bloodGroup": "A+"
  },
  {
    "id": 10,
    "name": "Tania Begum",
    "birthYear": 2007,
    "birthPlace": "Jessore, Bangladesh",
    "gender": "Female",
    "bloodGroup": "B+"
  }
]
const Birth = () => {
    return (
        <div>
            <ResponsiveContainer width="80%" height={400}>
                <LineChart data={birthInfo}>
                    <CartesianGrid strokeDasharray="3 3"/>
                          <XAxis dataKey='name'/>
                          <YAxis/>
                          <Tooltip/>
                          <Legend/>
                          <Line dataKey='birthPlace' stroke='red'></Line>  
                          <Line dataKey='gender' stroke='green'></Line>  
                          <Line dataKey='bloodGroup' stroke='blue'></Line>  
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Birth;