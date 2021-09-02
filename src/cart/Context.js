import { createContext, useContext, useEffect, useReducer } from "react"
import { CLEAR, CONTROL, GetData, LOADING, MODIFY, REMOVE } from "./data";
import { initState, reducer } from "./reducer";
const url = 'https://course-api.com/react-useReducer-cart-project'
export const AppContext = createContext();

const AppProvider = ({children})=>{
    const [state, dispatch] = useReducer(reducer, initState);
    const fetchData = async()=>{
        dispatch({type:LOADING})
        const getData = await fetch(url)
        const data = await getData.json();
        dispatch({type:GetData,payload:data})
    }
    const controlAmount = (id,type)=>{
        dispatch({type:CONTROL,payload:{id,type}})
    }
    const removeItem = (id)=>{
        dispatch({type:REMOVE,payload:id})
    }
    const dataModify=()=>{
        dispatch({type:MODIFY})   
    }
    const clearAll = ()=>{
        dispatch({type:CLEAR})
    }
    useEffect(()=>{
        dataModify()
    },[state.data])
    useEffect(()=>{
        fetchData();
    },[])
    return(
        <AppContext.Provider value={{...state,controlAmount,clearAll,removeItem}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext =()=> useContext(AppContext);

export default AppProvider