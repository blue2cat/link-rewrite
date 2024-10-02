# Link Rewrite
A simple link shortener using Cloudflare Workers
## Setup 
1. Clone this repo to your GitHub account
2. Create a JSON file using the following syntax:

```
[
    {
        "uri": "/path-1",
        "target": "https://example.com/path-1"
    },
    {
        "uri": "/path-2",
        "target": "https://example.com/path-2"
    }
]
```
3. Place the JSON file in a GitHub gist (preferrably private). Copy the link to the raw JSON and paste it in `wrangler.toml` like `JSON_URL = "your json url here"`

## Deploying to Cloudflare
4. Create a new worker in Cloudflare with the this repo closed to your GitHub account
5. Add an environment variable to the worker with the key `JSON_URL` and set the value to the URL of your GitHub gist
6. Link the worker to a domain you posess in Cloudflare. At this point you can edit the gist to add new values when needed

## Local Development
4. Run `npm install` to install dependancies
5. To open the test instance run `npm run dev`

