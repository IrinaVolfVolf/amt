const router = require('express').Router()
const { catchErrors } = require("../handlers/errorHandlers")
const chatroomConroller = require("../controllers/chatroomController");

const auth = require("../middlewares/auth")

router.post("/", auth, catchErrors(chatroomConroller.createChatroom))

module.exports = router;
