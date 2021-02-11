import styled from 'styled-components'

interface ItemProps {
    backgroundColor: string
}

export const Item = styled.div<ItemProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.backgroundColor};
    height: 25vh;
    width: 15vw;
    > h1 {
        font-weight: 500;
        font-size: 20px;
        line-height: 48px;
        color: #e0e0e0;
        text-align: center;
    }
`