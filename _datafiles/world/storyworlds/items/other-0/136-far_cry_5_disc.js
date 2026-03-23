// Portal Item: Far Cry 5 Game Disc
var DEST_ROOM = 1840;
var ENTER_MSG_SELF = "You insert the disc. The screen fills with Montana mountains and golden light, then a helicopter descending toward a church steeple. A hymn rises. The congregation is singing with the certainty of people who believe the world is ending. The deputy's badge catches the light. Something is very wrong in Hope County.";
var ENTER_MSG_ROOM = " inserts a game disc. The screen fills with mountain peaks and church steeples, and the distant sound of a congregation singing drifts into the room like smoke.";

function onCommand_play(user, item, room) { return enterWorld(user, item, room); }
function onCommand_insert(user, item, room) { return enterWorld(user, item, room); }
function onCommand_load(user, item, room) { return enterWorld(user, item, room); }
function onCommand_use(user, item, room) { return enterWorld(user, item, room); }
function onCommand_enter(user, item, room) { return enterWorld(user, item, room); }

function enterWorld(user, item, room) {
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"10\">" + ENTER_MSG_SELF + "</ansi>");
    SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + "<ansi fg=\"10\">" + ENTER_MSG_ROOM + "</ansi>", user.UserId());
    user.MoveRoom(DEST_ROOM);
    return true;
}
