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
            const prevItem = cart.find(i => i.id === productToAdd.id)
            const newCartWithoutNewItem = cart.filter(i => i !== prevItem)
            const newQty = prevItem.qty + qty;
            const newItem = {...prevItem, qty: newQty}
            const newCart = [...newCartWithoutNewItem, newItem]
            setCart(newCart)

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
        const prevItem = cart.find(i => i.id === id)
        const newCartWithoutNewItem = cart.filter(i => i !== prevItem)
        const newQty = prevItem.qty + 1;
        const newItem = {...prevItem, qty: newQty}
        const newCart = [...newCartWithoutNewItem, newItem]
        setCart(newCart)
    }

    
    const substractOne = (id) => {
        const prevItem = cart.find(i => i.id === id)
        const newCartWithoutNewItem = cart.filter(i => i !== prevItem)
        const newQty = prevItem.qty - 1;
        const newItem = {...prevItem, qty: newQty}

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
        for (let i = 0; i < cart.length; i++) {
            sum = sum + (cart[i].qty * cart[i].price);
        }
        return sum;
    }
    const clearCart = () => {
        setCart([]);
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
            clearCart
            }}>
            {children}
        </Context.Provider>
    )
}

export default Context