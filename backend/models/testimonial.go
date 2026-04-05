package models

type Testimonial struct {
	ID int `json:"id"`
	Username string `json:"name"`
	Date string `json:"date"`
	Body string `json:"body"`
}