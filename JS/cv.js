// Get the button element
const cvButton= document.getElementById("cvButton");

// Add click event listener to the button
cvButton.addEventListener("click", function() {
  // Retrieve the PDF path from the data attribute
  const pdfPath = cvButton.getAttribute("data-pdf");
  
  // Open the PDF CV in a new tab or window
  window.open(pdfPath, "_blank");
});
// Get the button element
const cvButton2 = document.getElementById("cvButton2");

// Add click event listener to the button
cvButton2.addEventListener("click", function() {
  // Retrieve the PDF path from the data attribute
  const pdfPath = cvButton2.getAttribute("data-pdf");
  
  // Open the PDF CV in a new tab or window
  window.open(pdfPath, "_blank");
});

// Get the button element
const cvButton3 = document.getElementById("cvButton3");

// Add click event listener to the button
cvButton3.addEventListener("click", function() {
  // Retrieve the PDF path from the data attribute
  const pdfPath = cvButton3.getAttribute("data-pdf");
  
  // Open the PDF CV in a new tab or window
  window.open(pdfPath, "_blank");
});
