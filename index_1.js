//import
import negara, {rumah} from "./export.js"; //imprt negara merupakan import dari variable export default
console.log(negara);
console.log(rumah);

import { mahasiswa, Hello } from "./export.js";
Hello(mahasiswa.nama);


//import as
import {film as series, halloFilm as halloSeries} from "./export.js"
console.log(series);
halloSeries(series.namaMovie, series.jenis, series.seri, series.tahunRilis);