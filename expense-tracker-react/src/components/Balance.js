import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);
 
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  const h4Style = {
    fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
    color: 'Black', 
  };


  return (
    <>
       <h4 style={h4Style}>Your Balance</h4>
      <h4 style={h4Style}>₹{total}</h4>
    </>
  )
}

export default Balance
