
// Portal Item: The Hobbit
// Destination: The Hobbit zone, room 970
var DEST_ROOM = 970;
var WORLD_NAME = "The Hobbit";
var ENTER_MSG_SELF = "You open the green cloth book and the words pull you in — \"In a hole in the ground there lived a hobbit.\" The letters swirl and rearrange, the smell of pipe-weed fills your nose, and the warmth of a crackling hearth envelops you. When the world stops spinning, you find yourself standing on a garden path before a round green door set into the side of a hill.";
var ENTER_MSG_ROOM = " opens a green cloth book. Golden light spills from its pages, smelling of pipe-weed and fresh-baked seed-cake. The light wraps around them like a warm blanket and when it fades, they are gone.";

function onCommand_read(user, item, room) {
    return enterWorld(user, item, room);
}

function onCommand_open(user, item, room) {
    return enterWorld(user, item, room);
}

function onCommand_use(user, item, room) {
    return enterWorld(user, item, room);
}

function onCommand_enter(user, item, room) {
    return enterWorld(user, item, room);
}

function enterWorld(user, item, room) {
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"3\">" + ENTER_MSG_SELF + "</ansi>");
    SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + "<ansi fg=\"3\">" + ENTER_MSG_ROOM + "</ansi>", user.UserId());

    user.MoveRoom(DEST_ROOM);
    return true;
}
