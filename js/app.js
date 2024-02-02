// variables
let text_input = document.querySelector(".text_input");
const add_btn = document.querySelector(".add_btn");
const output = document.querySelector(".output");
const update_btn = document.querySelector(".update_btn");
const delete_btn = document.querySelector(".delete_btn");
const boldBtn = document.querySelector(".bold");
const regular = document.querySelector(".regular");
const red = document.querySelector(".red");
const green = document.querySelector(".green");
const blue = document.querySelector(".blue");
const black = document.querySelector(".black");
const italic = document.querySelector(".italic");
const normal = document.querySelector(".normal");

add_btn.addEventListener("click", () => {
  let text = text_input.value;
  if (text) {
    localStorage.setItem("textData", text);
    location.reload();
  } else {
    alert("Please Enter Your Notes");
  }
});

window.addEventListener("load", () => {
  const value = localStorage.getItem("textData");
  output.innerText = value;
  update_btn.addEventListener("click", () => {
    text_input.innerText = value;
  });
  delete_btn.addEventListener("click", () => {
    localStorage.removeItem("textData");
    output.innerText = "";
  });
  boldBtn.addEventListener("click", () => {
    textFormatting(output, "700");
  });
  regular.addEventListener("click", () => {
    textFormatting(output, "400");
  });
  red.addEventListener("click", () => {
    changeTextColor(output, "red");
  });
  green.addEventListener("click", () => {
    changeTextColor(output, "green");
  });
  blue.addEventListener("click", () => {
    changeTextColor(output, "blue");
  });
  black.addEventListener("click", () => {
    changeTextColor(output, "black");
  });
  italic.addEventListener("click", () => {
    changeFontStyle(output, "italic");
  });
  normal.addEventListener("click", () => {
    changeFontStyle(output, "normal");
  });
});

// text formatitng
const textFormatting = (element, formattingStyle) => {
  element.style.fontWeight = formattingStyle;
};

// colors
const colors = {
  black: "#000",
  white: "#fff",
  red: "#FF0000",
  blue: "#0000FF",
  green: "#008000",
};

// change text color functionality
const changeTextColor = (element, value) => {
  let hexCode = colors[value];
  element.style.color = hexCode;
};

// change font style
const changeFontStyle = (element, style) => {
  element.style.fontStyle = style;
};
