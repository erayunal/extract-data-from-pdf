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

pdfExtract.extract("test.pdf", options, (err, data) => {
   if (err) return console.log(err);
   console.log(data.pages);
});
