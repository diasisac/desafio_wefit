import {
  MdDelete,
  MdAddCircleOutline,
  MdRemoveCircleOutline,
} from 'react-icons/md';

import { useCart } from '../../hooks/useCart';
import { formatPrice } from '../../util/format';
import { Container, ProductTable, Total } from './styles';
import buyfinished from '../../assets/images/buyfinished.svg'
import cartempty from '../../assets/images/cartempty.svg'
import { useHistory } from "react-router-dom";
interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  amount: number;
}

const Cart = (): JSX.Element => {
  const { cart, buy, removeProduct, updateProductAmount, clearCart } = useCart();

  const cartFormatted = cart.map(product => ({
    ...product, priceFormatted: formatPrice(product.price), subtotal: formatPrice(product.price * product.amount)
  }))
  const total =
    formatPrice(
      cartFormatted.reduce((sumTotal, product) => {
        sumTotal += product.price * product.amount

        return sumTotal
      }, 0)
    )

    const history = useHistory();

    const handleClick = () => {
        history.push("/");
    }

  function handleProductIncrement(product: Product) {
    const IncrementArguments = {
      productId: product.id,
      amount: product.amount + 1
    }
    updateProductAmount(IncrementArguments)
  }

  function handleProductDecrement(product: Product) {
    const IncrementArguments = {
      productId: product.id,
      amount: product.amount - 1
    }
    updateProductAmount(IncrementArguments)
  }

  function handleRemoveProduct(productId: number) {
    removeProduct(productId)
  }

  return (
    
    buy ?
    <div className='center'> 
    <Container>
      <strong className='strong-buyfineshed-cartempty'>Compra realizada com sucesso!</strong>
      <img className='img-buyfineshed-cartempty' src={buyfinished} alt='compra realizada com sucesso!'/>
      <button id='voltar' type="button" onClick={handleClick} >Voltar</button>
    </Container>
    </div>
    : 
    cartFormatted.length === 0 ?
    <div className='center'>
    <Container>
    <strong className='strong-buyfineshed-cartempty'>Parece que não há nada por aqui :(</strong>
    <img className='img-buyfineshed-cartempty' src={cartempty} alt='compra realizada com sucesso!'/>
    <button id='voltar' type="button" onClick={handleClick} >Voltar</button>
  </Container>
  </div>
      :
      <div className='center'>
      <Container>
        <ProductTable>
          <thead>
            <tr>
              <th aria-label="product image" />
              <th className='mobile-hidden'>PRODUTO</th>
              <th className='mobile-hidden'>QTD</th>
              <th className='mobile-hidden'>SUBTOTAL</th>
              <th aria-label="delete icon" />
            </tr>
          </thead>
          <tbody>
            {cartFormatted.map(product => (
              <tr data-testid="product" key={product.id} >
                <td className='mobile-image'>
                  <img src={product.image} alt={product.title} />
                </td>
                <td className='mobile-config'>
                  <strong>{product.title}</strong>
                  <div className='screen-hidden'>
                    <button
                      type="button"
                      id='decrement-product'
                      data-testid="decrement-product"
                      disabled={product.amount <= 1}
                      onClick={() => handleProductDecrement(product)}
                    >
                      <MdRemoveCircleOutline size={20} />
                    </button>
                    <input
                      type="text"
                      data-testid="product-amount"
                      readOnly
                      value={product.amount} 
                    />
                    <button
                      type="button"
                      data-testid="increment-product"
                      onClick={() => handleProductIncrement(product)}
                    >
                      <MdAddCircleOutline size={20} />
                    </button>
                  </div>
                  <span className='mobile-hidden'>{product.priceFormatted}</span>
                </td>
                <td className='mobile-hidden'>
                  <div>
                    <button
                      type="button"
                      data-testid="decrement-product"
                      disabled={product.amount <= 1}
                      onClick={() => handleProductDecrement(product)}
                    >
                      <MdRemoveCircleOutline size={20} />
                    </button>
                    <input
                      type="text"
                      data-testid="product-amount"
                      readOnly
                      value={product.amount}
                    />
                    <button
                      type="button"
                      data-testid="increment-product"
                      onClick={() => handleProductIncrement(product)}
                    >
                      <MdAddCircleOutline size={20} />
                    </button>
                  </div>
                </td>
                <td className='mobile-hidden'>
                  <strong>{product.subtotal}</strong>
                </td>
                <td className='mobile-hidden'>
                  <button
                    type="button"
                    data-testid="remove-product"
                    onClick={() => handleRemoveProduct(product.id)}
                  >
                    <MdDelete size={20} />
                  </button>
                </td>
                <td className='mobile-subtotal screen-hidden'>
                  <strong className='subtotal-value'>
                  {product.subtotal}
                  </strong>
                  <strong id="subtotal">SUBTOTAL</strong>
                  <strong className='subtotal-value'>
                  {product.subtotal}
                  </strong>
                  <span id='button-remove'>
                  <button
                    type="button"
                    data-testid="remove-product"
                    onClick={() => handleRemoveProduct(product.id)}
                  >
                    <MdDelete size={20} />
                  </button>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </ProductTable>

        <footer>
            <button className='mobile-hidden' type="button" onClick={() => clearCart()}>Finalizar pedido</button>

            <Total className='mobile-hidden'>
              <span>TOTAL</span>
              <strong>{total}</strong>
            </Total>
            <div id='total' className='screen-hidden'>
            <Total className='screen-hidden'>
              <span>TOTAL</span>
              <strong>{total}</strong>
            </Total>
            <button id='orderFinished' className='screen-hidden' type="button" onClick={() => clearCart()}>Finalizar pedido</button>
            </div>
        </footer>
      </Container>
      </div>
  );
};

export default Cart;
