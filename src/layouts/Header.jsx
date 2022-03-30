import { Link } from "react-router-dom"
import { HeaderCnt, UlList, LiItem } from "../assets/styles/HeaderStyle"

export default function Header({pageTitle}) {
  return (
    <HeaderCnt>
        <h1>{pageTitle}</h1>
        <nav>
            <UlList>
                <LiItem><Link to="/">Home</Link></LiItem>
                <LiItem><Link to="/favorites">Favoritos</Link></LiItem>
            </UlList>
        </nav>
    </HeaderCnt>
  )
}
