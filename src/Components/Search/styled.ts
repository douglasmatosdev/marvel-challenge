import styled from 'styled-components'

export const SearchHeroContainer = styled.div`
    *,
    & {
        box-sizing: border-box;
    }

    display: flex;
    margin: 20px 0;

    .icon-search {
        margin: 0;
        padding: 0;
        width: 24px;
        height: 24px;

        position: absolute;
        top: 8px;
        left: 2px;

        font-size: 18px;
    }
    
    .input-name {
        position: relative;
        input {
            min-width: 250px;
            width: 350px;
            height: 35px;

            padding: 2px 25px;

            border: none;
            border-bottom: 2px solid #202020;
            
            outline: none;

            font: 800 26px/1 RobotoCondensed,Trebuchet MS,Helvetica,Arial,sans-serif;
            letter-spacing: 1px;
            text-transform: uppercase;
            
        }
        input:focus,
        input:active {
            border: 2px solid orange;
            box-shadow: 0 2px #202020;
            border-radius: 4px;
        }
    }

    .response-names {
        min-width: 250px;
        width: 350px;
        z-index: 9;
        height: 100%;
        max-height: 400px;
    }
`