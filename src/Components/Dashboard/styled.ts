import styled from 'styled-components'


export const DashboardContainer = styled.div`
    background: #fff;
    padding: 40px;
    flex: 1;

    .heros-container {
        padding: 20px;
        background: #fff;
        border-radius: 45px;
        flex-direction: column;
        flex: 1;
        align-items: center;
        box-shadow: 0px 0px 8px #0005;

        

        .pagination-container {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 20px;
            padding-top: 20px;
            border-top: 1px solid rgba(0, 0, 0, 0.15);

            .pagination-button {
                cursor: pointer;
            }

            .page-count {
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 32px;
                margin: 0 20px;
                font-family: "Dejavu Sans Condensed";
            }
        }

        @media (max-width: 600px) {
            .heros-container {
                padding: 10px;
            }
        }
    }
`

export const Characters = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border-radius: 10px;
    cursor: pointer;

    img {
        min-width: 96px;
        min-height: 96px;
    }

    &:hover,
    &:active,
    &:focus {
        background-color: rgba(0, 0, 0, 0.15);
        .poke-icon-id {
            color: #353f47;
        }
    }

    .hero-name {
        text-transform: capitalize;
        font-weight: 500;
        color: #353f47;
    }
    
`