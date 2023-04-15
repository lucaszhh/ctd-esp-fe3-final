import { getComicsByPage } from "dh-marvel/services/marvel/marvel.service"
import { useRouter } from "next/router"
import { useState, useEffect, ChangeEvent } from "react"
import { IComicResponse } from "types"

type DEFAULT_LIMIT =  number


const usePagination = (DEFAULT_LIMIT: DEFAULT_LIMIT ) => {
    const router = useRouter()
    const [currentPage, setCurrentPage] = useState<number | null>(null)
    const [comicsData, setComicsData] = useState<IComicResponse>()

    useEffect(() => {
        localStorage.clear()
    }, [])

    useEffect(() => {
        if (currentPage !== null) {
            router.push(`/?page=${currentPage}`, undefined, { shallow: true })

            getComicsByPage(DEFAULT_LIMIT, currentPage).then(
                (data: IComicResponse) => {
                    if (data.code === 200) {
                        setComicsData(data)
                    }
                }
            )
        }
    }, [currentPage])

    const [page, setPage] = useState<number>(1);
    const handleChange = (event: ChangeEvent<unknown>, value: number) => {
        setPage(value)
        setCurrentPage(value)
    }

    return {page , handleChange, comicsData}
}

export default usePagination