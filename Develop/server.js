const express = require('express');
const app = express();
const PORT = process.env.PORT || 8756;

app.use(json());
app.use(urlencoded({ extended: true }));

app.use(express.static('public')); //this is how the server knows where to look for the files 

app.post('/generate-reademe', (req, res) => {
    console.log(req.body);
    const userData = req.body; // get the user data by accessing the req.body object

    const readmeContent = generateMarkdown(userData); //send the generated README back to the client in form of a generated README file 
    res.set({
        'Content-Disposition': 'attachment; filename=README.md', // this is how the server knows what to name the file
        'Content-Type': 'text/markdown' // this how the server knows what type of file to send back to client 
    });
    res.send(readmeContent); // send the generated README back to the client in the form of a useable generated readme file 
});

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`))