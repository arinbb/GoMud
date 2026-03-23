// Portal Item: The Office film reel
// Destination: Dunder Mifflin Lobby, room 2300
var DEST_ROOM = 2300;
var ENTER_MSG_SELF = "You thread the reel. The NBC chime plays -- four notes, cheerful, slightly hollow. Then: fluorescent lights, carpet that was never quite white, the smell of toner and someone's reheated lunch. The mockumentary camera finds you from the corner. You realize you are being filmed. The lobby of Dunder Mifflin Paper Company, Scranton, Pennsylvania materializes around you with all the quiet, extraordinary ordinariness of the best nine seasons of television ever made in a paper company parking lot.";
var ENTER_MSG_ROOM = " loads the reel into the projector. The NBC chime plays. The screen fills with fluorescent light and beige carpet and the Dunder Mifflin sign. They step forward into it and are gone.";

function onCommand_use(user, item, room) {
    return enterWorld(user, item, room);
}

function onCommand_play(user, item, room) {
    return enterWorld(user, item, room);
}

function onCommand_watch(user, item, room) {
    return enterWorld(user, item, room);
}

function onCommand_load(user, item, room) {
    return enterWorld(user, item, room);
}

function onCommand_enter(user, item, room) {
    return enterWorld(user, item, room);
}

function enterWorld(user, item, room) {
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"8\">" + ENTER_MSG_SELF + "</ansi>");
    SendUserMessage(user.UserId(), "");
    SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + "<ansi fg=\"8\">" + ENTER_MSG_ROOM + "</ansi>", user.UserId());
    user.MoveRoom(DEST_ROOM);
    return true;
}
