
// Portal Item: Its Always Sunny in Philadelphia Film Reel
// Destination: Paddys Pub, room 2040
var DEST_ROOM = 2040;
var ENTER_MSG_SELF = "You thread the sticky reel into the projector. The machine hiccups and the screen fills with the sickly warm glow of a South Philly dive bar in the afternoon — a bar that should not still be open, owned by people who have no business owning anything. The floor is sticky. The jukebox is broken. There are zero customers. Five terrible people look up at you with the blank confidence of those who have never once questioned whether they are the problem. The smell of stale beer hits you like a wall. You step forward. Your shoes stick immediately. You are in Paddys Pub.";
var ENTER_MSG_ROOM = " loads a beer-sticky film reel. The screen fills with the warm yellow glow of a South Philly dive bar, sticky floor and all. The smell of cheap beer rolls outward. The jukebox plays three wrong notes. They step through the screen and vanish into the worst bar in Philadelphia.";

function onCommand_load(user, item, room) { return enterWorld(user, item, room); }
function onCommand_use(user, item, room) { return enterWorld(user, item, room); }
function onCommand_play(user, item, room) { return enterWorld(user, item, room); }
function onCommand_watch(user, item, room) { return enterWorld(user, item, room); }
function onCommand_enter(user, item, room) { return enterWorld(user, item, room); }

function enterWorld(user, item, room) {
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">" + ENTER_MSG_SELF + "</ansi>");
    SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + "<ansi fg=\"yellow\">" + ENTER_MSG_ROOM + "</ansi>", user.UserId());
    user.MoveRoom(DEST_ROOM);
    return true;
}
