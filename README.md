
# Peeswap

Peeswap is a decentralized web swapping protocol designed to facilitate easy and secure asset swapping. The project is split into two main parts:

- **Client**: A front-end application built with Vite and TypeScript.
- **Web3**: A back-end service built with Rust.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Clone the Repository](#clone-the-repository)
  - [Running the Client](#running-the-client)
  - [Running the Web3 Service](#running-the-web3-service)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Peepswap is a user-friendly decentralized application (dApp) that allows users to swap assets seamlessly on the blockchain. The project leverages modern web technologies and Rust for robust performance and security.

## Features

- Decentralized asset swapping
- User-friendly interface
- Secure and fast transactions
- Built with modern web technologies and Rust

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (for running the client)
- **npm** or **yarn** (for managing JavaScript packages)
- **Rust** (for compiling and running the web3 service)
- **Cargo** (Rust package manager)

## Getting Started

Follow these steps to set up and run the Peepswap project locally.

### Clone the Repository

```bash
git clone https://github.com/your-username/peepswap.git
cd peepswap
```

### Running the Client

1. **Navigate to the client directory**:

    ```bash
    cd client
    ```

2. **Install dependencies**:

    If you are using npm:

    ```bash
    npm install
    ```

    Or, if you are using yarn:

    ```bash
    yarn
    ```

3. **Run the development server**:

    If you are using npm:

    ```bash
    npm run dev
    ```

    Or, if you are using yarn:

    ```bash
    yarn dev
    ```

4. **Open your browser and navigate to** `http://localhost:3000` to see the application running.

### Running the Web3 Service

1. **Navigate to the web3 directory**:

    ```bash
    cd ../web3
    ```

2. **Compile the Rust code**:

    ```bash
    cargo build --release
    ```

3. **Run the web3 service**:

    ```bash
    cargo run --release
    ```

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch: `git checkout -b my-feature-branch`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin my-feature-branch`.
5. Submit a pull request.

## License

Peepswap is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
