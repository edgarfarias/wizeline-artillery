const faker = require("faker");

module.exports = {
  getRandomProduct,
};

function getRandomProduct(context, _, done) {
  context.vars["product"] = faker.commerce.productName();
  return done();
}
