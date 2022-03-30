import styled from 'styled-components'

export const HeaderCnt = styled.header`
    color: white;
    background-color: gray;
    padding: 10px;
    text-align: center;
`

export const UlList = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
`

export const LiItem = styled.li`
    margin: 0 5px;

    a {
        text-decoration: none;
    }

    a:link, a:visited, a:hover {
        color: white;
    }
`