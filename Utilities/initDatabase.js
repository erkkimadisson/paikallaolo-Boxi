const db = require("./sqlite.js");


module.exports = async () => {
  await db.exec('DROP TABLE IF EXISTS paikallaolo; CREATE TABLE paikallaolo (Tapahtuma varchar NOT NULL, ID int NOT NULL PRIMARY KEY DEFAULT "autoIncrement()", Oppilas varchar NOT NULL, TapahtumaPäivämäärä date NOT NULL, PaikalleSaapunut time NOT NULL, PaikaltaLähtö time NOT NULL, Kuitattu bool NOT NULL);')
.catch(error => console.error('database initilation failed', error))  
}
