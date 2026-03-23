
// Matilda - The Public Library
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You reach for a book on the shelf and it opens of its own accord. The pages flutter past in a warm breeze that smells of mahogany and dust, and the village library dissolves into the Grand Library — just another room full of books, after all.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " opens a book and is carried away by its pages, dissolving into the warm library light.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}

function onEnter(user, room) {
    if (user.HasQuest(100)) {
        user.GiveQuest(100);
    }
    return false;
}
