import React, { useState, useEffect } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList, ProductTitle, ProductPrice } from './styles';
import { api } from '../../services/api';
import { formatPrice } from '../../util/format';
import { useCart } from '../../hooks/useCart';
import spinner from '../../assets/images/spinner.png'
interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface ProductFormatted extends Product {
  priceFormatted: string;
}

interface CartItemsAmount {
  [key: number]: number;
}

const Home = (): JSX.Element => {
  const [products, setProducts] = useState<ProductFormatted[]>([]);
  const [loading, setLoading] = useState(true);
  const { addProduct, cart, buyCart } = useCart();
  buyCart()
  const cartItemsAmount = cart.reduce((sumAmount, product) => {
    sumAmount[product.id] = product.amount
    return sumAmount
  }, {} as CartItemsAmount)

  useEffect(() => {
    async function loadProducts() {
      setLoading(true);
      const response = await api.get('/products');
      const productsFormated = response.data.map(function (product: Product) {
        return { ...product, price: formatPrice(product.price) }
      })
      setProducts(productsFormated)
      setLoading(false);
    }

    loadProducts();
  }, []);

  function handleAddProduct(id: number) {
    addProduct(id)
  }

  return (
    <div className='center'>
      {loading ? (
        <>
          <div id='loading'>
            <img src={spinner} alt='' />
          </div>
        </>
      ) : (
        <ProductList>
          {products.map((product) => (
            <li key={product.id}>
              <img src={product.image} alt={product.title} />
              <ProductTitle>{product.title}</ProductTitle>
              <ProductPrice>{product.price}</ProductPrice>
              <button
                type="button"
                data-testid="add-product-button"
                onClick={() => handleAddProduct(product.id)}
              >
                <div data-testid="cart-product-quantity">
                  <MdAddShoppingCart size={16} color="#FFF" />
                  {cartItemsAmount[product.id] || 0}
                </div>

                <span id='add-product'>ADICIONAR AO CARRINHO</span>
              </button>
            </li>
          ))}
        </ProductList>
      )}
    </div>
  );
};

export default Home;