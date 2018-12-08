var subWorker;
var data = [];

onmessage = function(e) {
  let msg = e.data;
  console.log("searchWorker msg:");
  console.log(msg);

  switch (msg.topic) {
    case "setData":
      data = msg.data;
      break;

    case "search":
      postMessage({ topic: "clear" });
      if (subWorker) {
        subWorker.terminate();
      }
      console.log("creating subWorker");
      subWorker = new Worker("searchSubWorker.js");
      subWorker.onmessage = function(e) {
        let msg = e.data;
        postMessage(msg);
      };
      subWorker.postMessage({ topic: "search", data: data, query: msg.query });
  }
};
