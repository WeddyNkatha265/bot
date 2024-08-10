# Bot Battlr

Welcome to **Bot Battlr** – the ultimate app for creating your own Bot Army! This React application allows users to browse through a list of bots, view details, enlist them into their army, and manage the enlisted bots.

https://bot-gw77eq6hd-weddys-projects-bb6f16be.vercel.app

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Core Functionality](#core-functionality)
- [Advanced Functionality](#advanced-functionality)
- [Contributing](#contributing)
- [License](#license)

## Features

- **View All Bots**: See profiles of all available bots.
- **Enlist Bots**: Add bots to your army with a single click.
- **Manage Your Army**: Release bots from your army or discharge them permanently.
- **Data Persistence**: The app communicates with a local JSON server for data management.

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/bot-battlr.git
    cd bot-battlr
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Set up the JSON server**:
    - Create a `db.json` file in the root directory with the following content:
    ```json
    {
      "bots": [
        {
          "id": 101,
          "name": "wHz-93",
          "health": 94,
          "damage": 20,
          "armor": 63,
          "bot_class": "Support",
          "catchphrase": "1010010101001101100011000111101",
          "avatar_url": "https://robohash.org/nostrumrepellendustenetur.png?size=300x300&set=set1",
          "created_at": "2018-10-02T19:55:10.800Z",
          "updated_at": "2018-10-02T19:55:10.800Z"
        },
        {
          "id": 102,
          "name": "RyM-66",
          "health": 86,
          "damage": 36,
          "armor": 77,
          "bot_class": "Medic",
          "catchphrase": "0110011100000100011110100110011000011001",
          "avatar_url": "https://robohash.org/quidemconsequaturaut.png?size=300x300&set=set1",
          "created_at": "2018-10-02T19:55:10.827Z",
          "updated_at": "2018-10-02T19:55:10.827Z"
        }
      ]
    }
    ```

    - Start the JSON server:
    ```bash
    npx json-server --watch db.json --port 8001
    ```

4. **Run the application**:
    ```bash
    npm start
    ```

## Usage

- Open your browser and navigate to `http://localhost:3000`.
- View the list of bots and start enlisting them into your army.
- Manage your army by releasing or discharging bots.

## Core Functionality

- **Bot Collection**: Displays all available bots fetched from the JSON server.
- **Your Bot Army**: Shows the bots you have enlisted in your army.
- **Enlist Bots**: Click on a bot to add it to your army.
- **Release Bots**: Click on a bot in your army to release it.
- **Discharge Bots**: Permanently delete a bot from the server and your army by clicking the "x" button.

## Advanced Functionality (Optional)

- **Bot Details View**: Display detailed information about a bot before enlisting it.
- **Sorting and Filtering**: Sort bots by health, damage, or armor, and filter them by class.

## Contributing

Contributions are welcome! Please create a pull request or open an issue if you have any suggestions or bug reports.

## License

This project is licensed under the MIT License.
