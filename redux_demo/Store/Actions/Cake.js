const { BUY_CAKE } = require("./ActionTypes");
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First redux action",
  };
}

module.exports = buyCake;
