const fs = require('fs');

// writing files 

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            // if there is an error, reject the Promise and send the error to the Promise's `.catch()` method
            if (err) {
                reject(err);

                // return out of the function here to make sure the Promise doesn't accidentaly execute the resolve() function as well

                return;
            
            }
            // if everthing went well, resolve the Promise and send the successful data to the `.then()` method
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

// copying files 

const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
                  if (err){
                    reject(err);
                    return;
                  } resolve({
                      ok: true,
                      message: 'Stylesheet created successfully!'
    });
    });
});
};
    
// module.exports = {
//     writeFile: writeFile,
//     copyFile: copyFile
// };

// we can simplify the module.exports code above by using the new feature from ES6

// this is known as SHORTHAND PROPERTY NAMES, when we have the same name for the property name and its value

module.exports = { writeFile, copyFile};

