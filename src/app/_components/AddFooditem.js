import {useState} from "react";
const AddFoodItems = () => {
    const [name, setName]=useState("");
    const [price, setPrice]=useState("");
    const [path, setPath]=useState("");
    const [description, setDescription]=useState("");
    const [error, setError]=useState(false);

    const handleAddFoodItem = async () => {
        console.log(name, price, path, description);
        if(!name || !price || !path || !description){
            setError(true);
            return false
        }else{
            setError(false);
        }
        let resto_id;
        const restaurantData = JSON.parse(localStorage.getItem("restaurantUser"));
        if (restaurantData){
            resto_id = restaurantData._id;
        }
        let response = await fetch("/api/restaurant/foods", {
            method: "POST",
            body: JSON.stringify({name, price, img_path: path, description, resto_id})
        });
        response = await response.json();
        if (response.success){
            alert("Food Item Added Successfully");
        }else{
            alert("Food Item Not Added");
        }
            // setName("");
            // setPrice("");
            // setPath("");
            // setDescription("");
        // } else {
        //     alert("Error adding food item");
        // }
    }
    return (<div className="container">
        <h1>
            Add New Food Items
        </h1>
        <div className="input-wrapper">
            <input type ="text" className= "input-feild" placeholder="Enter Food Name" value = {name} onChange={(event)=>setName(event.target.value)}/>

        {error && !name && <span className="input-error">Please enter valid name</span>}
        </div>  
         <div className="input-wrapper">
            <input type ="number" className= "input-feild" placeholder="Enter Price" value = {price} onChange={(event)=>setPrice(event.target.value)}/>
         {error && !price && <span className="input-error">Please enter valid price</span>}
        </div> 
         <div className="input-wrapper">
            <input type ="text" className= "input-feild" placeholder="Enter image Path" value = {path} onChange={(event)=>setPath(event.target.value)}/>
             {error && !path && <span className="input-error">Please enter valid image path</span>}
        </div> 
         <div className="input-wrapper">
            <input type ="text" className= "input-feild" placeholder="Enter Description" value = {description} onChange={(event)=>setDescription(event.target.value)}/>
             {error && !description && <span className="input-error">Please enter valid description</span>}
        </div>  
         <div className="input-wrapper">
           <button className="button" onClick={handleAddFoodItem}>Add Food Item</button>
        </div> 
    </div>)

}

export default AddFoodItems ;