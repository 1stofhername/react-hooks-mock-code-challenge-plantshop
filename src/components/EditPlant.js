import React, { useState } from 'react';

function EditPlant ({ plant, inStock, handleUpdate, toggleEdit }) {
    const[updatedName, setUpdatedName]=useState(plant.name);
    const[updatedPrice, setUpdatedPrice]=useState(plant.price);
    const newPlantData = {
        name:updatedName,
        image:plant.image,
        price:Number(updatedPrice),
        id:plant.id,
    };
    
    function onSubmit(e) {
        e.preventDefault();
        handleUpdate(newPlantData);
    };

    return (
    <>
      <form>
          <input type="text" name="name" placeholder="New plant name" value={updatedName} onChange={(e)=>{setUpdatedName(e.target.value);console.log(newPlantData)}}/>
          <input type="number" name="price" step="0.01" placeholder="New price" value={updatedPrice} onChange={(e)=>{setUpdatedPrice(e.target.value);console.log(newPlantData)}} />
        </form>
      <button type="submit" className="edit" onClick={e=>{onSubmit(e);toggleEdit()}}>Save Plant</button>
      </> 
    )
}



export default EditPlant