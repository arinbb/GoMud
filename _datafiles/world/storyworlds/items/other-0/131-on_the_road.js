
// Portal Item: On the Road (book)
// Destination: On the Road zone, room 1740
var DEST_ROOM = 1740;
var ENTER_MSG_SELF = "You open the book and a blast of cold New York air rushes past, carrying the sound of jazz, car horns, and Dean Moriarty laughing somewhere in the American night...";
var ENTER_MSG_ROOM = " opens a battered paperback. A gust of road-wind and the sound of a car horn spill from its pages into the Library...";

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
    SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">" + ENTER_MSG_SELF + "</ansi>");
    SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + "<ansi fg=\"cyan\">" + ENTER_MSG_ROOM + "</ansi>", user.UserId());
    user.MoveRoom(DEST_ROOM);
    return true;
}
