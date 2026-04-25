const fs = require('fs');

// create a file named 'hello.txt' and write 'Hello, World!' to it. Then, append a new line with the text 'This is an appended line.' to the same file.

fs.writeFile('hello.txt', 'Hello, World!', (err) => {
    if (err) {
        console.error('Error creating file:', err);
    } else {
        console.log('File created successfully!');
    }
});
// append a new line with the text 'This is an appended line.' to the same file.

// fs.appendFile('hello.txt', ' This is an appended line.', (err) => {
//     if (err) {
//         console.error('Error appending to file:', err);
//     } else {
//         console.log('Line appended successfully!');
//     }
// });

// copy a file named 'hello.txt' to a new file named 'hello_copy.txt'.

fs.copyFile('hello.txt', './copy/hello_copy.txt', (err) => {
    if (err) {
        console.error('Error copying file:', err);
    } else {
        console.log('File copied successfully!');
    }
});

// unlink a file named 'hello.txt' to delete it from the file system.

// fs.unlink('hello.txt', (err) => {
//     if (err) {
//         console.error('Error deleting file:', err);
//     } else {
//         console.log('File deleted successfully!');
//     }
// });

// rm is deleted copy folder bescuse it is not empty, so we need to use fs.rm instead of fs.unlink to delete the file.
// fs.rm('./copy', (err) => {
//     if (err) {
//         console.error('Error deleting file:', err);
//     } else {
//         console.log('File deleted successfully!');
//     }
// });

fs.rm('./copy', { recursive: true }, (err) => {
    if (err) {
        console.error('Error deleting file:', err);
    } else {
        console.log('File deleted successfully!');
    }
});