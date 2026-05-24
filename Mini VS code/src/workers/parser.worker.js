
// Web Workers
// Why?

// Heavy parsing blocks UI thread.

// Move to worker thread.


self.onmessage = (e) => {

  const code = e.data;

  const ast = parse(code);

  self.postMessage(ast);
};


const worker = new Worker(
  '/src/workers/parser.worker.js'
);

worker.postMessage(code);

worker.onmessage = e => {
  console.log(e.data);
};