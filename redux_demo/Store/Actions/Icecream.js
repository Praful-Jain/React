const { BUY_ICECREAM } = require("./ActionTypes");
function buyIcecream() {
  return {
    type: BUY_ICECREAM,
    info: "Second redux action",
  };
}

module.exports = buyIcecream;
