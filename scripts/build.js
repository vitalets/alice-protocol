/**
 * Builds schemas.
 *
 * Run:
 * node scripts/build
 */
const fs = require('fs');
const response = require('./response');

const files = [
  {filename: 'response-no-image.json', schema: response.noImageSchema},
  {filename: 'response-big-image.json', schema: response.bigImageSchema},
  {filename: 'response-items-list.json', schema: response.itemsListSchema},
];

main();

function main() {
  files.forEach(writeSchema);
}

function writeSchema({ filename, schema }) {
  const json = JSON.stringify(schema, null, 2);
  fs.writeFileSync(filename, json);
  console.log(`Created: ${filename}`);
}
