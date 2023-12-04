// Fetch to load the header.html file
fetch('/header/header.html')
  .then(response => {
    return response.text();
  })
  .then(data => {
    // Create a new header element
    var header = document.createElement('header');
    header.innerHTML = data;
    var mainContent = document.getElementById('main-content');
    var parent = mainContent.parentNode;

    parent.insertBefore(header, mainContent);
  })
  .catch(error => {
    console.log('An error occured when loading the header: ', error);
  });

// Fetch to load the footer.html file
fetch('/footer/footer.html')
.then(response => {
  return response.text();
})
.then(data => {
  // Create a new footer element
  var footer = document.createElement('footer');
  footer.innerHTML = data;
  var mainContent = document.getElementById('main-content');
  var parent = mainContent.parentNode;

  parent.insertBefore(footer, mainContent.nextSibling);
})
.catch(error => {
  console.log('An error occured when loading the footer: ', error);
});