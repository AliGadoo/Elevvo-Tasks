const fields = document.querySelectorAll("input, textarea");

fields.forEach((input) => {
  const wrapper = input.closest(".field, .textarea_field");
  const label = wrapper.querySelector("label");

  if (input.value.trim() !== "") {
    input.tagName === "INPUT"
      ? label.classList.add("move_label_up")
      : label.classList.add("textarea_label_up");
  }

  input.addEventListener("focusin", () => {
    input.tagName == "INPUT"
      ? label.classList.add("move_label_up")
      : label.classList.add("textarea_label_up");
  });

  input.addEventListener("focusout", () => {
    if (input.value == "") {
      input.tagName == "INPUT"
        ? label.classList.remove("move_label_up")
        : label.classList.remove("textarea_label_up");
    }
  });
});
