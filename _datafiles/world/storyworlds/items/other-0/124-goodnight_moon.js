
var DEST_ROOM = 1500;
var ENTER_MSG_SELF = "You open the picture book and the scent of warm milk and wool blankets rises from the pages. The great green room unfolds around you...";
var ENTER_MSG_ROOM = " opens a small picture book. A soft green glow spills from its pages, and somewhere a quiet voice whispers 'hush'...";

function onCommand_read(user, item, room) { return enterWorld(user, item, room); }
function onCommand_open(user, item, room) { return enterWorld(user, item, room); }
function onCommand_use(user, item, room) { return enterWorld(user, item, room); }
function onCommand_enter(user, item, room) { return enterWorld(user, item, room); }

function enterWorld(user, item, room) {
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"10\">" + ENTER_MSG_SELF + "</ansi>");
    SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + "<ansi fg=\"10\">" + ENTER_MSG_ROOM + "</ansi>", user.UserId());
    user.MoveRoom(DEST_ROOM);
    return true;
}
