import React from 'react'
import { useGlobalConstant } from './context'

const Movies = () => {

    const { movie } = useGlobalConstant()

    return (
        <>
            { movie ? movie.map((curMovieElem)=>{
                return(
                    <div>
                        <h2>{curMovieElem.Title}</h2>
                    </div>
                )
            }) : ""}
        </>
    )
}

export default Movies