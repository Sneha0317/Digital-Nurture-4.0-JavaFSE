import React, { useState } from 'react';

function CurrencyConvertor() {
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const euroRate = 0.010; 
    const converted = parseFloat(amount) * euroRate;

    alert(`Converting to Euro Amount is ${converted.toFixed(2)}`);
  };

  return (
    <div>
      <h2 style={{ color: 'green' }}>Currency Convertor!!!</h2>
      <form onSubmit={handleSubmit}>
        <label>Amount:</label>
        <br />
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <br /><br />
        <label>Currency:</label>
        <br />
        <input type="text" value="Euro" readOnly />
        <br /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CurrencyConvertor;
