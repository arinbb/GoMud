
// Portal Book: Those Winter Sundays by Robert Hayden
// Destination: Those Winter Sundays zone, room 700
var DEST_ROOM = 700;
var WORLD_NAME = "Those Winter Sundays";
var ENTER_MSG_SELF = "You open the book to the marked page and begin to read. The words rise from the page like cold breath — 'Sundays too my father got up early...' The chill of the poem seeps into your hands, your arms, your chest. The library dissolves. You are standing on a frozen porch in the blueblack cold of a winter Sunday morning.";
var ENTER_MSG_ROOM = " opens a book of poems and begins to read aloud. A winter chill radiates from the pages, frost forming on their fingertips. The words carry them away, and they vanish into the poem.";

function onCommand_read(user, item, room) {
    return enterWorld(user, item, room);
}

function onCommand_use(user, item, room) {
    return enterWorld(user, item, room);
}

function onCommand_open(user, item, room) {
    return enterWorld(user, item, room);
}

function onCommand_enter(user, item, room) {
    return enterWorld(user, item, room);
}

function enterWorld(user, item, room) {
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"6\">" + ENTER_MSG_SELF + "</ansi>");
    SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + "<ansi fg=\"6\">" + ENTER_MSG_ROOM + "</ansi>", user.UserId());

    user.MoveRoom(DEST_ROOM);
    return true;
}
