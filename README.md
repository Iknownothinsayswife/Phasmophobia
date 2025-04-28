# Phasmophobia Evidence Table

An interactive evidence table for Phasmophobia that helps track ghost evidence and narrow down ghost types.

## Features
- Interactive evidence selection
- Real-time ghost type filtering
- Exclude specific ghosts
- Separate table for excluded ghosts
- Modern and clean UI

## Requirements
- Node.js v16.20.2
- npm (comes with Node.js)
- Modern web browser

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Iknownothinsayswife/Phasmophobia.git
```

2. Navigate to the project directory:
```bash
cd Phasmophobia
```

3. Install dependencies:
```bash
npm install
```

## Running the Application

Start the development server:
```bash
npm run serve
```

The application will be available at:
- Local: http://localhost:8080/
- Network: Check your terminal output for the network URL

## Usage
- Click the evidence buttons to cycle through states:
  - Red X (✗): Evidence is not present
  - Yellow Tilde (~): Evidence is inconclusive
  - Green Check (✓): Evidence is confirmed
- Use the exclude checkbox to remove specific ghosts from the main table
- Excluded ghosts will appear in a separate table below

## Development
This project uses:
- Vue.js 2.6
- Tailwind CSS
- TypeScript

## Contributing
Feel free to submit issues and pull requests.

## License
MIT License