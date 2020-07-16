import React, { FC } from 'react'
import { PaginateContainer } from './styled'

import allHeors from '../../Services/api'

const Paginate: FC = () => {

    console.log(allHeors)
    return (
        <PaginateContainer>
            <h1>{' < Privious XX/ XXX  Next > '}</h1>
        </PaginateContainer>
    )
}

export default Paginate