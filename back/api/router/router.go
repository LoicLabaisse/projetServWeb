package router

import "github.com/gorilla/mux"

type IGorillaRouter interface {
	initRouter() *mux.Router
}

type router struct{}

func (router *router) InitRouter() *mux.Router {
	r := mux.NewRouter()

	return r
}
