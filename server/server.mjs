// Import required modules
import express from "express"; // Express framework for building web applications
import morgan from "morgan"; // HTTP request logger middleware
import bp from "body-parser"; // Parse incoming request bodies

// Create an Express application
const app = express();

// Set up middleware
app.use(bp.urlencoded({ extended: true })); // Parse URL-encoded request bodies
app.use(bp.json()); // Parse JSON request bodies
app.use(morgan("dev")); // Log HTTP requests

// Create an empty array to store todo items
const db = [];

// Handle POST request to '/todo'
app.post("/todo", (req, res) => {
    // Create a new todo item
    const newTodo = {
        id: Date.now(),
        text: req.body.text,
    };

    // Add the new todo item to the database
    db.push(newTodo);

    // Respond with the newly created todo item
    res.json(newTodo);
});

// Handle GET request to '/todo'
app.get("/todo", (req, res) => {
    // Respond with the entire todo database
    res.json(db);
});

app.get("/todo/:id", (req, res) => {
    // Find the todo item with the specified ID in the database
    const todo = db.find((t) => {
        return t.id === +req.params.id;
    });

    // Check if a todo item with the specified ID was found
    if (todo) {
        // Respond with the found todo item
        res.json({ data: todo });
    } else {
        // Respond with an error message if the todo item was not found
        res.status(404).json({ error: "Todo item not found" });
    }
});

// Start the server and listen on port 8000
app.listen(8000, () => {
    console.log("Server on http://localhost:8000");
});
