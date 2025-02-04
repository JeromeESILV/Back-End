const express = require("express");
const User = require("../models/User");
const router = express.Router();

router.get("", (req, res) => {
    const criteria = req.query;
    User.findAll({
        where: criteria,
    }).then((users) => res.json(users));
});

router.post("", (req, res) => {
    User.create(req.body).then((user)
    => res.status(201).json(user));
});

router.get("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    User.findByPK(id).then((user) => {
        if (!user) res.sendStatus(404);
        else res.json(user);
    });
});

router.delete("./id", (req, res) => {
    User.delete(req.body).then((user)
    => res)
})