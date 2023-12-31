import React from "react";

import products from "../../data/products";

export default props => {

    function getProdutosListItem() {
        return products.map(prod => {
            return <li key={prod.id}>
                {prod.id} - {prod.name} = R$ {prod.price}
            </li>
        })
    }

    return (
        <div>
            <h2>Repetição</h2>
            <ul style={{listStyle: "none"}}>
                {getProdutosListItem()}
            </ul>
        </div>
    )
}