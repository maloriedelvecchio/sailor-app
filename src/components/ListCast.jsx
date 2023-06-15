import { useState, useEffect } from "react";

export default () => {
    const [cast, setCast] = useState([]);

    async function fetchCast() {
        const response = await fetch('cast.json');
        setCast(await response.json());
    }

    useEffect(() => {
        fetchCast();
    })

    return (
        <div style={{
            display: "grid",
            gridTemplateColumns: `repeat(auto-fit, minmax(100px, 1fr))`,
            gap: `1rem`,
            marginTop: `1rem`
        }}>
           {
            cast.map(member => (
                <a key={member.id} data-toggle="tooltip" title={member.sailorName}>
                    <img src={`images/${member.sailorSlug}-tn.jpg`} alt={member.sailorName} />
                </a>
            ))
           } 
        </div>
    )
}