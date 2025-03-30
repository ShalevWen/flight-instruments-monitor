## Prerequisites

To run the server you need the following programs installed on your machine:

1. [NodeJS](https://nodejs.org/en/download)
2. [MongoDB](https://www.mongodb.com/try/download/community)

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/flight-instruments-monitor.git
   cd flight-instruments-monitor
   ```

2. Install the required dependencies for the client and build the client:

   ```sh
   cd client
   npm install
   npm run build
   ```

3. Install the required dependencies for the server and build the server:

   ```sh
   cd ../server
    npm install
    npm run build
    ```

## Usage
1. Start the server:

   ```sh
   cd server
   npm start
   ```

2. Open the client in your web browser by navigating to `http://localhost:8000`.
    To open the client from other devices in the same network, use the server's IP address instead of `localhost`.
