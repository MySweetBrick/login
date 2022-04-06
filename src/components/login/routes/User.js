const express = require("express");
const router = express.Router();
const db = require("../config/db");
const cors = require("cors");

router.use(express.json());
router.use(cors());

router.post('/register', (req, res) => {

    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    db.query(
        "INSERT INTO User (username, email, password) VALUES (?, ?, ?)",
        [username, email, password],
        (err, res) => {
            console.log(err);
        }
    );
});

router.post('/login', (req, res) => {

    // const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    db.query(
        "SELECT * FROM User WHERE email = ? ",
        // "SELECT SELECT ID, username, email, password FROM User WHERE email = ? ",

        [email],
        (err, result) => {
            if (err) {
                res.send({ err: err })
            }
            if (result.length > 0) {
                 if (password == result[0].password) {
                    res.json({loggedIn: true, email: email});
            } else {
                    res.json({loggedIn: false, message: "Wrong email/password combination"
                });
            }
            } else {
                res.json({loggedIn: false, message: "User doesn't exist"});
            }
        }
);
});

module.exports = router;