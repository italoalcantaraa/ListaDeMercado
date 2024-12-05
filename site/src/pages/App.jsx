import './App.css';

import Header from '../components/header';
import Product from '../components/product';
import { useEffect, useState } from 'react';

export default function App() {
  const [products, setProducts] = useState([{ name: '', quantity: 0 }]);
  const [quantity, setQuantity] = useState(products.length - 1);
  const [name, setName] = useState('');

  const add = () => {
    let newProducts;

    if (name != '') {
      newProducts = [...products, { name: name, quantity: 1 }];

      setProducts(newProducts);

      alterTotalQuantity();
      setName('');
    }

  }

  const addProductQuantity = (index) => {
    let newProducts = [...products];
    newProducts[index].quantity++;

    setProducts(newProducts);
  }

  const removeProductQuantity = (index) => {
    let newProducts = [...products];
    newProducts[index].quantity--;

    if (newProducts[index].quantity <= 0)
      newProducts.splice(index, 1);

    setProducts(newProducts);
  }

  useEffect(() => {
    alterTotalQuantity();
  }, [products])

  const alterTotalQuantity = () => {
    setQuantity(products.length - 1);
  }

  return (
    <div className="App">
      <Header />
      <div className='content'>
        <h1 id='title'>Lista de Mercado</h1>
        <section>
          <div>
            <input type="text" placeholder='Adicionar um item...'
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' ? add() : null} />
            <button onClick={() => add()}>+</button>
          </div>
          <ul className='list'>
            {products.map((item, index) =>
              item.name != '' ?
                <Product
                  products={item}
                  index={index}
                  addProductQuantity={addProductQuantity}
                  removeProductQuantity={removeProductQuantity}
                /> : null
            )}

            <p id='quantity'>Total: {quantity}</p>
          </ul>
        </section>
      </div>
    </div>
  );
}