// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // if else statement

  return license;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // object - dot notation
  return `# ${data.title}
  
  ## Description 

  ${data.description}

  ## Table of Contents 
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributers](#contribute)
  - [Tests](#test)
  - [Questions](#questions)


  ## Installation 
  ${data.installation}


  ## Usage
  ${data.usage}


  ## License
  ${data.license}

  ## Contributer 
  ${data.contribute}

  ## Tests
  ${data.test}

  ## Questions 
  ${data.github}
  ${data.email}

  
  


  `;
}

module.exports = generateMarkdown;
