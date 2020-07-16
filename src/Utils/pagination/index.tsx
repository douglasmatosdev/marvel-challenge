import React, { FC } from 'react'
import { PaginateContainer } from './styled'

import ApiServices from '../../Services/api'
import { verifyApiKey } from '../../Utils/secure'

const Paginate: FC = () => {

    if (verifyApiKey()) {

        console.log(ApiServices.allHeros(5, 'thor'))
    }
    return (
        <PaginateContainer>
            <h1>{' < Privious XX/ XXX  Next > '}</h1>
        </PaginateContainer>
    )
}

export default Paginate
