
// The Three Little Bears
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"blue\">The illustrated cottage fades. The cold fireplace and empty bowls dissolve back into the flat surface of the painting. You step through the frame and back into the warm amber light of the great green room.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " steps back through the painting and into the great green room.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "sit" || (cmd == "sit" && rest.toLowerCase().indexOf("chair") >= 0)) {
        var options = [
            "<ansi fg=\"10\">You sit in Papa Bear's great chair. It is too hard and too large. Your feet do not touch the floor.</ansi>",
            "<ansi fg=\"10\">You sit in Mama Bear's chair. It is too soft. You sink in slightly further than is comfortable.</ansi>",
            "<ansi fg=\"10\">You try to sit in Baby Bear's chair. It is on its side and already broken. This is perhaps just right, in its own way.</ansi>"
        ];
        var pick = Math.floor(Math.random() * options.length);
        SendUserMessage(user.UserId(), options[pick]);
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " sits in one of the three chairs and considers it carefully.", user.UserId());
        return true;
    }

    if (cmd == "taste" || cmd == "eat") {
        if (rest.toLowerCase().indexOf("porridge") >= 0 || rest.toLowerCase().indexOf("bowl") >= 0) {
            SendUserMessage(user.UserId(), "<ansi fg=\"10\">The bowls are empty. Someone already got here before you. The smallest bowl has the faintest sweetness at its rim -- honey, or something like it. You lick your finger. Just right.</ansi>");
            return true;
        }
    }

    if (cmd == "go" && rest.toLowerCase().indexOf("forest") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"blue\">The forest through the door is deep and perfect and absolutely still. You stand at the threshold for a long moment. The trees are packed together like words on a page, dark and full of suggestion. You do not go in. Some forests are meant to be looked at.</ansi>");
        return true;
    }

    return false;
}
