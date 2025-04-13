const multer = require("multer");

const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null,path.join(__dirname,'../../public/images/products'));
  },
  
  filename: function (req, file, cb) {
     const uniqueSuffix = path.basename(file.originalname, path.extname(file.originalname)) + "-" + Date.now() + path.extname(file.originalname) ;
    cb(null, uniqueSuffix);
   }
}); 

const fileFilter = (req, file, cb) => {

  const filtro = /\.(jpg|jpeg|png)$/;

  if (filtro.test(file.originalname.toLowerCase())) {
    
    cb(null, true);
  } else {
    
    cb(new Error('Formato de archivo no permitido. Solo se permiten JPG, JPEG y PNG.'));
  }
};

module.exports = multer({ storage,fileFilter });
