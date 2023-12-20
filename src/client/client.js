// eslint-disable-next-line no-undef
const eventSource = new EventSource(
  "https://server-test-v7s6.onrender.com/event"
);
function updateMessage(message) {
  console.log("message", message);
}

eventSource.onopen = function () {
  console.log("Stream Opened?");
};

eventSource.onmessage = function (event) {
  const d = document.getElementById("raports");
  const el = document.createElement("div");
  el.innerText = "TEST";
  d.appendChild(el);
};

eventSource.onerror = function () {
  updateMessage("server closes connection222");
  eventSource.close();
};
