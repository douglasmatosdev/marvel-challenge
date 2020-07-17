import React, { FC, useState, useEffect, Fragment } from 'react'
import { HeroContainer, HeroBox, HeroCard, ButtonsBox, Button } from './styled';

import ApiServices from '../../Services/api'
import { verifyApiKey } from '../../Utils/secure'

const Paginate: FC = () => {
    const offset = 5
    const limit = 5
    const [lastIndex, setLastIndex] = useState(0)
    const [heros, setHeros]: any[] = useState([])
    const [maxIndex, setMaxIndex] = useState(0)
    const [minIndex, setMinIndex] = useState(0)
    const [pageCount, setPageCount] = useState(0)
    const [paginateInfo, setPaginationInfo] = useState({})
    const [loading, setLoading] = useState(true)

    const setPagination = (counter = 0) => {
        if (verifyApiKey()) {
            ApiServices.allHeros(counter, limit, null)
                .then(res => {
                    const data = res.data.data
                    setLastIndex(data.total)
                    setHeros(data.results)
                    setPaginationInfo({
                        ...paginateInfo,
                        offset: data.offset,
                        limit: data.limit,
                        total: data.total,
                        count: data.count
                    })
                    setLoading(false)
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
    console.log(paginateInfo)
    return (
        <HeroContainer>
            {!loading ? (
                <Fragment>
                    <HeroBox>
                        {heros?.map((char: any, i: number) => (
                            <HeroCard className="herocard" key={char.id}>
                                <img src={`${char.thumbnail.path}.${char.thumbnail.extension}`} alt={char.name} />
                                <strong>{char.name}</strong>
                                <div className="canto-chanfrado"></div>
                            </HeroCard>
                        ))}
                    </HeroBox>
                    <ButtonsBox className="actions">
                        <Button
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
                        </Button>
                        <Button className="page-counter">
                            {pageCount + 1} / {lastIndex / offset}
                        </Button>
                        <Button
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
