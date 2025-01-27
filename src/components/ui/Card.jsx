import React from 'react'

const Card = ({ className, icon, tColor, Title, description, IconClr }) => {
    return (
        <div className={`md:p-6 p-4 flex flex-col items-center rounded-md w-full min-h-56 ${className}`}>
            {icon ? (
                <div className={`p-4 ${IconClr} bg-white rounded-full`}>{icon}</div>
            ) : (
                <img src={"https://via.placeholder.com/150"} alt="placeholder" className="w-32 h-32 rounded-full" />
            )}
            <h3 className={`${tColor} md:py-4 py-2 font-semibold`}>{Title}</h3>
            <p className='text-center text-sm'>{description}</p>
        </div>
    )
}

export default Card