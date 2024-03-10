import  express  from "express";

const router = express.Router();

router.route('/updete').post((req,res) => {
    res.send("database updeted");
});

router.route('/create').post((req,res) => {
    res.send("database created");
});

router.route('/delete').post((req,res) => {
    res.send("database deleted");
});

router.route('/get-products').get((req,res) => {
    res.json({products : 5});
});

export default router;