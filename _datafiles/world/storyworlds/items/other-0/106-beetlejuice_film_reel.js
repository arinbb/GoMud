
// Portal Item: Beetlejuice Film Reel
// Destination: Beetlejuice zone, room 600
var DEST_ROOM = 600;
var WORLD_NAME = "Beetlejuice";
var ENTER_MSG_SELF = "You thread the film reel into the projector and it whirs to life. The screen fills with the image of a model town -- a perfect little New England village bathed in autumn light. You see golden leaves, a covered bridge, white clapboard houses. The image grows larger, more vivid, until you can smell woodsmoke and feel cool autumn air on your skin. The projector rattles once and goes dark behind you, because you're no longer in the screening room. You're standing in cool autumn air, surrounded by the colors of a New England fall...";
var ENTER_MSG_ROOM = " loads a film reel into the projector. Green smoke erupts from the machine and swallows them whole. When it clears, they're gone.";

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
    SendUserMessage(user.UserId(), "<ansi fg=\"green\">" + ENTER_MSG_SELF + "</ansi>");
    SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + "<ansi fg=\"green\">" + ENTER_MSG_ROOM + "</ansi>", user.UserId());

    user.MoveRoom(DEST_ROOM);
    return true;
}
