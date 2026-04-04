package usecases

import (
	"github.com/DevLucasHenrique/mentaris-app/backend/models"
	"github.com/DevLucasHenrique/mentaris-app/backend/repositorys"
)

type TestimonialUsecase struct {
	repository repositorys.TestimonialRepository
}

func NewTestimonialUsecase(repo repositorys.TestimonialRepository) TestimonialUsecase {
	return TestimonialUsecase{
		repository: repo,
	}
}

func (pu *TestimonialUsecase) GetTestimonials() ([]models.Testimonial, error) {
	return pu.repository.GetTestimonials()
}
