import "@/styles/globals.css";

import "semantic-ui-css/semantic.min.css";

import React, { createContext } from "react";
import CartStore from "../store/cartStore";
export const Context = createContext(null);

export default function App({ Component, pageProps }) {
  return (
    <Context.Provider
      value={{
        cart: new CartStore(),
      }}
    >
      <div>
        <Component {...pageProps} />
      </div>
    </Context.Provider>
  );
}
