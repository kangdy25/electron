import { setupInfoHandler } from "./renderer/infoHandler.js";
import { setupFileHandler } from "./renderer/fileHandler.js";
import { setupMessageHanlder } from "./renderer/messageHandler.js";
import { setupPingpongHandler } from "./renderer/pingpongHandler.js";

setupInfoHandler();
setupFileHandler();
setupMessageHanlder();
setupPingpongHandler();