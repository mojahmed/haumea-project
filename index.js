// Smooth scrolling to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Skills section
document.getElementById('skills').innerHTML = '<h2>Skills</h2><ul><li>HTML</li><li>CSS</li><li>JavaScript</li></ul>';


// Experience section
const items = ['Barista', 'Business Owner', 'Truck Driver'];
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










