import { useState,useEffect } from "react"
import {page} from "./page";

const url = 'https://api.github.com/users/john-smilga/followers?per_page=100'

const useFetch = ()=>{
    const [loading,setLoading]=useState(true)
    const [data,setData]=useState([]);
    console.log(page,"??")
    const response = async()=>{
        setLoading(true)
        try{
            const data = await fetch(url);
            const results = await data.json();
            setData(page(results))
        }catch{
            throw new Error();
        }finally{
            setLoading(false)
        }
    }
    useEffect(()=>{
        response();
    },[])
    return {loading,data}
}

export default useFetch;