import React from "react";
import { ItemCount } from "./ItemCount";

export const ItemListContainer = () =>  {
  return (
    <div className="container ">
      Lista de Componentes
      <ItemCount stock="6" initial="1" />
    </div>
  );
}