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

	if len(productsList) == 0 {
		return []models.Testimonial{}, nil
	}

	return productsList, nil
}

func (pr *TestimonialRepository) AddTestimonial(testimonial models.Testimonial) (int, error) {
	var id int
	
	query := "INSERT INTO testimonials (name, date, body) VALUES ($1, $2, $3) RETURNING id"
	err := pr.connection.QueryRow(query, testimonial.Username, testimonial.Date, testimonial.Body).Scan(&id)
	if err!=nil {
		fmt.Println("ERROR IN REPOSITORY-AddTestimonial: ", err)
		return 0, err
	} 

	return id, nil
}