
// Portal Item: Blonde on Blonde vinyl LP
// Destination: Columbia Studio A, room 1700
var DEST_ROOM = 1700;
var ENTER_MSG_SELF = "You place the needle on the vinyl. A harmonica wails, an organ swells, and the walls of the Listening Room dissolve into cigarette smoke and 1966 Nashville.";
var ENTER_MSG_ROOM = " drops the needle on a vinyl record. The unmistakable sound of a harmonica fills the room as cigarette smoke curls from the turntable and the air shimmers with something that was 1966 and is now.";

function onCommand_play(user, item, room) {
    return enterWorld(user, item, room);
}

function onCommand_spin(user, item, room) {
    return enterWorld(user, item, room);
}

function onCommand_use(user, item, room) {
    return enterWorld(user, item, room);
}

function onCommand_enter(user, item, room) {
    return enterWorld(user, item, room);
}

function onCommand_drop(user, item, room) {
    SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You lower the needle onto the vinyl. A click, a breath of tape hiss, and then the harmonica wails.</ansi>");
    return enterWorld(user, item, room);
}

function enterWorld(user, item, room) {
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">" + ENTER_MSG_SELF + "</ansi>");
    SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + "<ansi fg=\"cyan\">" + ENTER_MSG_ROOM + "</ansi>", user.UserId());
    user.MoveRoom(DEST_ROOM);
    return true;
}
