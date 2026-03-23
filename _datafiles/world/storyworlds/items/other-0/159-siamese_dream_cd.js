// Portal Item: Siamese Dream CD
// Destination: Siamese Dream zone, room 2320

var DEST_ROOM = 2320;
var WORLD_NAME = "Siamese Dream";
var ENTER_MSG_SELF = "You slide the disc into the CD player. The tray closes. A moment of silence -- then a wall of distorted guitar detonates against you, layered and massive and purple, and the Listening Room dissolves into heat and static. You are standing in a recording studio in Atlanta. The summer of 1993. The air conditioning is broken and the tape is rolling.";
var ENTER_MSG_ROOM = " inserts a CD. The room fills with a wall of layered guitar distortion, purple and enormous. When it clears, they are gone.";

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
    SendUserMessage(user.UserId(), "<ansi fg=\"13\">" + ENTER_MSG_SELF + "</ansi>");
    SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + "<ansi fg=\"13\">" + ENTER_MSG_ROOM + "</ansi>", user.UserId());
    user.MoveRoom(DEST_ROOM);
    return true;
}
