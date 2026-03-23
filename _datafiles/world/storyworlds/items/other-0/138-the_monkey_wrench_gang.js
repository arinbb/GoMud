
// Portal Item: The Monkey Wrench Gang
// Destination: The Monkey Wrench Gang zone, room 1880 (The Lonely Dell)
var DEST_ROOM = 1880;

var ENTER_MSG_SELF = "You open the battered paperback. The smell of desert sage, campfire smoke, and cheap beer rises from the pages. Red rock canyons unfold around you under an impossibly blue sky. The Colorado River runs cold and green to your left. The canyon walls rise hundreds of feet, their colors shifting from cream to salmon to blood-red in the afternoon light. You are standing at Lees Ferry, at the beginning of the canyon country, at the beginning of everything the gang is fighting for.";
var ENTER_MSG_ROOM = " opens a sun-bleached paperback. A blast of dry desert heat and the smell of sagebrush and campfire smoke pour from its pages into the Library. When the air clears, they are gone -- only a faint smell of sage remaining where they stood.";

function onCommand_read(user, item, room) {
    return enterWorld(user, item, room);
}

function onCommand_open(user, item, room) {
    return enterWorld(user, item, room);
}

function onCommand_use(user, item, room) {
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
