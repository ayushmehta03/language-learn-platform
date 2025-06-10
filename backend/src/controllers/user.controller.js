import { messageSetPagination } from "stream-chat/dist/types/utils";
import User from "../models/User.js";
import FriendRequest from "../models/FriendRequest.js";


export async function getRecommendedUsers(req,res){
try{
const currentUserId=req.user.id;
const currentUser=  req.user
const recommendedUsers= await User.find({
    $and:[
    {_id: {$ne:currentUserId}},
    {$id:{$nin:currentUser.friends}},
    {isOnboarded:true},

    ]
});
res.status(200).json(recommendedUsers);
} catch(error){
 res.status(500).json({
    message:"Internal Seerver error"
 })
}
}

export async function getMyFriends(req,res) {
 try{
    const user= await User.findById(req.user.id).select("friends").populate("friends",
        "fullName profilePic nativeLanguage learningLanguage  ");
        res.status(200).json(user.friends);

}catch(error){
res.status(500).json({
message:"Internal Server Error"
});

} 
}

export async function sendFriendRequest(req,res){
    try{
    const myId=req.user.id  
    const{id:recipientId}=req.params
    
    if(myId==recipientId) res.status(400).json({
        message:"You can't send message to yourslf"
    })
    const recipient= await User.findById(recipientId);
    if(!recipient){
      return  res.status(400).json({
            message:"Recipient not found"
        })
    }
    // Check if user is already friends
    if(recipient.friends.includes(myId)){
        return res.status(400).json({
            message:"You are already friends with user"
        })
    }
    // Check if a request alrrady exosts
    const existingRequest= await FriendRequest.findOne({
        $or:[
            {sender:myId,recipient:recipientId},
            {sender:recipientId,recipient:myId}
        ]
    });
    if(existingRequest){
        return res.status(400).json({
            message:"A friend request already exists between you and the user"
        })
    }
    const friendRequest= await FriendRequest.create({
        sender:myId,
        recipient:recipientId
    });
    res.status(201).json(friendRequest)

    }catch(error){
        res.status(500).json({
            message:"Internal Server Error"
        })
    }
}