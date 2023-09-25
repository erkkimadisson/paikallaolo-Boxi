const db = require("./sqlite.js");
const sql = 'CREATE TABLE IF NOT EXISTS paikallaolo (ID INTEGER PRIMARY KEY AUTOINCREMENT, Oppilas TEXT NOT NULL, Tapahtuma TEXT NOT NULL, Päivämäärä TEXT NOT NULL, SaapumisAika TEXT NOT NULL, LähtöAika TEXT NOT NULL, Kuittaus INTEGER NOT NULL, KuittausAika INTEGER, opeViesti INTEGER);';


module.exports = () => {
  db.run(sql);
}

// CREATE TABLE IF NOT EXISTS paikallaolo (ID INTEGER PRIMARY KEY AUTOINCREMENT, Oppilas TEXT NOT NULL, Tapahtuma TEXT NOT NULL, Päivämäärä DATE('%d-%m-%Y') NOT NULL, SaapumisAika TIME('%H:%M') NOT NULL, LähtöAika TIME('%H:%M') NOT NULL, Kuittaus INTEGER NOT NULL, KuittausAika unixepoch('%s'));
// 'DROP TABLE IF EXISTS paikallaolo; CREATE TABLE paikallaolo (Tapahtuma varchar NOT NULL, ID int NOT NULL PRIMARY KEY DEFAULT "autoIncrement()", Oppilas varchar NOT NULL, TapahtumaPäivämäärä date NOT NULL, PaikalleSaapunut time NOT NULL, PaikaltaLähtö time NOT NULL, Kuitattu bool NOT NULL);'