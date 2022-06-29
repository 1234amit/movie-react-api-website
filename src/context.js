import React, { useContext, useEffect, useState } from 'react';

const API_URL = `http://www.omdbapi.com/?apikey=f944aa3d&s=titanic`;
const AppContext = React.createContext()

// we need to create provider
const AppProvider = ({children}) =>{

    const [isLoading, setIsLoading] = useState(true)
    const [movie, setMovie] = useState([])
    const [isError, setIsError] = useState({show:"false", msg:""})

    const getMovies = async(url) => {
        try{
            const res = await fetch(url)
            const data = await res.json();
            console.log(data)

            if(data.Response === "True"){
                setIsLoading(false)
                setMovie(data.search)
            }else{
                setIsError({
                    show: true,
                    msg: data.error,
                })
            }

        }
        catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        getMovies(API_URL)
    }, [])

    return(
        <AppContext.Provider value={{isLoading, movie, isError}}>
            {children}
        </AppContext.Provider>
    )
}


// custom global constant
const useGlobalConstant = () =>{
    return useContext(AppContext);
}

export {AppContext, AppProvider, useGlobalConstant}