# Todo DApp

This project is a decentralized application (DApp) that allows users to manage a to-do list using a smart contract on the Ethereum blockchain. The project includes a Solidity smart contract and a frontend to interact with it.

## Table of Contents

- [Getting Started](#getting-started)
- [Smart Contract](#smart-contract)
- [Frontend](#frontend)
- [Deployment](#deployment)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

To get started with this project, follow these instructions.

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)
- Truffle (v5 or later)
- Ganache (for local development)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/todo-dapp.git
   cd todo-dapp
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Install foundry globally if you haven't already:

   ```sh
   curl -L https://foundry.paradigm.xyz | bash
   ```

## Smart Contract

The smart contract is written in Solidity and provides the following functionalities:

- **createTodo**: Create a new to-do item.
- **updateTodo**: Update the title and description of an existing to-do item.
- **markTodo**: Mark a to-do item as completed or not completed.
- **getTodo**: Retrieve a specific to-do item.
- **deleteTodo**: Delete a to-do item.
- **getAllTodo**: Retrieve all to-do items.

### Contract Code

```solidity
pragma solidity 0.8.22;

contract Todo {
    struct TodoList {
        string title;
        string description;
        bool isCompleted;
    }

    TodoList[] public todo;

    function createTodo(
        string calldata _title,
        string calldata _description
    ) external {
        todo.push(TodoList(_title, _description, false));
    }

    function updateTodo(
        uint _index,
        string calldata _title,
        string calldata _description
    ) external {
        todo[_index].title = _title;
        todo[_index].description = _description;
    }

    function markTodo(uint _index) external {
        todo[_index].isCompleted = !todo[_index].isCompleted;
    }

    function getTodo(
        uint _index
    ) external view returns (string memory, string memory, bool) {
        TodoList memory todos = todo[_index];
        return (todos.title, todos.description, todos.isCompleted);
    }

    function deleteTodo(uint _index) external {
        delete todo[_index];
    }

    function getAllTodo() external view returns (TodoList[] memory) {
        return todo;
    }
}
```

## Frontend

The frontend is built with React and allows users to interact with the smart contract.

### Features

- Create a new to-do item
- Update an existing to-do item
- Mark a to-do item as completed or not completed
- Delete a to-do item
- View all to-do items

### Running the Frontend

To start the frontend application, run:

```sh
npm start
```

This will launch the app in development mode and open [http://localhost:3000](http://localhost:3000) in your default browser.

## Deployment

### Deploying the Smart Contract

1. Compile the smart contract:

   ```sh
   forge b
   ```

2. Deploy the smart contract to a local blockchain:

   ```sh
   forge t
   ```

## Usage

1. Ensure your Ethereum wallet (e.g., MetaMask) is connected to the same network where the smart contract is deployed.
2. Open the frontend application.
3. Use the interface to create, update, mark, delete, and view to-do items.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue to discuss changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
