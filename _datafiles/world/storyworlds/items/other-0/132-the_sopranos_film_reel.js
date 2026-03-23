
// Portal Item: The Sopranos Film Reel
// Destination: The Sopranos zone, room 1720
var DEST_ROOM = 1720;

function onCommand_load(user, item, room) { return enterWorld(user, item, room); }
function onCommand_use(user, item, room) { return enterWorld(user, item, room); }
function onCommand_play(user, item, room) { return enterWorld(user, item, room); }
function onCommand_watch(user, item, room) { return enterWorld(user, item, room); }
function onCommand_enter(user, item, room) { return enterWorld(user, item, room); }

function enterWorld(user, item, room) {
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"8\">You thread the film reel into the projector. The HBO static hiss fills the room, then a morning in North Caldwell, New Jersey. Tony Soprano walks down his driveway in a bathrobe to get the paper. He looks at the ducks in the pool. The image deepens and the New Jersey morning comes through the screen -- humidity, cut grass, the distant sound of a highway that never stops. You step forward and the driveway is under your feet and the screen is behind you and North Caldwell is around you.</ansi>");
    SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + "<ansi fg=\"8\"> loads a film reel. The screen fills with a New Jersey morning, and somewhere a duck quacks in a backyard pool. They step into the image and the screen goes dark.</ansi>", user.UserId());
    user.MoveRoom(DEST_ROOM);
    return true;
}
