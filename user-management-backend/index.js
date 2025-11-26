const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'user_management',
    port: 3307
});

connection.connect(err => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL');
});

// Create new user
app.post('/users', (req, res) => {
    const { full_name, email, phone, address } = req.body;
    const query = 'INSERT INTO users (full_name, email, phone, address) VALUES (?, ?, ?, ?)';
    connection.query(query, [full_name, email, phone, address], (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.json({ message: 'User added successfully', id: result.insertId });
    });
});

// Get all users
app.get('/users', (req, res) => {
    connection.query('SELECT * FROM users', (err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.json(results);
    });
});

// Update user
app.put('/users/:id', (req, res) => {
    const { full_name, email, phone, address } = req.body;
    const { id } = req.params;
    const query = 'UPDATE users SET full_name=?, email=?, phone=?, address=? WHERE id=?';
    connection.query(query, [full_name, email, phone, address, id], (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.json({ message: 'User updated successfully' });
    });
});

// Delete user
app.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM users WHERE id=?';
    connection.query(query, [id], (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.json({ message: 'User deleted successfully' });
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

