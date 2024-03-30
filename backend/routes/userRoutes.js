import express from "express"
import { authenticateUser, registerUser } from "../controllers/userContollers";

const router = express.Router();

router.route('/').post(registerUser)
router.route('/login').post(authenticateUser)

export default router;
