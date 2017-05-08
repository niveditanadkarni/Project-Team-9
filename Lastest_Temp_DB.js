var globalvariable = global.get("theoutput");
var dashDBresult = msg.payload;
var latest = dashDBresult.AMBIENT_TEMP;
//var timesent = dashDBresult.TIMESENT;
globalvariable.botresponse.messageout.output.text = "Here is what you asked for. The LATEST TEMP recorded by the IoT Sensor is " + latest + " celsius degrees. ";
msg.payload = globalvariable;
return msg;
