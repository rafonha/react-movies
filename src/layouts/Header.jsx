import { HeaderCnt } from "../assets/styles/HeaderStyle"

export default function Header({pageTitle}) {
  return (
    <HeaderCnt>
        <h1>{pageTitle}</h1>
    </HeaderCnt>
  )
}
