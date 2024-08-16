const body = document.querySelector("body");
const container = document.createElement("div");
container.className = "grid grid-cols-3 gap-x-8 gap-y-14";
body.appendChild(container);

const emotions = [
  "happiness",
  "optimism",
  "kindness",
  "giving",
  "respect",
  "ego",
];

const handleChange = (event) => {
  console.log("clicked:", event.target.id);
  const btns = document.getElementsByTagName("input");
  if (event.target.id === "ego" && event.target.checked) {
    for (const btn of btns) {
      if (btn.id !== "ego") btn.checked = false;
    }
  } else if (!(event.target.id === "ego" && event.target.checked)) {
    const ego = document.getElementById("ego");
    if (ego.checked) event.target.checked = !event.target.checked;
  }
};

const createToggleBtn = (text) => {
  const container = document.createElement("span");
  container.className = "flex flex-col gap-4";

  const newSwitch = document.createElement("input");
  const label = document.createElement("label");

  newSwitch.className = "toggle toggle-lg toggle-success";
  newSwitch.id = text;
  newSwitch.addEventListener("change", handleChange);
  newSwitch.setAttribute("type", "checkbox");
  if (newSwitch.id === "ego") newSwitch.checked = true;

  label.textContent = text.toUpperCase();
  label.setAttribute("for", "text");

  container.appendChild(newSwitch);
  container.appendChild(label);

  return container;
};

emotions.forEach((item) => {
  container.appendChild(createToggleBtn(item));
});
