
var DEST_ROOM = 1400;
var ENTER_MSG_SELF = "You open the book and the smell of cheap hair dye and TV dinners wafts from the pages. The illustrations swim and grow, the tiny girl on the cover blinks her enormous dark eyes, and the story reaches up and pulls you in...";
var ENTER_MSG_ROOM = " opens a colorful book. A blast of garish television light spills from its pages, and somewhere a narrator begins to speak...";

function onCommand_read(user, item, room) { return enterWorld(user, item, room); }
function onCommand_open(user, item, room) { return enterWorld(user, item, room); }
function onCommand_use(user, item, room) { return enterWorld(user, item, room); }
function onCommand_enter(user, item, room) { return enterWorld(user, item, room); }

function enterWorld(user, item, room) {
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"3\">" + ENTER_MSG_SELF + "</ansi>");
    SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + "<ansi fg=\"3\">" + ENTER_MSG_ROOM + "</ansi>", user.UserId());
    user.MoveRoom(DEST_ROOM);
    return true;
}
