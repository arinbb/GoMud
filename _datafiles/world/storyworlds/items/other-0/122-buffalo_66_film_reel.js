
// Portal Item: Buffalo '66 Film Reel
// Destination: Buffalo '66 zone, room 1300
var DEST_ROOM = 1300;
var ENTER_MSG_SELF = "You thread the frost-covered reel into the projector. The machine shudders and the screen fills with washed-out grey — a parking lot, a prison, a sky the color of concrete. Wind noise fills the room, flat and cold, carrying the distant roar of a football crowd. The image pulls you forward. Your breath turns to vapor. You are standing in Buffalo, New York, in winter, and no one is coming to pick you up.";
var ENTER_MSG_ROOM = " loads a frost-covered film reel. The screen fills with grey winter light and the sound of wind over empty parking lots. Frost crawls across the floor and swallows them whole. When it clears, they are gone.";

function onCommand_load(user, item, room) { return enterWorld(user, item, room); }
function onCommand_use(user, item, room) { return enterWorld(user, item, room); }
function onCommand_play(user, item, room) { return enterWorld(user, item, room); }
function onCommand_watch(user, item, room) { return enterWorld(user, item, room); }
function onCommand_enter(user, item, room) { return enterWorld(user, item, room); }

function enterWorld(user, item, room) {
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"8\">" + ENTER_MSG_SELF + "</ansi>");
    SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + "<ansi fg=\"8\">" + ENTER_MSG_ROOM + "</ansi>", user.UserId());
    user.MoveRoom(DEST_ROOM);
    return true;
}
