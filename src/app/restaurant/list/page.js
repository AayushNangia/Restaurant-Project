"use client";
import { useEffect, useState } from "react";

export default function RestaurantList() {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        fetch("/api/restaurant")
            .then((res) => res.json())
            .then((data) => setRestaurants(data.result));
    }, []);

    return (
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {restaurants.map((r, i) => (
                <div key={i} className="border rounded-xl p-4 shadow-md hover:shadow-lg transition">
                    <h2 className="text-xl font-bold mb-1">{r.name}</h2>
                    <p className="text-gray-500 text-sm">{r.city}</p>
                    <p className="text-gray-600 text-sm">{r.address}</p>
                    <p className="text-gray-600 text-sm mt-2">📞 {r.phoneNumber}</p>
                </div>
            ))}
        </div>
    );
}