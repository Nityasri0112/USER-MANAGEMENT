const db = require("../db");

exports.getUsers = (req, res) => {
    db.query("SELECT * FROM users", (err, results) => {
        if (err) throw err;
        res.json(results);
    });
};

exports.getUser = (req, res) => {
    const id = req.params.id;
    db.query("SELECT * FROM users WHERE id=?", [id], (err, results) => {
        if (err) throw err;
        res.json(results[0]);
    });
};

exports.addUser = (req, res) => {
    const user = req.body;
    db.query("INSERT INTO users SET ?", user, (err, result) => {
        if (err) throw err;
        res.json({ message: "User added!", id: result.insertId });
    });
};

exports.updateUser = (req, res) => {
    const id = req.params.id;
    const user = req.body;
    db.query("UPDATE users SET ? WHERE id=?", [user, id], (err) => {
        if (err) throw err;
        res.json({ message: "User updated!" });
    });
};

exports.deleteUser = (req, res) => {
    const id = req.params.id;
    db.query("DELETE FROM users WHERE id=?", [id], (err) => {
        if (err) throw err;
        res.json({ message: "User deleted!" });
    });
};
