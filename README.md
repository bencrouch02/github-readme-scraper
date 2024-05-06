# GitHub README Scraper

![image](https://github.com/bencrouch02/github-readme-scraper/assets/131415549/ad4526f8-f44a-4067-8a18-e83eac29882e)

![image](https://github.com/bencrouch02/github-readme-scraper/assets/131415549/2b3bb384-6885-4839-ad97-aed80ec129ac)

## Description

This project is a proof of concept for a GitHub README scraper developed using Node.js. The project utilizes GitHub's API to dynamically pull README files from any public GitHub repository. Developed using Node.js, this version uses the Octokit library to make authenticated HTTP requests to GitHub's API, allowing for efficient access to GitHub's resources.

The primary purpose of this project is to demonstrate the feasibility of using GitHub's API to dynamically pull project documentation, keeping the content fresh and updated. This functionality is particularly useful for personal portfolio websites, ensuring that project details are always current without manual updates.

## Technical Goals

- **Showcase Node.js and GitHub API integration**: Demonstrate proficiency in using Node.js with the GitHub API via the Octokit library to fetch repository data.
- **Enhance portfolio functionality**: Provide a dynamic, self-updating portfolio that showcases real-time data directly from GitHub, reducing redundancy and ensuring consistency.
- **Engage potential employers and collaborators**: Offer an up-to-date, detailed view of academic and personal projects in an easily accessible and dynamically updated format.

## Installation

To run this project, you need to have Node.js installed on your machine. Follow these steps to set up and run the project:

1. **Clone the repository**:
2. **Navigate to the directory**:
3. **Install dependencies**:
4. **Set up the .env file**:

- Create a `.env` file in the root directory.
- Add `GITHUB_TOKEN=your_github_api_token_here` to the file. Ensure you have generated a personal access token from GitHub with the appropriate scopes.

5. **Run the application**:

- Use the command: `node scraper.js`

6. **Interact with the application**:

- Open http://localhost:3000/ in your browser.
- Enter a GitHub username to see a list of their repositories.
- Click on any repository to view its README file.

## How it Works

Upon running the application and navigating to the main page, you are prompted to enter a GitHub username. The system then fetches a list of all repositories associated with that username. Each repository is listed with a link to view its README file, which is rendered in HTML format using the data fetched via GitHub's API.
