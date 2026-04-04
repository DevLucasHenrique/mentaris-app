package repositorys

import (
	"database/sql"
	"fmt"

	"github.com/DevLucasHenrique/mentaris-app/backend/models"
)

type TestimonialRepository struct {
	connection *sql.DB
}

func NewTestimonialRepository(connection *sql.DB) TestimonialRepository {
	return TestimonialRepository{
		connection: connection,
	}
}

func (pr *TestimonialRepository) GetTestimonials() ([]models.Testimonial, error) {
	query := "SELECT * from testimonials"
	rows, err := pr.connection.Query(query)
	if err != nil {
		fmt.Println(err)
		return []models.Testimonial{}, err
	}

	defer rows.Close()

	var productsList []models.Testimonial
	var productObj models.Testimonial

	for rows.Next() {
		err := rows.Scan(
			&productObj.ID,
			&productObj.Username,
			&productObj.Date,
			&productObj.Body,
		)

		if err != nil {
			fmt.Println(err)
			return []models.Testimonial{}, err
		}

		productsList = append(productsList, productObj)
	}

	return productsList, nil
}
