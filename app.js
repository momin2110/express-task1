const express = require('express');
const userRouter = require('./routes/user.route')
const app = express();

app.use('/user',userRouter);

// sending html file
app.get('/', (req, res)=>{
    res.statusCode = 200;
    res.sendFile(__dirname + "/views/index.html")
});

// sending json data
app.get('/about', (req, res)=>{
    res.status(200).json({
        message : "this is contact page",
        statusCode : 200
    });
    res.redirect('/');
});

// sending cookies && headers
app.get('/contact', (req, res)=>{
    res.cookie("name", "reading-newspaper");
    res.cookie("number", "30");
    res.clearCookie("name");
    res.append("id", "129987900")
    res.end();
});

app.get('/common', (req, res)=>{
    res.statusCode = 200;
    res.sendFile(__dirname + "/views/contact.html");
    // res.status(200).json({
    //     message : "this is contact page",
    //     statusCode : 200
    // });
    // res.cookie("name", "Newspaper");
    // res.cookie("number", "40");
    // res.clearCookie("number");
    // res.append("id", "400987900")
    // res.end();

})
app.use((req, res)=>{
    res.send('404 !! page not found');
});

// app.post('/', (req, res)=>{
//     res.send('Hi I am post request at home route');
//     res.end();
// });
// app.put('/', (req, res)=>{
//     res.send('Hi I am put request at home route');
//     res.end();
// });
// app.delete('/', (req, res)=>{
//     res.send('Hi I am delete request at home route');
//     res.end();
// });
// app.patch('/', (req, res)=>{
//     res.send('Hi I am patch request at home route');
//     res.end();
// });

module.exports = app;
