
// Seinfeld - Kramers Apartment
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The apartment dissolves. The Merv Griffin set folds. The Grand Library steadies around you like solid ground.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " slides backward through the door and disappears.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "sit" && rest.indexOf("set") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You sit behind the Merv Griffin desk. The overhead light hits you at the correct angle. You feel the weight of potential interviews you will never conduct. It is, somehow, satisfying.</ansi>");
        return true;
    }

    if (cmd == "look" && rest.indexOf("merv") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The set is remarkable. Kramer built it from pieces he acquired through methods that were never fully explained and probably cannot be. It works. That is the thing about Kramers projects: they work, exactly once, in the way they were intended to work, and then something happens.</ansi>");
        return true;
    }

    return false;
}
