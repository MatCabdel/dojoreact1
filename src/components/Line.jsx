import { useState } from "react";

function Line({user, handleClick}) {
    
    

    return (
        <div>
            <span>{user.name}</span>
            <button onClick={() => handleClick(user)}>{user.like ? " 🍆💦 " : " 🍑💦 "}</button>
        </div>
    );
};

export default Line;
