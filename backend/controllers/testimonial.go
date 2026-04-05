package controllers

import (
	"fmt"
	"net/http"

	"github.com/DevLucasHenrique/mentaris-app/backend/models"
	"github.com/DevLucasHenrique/mentaris-app/backend/usecases"
	"github.com/gin-gonic/gin"
)

type ProductController struct {
	usecase usecases.TestimonialUsecase
}

func NewTestimonialController(usecase usecases.TestimonialUsecase) ProductController {
	return ProductController{
		usecase: usecase,
	}
}

func (pc *ProductController) GetTestimonials(ctx *gin.Context) {
	testimonials, err := pc.usecase.GetTestimonials()
	if err != nil {
		response := models.Response{
			Message: "Cant return Testimonials",
		}

		ctx.JSON(http.StatusInternalServerError, response)
	}

	ctx.JSON(http.StatusOK, testimonials)
}

func (pc *ProductController) AddTestimonial(ctx *gin.Context) {
	var testimonial models.Testimonial

	err := ctx.BindJSON(&testimonial)
	if(testimonial == models.Testimonial{}) {
		response := models.Response{
			Message: "No content",
		}

		ctx.JSON(http.StatusBadRequest, response)
	}

	if err!=nil {
		response := models.Response{
			Message: "Add a valid Input",
		}
		ctx.JSON(http.StatusBadRequest, response)
	}

	id, err := pc.usecase.AddTestimonial(testimonial)
	if err!= nil {
		ctx.JSON(http.StatusInternalServerError, err)
	}

	response := models.Response{
		Message: fmt.Sprintf("Created with Id %v", id),
	}
	ctx.JSON(http.StatusCreated, response)
}