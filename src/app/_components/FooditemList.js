"use client";
 
import { useEffect, useState } from "react";
 
const FooditemList = () => {

  const [foodItems, setFoodItems] = useState([]);
 
  console.log("1. Component rendering. Current state:", foodItems);
 
  useEffect(() => {

    console.log("2. useEffect fired, calling loadFoodItems");

    loadFoodItems();

  }, []);
 
  const loadFoodItems = async () => {

    console.log("3. loadFoodItems started");

    try {

      const raw = localStorage.getItem("restaurantUser");

      console.log("4. Raw localStorage value:", raw);
 
      const restaurantData = JSON.parse(raw);

      console.log("5. Parsed restaurantData:", restaurantData);
 
      if (!restaurantData) {

        console.warn("5a. EXIT: no restaurantUser in localStorage (not logged in?)");

        return;

      }
 
      const resto_id = restaurantData._id;

      console.log("6. resto_id:", resto_id);
 
      if (!resto_id) {

        console.warn("6a. EXIT: restaurantData has no _id field");

        return;

      }
 
      const url = `http://localhost:3001/api/restaurant/foods/${resto_id}`;

      console.log("7. Fetching URL:", url);
 
      const response = await fetch(url);

      console.log("8. Response status:", response.status, "ok:", response.ok);
 
      const text = await response.text();

      console.log("9. Raw response body:", text);
 
      if (!response.ok) {

        throw new Error(`HTTP Error: ${response.status} — body: ${text}`);

      }
 
      const data = text ? JSON.parse(text) : {};

      console.log("10. Parsed JSON:", data);

      console.log("11. success flag:", data.success, "| result count:", data.result?.length);
 
      if (data.success) {

        console.log("12. Setting state with:", data.result);

        setFoodItems(data.result);

      } else {

        console.warn("12a. API returned success=false. Full response:", data);

        alert("Food item list not loading");

      }

    } catch (error) {

      console.error("13. CAUGHT ERROR:", error.message, error);

    }

  };
 
  return (
<div>
<h1>Food Items</h1>
<table>
<thead>
<tr>
<th>S.N</th>
<th>Name</th>
<th>Price</th>
<th>Description</th>
<th>Image</th>
<th>Operation</th>
</tr>
</thead>
<tbody>

          {foodItems.length > 0 ? (

            foodItems.map((item, key) => {

              console.log(`14. Rendering row ${key}:`, item);

              return (
<tr key={item._id || key}>
<td>{key + 1}</td>
<td>{item.name}</td>
<td>{item.price}</td>
<td>{item.description}</td>
<td>
<img src={item.img_path} alt={item.name} width={80} />
</td>
<td>
<button>Edit</button>
<button>Delete</button>
</td>
</tr>

              );

            })

          ) : (
<tr>
<td colSpan="6">No food items found.</td>
</tr>

          )}
</tbody>
</table>
</div>

  );

};
 
export default FooditemList;
 