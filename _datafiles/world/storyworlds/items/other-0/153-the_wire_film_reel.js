// Portal Item: The Wire Film Reel
// Destination: The Wire zone, room 2200 (The Pit)
var DEST_ROOM = 2200;
var WORLD_NAME = "The Wire";

var ENTER_MSG_SELF = "You thread the reel into the projector. For a moment there is only grey static -- the color of concrete, of rain, of institutional nothing. Then Baltimore materializes out of it. Brick rowhouses, their fronts tagged and weathered. A low-rise courtyard project where an orange couch sits against a chain-link fence like a throne. Someone calls 'Five-O!' from a window above and the courtyard empties and refills in seconds, a practiced choreography. A siren rises and fades somewhere to the east. The city smells like rain and asphalt and something burning. The corner boys drift back to their posts. The game resumes. You step through.";
var ENTER_MSG_ROOM = " loads a battered film reel into the projector. Grey static fills the screen. Then Baltimore -- brick and rain and a low-rise courtyard. A voice calls 'Five-O!' The corner boys scatter and return. They step into it, and the static lingers a moment before the screen goes dark.";

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
    SendUserMessage(user.UserId(), "<ansi fg=\"8\">" + ENTER_MSG_SELF + "</ansi>");
    SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + "<ansi fg=\"8\">" + ENTER_MSG_ROOM + "</ansi>", user.UserId());
    user.MoveRoom(DEST_ROOM);
    return true;
}
