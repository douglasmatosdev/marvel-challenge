import React, { FC, useState, ChangeEvent } from 'react'
import { SearchHeroContainer } from './styled'
import { RiSearch2Line } from 'react-icons/ri'
import ApiServices from '../../Services/api'

const SearchHero: FC = () => {
    const [inputState, setInputState] = useState({ hero: '' })

    const hanleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const name = e?.target?.value
        setInputState({ ...inputState, hero: name })
    }
    if (inputState.hero !== '') {

        ApiServices.searchHeros(inputState.hero)
            .then(res => {
                const name = res.data.data.results
                console.log(res)
            })
    }

    return (
        <SearchHeroContainer>
            <div className="input-name">
                <div className="icon-search">
                    <RiSearch2Line />
                </div>
                <label htmlFor="hero"></label>
                <input
                    type="text"
                    name="hero"
                    value={inputState.hero}
                    onChange={e => hanleInputChange(e)}
                />
            </div>
        </SearchHeroContainer>
    )
}

export default SearchHero