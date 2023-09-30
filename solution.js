import express from "express";
import path,{ dirname } from "path";
import { fileURLToPath } from "url";
var __dirname = dirname(fileURLToPath(import.meta.url));
var port = 3000;
const app = express();

app.use(express.static("1.public"));
app.set('view engine', 'ejs');

 app.get('/',(req,res) => {
    res.render("home.ejs",{
        docTitle: "Vanakkam to home page",
        path: "home"
    });
});

app.get('/about',(req,res) => {
    res.render("about.ejs",{
        docTitle: "Vanakkam to about page",
        path: "about"
    });
});

app.get('/contact',(req,res) => {
    res.render("contact.ejs",{
        docTitle: "Vanakkam to contact page",
        path: "contact"
    });
}); 

app.use((req,res) => {
     res.status(404).render("404.ejs",{
        docTitle: "error",
        path: "404"
    });
 });

app.listen(port,() => {
    console.log("Server started running on port %d", port);
});