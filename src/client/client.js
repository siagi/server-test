// eslint-disable-next-line no-undef
const eventSource = new EventSource("https://server-test-v7s6.onrender.com");
function updateMessage(message) {
  console.log("message", message);
}
eventSource.onmessage = function (event) {
  updateMessage(event.data);
};

eventSource.onerror = function () {
  updateMessage("server closes connection");
  eventSource.close();
};
