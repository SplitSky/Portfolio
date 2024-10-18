package main

import (
	"encoding/json"
	"log"
	"net/http"

	"github.com/gorilla/mux"
	"github.com/rs/cors"
)

type Project struct {
	ID          int    `json:"id"`
	Name        string `json:"name"`
	Description string `json:"description"`
}

func main() {
	router := mux.NewRouter()

	// Define your API routes
	router.HandleFunc("/api/projects", getProjects).Methods("GET")

	// Initialize CORS middleware
	c := cors.New(cors.Options{
		AllowedOrigins:   []string{"http://localhost:5173"}, // Allow your frontend's origin
		AllowCredentials: true,
		AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE"},
		AllowedHeaders:   []string{"Content-Type", "Authorization"},
	})

	// Wrap your router with the CORS middleware
	handler := c.Handler(router)

	// Start the server
	log.Println("Server running on port 5000")
	log.Fatal(http.ListenAndServe(":5000", handler))
}

func getProjects(w http.ResponseWriter, r *http.Request) {
	projects := []Project{
		{ID: 1, Name: "Project 1", Description: "A cool project description."},
		{ID: 2, Name: "Project 2", Description: "Another cool project description."},
		{ID: 3, Name: "Project 3", Description: "Another awesome project!"},
	}

	// Set the response content type to JSON
	w.Header().Set("Content-Type", "application/json")

	// Encode the projects slice to JSON and send it as a response
	err := json.NewEncoder(w).Encode(projects)
	if err != nil {
		http.Error(w, "Error encoding JSON", http.StatusInternalServerError)
	}
}
