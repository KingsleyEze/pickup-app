const express = require("express");
const router = express.Router();

const users = require("../data/users");

router.post("/", (req, res) => {
  const { username, password } = req.body;

  let authUser = users.find(
    user => user.name === username && user.password === password
  );

  if (authUser) {
    const userDetails = (({ password, ...detail }) => ({ ...detail }))(
      authUser
    );
    res.send(userDetails);
  } else {
    res.sendStatus(403);
  }
});

module.exports = router;
