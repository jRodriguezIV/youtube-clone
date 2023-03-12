import './Header.css'

export default function Header () {



    return (
        <div className='header-wrapper'>
            <h1>YouTube</h1>

            <label className='search-bar'  htmlFor="search">
                <input name='search' placeholder="Search" type="text" />
                <button>Search{/* Search Icon*/}</button>
            </label>
        </div>
    )
}