import React, { FC, useState, useEffect } from 'react'
import { PaginateContainer, HeroCard } from './styled'

import ApiServices from '../../Services/api'
import { verifyApiKey } from '../../Utils/secure'
import { count } from 'console'

const Paginate: FC = () => {
    const offset = 10
    const limit = 10
    const lastIndex = 1000
    const [heros, setHeros]: any[] = useState([])
    const [maxIndex, setMaxIndex] = useState(0)
    const [minIndex, setMinIndex] = useState(0)
    const [pageCount, setPageCount] = useState(0)
    const [paginateInfo, setPaginationInfo] = useState({})

    const setPagination = (counter = 0) => {
        if (verifyApiKey()) {
            ApiServices.allHeros(counter, limit, null)
                .then(res => {
                    const data = res.data.data

                    setHeros(data.results)
                    setPaginationInfo({
                        ...paginateInfo,
                        offset: data.offset,
                        limit: data.limit,
                        total: data.total,
                        count: data.count
                    })
                })
        }
    }
    useEffect(() => setPagination(0), [])

    useEffect(() => {
        if (maxIndex === heros?.length) {
            setPagination(maxIndex)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [minIndex, maxIndex])

    return (
        <React.Fragment>
            <HeroCard>
                {heros?.map((e: any, i: number) => (
                    <div key={i}>
                        <img src={`${e.thumbnail.path}.jpg`} alt={e.name} />
                    </div>
                ))}
            </HeroCard>
            <PaginateContainer>
                <div
                    className="paginate-button paginate-back"
                    onClick={() => {
                        if (minIndex > 0) {
                            setMaxIndex(minIndex)
                            setMinIndex(minIndex - offset)
                            setPageCount(pageCount - 1)
                        }
                    }}
                >
                    {'< Back'}
                </div>
                <div className="page-counter">
                    {pageCount + 1} / {lastIndex / offset}
                </div>
                <div
                    className="paginate-button paginate-next"
                    onClick={() => {
                        if (maxIndex < lastIndex) {
                            setMinIndex(maxIndex)
                            setMaxIndex(minIndex + offset)
                            setPageCount(pageCount + 1)
                        }
                    }}
                >
                    {'Next >'}
                </div>

            </PaginateContainer>
        </React.Fragment>
    )
}

export default Paginate
