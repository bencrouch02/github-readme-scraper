
const express = require('express');
const app = express();
const cheerio = require('cheerio');
const axios = require('axios');
const PORT = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/scrape', async (req, res) => {

    const url = req.query.url;

    try {
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);
        const articleContent = $('#repo-content-pjax-container > div > div > div.Layout.Layout--flowRow-until-md.react-repos-overview-margin.Layout--sidebarPosition-end.Layout--sidebarPosition-flowRow-end > div.Layout-main > react-partial > div > div > div.Box-sc-g0xbh4-0.yfPnm > div.Box-sc-g0xbh4-0.ehcSsh > div > div.Box-sc-g0xbh4-0.bJMeLZ.js-snippet-clipboard-copy-unpositioned').html();
        res.send(`
            <html>
                <head>
                    <title>Scraped Content</title>
                    <link href="/custom.css" rel="stylesheet">
                </head>
                <body>
                    <h1 class="title">Scraped Content</h1>
                    <div>${articleContent}</div>
                </body>
        `);
    }
    catch (error) {
        console.error('Error fetching page: ', error);
        res.status(500).send('Error fetching page');
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});