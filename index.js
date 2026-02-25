// Core CLI Code for anyDAO
// Importing necessary modules from inquirer for creating interactive CLI prompts
import select, { Separator } from '@inquirer/select';
import { input, password, confirm } from '@inquirer/prompts';
// Importing file handling for inputs.json used for zero knowledge operations using node
import fs from 'fs';
import path from 'path';

// importing crypto library for hashing secrets
const { createHmac } = require('node:crypto');

// Handling Ctrl+C (SIGINT) to allow exit
process.on('SIGINT', () => {
    console.log("\nUser Pressed Ctrl+C, Exiting...");
    process.exit();
});

// To find the current working directory and joining paths
const DATA_FILE = path.join(process.cwd(), 'inputs.json')

// To check if inputs.json has already been made or not
function initializeStorage() {
    if(!fs.existsSync(DATA_FILE)) {
        fs.writeFileSync(DATA_FILE, JSON.stringify({}, null, 2));
    }
}

// To add new information into inputs.json
function addInputs(data) {
    initializeStorage();
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

// Note: Create more Key Handling functions as needed for other key combinations (e.g., Ctrl+D for EOF)

// Main function to start the CLI application
async function start() {
    try {
        // Prompting the user to choose between New User and Existing User
        const answer = await select({
            message: 'Choose your Choice',
            choices: [
                {
                    name: 'New User',
                    value: 'new user',
                    description: 'Choose this option if you are a new user',
                },
                {
                    name: 'Existing User',
                    value: 'existing user',
                    description: 'Choose this option if you are an existing user',
                },

                // Note: Add more options such as "Admin Login" or "Guest Access" as needed
                new Separator()
            ],
        });

        // Handling the New User flow
        if (answer === 'new user') {
            const walletAddress = await input({
                message: 'Enter your Wallet Address',
                required: true,
                validate: (value) => {
                    if (!value.startsWith('0x') || value.length !== 42) {
                        return 'Enter a valid 0x Ethereum wallet address';
                    }
                    return true;
                },
            });

            // Note: Hash the secret so that it cannot be accessed easily
            // For now, it is being sent as it is for fast development
            const secret = await password({
                message: 'Enter your Secret',
                required: true,
                validate: (value) => {
                    if (value.length < 6) {
                        return 'Secret must be at least 6 characters';
                    }
                    return true;
                },
            });
            // Improvment: Secret is hashed using HMAC with SHA256 algorithm and the wallet address as the message
            const hashedSecret = createHmac('sha256', secret).update(walletAddress).digest('hex');

            const balance = await input({
                message: 'Enter your balance',
                required: true,
                validate: (value) => {
                    if (isNaN(value)) {
                        return 'Balance must be a valid number';
                    }

                    if (Number(value) < 0) {
                        return 'Balance cannot be negative';
                    }

                    return true;
                },
            });

            // An object using the information taken from the CLI argument
            const userInput = {
                walletAddress,
                hashedSecret,
                balance: Number(balance)
            }

            // Add the input in `AddInputs` function
            // In a real environment, this should be pushed into a database
            addInputs(userInput)

            // Note: Add DB integration here to save the new user details (walletAddress, secret, balance) to a database or file (if needed)

            console.log('\nNew user registered successfully.');
            console.log(`Wallet: ${walletAddress}`);
        }

        // Handling the Existing User flow
        if (answer === 'existing user') {
            const walletAddress = await input({
                message: 'Enter your Wallet Address',
                required: true,
            });

            const secret = await password({
                message: 'Enter your Secret',
                required: true,
            });

            console.log('\nLogin attempt captured.');
        }
    } catch (error) {
        // Handling any unexpected errors
        // Note: Add more specific error handling based on the type of error (e.g., validation errors, database errors, etc.)
        const exitConfirmation = await confirm({
            message: 'User entered ctrl + C. Do you want to exit?',
            default: true,
        })
        console.log("Exiting...");
        process.exit(1);

    }
}

start();