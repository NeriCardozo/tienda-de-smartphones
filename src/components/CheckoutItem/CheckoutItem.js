import React from 'react';

function CheckoutItem({product}) {
    return ( <>
    <li>
    {product.name}, {product.qty === 1 ? '1 unidad' : `${product.qty} unidades`}
    </li>
    </>
    )
}

export default CheckoutItem;