
// Portal Item: Harvest vinyl LP
// Destination: Broken Arrow Ranch, room 2240
var DEST_ROOM = 2240;
var ENTER_MSG_SELF = "You set the record on the platter and lower the needle. A click. A breath of warm static. Then the needle drops into the groove and a harmonica blooms from nowhere -- searching, aching, golden. The acoustic guitar follows, and the pedal steel, and then the whole California afternoon opens around you. The Listening Room dissolves in a flood of harvest gold. You are standing on the ranch.";
var ENTER_MSG_ROOM = " places a vinyl record on the turntable. The needle drops. A harmonica wails once, soft and searching, and golden California light floods the room. When the warmth clears, they are gone.";

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
    SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You lower the needle onto the vinyl. A click, a warm breath of static, and then the harmonica finds the groove.</ansi>");
    return enterWorld(user, item, room);
}

function enterWorld(user, item, room) {
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">" + ENTER_MSG_SELF + "</ansi>");
    SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + "<ansi fg=\"yellow\">" + ENTER_MSG_ROOM + "</ansi>", user.UserId());
    user.MoveRoom(DEST_ROOM);
    return true;
}
