import React from 'react'

const Card = ({ className, icon, tColor }) => {
    return (
        <div className={`p-4 flex flex-col items-center ${className}`}>
            <img src={icon || "https://via.placeholder.com/150"} alt="placeholder" className="w-32 h-32 rounded-full" />
            <h3 className={`${tColor}`}>{Title}</h3>
        </div>
    )
}

export default Card