const express = require("express");
const router = express.Router();
const { messages } = require("../providers");
const { SERVER_ERROR } = require("../utils/response_constants");

var MailConfig = require("./email-config");
var hbs = require("nodemailer-express-handlebars");
var gmailTransport = MailConfig.GmailTransport;
router.get("/email/template", (req, res, next) => {});

router.get("/", async (req, res) => {
	try {
		const doc = await messages.get();
		return res.status(doc.statusCode).send(doc);
	} catch (e) {
		return res.status(SERVER_ERROR.statusCode).send(SERVER_ERROR);
	}
});

router.post("/", async (req, res) => {
	try {
		const doc = await messages.send(req.body);
		if (200 == doc.statusCode) {
			MailConfig.ViewOption(gmailTransport, hbs);
			let HelperOptions = {
				from: "Vandoors <vandoorsinfo@gmail.com>",
				to: "vandoorsinfo@gmail.com",
				subject: "ВЫЗОВ ЗАМЕРШИКА, ОТ " + req.body.name,
				template: "test",
				context: {
					name: req.body.name,
					phone: req.body.phone
				}
			};
			gmailTransport.sendMail(HelperOptions, (error, info) => {
				if (error) {
					// console.log(error);
					res.json(error);
				}
				// console.log("email is send");
				// console.log(info);
				res.json(info);
			});
		}
		return res.status(doc.statusCode).send(doc);
	} catch (e) {
		console.log(e);
		return res.status(SERVER_ERROR.statusCode).send(SERVER_ERROR);
	}
});

router.patch("/:id", async (req, res) => {
	try {
		const doc = await messages.seen(req.params.id);
		return res.status(doc.statusCode).send(doc);
	} catch (e) {
		return res.status(SERVER_ERROR.statusCode).send(SERVER_ERROR);
	}
});

router.delete("/:id", async (req, res) => {
	try {
		const doc = await messages.delete(req.params.id);
		return res.status(doc.statusCode).send(doc);
	} catch (e) {
		console.log(e);
		return res.status(SERVER_ERROR.statusCode).send(SERVER_ERROR);
	}
});

module.exports = router;
