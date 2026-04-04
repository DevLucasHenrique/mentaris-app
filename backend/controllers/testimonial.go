package controllers

import (
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
