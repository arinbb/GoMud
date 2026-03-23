// Portal Item: Six Feet Under Film Reel
// Destination: Six Feet Under zone, room 2220
var DEST_ROOM = 2220;

function onCommand_load(user, item, room) { return enterWorld(user, item, room); }
function onCommand_use(user, item, room) { return enterWorld(user, item, room); }
function onCommand_play(user, item, room) { return enterWorld(user, item, room); }
function onCommand_watch(user, item, room) { return enterWorld(user, item, room); }
function onCommand_enter(user, item, room) { return enterWorld(user, item, room); }

function enterWorld(user, item, room) {
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"8\">A phone rings. Somewhere in Los Angeles, someone has died. It happens the way it always happens -- unexpectedly, or expected and still a surprise, on an ordinary day, at an ordinary hour. The Fisher and Sons hearse pulls up to a quiet address. Two men in dark suits move with practiced, unhurried dignity. The HBO title card appears and dissolves. A green Victorian house on a tree-lined street. The sign above the porch reads Fisher and Sons. The door is open. You step forward and the porch boards are under your feet and the LA air is warm and the business of death and life is going on around you, as it always is, everywhere.</ansi>");
    SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + "<ansi fg=\"8\"> threads the film reel into the projector. A phone rings somewhere on screen. A hearse pulls up to a quiet house. They step into the image and the screen goes still.</ansi>", user.UserId());
    user.MoveRoom(DEST_ROOM);
    return true;
}