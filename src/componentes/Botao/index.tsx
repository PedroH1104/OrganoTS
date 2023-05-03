import { ReactElement } from 'react'
import './Botao.css'
import React from 'react'

interface BotaoProps {
    children: ReactElement | string                 // pode ser um ou outro
}

const Botao = ( props: BotaoProps ) => {
    return (<button className='botao'>
        {props.children}
    </button>)
}

export default Botao