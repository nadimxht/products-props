import React from 'react';
import { Products } from './Products'; 
import Card from './components/Card';

export default function App() {
  return (
    <div className='container-fluid mt-5'>
        <div className='row '>
        {
            Products.productList.map(e=>(
               <Card element={e}  />
            ))
        }
        </div>
        
    </div>
  )
}
