const operationsList = [
    {
        name: 'Freezing Divider',
        element: 'ice',
        operation: 'divide',
    },
    {
        name: 'Flaming Multiplier',
        element: 'fire',
        operation: 'multiply',
    },
    {
        name: 'Earthquake Adder',
        element: 'earth',
        operation: 'add',
    },
    {
        name: 'Thunder Striker Subtractor',
        element: 'electricity',
        operation: 'subtract',
    },
    {
        name: 'Wind Gust Doubler',
        element: 'air',
        operation: 'doubler',
    },
    {
        name: 'Water Surge Tripler',
        element: 'water',
        operation: 'tripler',
    },
    {
        name: 'Shadow Inverter',
        element: 'darkness',
        operation: 'invert', // Inverts the number (e.g., -x)
    },
    {
        name: 'Light Amplifier',
        element: 'light',
        operation: 'amplify', // Increases the number by a factor (e.g., x * 1.5)
    },
    {
        name: 'Gravity Puller',
        element: 'gravity',
        operation: 'pull', // Reduces the number towards zero (like floor function)
    },
    {
        name: 'Magnetic Reverser',
        element: 'magnet',
        operation: 'reverse', // Reverses the sign of the number (e.g., -x -> x)
    },
    {
        name: 'Crystal Splitter',
        element: 'crystal',
        operation: 'split', // Splits the number into equal parts (e.g., 6 -> 3, 3)
    },
    {
        name: 'Poison Decayer',
        element: 'poison',
        operation: 'decay', // Slowly reduces the number over time (e.g., x -> x - 1 per turn)
    },
    {
        name: 'Time Freezer',
        element: 'time',
        operation: 'freeze', // Freezes the current value for a set number of turns
    },
    {
        name: 'Vortex Twister',
        element: 'vortex',
        operation: 'twist', // Randomizes the number within a given range
    },
    {
        name: 'Solar Reflector',
        element: 'solar',
        operation: 'reflect', // Mirrors the value based on certain criteria (e.g., positive -> negative)
    },
    {
        name: 'Lunar Reshaper',
        element: 'moon',
        operation: 'reshape', // Alters the number based on a pattern or formula
    },
    {
        name: 'Nebula Distorter',
        element: 'nebula',
        operation: 'distort', // Changes the number unpredictably, creating chaos
    },
    {
        name: 'Magnet Puller',
        element: 'magnet',
        operation: 'pull', // Pulls a value towards a target number
    },
    {
        name: 'Tornado Swapper',
        element: 'wind',
        operation: 'swap', // Swaps the values between two numbers
    },
    {
        name: 'Plasma Heater',
        element: 'plasma',
        operation: 'heat', // Increases the number exponentially (e.g., x * x)
    },
    {
        name: 'Tidal Push',
        element: 'water',
        operation: 'push', // Pushes the number in a specific direction (e.g., increase or decrease)
    }
];

let number = 0;
let multiplacationdmg = 2;
let divisiondmg = 0;
let additiondmg = 5;
let subtractiondmg = 0;

function add(){
number =+ additiondmg;
console.log(number);
}

function subtract() {
number =- subtractiondmg;
console.log(number);
}
function multiply() {
number = number * multiplacationdmg;
console.log(number);
}
function division() {
    number = number / multiplacationdmg;
    console.log(number);
    }

add();
multiply();