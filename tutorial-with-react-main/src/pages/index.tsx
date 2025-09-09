import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Index() {
    const [dinosaurs, setDinosaurs] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await fetch(`/api/homepage/`);
            const allDinosaurs = await response.json();
            setDinosaurs(allDinosaurs);
        })();
    }, []);

    return (
        <main>
            <h1>🦖 Mi primera App en React</h1>
            <p>Click on a dinosaur below to learn more.</p>
            {dinosaurs.map((dinosaur: { name: string; description: string }) => {
                return (
                    <>
                        <Link
                            to={`/${dinosaur.name.toLowerCase()}`}
                            key={dinosaur.name}
                            className="btn-primary"
                        >
                           {dinosaur.name} 
                        </Link>
                        <br/>
                    </>
                );
            })}
        </main>
    );
}
