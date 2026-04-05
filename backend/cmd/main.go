package main

import (
	"github.com/DevLucasHenrique/mentaris-app/backend/controllers"
	"github.com/DevLucasHenrique/mentaris-app/backend/db"
	"github.com/DevLucasHenrique/mentaris-app/backend/repositorys"
	"github.com/DevLucasHenrique/mentaris-app/backend/usecases"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	server := gin.Default()
	dbConnection, err := db.ConnectDB()

	server.Use(cors.New(cors.Config{
		AllowOrigins: []string{"http://localhost:5173"},
		AllowMethods: []string{"GET", "POST", "PUT", "DELETE"},
		AllowHeaders: []string{"Content-Type", "Authorization"},
	}))

	if err != nil {
		panic(err)
	}

	TestimonialRepository := repositorys.NewTestimonialRepository(dbConnection)
	TestimonialUsecase := usecases.NewTestimonialUsecase(TestimonialRepository)
	TestimonialController := controllers.NewTestimonialController(TestimonialUsecase)

	server.GET("/api/testimonials", TestimonialController.GetTestimonials)
	server.POST("/api/testimonials", TestimonialController.AddTestimonial)

	server.Run(":8000")
}
