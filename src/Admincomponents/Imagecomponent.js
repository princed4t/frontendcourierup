import React from 'react'



const Imagecomponent = ({ base64ImageData }) => {
    const imageUrl = `data:image/jpeg;base64,${base64ImageData}`;
    
    return (
        <div>
            <h2>Image from Spring Boot</h2>
            <img src={imageUrl} alt="Binary Image" />
        </div>
    );
};




export default Imagecomponent
