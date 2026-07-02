"use client";
import { useEffect, useState } from "react";

export default function RestaurantList() {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        fetch("/api/restaurant")
            .then(res => res.json())
            .then(data => setRestaurants(data.result));
    }, []);

    return (
        <div>
            {restaurants.map((r, i) => (
                <div key={i}>
                    <h2>{r.name}</h2>
                    <p>{r.city}</p>
                    <p>{r.address}</p>
                    <p>{r.phoneNumber}</p>
                </div>
            ))}
        </div>
    );
}