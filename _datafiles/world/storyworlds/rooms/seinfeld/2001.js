
// Seinfeld - The Hallway
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The hallway carpet dissolves into static. The mailboxes recede. The Grand Library closes in around you like a comfortable coat.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " steps backward through the hallway air and disappears.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "knock" || (cmd == "look" && rest.indexOf("5b") >= 0) || (cmd == "open" && rest.indexOf("door") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You knock on the door to 5B. There is a pause, a sound of something heavy being moved, a brief discussion with someone or something that you cannot identify, and then the door opens and Kramer is already talking.</ansi>");
        return true;
    }

    return false;
}
