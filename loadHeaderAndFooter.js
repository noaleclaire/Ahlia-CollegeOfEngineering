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
    switch (document.title) {
      case "College of Engineering - Ahlia University | Bahrain":
        document.getElementById('title-logo').lastElementChild.innerHTML = "College of Engineering"
        break;
      case "College of Engineering - Faculty | Bahrain":
        document.getElementById('title-logo').lastElementChild.innerHTML = "Faculty"
        break;
      case "College of Engineering - Programmes | Bahrain":
        document.getElementById('title-logo').lastElementChild.innerHTML = "Programmes"
        break;
      case "College of Engineering - Events | Bahrain":
        document.getElementById('title-logo').lastElementChild.innerHTML = "Events"
        break;
      default:
        break;
    }
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