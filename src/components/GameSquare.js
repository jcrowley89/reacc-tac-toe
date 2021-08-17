import React from 'react'

const GameSquare = ({content, onClick}) => {

    return (
        <div 
            className={content === "" ? "square active" : "square"}  
            onClick={content === "" ? onClick : null}
        >
            {content}
        </div>
    )
}

export default GameSquare
