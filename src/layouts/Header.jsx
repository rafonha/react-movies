import { HeaderCnt, UlList, LiItem } from "../assets/styles/HeaderStyle"

export default function Header({pageTitle}) {
  return (
    <HeaderCnt>
        <h1>{pageTitle}</h1>
        <nav>
            <UlList>
                <LiItem>Home</LiItem>
                <LiItem>Favoritos</LiItem>
            </UlList>
        </nav>
    </HeaderCnt>
  )
}
