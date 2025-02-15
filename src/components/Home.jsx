import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/api", {
                    method: "GET",
                    credentials: "include" // ✅ Allows cookies to be sent & received
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
