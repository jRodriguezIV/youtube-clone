import { useEffect } from "react"
import { searchByTerm } from "../../api/fetch"


export default function Home({ searchState, setSearchState}) {

    useEffect(() => {
        searchByTerm(searchState).then()
    })



    return (
        <div>
            <p>Testing Home</p>
            {/* <img style={{width: 160, heigth: 200}} src= "https://i.ytimg.com/vi/QYh6mYIJG2Y/mqdefault.jpg" /> */}
        </div>
    )
}