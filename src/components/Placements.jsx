import React, { useState, useEffect } from 'react'
import { db } from '../firebase';
import PlacedCard from './PlacedCard';

function Placements() {

    const [data, setData] = useState([]);


    const allPlaced = data.map((value, index) => {
        return (
            <div key={index} style={{ margin: "1rem" }}>
                <PlacedCard name={value.name} designation={value.designation} salary={value.package} image={value.image} />
            </div>
        )
    })

    useEffect(() => {
        const fetchData = async () => {
            try {
                const collectionRef = db.collection('placed');
                const snapshot = await collectionRef.get();
                const fetchedData = snapshot.docs.map((doc) => doc.data());
                setData(fetchedData);
                console.log(fetchedData);
            } catch (error) {
                console.error('Error fetching data from Firestore:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div style={{ paddingTop: "5rem" }}>
            <div className='container'>
                <div style={{ paddingBottom: "4rem", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
                    <h2 style={{ fontSize: "40px", fontWeight: "bolder" }}>Current Placements</h2>
                    <p style={{ fontSize: "16px", color: "#535458", fontFamily: "sans-serif" }}>We have transformed the career of 5000+ students in the past two years with a 100% success rate.</p>
                </div>
            </div>
            <div className='container' style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", }}>
                {allPlaced}
            </div>


        </div>
    )
}

export default Placements