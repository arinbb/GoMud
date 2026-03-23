// Six Feet Under - Davids Apartment
// Room 2232
var LIBRARY_ROOM = 3;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The apartment fades. Davids books, Keiths weights, the kitchen table -- all of it softens and goes. The Grand Library forms around you.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " slips out of Davids apartment.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "look" && (rest.indexOf("photo") >= 0 || rest.indexOf("wall") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">The photographs on the wall are evidence of a life being lived. David and Keith at a wedding, laughing. A beach somewhere -- David squinting in the sun, Keith with his arm around him, both of them a little sunburned. The funeral home photo, formal, the sign behind them. These photographs exist. David and Keith exist in photographs together. It took a long time to get here and it is real and it is here.</ansi>");
        return true;
    }

    if (cmd == "read" || (cmd == "look" && rest.indexOf("book") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">The shelf is alphabetical. You pull a book out -- Augustine, Confessions, well-worn, passages marked in pencil. David was raised going to church and spent years in conflict with what that meant. He has not resolved it. He is not trying to resolve it anymore. He is just reading. The pencil marks are his argument with the text and also his conversation with it.</ansi>");
        return true;
    }

    if (cmd == "sit" || (cmd == "look" && rest.indexOf("table") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You sit at the kitchen table. Two chairs. You can see the apartment from here -- the organized bookshelf, the workout corner, the photographs on the wall. David and Keith have made this. It did not happen by accident. They worked for this apartment, for these chairs, for the right to sit here together, and sometimes apart, and know that the other one is coming back. It is hard-won and it is real.</ansi>");
        return true;
    }

    return false;
}