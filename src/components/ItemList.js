import React, { useEffect, useState } from 'react';
import Item from './Item'
import ItemCount from './ItemCount';

function ItemList() {
    let objAux = [
        {id: 1,
        nombre: "Samsung Galaxy S21 Ultra",
        marca: "Samsung",
        color: "ultra silver",
        modelo: "Galaxy S22 Ultra",
        ram: 8,
        memoriaInterna: 128,
        android: "12.1.1",
        iOs: null,
        windows: null,
        mac: null,
        customOs: null,
        garantia: ["1, 3, 6 o 12"],
        precio: 130000,
        stock: 100,
        origen: "Nacional",
        compania: "Liberado",
        url: "https://carrefourar.vtexassets.com/arquivos/ids/199854-1600-auto?v=637535960583000000&width=1600&height=auto&aspect=true"
    },
    {id: 2,
        nombre: "Samsung Galaxy S21 Ultra",
        marca: "Samsung",
        color: "ultra silver",
        modelo: "Galaxy S22 Ultra",
        ram: 10,
        memoriaInterna: 256,
        android: "12.1.1",
        iOs: null,
        windows: null,
        mac: null,
        customOs: null,
        garantia: [1,3,6,12,24],
        precio: 160000,
        stock: 100,
        origen: "Nacional",
        compania: "Liberado",
        url: "https://carrefourar.vtexassets.com/arquivos/ids/199854-1600-auto?v=637535960583000000&width=1600&height=auto&aspect=true"
    },
    {id: 3,
        nombre: "iPhone 13 Pro Max",
        marca: "Apple",
        color: "Blanco",
        modelo: "13 Pro Max",
        ram: 6,
        memoriaInterna: 256,
        android: null,
        iOs: "15.3.1",
        windows: null,
        mac: null,
        customOs: null,
        garantia: ["1, 3, 6 o 12"],
        precio: 180000,
        stock: 100,
        origen: "Importado",
        compania: "Liberado",
        url: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-silver-select?wid=940&hei=1112&fmt=png-alpha&.v=1631652956000"
    },
    {id: 4,
        nombre: "iPhone 13 Pro Max",
        marca: "Apple",
        color: "Azul",
        modelo: "13 Pro Max",
        ram: 6,
        memoriaInterna: 512,
        android: null,
        iOs: "15.3.1",
        windows: null,
        mac: null,
        customOs: null,
        garantia: ["1, 3, 6 o 12"],
        precio: 220000,
        stock: 100,
        origen: "Importado",
        compania: "Liberado",
        url: "https://http2.mlstatic.com/D_NQ_NP_649602-MLA47778541962_102021-O.webp"
    },
    {id: 5,
        nombre: "Xiaomi Redmi Note 10 5G",
        marca: "Azul",
        color: "Rojo",
        modelo: "Redmi Note 10 5G",
        ram: 4,
        memoriaInterna: 128,
        android: "12.1.1",
        iOs: null,
        windows: null,
        mac: null,
        customOs: "MIUI 12",
        garantia: ["1, 3, 6 o 12"],
        precio: 220000,
        stock: 100,
        origen: "Importado",
        compania: "Liberado",
        url: "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-note10-5g-0.jpg"
    },
    {id: 6,
        nombre: "Xiaomi Redmi Note 11 Pro 5G",
        marca: "Xiaomi",
        color: "Azul",
        modelo: "Redmi Note 11 Pro 5G",
        ram: 6,
        memoriaInterna: 128,
        android: "12.1.1",
        iOs: null,
        windows: null,
        mac: null,
        customOs: "MIUI 12",
        garantia: ["1, 3, 6 o 12"],
        precio: 220000,
        stock: 100,
        origen: "Importado",
        compania: "Liberado",
        url: "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-note-11-pro-5g-global-1.jpg"
    }]
    const [productos, setProductos] = useState([]);

    useEffect( () => {
        setProductos([]);
        setTimeout(() =>
        {
          setProductos([...objAux])
          console.log(productos);
        }, 3000)
    },[])

    return ( 
        <div>
{productos.map( (p)=> 
        <>
            <Item producto={p}/>
            <ItemCount producto= {p} />
        </>
            )}
        </div>
            
     );
}

export default ItemList;
    