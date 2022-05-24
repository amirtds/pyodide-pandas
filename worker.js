importScripts("https://cdn.jsdelivr.net/pyodide/v0.20.0/full/pyodide.js");

async function initialize(){
    self.pyodide = await loadPyodide();
    await self.pyodide.loadPackage("pandas");
}

let initialized = initialize();

self.onmessage = async function(e){
    await initialized;
    let result = await self.pyodide.runPythonAsync(`
        def say_hello():
            return "Hello from Python!"
        say_hello()
    `);
    self.postMessage(result);
}