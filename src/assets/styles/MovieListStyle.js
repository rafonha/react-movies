import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const MovieListCnt = styled.section`
display: flex;
flex-flow: row nowrap;
`

export const UlList = styled.ul`
list-style-type: none;
margin: 0;
padding: 0;
display: flex;
flex-flow: row wrap;
justify-content: center;
`

export const LiItem = styled.li`
margin: 5px;
border: 2px solid gray;
padding: 8px;
`

export const LinkStyled = styled(Link)`
    text-decoration: none;

    &:visited, &:link {
        color: black;
    }
`