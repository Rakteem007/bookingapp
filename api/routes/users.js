import express from "express";
import {updateUser, 
        deleteUser, 
        getAllUser, 
        getUser
    } from "../controllers/user.js"
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyTokens.js";

const router  = express.Router();

// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//     res.send("Hello user, you are logged in. ")
// })

// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//     res.send("Hello user, you are logged in and can delete the account. ")
// })

// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//     res.send("Hello admin, you are logged in and can delete any account. ")
// })

//UPDATE
router.put("/:id",verifyUser, updateUser);

//DELETE
router.delete("/:id",verifyUser, deleteUser);

//GET
router.get("/:id",verifyUser, getUser);

//GET ALL
router.get("/",verifyAdmin, getAllUser);


export default router