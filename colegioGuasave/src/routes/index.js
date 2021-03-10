const express = require("express");
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const router = express.Router();


router.post("/send-email", (req, res) => {
    const { name, email, message } = req.body
    const contentHtml = `
    <h1>Preguntas sobre pagina del Colegio Guasave</h1>
    <ul>
    <li>Nombre:${name}</li>
    <li>email:${email}</li>
    </ul>
    <p>${message}</p>
    `;
    const CLIENTD_ID = "485578178256-h8ipf5bburo7c2v1bfnkpv9f1eeb3j9a.apps.googleusercontent.com"
    const CLIENT_SECRET = "IgQunxz4prXhOSdh6CN8WzP_"
    const REDIRECT_URI = "https://developers.google.com/oauthplayground"
    const REFRESH_TOKEN = "1//04fjXAnUpUo4BCgYIARAAGAQSNwF-L9Ir4m3WsCnHucfW1FnE9kPb7KAmnq06phxe9aQlNiweYoqjIAYw_YzA_ve7mNCwV8nCElI"
    const oAuth2Client = new google.auth.OAuth2(
        CLIENTD_ID,
        CLIENT_SECRET,
        REDIRECT_URI)

    oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN })


    async function sendMail() {
        try {
            const accessToken = await oAuth2Client.getAccessToken()
            const transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    type: "OAuth2",
                    user: "cesardelriodlr@gmail.com",
                    clientId: CLIENTD_ID,
                    clientSecret: CLIENT_SECRET,
                    refreshToken: REFRESH_TOKEN,
                    accessToken: accessToken
                },
            });


           let mailOptions = {
                from: "Pagina Web Colegio Guasave <cesardelriodlr@gmail>",
                to: "cesar.delrio.colgve@gmail.com",
                cc:"",
                subject: "Pagina web colegio guasave dudas",
                html:contentHtml 
            };
            const result = await transporter.sendMail(mailOptions);
            return result;
        } catch (err) {
            console.log(err)
        }
    }
    sendMail()
        .then((result) => {
            console.log("mensaje enviado")
            res.status(200).send()
        })
        .catch((error) => console.log(error.message))

    res.redirect('/index');
});


module.exports = router;
