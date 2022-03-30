package interface


import(
	movie "servWeb/api/src/domain/movie/models"
)

type IMovieRepository interface{
	SaveMovie(movie movie.ModelMovie)(int,error)
	UpdateMovie(uid int,movie movie.ModelMovie )(int,error)
	DeleteMovie(uid int,error)
}