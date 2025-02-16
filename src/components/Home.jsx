import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://mern-backend-sooty-tau.vercel.app/api", {
                    method: "POST",
                    credentials: "include", // ✅ REQUIRED for cookies
                    headers: {
                        "Content-Type": "application/json", // ✅ REQUIRED for JSON body
                    },
                    body: JSON.stringify({ msg: "helloo" }),
                });
    
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
    
                const data = await response.json();
                console.log(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
    
        fetchData();
    }, []);
    

    return (
        <div>
            <h1>Home</h1>
        </div>
    );
}
