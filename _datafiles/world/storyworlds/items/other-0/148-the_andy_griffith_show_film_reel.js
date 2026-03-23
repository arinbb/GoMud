
// Portal Item: The Andy Griffith Show Film Reel
// Destination: The Andy Griffith Show zone, room 2060 (Andys Front Porch)
var DEST_ROOM = 2060;

function onCommand_load(user, item, room) { return enterWorld(user, item, room); }
function onCommand_use(user, item, room) { return enterWorld(user, item, room); }
function onCommand_play(user, item, room) { return enterWorld(user, item, room); }
function onCommand_watch(user, item, room) { return enterWorld(user, item, room); }
function onCommand_enter(user, item, room) { return enterWorld(user, item, room); }

function enterWorld(user, item, room) {
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"10\">You thread the film reel. For a moment there is only the soft mechanical sound of the projector finding its rhythm. Then: a screen door. It creaks open with the particular sound of a door that has opened the same way ten thousand summer evenings. Crickets rise up, slow and certain. A guitar strums softly -- nothing complicated, just a simple melody that knows exactly what it is. The image brightens and deepens: a front porch, two rocking chairs, fireflies beginning their slow blink in a yard full of honeysuckle and maple shade. A man in the near chair sets his guitar across his knees and looks up and smiles like he was expecting you. You step forward through the screen and the evening air closes warm around you and the screen door swings shut behind you and Mayberry is all there is.</ansi>");
    SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + "<ansi fg=\"10\"> loads a film reel. A screen door creaks open on the screen and the smell of honeysuckle and pie and summer grass drifts through the projection room. They step into it and the porch rocks gently in their place.</ansi>", user.UserId());
    user.MoveRoom(DEST_ROOM);
    return true;
}
