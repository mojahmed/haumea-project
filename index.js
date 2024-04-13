// Smooth scrolling to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Example: Populate Skills section with JavaScript
document.getElementById('skills').innerHTML = '<h2>Skills</h2><ul><li>HTML</li><li>CSS</li><li>JavaScript</li></ul>';


// Experience section
const items = ['Barista', 'Business Owner', 'Truck Driver'];
const listContainer = document.getElementById('experience');
items.forEach(item => {

    const listItem = document.createElement('li');
    listItem.textContent = item;


    listContainer.appendChild(listItem);
});



// Example: Add social media links to Connect section
const socialIcons = [
    { name: 'Twitter', url: '#connect' },
    { name: 'LinkedIn', url: '#connect' },
    { name: 'GitHub', url: 'https://github.com/' }
];

// Projects section 
const projects = ['in processing', 'in processing ', 'in processing'];
const listProjects = document.getElementById('projects');
projects.forEach(project => {

    const listProject = document.createElement('li');
    listProject.textContent = project;


    listProjects.appendChild(listProject);
});

// connect section
const connectSection = document.getElementById('connect');
const socialIconsList = document.createElement('ul');
socialIcons.forEach(social => {
    const socialItem = document.createElement('li');
    const socialLink = document.createElement('a');
    socialLink.href = social.url;
    socialLink.textContent = social.name;
    socialItem.appendChild(socialLink);
    socialIconsList.appendChild(socialItem);
});

connectSection.innerHTML = '<h2>Connect</h2>';
connectSection.appendChild(socialIconsList);






