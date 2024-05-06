const express = require('express');
const { Octokit } = require("@octokit/rest");
const app = express();
const PORT = 3000;

app.use(express.static('public'));

// Initialize Octokit with your GitHub token
const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN
});

// Route to list repositories and provide links to their READMEs
app.get('/user-readmes', async (req, res) => {
    const username = req.query.username;

    try {
        const repos = await octokit.paginate(octokit.repos.listForUser, {
            username: username,
            per_page: 100
        });

        let html = `<html><head><title>Repositories for ${username}</title></head><body>`;
        html += `<h1>Repositories for ${username}</h1>`;
        html += `<ul>`;

        // Generate a list item for each repository with a link to a route for viewing the README
        repos.forEach(repo => {
            html += `<li><a href="/readme?owner=${repo.owner.login}&repo=${repo.name}">${repo.name}</a></li>`;
        });

        html += `</ul>`;
        html += `<a href="/">Back</a>`;
        html += `</body></html>`;

        res.send(html);
    } catch (error) {
        console.error('Failed to fetch repositories:', error);
        res.status(500).send('Failed to fetch repositories');
    }
});

// Route to display README content
app.get('/readme', async (req, res) => {
    const owner = req.query.owner;
    const repo = req.query.repo;

    try {
        const response = await octokit.repos.getReadme({
            owner: owner,
            repo: repo,
            mediaType: {
                format: 'html'
            }
        });

        let html = `<html><head><title>README for ${repo}</title><link rel="stylesheet" href="/custom.css"></head><body>`;
        html += `<h1>README for ${repo}</h1>`;
        html += response.data;
        html += `<br><a href="/user-readmes?username=${owner}">Back to repositories</a>`;
        html += `</body></html>`;

        res.send(html);
    } catch (error) {
        console.error('Error fetching README:', error);
        res.status(500).send(`Error fetching README for ${repo}`);
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
