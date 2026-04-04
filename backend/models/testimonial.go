package models

type Testimonial struct {
	ID int `json:"testimonial_id"`
	Username string `json:"username"`
	Date string `json:"date"`
	Body string `json:"body"`
}