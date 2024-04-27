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



// document.getElementById('skills').innerHTML = '<h2>Skills</h2><li>ABS</li><li>CSS</li><li>JavaScript</li><li>PHP</li>';




