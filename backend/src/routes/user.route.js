import express from "express"
import { protectRoute } from "../middleware/auth.middleware.js";
import { acceptFriendRequest, getFriendRequet, getMyFriends, getOutgoingFrirendReqs, getRecommendedUsers, sendFriendRequest } from "../controllers/user.controller.js";
const router=express.Router();
// apply to all
router.use(protectRoute);

router.get('/',getRecommendedUsers);
router.get('/friends',getMyFriends);
router.post('/friend-request/:id',sendFriendRequest)
router.put('/friend-request/:id/accept',acceptFriendRequest)

router.get('/friend-requests',getFriendRequet)
router.get("/outgoing-friend-requests",getOutgoingFrirendReqs)

export default router;