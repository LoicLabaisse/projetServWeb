package database

import (
	"database/sql"
	"log"
)

type PostgresHandler struct {
	Connexion *sql.DB
}

func (handler *PostgresHandler) Query(statement string) (IRow, error) {
	rows, err := handler.Connexion.Query(statement)
	if err != nil {
		log.Panicf("Somethinf Wrong with Query {%v}", err)
		return new(PostgresRow), err
	}

	row := new(PostgresRow)
	row.Rows = rows
	return row, nil
}

type PostgresRow struct {
	Rows *sql.Rows
}

func (handler *PostgresRow) Scan(dest ...interface{}) error {
	if err := handler.Rows.Scan(dest...); err != nil {
		log.Panicf("ERROR, something wrong with Scan DB {%v}", err)
		return err
	}

	return nil
}

func (handler *PostgresRow) Next() bool {
	return handler.Rows.Next()
}
