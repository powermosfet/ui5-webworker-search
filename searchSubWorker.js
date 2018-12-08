onmessage = function(e) {
  let msg = e.data;

  switch (msg.topic) {
    case "search":
      msg.data.forEach(element => {
        if (
          element.key.indexOf(msg.query) > -1 ||
          element.text.indexOf(msg.query) > -1
        ) {
          postMessage({
            topic: "newResult",
            result: element
          });
        }
      });
  }
};
