// Portal Item: Northern Exposure Film Reel
// Destination: Northern Exposure zone, room 2140
var DEST_ROOM = 2140;
var WORLD_NAME = "Northern Exposure";
var ENTER_MSG_SELF = "You thread the reel into the projector. A breath of cold air rushes out of the machine -- real cold, piney, Alaskan. The screen fills with an impossible sky, cyan and vast, and then a town materializes beneath it: a few weathered buildings, a hand-painted sign reading CICELY, ALASKA -- FOUNDED 1909, and in the middle of the only street, standing with absolute serenity, a moose. The moose does not move. It does not intend to move. A voice on the radio says something about Whitman and the wilderness and being exactly where you are supposed to be. The aurora borealis ripples at the edge of the sky in green and cyan. You step through.";
var ENTER_MSG_ROOM = " loads a film reel into the projector. Cold air rushes out. The screen fills with an enormous Alaskan sky and a small perfect town with a moose in the road. They step into it, and the cold air lingers a moment before the screen goes still.";

function onCommand_load(user, item, room) {
    return enterWorld(user, item, room);
}

function onCommand_use(user, item, room) {
    return enterWorld(user, item, room);
}

function onCommand_play(user, item, room) {
    return enterWorld(user, item, room);
}

function onCommand_watch(user, item, room) {
    return enterWorld(user, item, room);
}

function onCommand_enter(user, item, room) {
    return enterWorld(user, item, room);
}

function enterWorld(user, item, room) {
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">" + ENTER_MSG_SELF + "</ansi>");
    SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + "<ansi fg=\"cyan\">" + ENTER_MSG_ROOM + "</ansi>", user.UserId());

    user.MoveRoom(DEST_ROOM);
    return true;
}
