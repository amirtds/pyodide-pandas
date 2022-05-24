self.onmessage = function(e) {
    console.log("hello from the worker")
    console.log(e.data)
    self.postMessage("hello from the worker")

}