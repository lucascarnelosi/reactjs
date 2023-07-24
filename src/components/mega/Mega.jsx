import React, { useState } from "react";

export default (props) => {
    const [number, setNumber] = useState(Array(props.qtdeNumero).fill(0))

    function gerarNumerosNaoContido(array) {
        const min = 1
        const max = 60
        const newNumber = parseInt(Math.random() * (max - min)) + min
        return array.includes(newNumber) 
            ? gerarNumerosNaoContido(array) : newNumber
    }

    function gerarNumeros() {
        const novoArray = Array(props.qtdeNumero)
            .fill(0)
            .reduce(a => {
                const novoNumero = gerarNumerosNaoContido(a)
                return [...a, novoNumero]
            }, [])
            .sort((a, b) => a - b)
        setNumber(novoArray)
    }

    return (
        <>
            <h3>Mega</h3>
            <h4>{number.join(' ')}</h4>
            <button onClick={gerarNumeros}>Gerar Número</button>
        </>
    )
}