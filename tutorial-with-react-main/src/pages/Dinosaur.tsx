import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Course from "./Course.tsx";

export default function Dinosaur() {
    const { selectedDinosaur } = useParams();
    const [dinosaur, setDino] = useState({ name: "", description: "", age: "" });

    useEffect(() => {
        (async () => {
            const resp = await fetch(`/api/dinosaurs/${selectedDinosaur}`);
            const dino = await resp.json();
            setDino(dino);
        })();
    }, [selectedDinosaur]);

    return (
        <div>
            <h1>{dinosaur.name}</h1>
            <p>{dinosaur.description}</p>
            <p>{dinosaur.age ?? "No se entregó una edad"}</p>
            <Course />
            <Link to="/" className="btn-secondary">Volver al homepage</Link>
        </div>
    );
}
