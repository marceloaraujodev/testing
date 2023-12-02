import express from 'express';

const app = express();
const PORT = 3000 || process.env.PORT;

const currentDate = new Date();
const options = { 
    day: '2-digit', 
    month: '2-digit', 
    year: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  };
const formattedDate = currentDate.toLocaleDateString('en-GB', options);


app.get('/', (req, res) => {
    res.status(200).json({
        message: 'hi'
    })
});

app.get('/api/v1/instagram', (req, res) => {
    const instaSocial = {
        username: 'instaUserName',
        followers: 10000,
        follow: 1000,
        date: formattedDate
    }
    
    res.status(200).json(instaSocial)
});

app.get('/api/v1/facebook', (req, res) => {
    const instaSocial = {
        username: 'facebookUserName',
        followers: 500,
        follow: 500,
        date: formattedDate
    }

    res.status(200).json(instaSocial)
});
app.get('/api/v1/linkedin', (req, res) => {
    const instaSocial = {
        username: 'linkedinUserName',
        followers: 100,
        follow: 100,
        date: formattedDate
    }

    res.status(200).json(instaSocial)
});

app.get('/api/v1/:id', (req, res) => {
    console.log(req.params.id)
    res.status(200).json({param: req.params.id})
})

app.listen(PORT, () => {
    console.log(`Server is running at PORT: ${PORT}`);
});