// eslint-disable-next-line no-undef
const eventSource = new EventSource("http://localhost:3000/event");
function updateMessage(message) {
  console.log("message", message);
}

eventSource.onopen = function () {
  console.log("Stream Opened?");
};

eventSource.onmessage = function (event) {
  console.log(event.data);
  const d = document.getElementById("raports");
  const el = document.createElement("div");
  el.innerText = "TEST2";
  d.appendChild(el);
};

eventSource.onerror = function () {
  updateMessage("server closes connection222");
  eventSource.close();
};
