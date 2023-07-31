import mongoose from "mongoose";

const Student = mongoose.model("student", {
  nama: {
    type: String,
    require: true,
  },
  nik: {
    type: String,
    require: true,
  },
  jenisKelamin: {
    type: String,
    require: true,
  },
  umur: {
    type: String,
    require: true,
  },
  noPendaftaran: {
    type: String,
    require: true,
  },
});

export default Student;
