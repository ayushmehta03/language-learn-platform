import { StreamChat } from "stream-chat";
import "dotenv/config";

const apiKey = process.env.STREAM_API_KEY;
const apiSecret = process.env.STREAM_API_SECRET;

if (!apiKey || !apiSecret) {
  console.log("STREAM_API_KEY or STREAM_API_SECRET is missing");
  process.exit(1);
}

const streamClient = StreamChat.getInstance(apiKey, apiSecret);

export const upssertStreamUser= async (userData)=>{
try{
await streamClient.upsertUsers([userData]);
return userData
}
catch(error){
console.log("Error upserting the user")
}
};
export const generateSreamToken= (userId) =>{

}