import express from "express";
import { verifyAdmin } from "../utils/verifyTokens.js";
import { createRoom, 
    deleteRoom, 
    getAllRooms, 
    getRoom, 
    updatedRoom, 
    updatedRoomAvailability
} from "../controllers/room.js";

const router  = express.Router();

//CREATE
router.post("/:hotelid",verifyAdmin, createRoom)

//UPDATE
router.put("/:id",verifyAdmin, updatedRoom);
router.put("/availability/:id", updatedRoomAvailability);

//DELETE
router.delete("/:id/:hotelid",verifyAdmin, deleteRoom);

//GET
router.get("/:id", getRoom);

//GET ALL
router.get("/", getAllRooms);


export default router