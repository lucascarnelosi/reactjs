import "./App.css";
import React from "react";

import { Card } from "./components/layout/Card";

import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import ComFilhos from "./components/basicos/ComFilhos";
import Repeticao from "./components/basicos/Repeticao";
import Conditional from "./components/basicos/Condicional";
import CondicionalcomIf from "./components/basicos/CondicionalcomIf";
import Pai from "./components/comunicacao/direta/Pai";
import Super from "./components/comunicacao/indireta/Super";
import Input from "./components/form/input";
import Contador from "./components/contador/Contador";
import Mega from "./components/mega/Mega";

export const App = () => {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>

      <div className="Cards">
        <Card titulo="#01 - Primeiro Componente" color="#001133" className="Card">
          <Primeiro />
        </Card>
        <Card titulo="#02 - Componente com Parâmetro" color="#229956" className="Card">
          <ComParametro titulo="Esse é o título" subtitulo="Esse é o subtítulo" />
        </Card>
        <Card titulo="#03 - Componente com Filhos" color="#249020" className="Card">
          <ComFilhos>
            <ul className="UList">
              <li>Ana</li>
              <li>Beatriz</li>
              <li>Carlos</li>
              <li>Daniel</li>
            </ul>
          </ComFilhos>
        </Card>
        <Card titulo="#04 - Repetição" color="#CA1789" className="Card">
          <Repeticao></Repeticao>
        </Card>
        <Card titulo="#05 - Condicional v1" color="#A97391" className="Card">
          <Conditional numero={11}></Conditional>
        </Card>
        <Card titulo="#06 - Condicional v2" color="#991310" className="Card">
          <CondicionalcomIf numero={10}></CondicionalcomIf>
        </Card>
        <Card titulo="#07 - Comunicação Direta" color="#DE8943" className="Card">
          <Pai sobrenome="Freitas" />
        </Card>
        <Card titulo="#08 - Comunicação Indireta" color="#FF5500" className="Card">
          <Super />
        </Card>
        <Card titulo="#09 - Input" color="#9CF45F" className="Card">
          <Input />
        </Card>
        <Card titulo="#10 - Contador" color="#F90A03" className="Card">
          <Contador passo={10} valor={100} />
        </Card>
        <Card titulo="#11 - Mega" color="#014499" className="Card">
          <Mega qtdeNumero={8} />
        </Card>
      </div>
    </div>
  );
};
