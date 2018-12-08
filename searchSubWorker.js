onmessage = function(e) {
  let msg = e.data;

  switch (msg.topic) {
    case "search":
      for (let i = 0; i < msg.data.length; i++) {
        if (
          msg.data[i].key.indexOf(msg.query) > -1 ||
          msg.data[i].text.indexOf(msg.query) > -1
        ) {
          postMessage({
            topic: "newResult",
            result: msg.data[i]
          });
        }
      }
      postMessage({ topic: "done" });
  }
};
