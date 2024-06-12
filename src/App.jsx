import Navbar from './components/Navbar';
import { useState, useEffect } from 'react';
import './App.css';
import Card from './components/Card';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios('https://dummyjson.com/products')
      .then((res) => {
        console.log(res.data.products); // Log the correct path of products
        setData(res.data.products); // Set the products array to the state
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div>
        {data.map((item) => (
          <Card key={item.id} title={item.title} description={item.description} image={item.images[0]} />
        ))}
      </div>
    </>
  );
}

export default App;
