<div align="center">
<h1>React Rust App</h1> <br>
🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀
</div>
Main goal of this project is call rust function in the react app. 
For bundle I have used Snowpack. You can find confiration setup in `snowpack.config.mjs`.
Also we need wasm-bindgen package to import JavaScript things into Rust and export Rust things to JavaScript according the doc.

![React rust app](/doc/app.png?raw=true "React app")


## Available Scripts

### npm start

Runs the app in the development mode.
Open http://localhost:8080 to view it in the browser.

### npm run build

Builds a static copy of your site to the `build/` folder.
Your app is ready to be deployed!

### npx serve -s build
![Serve](/doc/serve.png?raw=true "Serve")