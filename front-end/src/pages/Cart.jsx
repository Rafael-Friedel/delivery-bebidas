import React, { useContext, useEffect } from 'react';

export default function Cart() {
  const { cart } = useContext(myContext);

  useEffect(() => {
  }, []);

  return (
    <ul>
      { cart.map((item) => (
        <li key={ item }>
          {item}
        </li>
      )) }
    </ul>
  );
}
