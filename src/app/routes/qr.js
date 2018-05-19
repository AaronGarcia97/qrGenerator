var QRCode = require('qrcode')

var qrInfo, qrID = 0, qrIDsrc, path="src/app/static/";

module.exports = app => {

  app.get('/', (req, res) => {
      res.render("home.ejs");
  });

  app.get('/generateQR', (req, res) => {

      qrInfo = req.query['qrInfo'];

      QRCode.toFile(path + qrID + ".png", qrInfo, function(err) {
        if(err) throw err;

        qrIDsrc = qrID + ".png";

        res.render("generateQR.ejs", {
          qrInfo: qrInfo,
          qrID: qrID,
          qrIDsrc: qrIDsrc
        });

        console.log("QR: " + qrInfo + "\nID: " + qrID + "\nStatus: done");
        qrID++;
      })
  });

}
