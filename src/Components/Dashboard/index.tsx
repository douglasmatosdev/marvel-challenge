import React, { FC, useState, useEffect, useCallback } from 'react'
import { DashboardContainer } from './styled';

import ApiServices from '../../Services/api'
import { verifyApiKey } from '../../Utils/secure'
import HeroCard from '../HeroCard';

const Dashboard: FC = () => {

    const limit = 10
    const [lastIndex, setLastIndex] = useState(4)
    const [heros, setHeros]: any[] = useState([])
    const [maxIndex, setMaxIndex] = useState(limit)
    const [minIndex, setMinIndex] = useState(0)
    const [pageCount, setPageCount] = useState(0)
    const [loading, setLoading] = useState(false)

    const setPagination = useCallback((offset = 0) => {
        if (verifyApiKey()) {
            ApiServices.allHeros(offset, limit, null)
                .then(res => {
                    const data = res.data.data
                    setLastIndex(data.total)
                    setHeros([...heros, ...data.results])

                    setLoading(false)
                })
        }
    }, [heros])

    useEffect(() => { setPagination(0) }, [])

    useEffect(() => {
        if (maxIndex === heros?.length) {
            setPagination(maxIndex)
        }
    }, [minIndex, maxIndex, heros, setPagination])

    return (
        <DashboardContainer>
            {!loading ? (
                <div className="heros-container">
                    <div className="heros-list">
                        {heros?.map((char: any, i: number) => {
                            if (i >= minIndex && i < maxIndex) {
                                return (
                                    <div className="hero-box" key={char.id}>
                                        <HeroCard
                                            url={`${char.thumbnail.path}.${char.thumbnail.extension}`}
                                            name={char.name}
                                        />
                                    </div>
                                )
                            }
                        }
                        )}
                    </div>
                    <div className="pagination-container">
                        <div
                            className="pagination-button pagination-back"
                            onClick={() => {
                                if (minIndex > 0) {
                                    setMaxIndex(minIndex)
                                    setMinIndex(minIndex - limit)
                                    setPageCount(pageCount - 1)
                                }
                            }}
                        >
                            {'< Back'}
                        </div>
                        <div className="page-counter">
                            {pageCount + 1} / {Math.floor(lastIndex / limit)}
                        </div>
                        <div
                            className="pagination-button pagination-next"
                            onClick={() => {
                                if (maxIndex < lastIndex) {
                                    setMinIndex(maxIndex)
                                    setMaxIndex(maxIndex + limit)
                                    setPageCount(pageCount + 1)
                                }
                            }}
                        >
                            {'Next >'}
                        </div>

                    </div>
                </div>
            ) : (
                    <h1>Carregando...</h1>
                )}
        </DashboardContainer>
    )
}

export default Dashboard