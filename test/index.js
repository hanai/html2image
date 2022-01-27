const fs = require("fs");
const path = require("path");
const convert = require("../index.js");

const imageBase64 =
  "data:image/png;base64,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";

(async () => {
  const image = await convert(
    `<html>
      <body>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Col 1</th>
              <th>Col 2</th>
              <th>Col 3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Row 1</td>
              <td><img src="${imageBase64}"></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </body>
    </html>`,
    {
      omitBackground: false,
    }
  );
  fs.writeFile(path.join(__dirname, "test.png"), image, (err) => {
    if (err) console.error(err);
  });
})();
