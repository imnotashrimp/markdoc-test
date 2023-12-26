# Single-sourcing demo

This is a quick-and-dirty demo
of what the tech writers are looking for in a single-sourcing tool.
The demo uses [Markdoc](https://markdoc.dev/) (created by Stripe).

## What the demo does and doesn't do

This demo:

- Showcases a very basic example of what we can do with a single-sourcing utility.
- Demonstrates the functionality we need.

It doesn't:

- Advocate for Markdoc specifically.
- Advocate for having the writers work in any particular source.

## To play with the demo

1. Clone this repo: `git clone https://github.com/imnotashrimp/markdoc-test.git`.
2. `cd` to `markdoc-test` and run `npm install`.
3. Start the server: `npm run dev`.

You can then point your browser to `localhost:3000/docs/<PAGE>` to see a sample page. Replace `<PAGE>` with the name of the markdown file in the folder `/pages/docs` to render. For example, to render `/pages/docs/create-contact.md`, go to `localhost:3000/docs/create-contact`.

To live-change the content:

1. Open `output.config.js` in your editor.
2. Change `target` to `'rest'` or `'velo'` and save.
3. Set `internal` to `true` or `false` and save.

Every time you save, the site rebuilds and reloads.
