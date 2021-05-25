import React, { FC } from 'react'

const Grid: FC = () => {
    return (
        <div id="grid-container" >
            {[...Array(9)].map((_, rowIndex) => {
                return (
            <div id="grid-row-container" key={rowIndex}>
               {[...Array(9)].map((_, colIndex) => {
                   return (
                   <div id="grid-row-container" key={colIndex}></div>
               )})}
            </div>
            )})}
        </div>
    )
}

export default Grid

