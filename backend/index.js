import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "RAMPLER01",
  database: "m13",
  port: 3306
});

app.get("/", (req, res) => {
  res.json("hello");

});

app.get("/movimientos", (req, res) => {
  const q = "SELECT * FROM movimientos";
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

app.post("/movimientos", (req, res) => {
  const q = "INSERT INTO movimientos(`cantidad`, `categoria`, `fecha`, `descripcion`, `tipo`) VALUES (?)";

  const values = [
    req.body.cantidad,
    req.body.categoria,
    req.body.fecha,
    req.body.descripcion,
    req.body.tipo,
];

  db.query(q, [values], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.delete("/movimientos/:id", (req, res) => {
  const movimientoId = req.params.id;
  const q = " DELETE FROM movimientos WHERE id = ? ";

  db.query(q, [movimientoId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.put("/movimientos/:id", (req, res) => {
  const movimientoId = req.params.id;
  const q = "UPDATE movimientos SET `cantidad`= ?, `categoria`= ?, `fecha`= ?, `descripcion`= ?, `tipo`= ? WHERE id = ?";

  const values = [
    req.body.cantidad,
    req.body.categoria,
    req.body.fecha,
    req.body.descripcion,
    req.body.tipo
];

  db.query(q, [...values,movimientoId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.listen(8800, () => {
  console.log("Connected to backend.");
});
