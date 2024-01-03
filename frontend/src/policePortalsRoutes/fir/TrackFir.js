import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography, Container } from "@mui/material";


function TrackFir() {
    const [firData, setFirData] = useState([]);
    useEffect(() => {
        // Fetch EFIR data when the component mounts
        const fetchFirData = async () => {
            try {
                const response = await fetch("http://localhost:5000/api/efir/allFir");
                const data = await response.json();
                setFirData(data);
            } catch (error) {
                console.error("Error fetching EFIR data:", error);
            }
        };

        fetchFirData();
    }, []);
    return (
        <div className="feedback-form homepage-main-areaa-form">
            <Container>
                <h1>EFIR List</h1>
                {firData.map((efir) => (
                    <Card key={efir.firNumber} variant="outlined" style={{ margin: "10px" }}>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                FIR Number: {efir.firNumber}
                            </Typography>
                            <Typography color="textSecondary">
                                Status: {efir.status}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </Container>
        </div>
    )
}

export default TrackFir