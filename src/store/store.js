import React, { useState } from "react";

const Warenkorb = React.createContext({
  waren: [],
  onAddtoCart: () => {},
  onRemoveCart: () => {},
  onRemoveAll: () => {},
});

export const WarenkorbProvider = (props) => {
  const [waren, setWarenkorb] = useState([]);

  const addTodo = (item) => {
    const newitems = [...waren, item];
    setWarenkorb(newitems);
  };

  const removeItem = (index) => {
    const newitems = [...waren];
    newitems.splice(index, 1);
    setWarenkorb(newitems);
  };

  const removeAll = () => {
    const emptyarr = [];
    setWarenkorb(emptyarr);
  };

  return (
    <Warenkorb.Provider
      value={{
        waren: waren,
        onAddtoCart: addTodo,
        onRemoveCart: removeItem,
        onRemoveAll: removeAll,
      }}
    >
      {props.children}
    </Warenkorb.Provider>
  );
};

export default Warenkorb;
