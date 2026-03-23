
// Portal Item: Paris, Texas Film Reel
// Destination: Paris, Texas zone, room 2120
var DEST_ROOM = 2120;
var WORLD_NAME = "Paris, Texas";
var ENTER_MSG_SELF = "You thread the film reel into the projector. The machine hesitates — then the screen fills with red. Just red: earth and bleached sky and the shimmer of heat over nothing. A figure appears at the very edge of the frame, small, walking. He has a red cap. He has been walking for four years. The slide guitar comes in low and slow, one note held until it aches, and the red earth swells until it fills everything, and the heat of the Texas desert lands on your skin, and the projector falls silent behind you. You are here. The sky is enormous. The man is still walking.";
var ENTER_MSG_ROOM = " threads the film reel into the projector. The screen floods with red earth and bleached sky. A low slide guitar note fills the room, aching and enormous. Then they are gone, absorbed into the Texas landscape as if they were always part of it.";

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
    SendUserMessage(user.UserId(), "<ansi fg=\"red\">" + ENTER_MSG_SELF + "</ansi>");
    SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + "<ansi fg=\"red\">" + ENTER_MSG_ROOM + "</ansi>", user.UserId());

    user.MoveRoom(DEST_ROOM);
    return true;
}
