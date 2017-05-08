//Storing Bot responses in msg.payload
msg.mydata.messageout = msg.payload;
msg.payload = {};
msg.payload.botresponse = msg.mydata;
global.set("theoutput",msg.payload);
return msg;
