# github-readme-scraper

![image](https://github.com/bencrouch02/github-readme-scraper/assets/131415549/9adb876b-5a51-4c31-988a-b75f1f0295b6)

## Description

This project is a proof of concept for a GitHub README scraper developed using Node.js. It employs axios for making HTTP requests and cheerio for parsing HTML, allowing it to extract the contents of README files directly from GitHub URLs without utilizing GitHub's API. The scraper takes a URL, fetches the README.md file, and parses its Markdown content to display it in a readable format.

The primary purpose of this project is to demonstrate the feasibility of dynamically pulling project documentation to keep content fresh and updated, particularly for use in personal portfolio websites where showcasing up-to-date project details is crucial.

## Technical Goals

- **Showcase Node.js capabilities**: Demonstrate proficiency in using Node.js along with axios and cheerio to handle web scraping and HTML parsing.
- **Enhance portfolio functionality**: Provide a dynamic and self-updating portfolio that reduces redundancy and ensures consistency across platforms.
- **Engage potential employers and collaborators**: Offer an up-to-date, detailed view of my academic and personal projects in an easily accessible format.

## Installation

To run the `scraper.js` file, you need to have Node.js installed on your machine. Here are the generic installation instructions:

1. Clone the repository.
2. Navigate to the directory where the `scraper.js` file is located using the `cd` command.
3. Run the `scraper.js` file using the following command:
   ```
   node scraper.js
   ```
4. Open http://localhost:3000/ in the browser.
5. Enter the URL for a public repository.
