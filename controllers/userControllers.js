const db = require("../config/connect");

module.exports = {
    
    getAllUser : (req, res) => {
        db.query("select * from user ", (err, results, field) => {
          if (err) {
            console.log(err);
          }
          res.json(results);
        });
      },

      getUserById : (req, res) => {
        const { id } = req.params;
      
        db.query(`select * from user where id = ?`, [id], (err, results, field) => {
          if (err) {
            console.log(err);
          }
          res.json(results);
        });
      },

      addUser : (req, res) => {
        let users = req.body;
      
        db.query(
          `insert into user (name, username, email, password) 
          values (?, ?, ?, ?)`,
          [users.name, users.username, users.email, users.password],
          (err, results, field) => {
            if (err) {
              console.log(err);
            }
            res.json("success");
          }
        );
      },

      deleteUser : (req, res) => {
        const { id } = req.params;
      
        db.query(`delete from user where id = ?`, [id], (err, results, field) => {
          if (err) {
            console.log(err);
          }
          res.json("success");
        });
      },

      editUser : (req, res) => {
        const { id } = req.params;
        let update = req.body;
        db.query(
          `update user set name = ?, username = ?, email = ?, password = ? where id = ?`,
          [update.name, update.username, update.email, update.password, id],
          (err, results, field) => {
            if (err) {
              console.log(err);
            }
            res.json("success");
          }
        );
      }
}