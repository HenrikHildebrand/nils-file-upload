// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start();
require("turbolinks").start();
require("@rails/activestorage").start();
require("channels");

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

function handleUpload(event) {
  console.log("UPLOADED", event.target.files);
  // Create a reader object
  const files = event.target.files;
  var reader = new FileReader();
  if (files.length) {
    var textFile = files[0];
    // Read the file
    reader.readAsText(textFile);
    // When it's loaded, process it
    reader.addEventListener("load", processFile);
  } else {
    alert("Please upload a file before continuing");
  }
}

function processFile(e) {
  var result = e.currentTarget.result;
  console.log("RESULTS", result);
}

window.onload = function () {
  const fileEl = document.getElementById("file-select");
  fileEl.addEventListener("change", handleUpload);
};
