import { createContext, useState } from "react"

const Context = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const checkCount = () => {
        return cart.length
    }

    const addItem = (productToAdd, qty) => {

        const newObj = {
            ...productToAdd,
            qty: qty,
        }

        if(isInCart(productToAdd.id)) {
            // Guardamos en una variable el ID a cambiar
            const prevItem = cart.find(i => i.id === productToAdd.id)
            // Filtramos del carrito el producto
            const newCartWithoutNewItem = cart.filter(i => i !== prevItem)
            console.log(newCartWithoutNewItem);
            // Creamos el nuevo objeto sumando las cantidades
            const newQty = prevItem.qty + qty;
            const newItem = {...prevItem, qty: newQty}
            // Lo agregamos a Cart
            const newCart = [...newCartWithoutNewItem, newItem]
            setCart(newCart)
            console.log(cart);

        } else {
            setCart([...cart, newObj])
        }
    }

    const removeItem = (id) => {
        const newCart = cart.filter(i => i.id !== id);
        setCart(newCart)
    }

    const isInCart = (id) => {
        return cart.some(p => p.id === id)
    }

    return (
        <Context.Provider value={{
            cart,
            addItem,
            removeItem,
            checkCount
            }}>
            {children}
        </Context.Provider>
    )
}

export default Context