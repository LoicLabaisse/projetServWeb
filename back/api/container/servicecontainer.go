package container

import (
	"database/sql"
	"fmt"
	"log"
	"os"

	databases "servWeb/api/database"

	"github.com/joho/godotenv"
)

type IServiceContainer interface {
	InjectMovieController() movies.movieController
}

type kernel struct{}

func (k *kernel) InjectMovieController() movies.movieController {

	godotenv.Load()

	psqlInfo := fmt.Sprintf("host=%s port=%s user =%s"+"password=%s dbname=%s sslmode=%s search_path=public", os.Getenv("DB_HOST"), os.Getenv("DB_PORT"), os.Getenv("DB_USER"), os.Getenv("DB_NAME"))

	sqlConn, err := sql.Open("postgres", psqlInfo)

	if err != nil {
		log.Fatalf("Something Wrong with DB {%v}", sqlConn)
	}

	postgresHandler := &databases.PostgresHandler{}
}
