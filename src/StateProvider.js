import {createContext, useContext, useReducer } from "react";
/* createContext acepta un valor por defecto p.e 
export  const StateContext = createContext({usuarios: [], titulos: ''});
StateContext sera como una capa que envuelve a los componentes que siempre tendran a la mano
cambios mas actuales del estado, todo esto gracias justamente a createContext */
export  const StateContext = createContext();

/**
 * StateProvider va a proveer la herramienta para pasar esos datos de un componente
 * a otro
 */
export const StateProvider = ({reducer, initialState, children}) => (
    //con la propiedad value se esta sobrescribiendo el valor por defecto
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);
/**
 * useStateValue nos va a permitir consumir desde cualquier componente, los cambios
 * de estado de initialState 
 */
export const useStateValue = () => useContext( StateContext );
