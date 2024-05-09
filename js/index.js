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
const skills = ['HTML', 'JavaScript', 'CSS', 'python', 'GitHub'];
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
// const projects = ['in processing', 'in processing ', 'in processing'];
// const listProjects = document.getElementById('projects');
// projects.forEach(project => {


//     const listProject = document.createElement('li');
//     listProject.textContent = project;


//     listProjects.appendChild(listProject);
// });
try {
    fetch("https://api.github.com/users/mojahmed/repos")
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            // data.map(data => {
            // console.log(data.name) //access to the name of my repos
            // })
            let projects = data;

            const projectSection = document.getElementById('projects');
            const projectList = document.createElement('ul');
            projectSection.appendChild(projectList);

            for (let i = 0; i < projects.length; i++) {
                // console.log(projects)

                let projectElement = document.createElement("li");
                projectElement.textContent = projects[i].name;




                projectList.appendChild(projectElement);
            }
        })
        .catch(error => console.error('Error:', error));
} catch (error) {
    console.error(error);
}




// form section 
const messageForm = document.querySelector("form[name='leave_message']");
const messagesSection = document.getElementById("messages");

messageForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const userName = event.target.usersName.value;
    const email = event.target.emails.value;
    const userMessage = event.target.usersMessage.value;

    console.log("Name:", userName);
    console.log("email:", email);
    console.log("Message:", userMessage);

    event.target.reset();

    // Display the message 
    const messageList = messagesSection.querySelector("ul");
    const newMessage = document.createElement('li');
    newMessage.innerHTML = `<a href= 'mailto:${email}'>${userName}</a>  wrote this message: <span>${userMessage}</span>`;

    // Create and append remove button
    const removeButton = document.createElement('button');
    removeButton.innerHTML = "Remove";
    removeButton.type = "button";
    removeButton.classList.add("remove-button");

    removeButton.addEventListener('click', function (e) {
        let entry = removeButton.parentNode;
        entry.remove();
        checkEmpty(); // Check if the list is empty after removing an item
    });

    // Create and append edit button
    const editButton = document.createElement('button');
    editButton.innerHTML = "Edit";
    editButton.type = "button";
    editButton.classList.add("edit-button");

    editButton.addEventListener('click', function (e) {
        // Clear specific form fields related to the message being edited
        messageForm.usersName.value = '';
        messageForm.emails.value = '';
        messageForm.usersMessage.value = '';

        // Populate the form fields with the message details
        messageForm.usersName.value = userName;
        messageForm.emails.value = email;
        messageForm.usersMessage.value = userMessage;
    });

    newMessage.appendChild(removeButton);
    newMessage.appendChild(editButton);
    messageList.appendChild(newMessage);

    checkEmpty(); // Check if the list is empty after adding a new message
});

// Function to check if the list is empty and hide the messages section 
function checkEmpty() {
    const messageList = messagesSection.querySelector("ul");
    const messagesHeader = messagesSection.querySelector("h2");
    if (messageList.children.length === 0) {
        // don't display anything if the messagesSection is empty 
        messagesSection.style.display = "none";
        // hide the Header too if the messagesSection is empty 
        messagesHeader.style.display = "none";
    } else {
        messagesSection.style.display = "block";
        messagesHeader.style.display = "block";
    }
}
window.addEventListener('load', function () {
    checkEmpty();
});

