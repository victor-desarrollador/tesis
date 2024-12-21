import Layout from "../../components/Layout";
import { useState } from "react";
import axios from "axios";

export default function NewProduct() {

    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [price,setPrice] = useState('');

    async function CreateProduct(ev){
        ev.preventDefault();
        const data = {title,description,price};
        await axios.post('/api/products', data);
    }

    return (
        <Layout>
            <form onSubmit={CreateProduct}>
            <h1 >Nuevo Producto</h1>
            <label>Nombre del producto </label>
            <input
            type="text"
            placeholder="Nombre del producto"
            value={title}
            onChange={ev => setTitle(ev.target.value)}/>
            <label>Descripcion</label>
            <textarea
            placeholder="Descripcion"
            value={description}
            onChange={ev => setDescription(ev.target.value)}/>
            <label>Precio</label>
            <input type="nember"
            placeholder="Precio"
            value={price}
            onChange={ev => setPrice(ev.target.value)}/>
            <button type="submit" className="btm-primary">Guardar</button>
            </form>
        </Layout>
    );
}