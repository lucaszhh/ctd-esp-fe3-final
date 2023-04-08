import { getComics } from "dh-marvel/services/marvel/marvel.service"
import {useState, useEffect} from "react"
import { IComicResponse } from "types"

const useComics = () => {

    const [page, setPage] = useState<number>(2)
    const [comicResponse, setComicResponse] = useState<IComicResponse>()

    const handleChange = async (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value)
    }

    const DEFAULT_LIMIT = 12
    useEffect(
        ()=>{
        const OFFSET = page*DEFAULT_LIMIT
        
        const getData = async() =>{
            const data : IComicResponse = await getComics(OFFSET,DEFAULT_LIMIT)
            setComicResponse(data)
            console.log("data", data);
            
        }
        getData()

    }, [page])

    console.log("data",comicResponse);
    


    return {page, handleChange, comicResponse}
}

export default useComics