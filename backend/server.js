const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
var bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
var app = express();

// 
app.use(cors());
app.use(express.json());
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'react'
});
db.connect((error => {
    if (error) {
        return console.log('error: ' + error.message);
    } else {
        console.log("Successfully connected to database!");
    }

}))


app.post('/login', (req, res) => {
    const sql = "SELECT * FROM `login-users` WHERE email = ? AND password = ?";
    db.query(sql, [req.body.email, req.body.password], (error, data) => {
        if (error) {
            // return res.json(error);
            console.error(error);
        }
        if (data.length > 0) {
            return res.json("Login Successful!");
        } else {
            return res.json("Error in credentials... ");
        }
    })
});

//get all users
app.get('/users', (req, res) => {
    const sql = "SELECT * FROM `login_users`";

    db.query(sql, (error, data) => {
        if (error) {
            return res.json(error);
        } else {
            return res.json(data);
        }
    })
});



app.post("/register", (req, res) => {
    const { username, password } = req.body;
    bcrypt.hash(password, 10).then((hash) => {
        users.create({
            username: username,
            password: hash
        })
            .then(() => {
                res.json("USER REGISTERED!");
            }).catch((error) => {
                if (error) {
                    res.status(400).json({ error: error });
                }
            })
    })
    // res.json("register");
});

app.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const user = await users.findOne({
        where: { username: username }
    });
    if (!user)
        res.status(400).json({ error: "User doesnt exist" });
    res.json("logged in!");
});

app.post("/profile", (req, res) => {
    res.json("profile");
});

app.listen(8081, '0.0.0.0', () => {
    console.log('Server is running at listening on http://localhost:8081');
})