const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: '12345',
    database: 'firstapi',
    port: '5432'
});

const getUsers = async(req, res) => {
    const response = await pool.query('SELECT * FROM users ORDER BY id ASC');
    let tarefas = []
    for (let item of response.rows) {
        item.description = item.tarefa
        tarefas.push(item)
    }
    res.status(200).json(tarefas);
};

const getUserById = async(req, res) => {
    const id = parseInt(req.params.id);
    const response = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    res.json(response.rows);
};

const createUser = async(req, res) => {
    const { name, tarefa } = req.body;
    const response = await pool.query('INSERT INTO users (name, tarefa) VALUES ($1, $2)', [name, tarefa]);
    res.json({
        message: 'User Added successfully',
        body: {
            user: { name, tarefa }
        }
    })
};

const updateUser = async(req, res) => {
    const id = parseInt(req.params.id);
    const { name, tarefa } = req.body;

    const response = await pool.query('UPDATE users SET name = $1, tarefa = $2 WHERE id = $3', [
        name,
        tarefa,
        id
    ]);
    res.json('User Updated Successfully');
};

const deleteUser = async(req, res) => {
    const id = parseInt(req.params.id);
    await pool.query('DELETE FROM users where id = $1', [
        id
    ]);
    res.json(`User ${id} deleted Successfully`);
};

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};