package main

import (

	"github.com/DevLucasHenrique/mentaris-app/backend/controllers"
	"github.com/DevLucasHenrique/mentaris-app/backend/db"
	"github.com/DevLucasHenrique/mentaris-app/backend/repositorys"
	"github.com/DevLucasHenrique/mentaris-app/backend/usecases"
	"github.com/gin-gonic/gin"
)

func main() {
	server := gin.Default()
	dbConnection, err := db.ConnectDB()

	if err != nil {
		panic(err)
	}

	Repository := repositorys.NewTestimonialRepository(dbConnection)
	Usecase := usecases.NewTestimonialUsecase(Repository)
	Controller := controllers.NewTestimonialController(Usecase)

	server.GET("/api/testimonials", Controller.GetTestimonials)

	server.Run(":8000")
}
