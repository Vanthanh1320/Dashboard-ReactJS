import React,{useContext,useState} from 'react';


const AppContext=React.createContext()

const AppProvider=({children})=>{


    const [isSliderOpen,setSliderOpen]=useState(false)
    const [hidePassword,setHidePassword]=useState(false)

    const OpenSlider=()=>{
        setSliderOpen(true)
    }

    const CloseSlider=()=>{
        setSliderOpen(false)
    }

    return(
        <AppContext.Provider value={{isSliderOpen,
                   OpenSlider,
                   CloseSlider,
                   hidePassword,
                   setHidePassword
            }}>
            {children}
        </AppContext.Provider>
    )
} 

export const useGlobalContext=()=>{
    return useContext(AppContext)
}

export {AppProvider}