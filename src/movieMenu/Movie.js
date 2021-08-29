const Movie = ({list})=>{
    return (
        <>
        {list.map(item=><div key={item.id}>
                <h1>{item.original_title}</h1>
                <img src={`https://image.tmdb.org/t/p/w200${item.poster_path}`} alt="" />
                <div>
                    <p>Movie description : {item.overview}</p>
                    <p>released At : {item.release_date}</p>
                    <p>rated : {item.vote_average} / 10</p>
                </div>
        </div>)}
        </>
    )
}

export default Movie;