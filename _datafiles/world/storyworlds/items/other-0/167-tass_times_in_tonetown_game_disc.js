// Portal Item: Tass Times in Tonetown Game Disc
// Destination: Tass Times in Tonetown zone, room 2450
var DEST_ROOM = 2450;
var ENTER_MSG_SELF = "You insert the disc. The screen fills with angular neon shapes. A hoop of light appears on the wall and you step through...";
var ENTER_MSG_ROOM = " inserts a game disc. Angular neon light floods the screen. A portal hoop appears and they step through into Tonetown...";

function onCommand_play(user, item, room) {
    return enterWorld(user, item, room);
}

function onCommand_use(user, item, room) {
    return enterWorld(user, item, room);
}

function onCommand_insert(user, item, room) {
    return enterWorld(user, item, room);
}

function onCommand_enter(user, item, room) {
    return enterWorld(user, item, room);
}

function enterWorld(user, item, room) {
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"magenta\">" + ENTER_MSG_SELF + "</ansi>");
    SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + "<ansi fg=\"magenta\">" + ENTER_MSG_ROOM + "</ansi>", user.UserId());
    user.MoveRoom(DEST_ROOM);
    return true;
}
