import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import "./CartCheckout.css";
import { getFirestore } from "../../firebase";
import Input from "../Input/Input";

const CartCheckout = () => {
    const { cart } = useContext(CartContext)

    const [datos, setDatos] = useState({
      nombre: '',
      apellido: '',
      phone: '',
      email: '',
      dni: ''
    });     

    const handleInputChange = (event) => {
      console.log(event.target.value)
      setDatos({
          ...datos, 
          [event.target.name] : event.target.value
      })
      console.log(datos)
  }   

    const newOrder = {
        buyer: {
          nombre: datos.nombre,
          apellido: datos.apellido,
          phone: datos.phone,
          email: datos.email,
          dni: datos.dni
        },
        items: [
          { item: "Paris", quantity: 2}          
        ],
        total: 15000
      };
      const checkOut = (e) => {
          e.preventDefault();

        const db = getFirestore();
        const orders = db.collection("orders");
    
        orders
        .add(newOrder)
        .then((docRef) => console.log(docRef))
        .catch((error) => console.log(error))    
    
      }
    return (
        <>
            <form className="userData" onSubmit={checkOut}>              
                <Input label="Nombre" idFor="userName" name="nombre" type="text" handleInputChange={handleInputChange}/>
                <Input label="Apellido" idFor="userApellido" name="apellido" type="text" handleInputChange={handleInputChange}/>
                <Input label="Correo electrónico" idFor="userMail" name="email" type="email" placeholder="juan@viajando.com" handleInputChange={handleInputChange}/>
                <Input label="Documento" idFor="userId" name="dni" type="number" handleInputChange={handleInputChange}/>
                <Input label="Teléfono" idFor="userPhone" name="phone" type="number" handleInputChange={handleInputChange}/>
                <button className="btnFinalizar" type="submit">Finalizar compra</button>     
            </form>
            
        </>
    )
}

export default CartCheckout

{/* <input type="email" id="userMail" placeholder="usuario@xx.com"></input>
<label for="userMail">Correo electrónico</label>
<input type="text" id="userName" ></input>
<label for="userName">Nombre</label>
<input type="text" id="userSurname" ></input>
<label for="userSurname">Apellido</label>
<input type="number" id="userId" ></input>
<label for="userId">Documento de identidad</label>
<input type="number" id="userNumber" ></input>
<label for="userNumber">Número de teléfono</label>        */}