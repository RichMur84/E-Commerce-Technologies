const router = require("express").Router();
//  /api/
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

router.use((req, res) => {
  res.send(
    "<h1>Route not found!</h1>"
  );
});

module.exports = router;