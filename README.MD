# Dog Breed Information API

This Node.js API provides comprehensive information about various dog breeds. It allows users to perform CRUD (Create, Read, Update, Delete) operations on dog breed data, making it easy to manage and retrieve information about different breeds.

## Features

- **Create:** Add new dog breeds with their corresponding details such as breed name, life span, traits, description, temperament, intelligence, breed group, breed size, weight, images, and breed characteristics.
- **Read:** Retrieve information about dog breeds by ID, name, and language option to support multilingual data.
- **Update:** Update existing dog breed information to keep it up to date and accurate.
- **Delete:** Remove dog breeds from the database if they are no longer needed.

## Technology Stack

- Node.js: A JavaScript runtime for building scalable and efficient server-side applications.
- Express.js: A flexible and minimalistic web application framework for Node.js.
- MongoDB: A popular NoSQL database for storing and retrieving dog breed information.
- Mongoose: An Object Data Modeling (ODM) library for MongoDB, providing a simple and straightforward way to interact with the database.

## Getting Started

To use this API locally, follow these steps:

1. Clone the repository and navigate to the project directory.
2. Install the dependencies using `npm install`.
3. Set up a MongoDB database and provide the connection details in the configuration file.
4. Start the server using `npm start`.
5. Access the API endpoints using a tool like Postman or any web browser.

## API Endpoints

- `GET /api/dogs`: Retrieve a list of all dog breeds.
- `GET /api/dogs/:id`: Get information about a specific dog breed by ID.
- `GET /api/dogs/:name`: Get information about a specific dog breed by name.
- `GET /api/dogs/:param?lang=:language`: Get information about a dog breed by ID or name with language support.
- `POST /api/dogs`: Create a new dog breed.
- `PUT /api/dogs/:id`: Update information about a dog breed by ID.
- `DELETE /api/dogs/:id`: Delete a dog breed by ID.

## Contribution

Contributions to this API project are welcome! If you find any bugs, have feature suggestions, or want to improve the codebase, feel free to open an issue or submit a pull request.

## License

This API is open-source and available under the [MIT License](https://opensource.org/licenses/MIT). You are free to use, modify, and distribute it as per the terms of the license.