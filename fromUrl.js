const https = require("https");
const axios = require("axios");
const FormData = require("form-data");
const PDFExtract = require("pdf.js-extract").PDFExtract;
const pdfExtract = new PDFExtract();

/**
 * Example Output
 * Options
 * More....
 *
 * https://www.npmjs.com/package/pdf.js-extract
 */

const options = {};

// Create form data
const formData = new FormData();
formData.append("key1", "value1");
formData.append("key2", "value2");
formData.append("key3", "value3");

// To ignore SSL issues
const httpsAgent = new https.Agent({ rejectUnauthorized: false });

let url = "pdf url";

// Get pdf from url as buffer
axios
   .post(url, formData, {
      headers: formData.getHeaders(),
      responseType: "arraybuffer",
      httpsAgent,
   })
   .then((response) => {
      // Extract data from pdf
      pdfExtract.extractBuffer(response.data, options, (err, data) => {
         if (err) return console.log(err);

         console.log(data.pages);
      });
   })
   .catch((e) => console.log(e.message));
