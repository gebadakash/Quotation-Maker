import {db} from "../connect.js";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";

export const register = (req, res) => {
    //CHECK USER IF EXISTS
  
    const q = "SELECT * FROM register WHERE email = ?";
  
    db.query(q, [req.body.email], (err, data) => {
      if (err) return res.status(500).json(err);
      if (data.length) return res.status(409).json("User already exists!");
      const q = "INSERT INTO register (`fullname`,`email`,`password`) VALUE (?)";
  
      const values = [
        req.body.fullname,
        req.body.email,
        req.body.password,
      ];
  
      db.query(q, [values], (err, data) => {
        if (err) {
          console.error('Error during registration:', err);
          return res.status(500).json(err);
        }
        return res.status(200).json("User has been created.");
      });
    });
  };


  export const login = (req, res) => {
    
    const q = `SELECT * FROM register WHERE email = ? AND password = ?`;
  
    db.query(q, [req.body.email, req.body.password], (err, data) => {
      if (err) return res.status(500).json(err);
      if (data.length === 0) return res.status(401).json("Wrong password or username!");
      if (req.body.email === data[0].email && req.body.password === data[0].password) {
          return res.status(200).json("Login Successful!");
      } else {
          return res.status(401).json("Wrong password or username!");
      }
    });

  };