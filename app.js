// // var commandLineArgs = process.argv;
// // console.log(commandLineArgs);
// const fs = require('fs');

// const profileDataArgs = process.argv.slice(2, process.argv.lenght);

// // const name = profileDataArgs[0];
// // const github = profileDataArgs[1];

// const [name, github] = profileDataArgs;

// // console.log(profileDataArgs);

// // const generatePage = () => 'Name: Jane, Github: janehub';

// // console.log(generatePage());

// // const generatePage = (userName, githubName) => `Name: ${userName}, Github: ${githubName}`;
// // console.log(generatePage('Jane','janehub'));

// // const generatePage = (userName, githubName) =>{
// //     return `
// //     Name: ${userName}
// //     Github: ${githubName}
// //     `;
// // };


// const generatePage = (name, github) => {
//     return `
//     <!DOCTYPE html> 
//     <html lang="en"> 
//     <head>
//       <meta charset="UTF-8">
//       <meta name="viewport" content="width=device-width, initial-scale=1.0">
//       <meta http-equiv="X-UA-Compatible" content="ie=edge">
//       <title>Portfolio Demo</title>
//     </head>
  
//     <body>
//       <h1>${name}</h1>
//       <h2><a href="https://github.com/${github}">Github</a></h2>
//     </body>
//     </html>
//     `;
//   };

// //   console.log (name, github);
// // console.log(generatePage(name, github));

// fs.writeFile('index.html', generatePage(name, github), err =>{
//     if(err) throw err;

//     console.log('Portfolio complete! Check out index.html to see the output!');
// });


// const { generatePrime } = require('crypto');
// const fs = require('fs');

// const generatePage = require('./src/page-template.js');

// const profileDataArgs = process.argv.slice(2);

// const [name, github] = profileDataArgs;

// *************CODE STARTS HERE******************//

const inquirer = require('inquirer');
// inquirer
// .prompt([
//     {
//         type: 'input',
//         name: 'name',
//         message: 'What is your name?'
//     }
// ])
// .then (answers => console.log(answers));

const promptUser = () => {
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name!');
                    return false;
                }
                
                }
            
        },
        {
            type: 'input',
            name:'github',
            message: 'Enter your Github Username'
        },
        {
            type: 'confirm',
            name: 'confirmAbout',
            message: 'Would you like to enter some information about yourself for an "About" section?',
            default: true
        },
        {
            type: 'input',
            name: 'about',
            message: ' Provide some information about yourself:',
            when: ( {confirmAbout}) => {
                if (confirmAbout) {
                    return ture;
                } else {
                    return false;
                }
            }
        }
    ]);
     
};
promptUser()
.then(promptProject)
.then (portfolioData => {
    console.log(portfolioData);
});

// (answers => console.log(answers));

const promptProject = portfolioData => {
    // If there is no 'projects' array property, create one
    if (!portfolioData.projects){
    portfolioData.projects =[];
    }

    console.log(`
    =================
    Add a New Project 
    =================
    `);
    return inquirer.prompt
    .then(projectData => {
        portfolioData.projects.push(projectData);
        if (projectData.confirmAddProject) { 
            return promptProject(portfolioData);
        } else {
            return portfolioData;
        }
    });
        ([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project(Required)'
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you build this project with? (Check all that apply)',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        {
            type: 'input',
            name:' link',
            message: 'Enter the GitHub link to your project. (Required)'
        },
        {
            type: 'confirm',
            name: 'feature',
            message: 'Would you like to feature this project?',
            default: false 
        },
        {
            type: 'confirm',
            name: 'confirmAddProject',
            message: 'Would you like to enter another project?',
            default: false

        }
        
    ]);
};

promptUser()
.then(ansers => console.log(answers))
.then (promptProject)
.then (projectAnswers => console.log(projectAnswers));


// const fs = require('fs');

// const generatePage = require('./src/page-template.js');
// const pageHTML = generatePage(name,github);



// fs.writeFile('./index.html', pageHTML(name, github), err => {
//     if (err) throw new Error(err);

//     console.log('Portfolio complete! Check out index.html to see the output!');
// });

