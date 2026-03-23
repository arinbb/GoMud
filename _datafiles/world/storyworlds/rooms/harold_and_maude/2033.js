
// Harold and Maude - Uncle Victors Office
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The maps and pins and the grey steel desk blur. The mechanical arm in its bracket fades last. The library closes around you with its familiar warmth and the smell of old books, and you are back.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dissolves from the office like a strategic asset that has been recalled.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "examine" && (rest == "arm" || rest == "prosthetic")) {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">The prosthetic arm rests in its bracket with a kind of official dignity. It is mechanical, functional, well-maintained. Uncle Victor lost his arm in service. He does not elaborate. The arm is here, ready, a reminder of something he has put in a bracket and made part of his system. Harold once tried to ask about it. Victor said: 'It did its job. Now this one does its job.' That was the end of the conversation.</ansi>");
        return true;
    }

    if (cmd == "look" && (rest == "map" || rest == "maps" || rest == "pins")) {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You study the maps. Southeast Asia, Korea, Germany, and others. The pins suggest a level of ongoing operational vigilance that may or may not correspond to the current state of those conflicts. Uncle Victor's system is internally consistent. You can see that. What it corresponds to externally is less clear. Harold has never pointed this out. Neither has anyone else.</ansi>");
        return true;
    }

    return false;
}
