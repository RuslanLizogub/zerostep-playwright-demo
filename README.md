# ZeroStep Playwright Demo

Demonstration project for testing with Playwright and ZeroStep AI.

## Installation

1. Install dependencies:
```bash
npm install
```

2. Install Playwright browsers:
```bash
npx playwright install
```

3. Configure ZeroStep AI token (choose one method):

**Method 1: .env file (recommended)**
```bash
# Create .env file in project root
echo "ZEROSTEP_TOKEN=your_token_here" > .env
```

**Method 2: zerostep.config.json file**
```json
{
  "TOKEN": "your_token_here"
}
```

**Method 3: Environment variable**
```bash
export ZEROSTEP_TOKEN=your_token_here
```

### How to get token:
1. Go to https://app.zerostep.com
2. Sign up or log into your account
3. Find token in profile settings
4. Replace `your_token_here` with your actual token

## Running Tests

### Regular run (headless)
```bash
npm test
```

### Run with visible browser
```bash
npm run test:headed
```

### Run with UI interface
```bash
npm run test:ui
```

## Description

Project contains a test for automating Google search using ZeroStep AI. The test performs the following actions:

1. Opens Google homepage
2. Searches for a specific term using AI
3. Waits for search results page
4. Extracts the title of the first organic search result
5. Displays the result in console

## Requirements

- Node.js 16+
- npm or yarn
