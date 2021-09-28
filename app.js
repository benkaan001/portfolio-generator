// var commandLineArgs = process.argv;
// console.log(commandLineArgs);

const profileDataArgs = process.argv.slice(2, process.argv.lenght);
console.log(profileDataArgs);

// const printProfileData = (profileDataArgs) => {
//     console.log(profileDataArgs);
// };

// printProfileData(profileDataArgs);

// const printProfileData = profileDataArr => {
//     for (let i=0; i<profileDataArr.length; i++){
//         console.log(profileDataArr[i]);
//     }
// };

const printProfileData = profileDataArr => {
    for (let i=0; i<profileDataArr.lenght; i+=1){
        console.log(profileDataArr[i]);

    }
    console.log('=================');

    // profileDataArr.forEach( (profileItem) => {
    //     console.log(profileItem);
    // )};

    profileDataArr.forEach(profileItem => console.log(profileItem));
    
};

printProfileData(profileDataArgs);
