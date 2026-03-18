import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const lineData = [
  {
    "id": 1,
    "name": "Rahul Ahmed",
    "math": 85,
    "english": 78,
    "science": 90,
    "history": 72,
    "bangla": 88
  },
  {
    "id": 2,
    "name": "Priya Sharma",
    "math": 92,
    "english": 88,
    "science": 95,
    "history": 85,
    "bangla": 91
  },
  {
    "id": 3,
    "name": "Karim Hossain",
    "math": 65,
    "english": 70,
    "science": 60,
    "history": 75,
    "bangla": 68
  },
  {
    "id": 4,
    "name": "Sadia Islam",
    "math": 78,
    "english": 82,
    "science": 74,
    "history": 80,
    "bangla": 76
  },
  {
    "id": 5,
    "name": "Tanvir Hassan",
    "math": 55,
    "english": 60,
    "science": 58,
    "history": 62,
    "bangla": 50
  },
  {
    "id": 6,
    "name": "Nusrat Jahan",
    "math": 95,
    "english": 93,
    "science": 97,
    "history": 90,
    "bangla": 94
  },
  {
    "id": 7,
    "name": "Arif Khan",
    "math": 70,
    "english": 65,
    "science": 72,
    "history": 68,
    "bangla": 71
  },
  {
    "id": 8,
    "name": "Mim Akter",
    "math": 48,
    "english": 55,
    "science": 50,
    "history": 45,
    "bangla": 52
  },
  {
    "id": 9,
    "name": "Sabbir Rahman",
    "math": 83,
    "english": 79,
    "science": 86,
    "history": 77,
    "bangla": 81
  },
  {
    "id": 10,
    "name": "Tania Begum",
    "math": 60,
    "english": 68,
    "science": 63,
    "history": 70,
    "bangla": 65
  }
]

const Result = () => {
    return (
        <div>
            <ResponsiveContainer width="80%" height={400}>
            <LineChart data={lineData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line dataKey="math" stroke="red" />
                <Line dataKey="english" stroke="blue" />
                <Line dataKey="science" stroke="green" />
            </LineChart>
        </ResponsiveContainer>
        </div>
    );
};

export default Result;