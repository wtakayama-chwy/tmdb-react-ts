import React from 'react'
import { PropagateLoader } from 'react-spinners'
import { LoadingContainer } from './styles'

const Loading: React.FC = () => {
    return (
        <LoadingContainer>
            <PropagateLoader color={'#b4b4b4'} />
        </LoadingContainer>
    )
}

export default Loading