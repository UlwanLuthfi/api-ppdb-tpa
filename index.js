import express from "express";
import cors from "cors";
import "./utils/connection.js";
import Student from "./utils/models.js";
import { customAlphabet } from "nanoid";

const app = express();
const port = process.env.PORT || 8800;
const nanoid = customAlphabet("1234567890", 4);

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/register", async (req, res) => {
  const student = new Student({
    nama: req.body.nama,
    nik: req.body.nik,
    jenisKelamin: req.body.jenisKelamin,
    umur: req.body.umur,
    noPendaftaran: `PPDB-${nanoid()}-TPA`,
  });

  const result = await student.save();

  return res.json(result);
});

app.post("/login", async (req, res) => {
  const noPendaftaran = req.body.noPendaftaran;
  const nama = req.body.nama;

  const result = await Student.find({
    noPendaftaran: noPendaftaran,
    nama: nama,
  }).exec();

  return res.json(result);
});

app.listen(port, () => {
  console.log(`Listening at port : ${port}`);
});
