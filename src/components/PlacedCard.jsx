import React from 'react'

function PlacedCard({ name, image, designation, salary }) {
    return (
        <div className='p-3' style={{ width: "220px", borderRadius: "7px", border: "2px solid black", boxShadow: "0 12px 14px rgba(0, 0, 0, 0.2)",  display: "flex", flexDirection: "column", justifyItems: "center", alignItems: "center", marginBottom: "2rem"}}>
            {/* <div style={{ display: "flex", justifyContent: "center" }}>
                <h2>Placed</h2>
            </div> */}
            {/* <hr style={{ width: "100%", height: "1px", backgroundColor: "black", margin: "10px 0 13px 0" }} /> */}

            <div style={{ height: "200px", width:"150px", display: "flex", justifyContent: "center" }}>
                <img src={image} alt="image" style={{borderRadius: "7px", maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
            </div>
            <hr style={{ width: "100%", height: "1px", backgroundColor: "black", margin: "13px 0" }} />
            <div style={{ display: "flex", justifyContent: "center" }}>
                <h6>({designation})</h6>
            </div>
            <div style={{ display: "flex", justifyContent: "center", fontWeight: "bolder", fontSize: "17px", fontFamily: "sans-serif" }}>
                {salary} LPA
            </div>
        </div>


    )
}

export default PlacedCard