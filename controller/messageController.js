const asynchandler = require("express-async-handler");

const Message = require("../models/messageModels")

//@desc post message
//@route POST /api
//@access private
const messagecreate = asynchandler(async (req, res) => {
    const { name, email, textarea } = req.body;

    const message = await Message.create({ name, email, textarea });
    res.status(201).json(message);

})



module.exports = { messagecreate };