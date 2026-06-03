import MovieCard from "../components/MovieCard"

function Home () {
    const movies = [
        {id: 1, title: "The Lego Movie", release_date: "2016"},
        {id: 2, title: "Everything Everywhere All at Once", release_date: "2024"},
        {id: 3, title: "Iron Man", release_date: "2008"},
        {id: 4, title: "DBZ: Superheros", release_date: "2024"},
        {id: 5, title: "Puss and Boots: The Last Wish", release_date: "2025"},
    ]

    const handleSearch = () => {

    }

    return <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input type="text" placeholder="Try something new..." className="search-input"/>
        </form>
        <div className="movies-grid">
            {movies.map(movie => <MovieCard movie={movie} key={movie.id}/>)}
        </div>
    </div>
}

export default Home