
// Wonderland entry room - handles "return" command to go back to library
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The world around you shimmers and dissolves like watercolors in rain. Letters and words swirl past you -- fragments of the story returning to their pages. With a gentle thud, you find yourself back in the Grand Library, the book closed in your hands.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " shimmers, dissolves into a swirl of text and illustration, and vanishes back to the Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}

function onEnter(user, room) {
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You tumble through a tunnel of words and illustrations, pages fluttering past like butterflies, until you land with a soft thump...</ansi>");
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"3\">(Type 'return' at any time to go back to the Grand Library.)</ansi>");
    return false;
}
