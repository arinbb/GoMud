
// Portal Item: In Utero CD
// Destination: In Utero zone, room 1100
var DEST_ROOM = 1100;
var WORLD_NAME = "In Utero";
var ENTER_MSG_SELF = "You slide the disc into the CD player. The tray closes. A moment of silence — then a wall of feedback and distortion engulfs you. The Listening Room dissolves into static and noise, and you find yourself standing in a recording studio in Minnesota, February 1993.";
var ENTER_MSG_ROOM = " inserts a CD. The speakers erupt with feedback so loud the room shakes. When the noise clears, they are gone.";

function onCommand_play(user, item, room) {
    return enterWorld(user, item, room);
}

function onCommand_insert(user, item, room) {
    return enterWorld(user, item, room);
}

function onCommand_use(user, item, room) {
    return enterWorld(user, item, room);
}

function onCommand_enter(user, item, room) {
    return enterWorld(user, item, room);
}

function onCommand_listen(user, item, room) {
    return enterWorld(user, item, room);
}

function enterWorld(user, item, room) {
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"8\">" + ENTER_MSG_SELF + "</ansi>");
    SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + "<ansi fg=\"8\">" + ENTER_MSG_ROOM + "</ansi>", user.UserId());

    user.MoveRoom(DEST_ROOM);
    return true;
}
