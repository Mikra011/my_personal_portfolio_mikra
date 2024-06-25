import React from 'react';
import { useNavigate } from "react-router-dom"

export default function LandingPage() {
    const navigate = useNavigate()

    const routeToSite = () => {
        navigate('home')
    }
    return (
        <div className="laning-page">
            <button onClick={routeToSite}>
                Continue to Page
            </button>
        </div>
    )
}