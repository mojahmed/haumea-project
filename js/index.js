// Smooth scrolling to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// set the curetYear
const today = new Date();
const thisYear = today.getFullYear();

const footerContainer = document.getElementById('footer');
const footerElement = document.createElement('footer');
const copyright = document.createElement('p');

// print the copyright string on the page using innerHTML
copyright.innerHTML = `<small>Mohammed Ahmed &copy; ${thisYear}</small>`;

// Append copyright inside footerElement
footerElement.appendChild(copyright);
footerContainer.appendChild(footerElement);


// Skills section
const skills = ['HTML', 'JavaScript', 'CSS', 'python'];
const skillSection = document.getElementById('skill');
const skillList = document.createElement('ul');
skillSection.appendChild(skillList);

for (let skill of skills) {
    const listItem = document.createElement('li');
    listItem.innerHTML = [skill];
    skillList.appendChild(listItem);
}

// skills.forEach(item => {

//     const listItem = document.createElement('li');
//     listItem.textContent = item;
//     skillList.appendChild(listItem);

//     skillSection.appendChild(skillList);
// });




// Experience section
const items = ['Data Entry', 'Business Owner', 'Truck Driver', 'Barista'];
const listContainer = document.getElementById('experience');
items.forEach(item => {

    const listItem = document.createElement('li');
    listItem.textContent = item;

    listContainer.appendChild(listItem);
});


// Projects section 
const projects = ['in processing', 'in processing ', 'in processing'];
const listProjects = document.getElementById('projects');
projects.forEach(project => {


    const listProject = document.createElement('li');
    listProject.textContent = project;


    listProjects.appendChild(listProject);
});


// form section 
const messageForm = document.querySelector("form[name='leave_message']");
messageForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const userName = event.target.usersName.value;
    const email = event.target.emails.value;
    const userMessage = event.target.usersMessage.value;

    console.log("Name:", userName);
    console.log("email:", email);
    console.log("Message:", userMessage);



    event.target.reset();
    // event.target.usersName.value = '';
    // event.target.emails.value = '';
    // event.target.usersMessage.value = '';


    // display the message 
    const messageSection = document.getElementById("messages");
    const messageList = messageSection.querySelector("ul");
    const newMessage = document.createElement('li');
    newMessage.innerHTML = `<a href= 'mailto:${email}'>${userName}</a>  wrote this message: <span>${userMessage}</span>`;
    messageList.appendChild(newMessage);

    const removeButton = document.createElement('button');
    removeButton.innerHTML = "remove";
    removeButton.type = "button";
    removeButton.classList.add("remove-button");

    // adding eventlistener to the button 
    removeButton.addEventListener('click', function (e) {
        let entry = removeButton.parentNode;
        entry.remove();

    })
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);


    console.log(removeButton);


});





