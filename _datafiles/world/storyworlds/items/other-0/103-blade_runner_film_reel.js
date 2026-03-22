
// Portal Film: Blade Runner
// Destination: Blade Runner zone, room 300
var DEST_ROOM = 300;
var WORLD_NAME = "Blade Runner";
var ENTER_MSG_SELF = "You thread the film reel into the projector. The brass gears engage and the lens flares to life. Rain appears on the screen -- endless, neon-streaked rain. The image grows until it fills your vision, and you feel cold droplets on your skin. The projector sound fades, replaced by the hum of spinners overhead...";
var ENTER_MSG_ROOM = " loads a film reel into the projector. The screen blazes with neon and rain. The image expands, engulfs them, and they step through into the flickering light. The screen goes dark.";

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
    SendUserMessage(user.UserId(), "<ansi fg=\"blue\">" + ENTER_MSG_SELF + "</ansi>");
    SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + "<ansi fg=\"blue\">" + ENTER_MSG_ROOM + "</ansi>", user.UserId());

    user.MoveRoom(DEST_ROOM);
    return true;
}
