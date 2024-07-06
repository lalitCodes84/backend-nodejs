// Import the 'path' module
const path = require("path");

// Import the 'fs' module for file system operations
const fs = require("fs");

const operation = process.argv[2];
const file = process.argv[3];
const content = process.argv[4];


switch (operation) {
  // Handle the 'create' operation
  case "create":
    // Create a new file with the specified content
    fs.writeFile(file, content, (err) => {
        // Check for errors
        if (err) {
            console.log(`Error Creating file ${file}`);
        } else {
            console.log(`File created successfully with name ${file}`);
        }
    });
    break;

    // Handle the 'read' operation
    case "read":
      // Read the specified file
      fs.readFile(file, "utf-8", (err, data) => {
        // Check for errors
        if (err) {
          console.log(`Error Reading File ${file}`);
        } else {
          console.log(data); // Output the file content
        }
      });
      break;

      // Handle the 'append' operation
      case "append":
      // Append content to the specified file
      fs.appendFile(file, `${content}\n`, (err) => {
        // Check for errors
        if (err) {
          console.log("Error Appending Data");
        }
      });
      break;

      // Handle the 'rename' operation
      case "rename":
        // Rename the specified file
        fs.rename(file, content, (err) => {
          // Check for errors
          if (err) {
            console.log("Unable to rename file");
          }
        });
        break;

        // Handle the 'delete' operation
        case "delete":
         // Delete the specified file
         fs.unlink(file, (err) => {
          // Check for errors
          if (err) {
            console.log("Unable to delete file");
          }
         });
          break;

          // Handle the 'list' operation
          case "list":
            // List all files and directories in the current directory
            fs.readdir('.', (err, files) => {
              // Check for errors
              if (err) {
                console.log("Error getting list");
              } else {
                // Output each file/directory name
                files.forEach((list) => {
                  console.log(list);
                });
              }
            });
             break; 
  // Default case if the operation is not recognized
  default:
    console.log(`Invalid operation '${operation}'`);
}
