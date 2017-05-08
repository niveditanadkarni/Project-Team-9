var globalvariable = global.get("theoutput");
globalvariable.botresponse.messageout.output.text = "Here is what you asked for. The MAXIMUM TEMP recorded by the IoT Sensor is " + msg.payload["1"] + " celsius degrees.";
msg.payload = globalvariable;
return msg;
