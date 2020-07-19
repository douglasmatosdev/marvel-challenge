import React, { FC, useState, useEffect, useCallback, Fragment } from 'react'
import { HeroContainer, HeroBox, HeroCard, ButtonsBox, Button } from './styled';

import ApiServices from '../../Services/api'
import { verifyApiKey } from '../../Utils/secure'

const Paginate: FC = () => {
    const limit = 4
    const [lastIndex, setLastIndex] = useState(0)
    const [heros, setHeros]: any[] = useState([])
    const [maxIndex, setMaxIndex] = useState(limit)
    const [minIndex, setMinIndex] = useState(0)
    const [pageCount, setPageCount] = useState(0)
    const [loading, setLoading] = useState(true)

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
        <HeroContainer>
            {!loading ? (
                <Fragment>
                    <HeroBox>
                        {heros?.map((char: any, i: number) => {
                            if (i >= minIndex && i < maxIndex) {
                               return (
                                    <HeroCard className="herocard" key={char.id}>
                                        <img src={`${char.thumbnail.path}.${char.thumbnail.extension}`} alt={char.name} />
                                        <strong>{char.name}</strong>
                                        <div className="canto-chanfrado"></div>
                                    </HeroCard>
                                )
                            }
                        }
                        )}
                    </HeroBox>
                    <ButtonsBox className="actions">
                        <Button
                            className="paginate-button paginate-back"
                            onClick={() => {
                                if (minIndex > 0) {
                                    setMaxIndex(minIndex)
                                    setMinIndex(minIndex - limit)
                                    setPageCount(pageCount - 1)
                                }
                            }}
                        >
                            {'< Back'}
                        </Button>
                        <Button className="page-counter">
                            {pageCount + 1} / {Math.floor(lastIndex / limit)}
                        </Button>
                        <Button
                            className="paginate-button paginate-next"
                            onClick={() => {
                                if (maxIndex < lastIndex) {
                                    setMinIndex(maxIndex)
                                    setMaxIndex(maxIndex + limit)
                                    setPageCount(pageCount + 1)
                                }
                            }}
                        >
                            {'Next >'}
                        </Button>

                    </ButtonsBox>
                </Fragment>
            ) : (
                    <h1>Carregando...</h1>
                )}

        </HeroContainer>
    )
}

export default Paginate
