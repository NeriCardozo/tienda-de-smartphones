import { createContext, useState } from "react"

const Context = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);


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

    const removeItem = (id, qty) => {
        const newCart = cart.filter(i => i.id !== id);
        setCart(newCart);
    }

    const isInCart = (id) => {
        return cart.some(p => p.id === id)
    }



    const addOne = (id) => {
        // Guardamos en una variable el ID a cambiar
        const prevItem = cart.find(i => i.id === id)
        // Filtramos del carrito el producto
        const newCartWithoutNewItem = cart.filter(i => i !== prevItem)
        // Creamos el nuevo objeto sumando las cantidades
        const newQty = prevItem.qty + 1;
        const newItem = {...prevItem, qty: newQty}
        // Lo agregamos a Cart
        const newCart = [...newCartWithoutNewItem, newItem]
        setCart(newCart)
    }

    
    const substractOne = (id) => {
        // Guardamos en una variable el ID a cambiar
        const prevItem = cart.find(i => i.id === id)
        // Filtramos del carrito el producto
        const newCartWithoutNewItem = cart.filter(i => i !== prevItem)
        // Creamos el nuevo objeto sumando las cantidades
        const newQty = prevItem.qty - 1;
        const newItem = {...prevItem, qty: newQty}
        // Lo agregamos a Cart
        const newCart = [...newCartWithoutNewItem, newItem]
        setCart(newCart)
    }
    const getCount = () =>{
        let sum = 0;
        for (let i = 0; i < cart.length; i++) {
            sum = sum + cart[i].qty;
        }
        return sum;
    }
    
    const getTotalPrice =  () => {
        let sum = 0;
        console.log(cart)
        for (let i = 0; i < cart.length; i++) {
            sum = sum + (cart[i].qty * cart[i].precio);
        }
        return sum;
    }


    return (
        <Context.Provider value={{
            cart,
            addItem,
            removeItem,
            getCount,
            addOne,
            substractOne,
            getTotalPrice,
            }}>
            {children}
        </Context.Provider>
    )
}

export default Context