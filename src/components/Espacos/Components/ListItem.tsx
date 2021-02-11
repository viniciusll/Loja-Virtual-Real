import React from 'react'

import { Item } from './styles'

interface ListItemProps {
    backgroundColor: string
}

const ListItem: React.FC<ListItemProps> = ({
    backgroundColor,
    children
}) => {
    return <Item backgroundColor={backgroundColor} >{ children }</Item>
}

export default ListItem