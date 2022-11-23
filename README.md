# simple CORS Anywhere

CORS Anywhere is a Node.js Express server that enables Cross-Origin Resource Sharing (CORS) for requests made from web browsers. It acts as a proxy server, allowing you to bypass CORS restrictions and access resources from different origins.

## Features
Handles CORS headers: The server automatically adds the necessary CORS headers to responses, including the "Access-Control-Allow-Origin" header, allowing requests from any origin.
Simple URL parameter-based proxying: Send a request to the server with the desired URL as a query parameter, and it will forward the request to that URL and return the response to the client.
Error handling: If the URL parameter is missing or there are any issues with fetching the URL, appropriate error responses are sent back to the client.
Asynchronous operations: Utilizes the async/await syntax and the fetch API for efficient and readable handling of asynchronous HTTP requests.
Dynamic port assignment: The server can be configured to listen on a specific port defined by the PORT environment variable. If the variable is not set, it defaults to port 3000.

## Usage
Install the required dependencies by running npm install.
Start the server by running npm start or node server.js.
Send requests to the server's root URL (http://localhost:{port}/) with the desired URL to proxy as a query parameter, like this: http://localhost:{port}/?url={desired_url}.
Please note that this server should be used responsibly and only for legitimate purposes. It is essential to understand the security implications of allowing unrestricted cross-origin requests.

## Contributing
Contributions to this project are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License
This project is licensed under the MIT License.

