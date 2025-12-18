// ❌ INSEGURO
app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const query = `
    SELECT * FROM users 
    WHERE email = '${email}' 
    AND password = '${password}'
  `;

  db.query(query, (err, result) => {
    if (result.length > 0) {
      res.send("Login exitoso");
    } else {
      res.send("Credenciales incorrectas");
    }
  });
});
