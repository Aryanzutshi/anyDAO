import select, { Separator } from '@inquirer/select';
import { input, password, confirm } from '@inquirer/prompts';

process.on('SIGINT', () => {
    console.log("\nUser Pressed Ctrl+C, Exiting...");
    process.exit();
});

async function start() {
    try {
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
                new Separator()
            ],
        });

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

            console.log('\nNew user registered successfully.');
            console.log(`Wallet: ${walletAddress}`);
        }

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
        const exitConfirmation = await confirm({
            message: 'User entered ctrl + C. Do you want to exit?',
            default: true,
        })
        console.log("Exiting...");
        process.exit(1);

    }
}

start();