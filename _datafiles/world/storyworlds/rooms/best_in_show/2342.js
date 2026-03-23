// Best in Show - Swan Suite
// COMMANDS: argue, fight (easter egg)
var LIBRARY_ROOM = 3;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The Swan suite dissolves. The cold Starbucks, the self-help book, Beatrice on the bed -- all of it folds back into film and the Grand Library settles around you like a room that does not require therapy to exist in.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " backs slowly out of the Swan suite and steps through the screen to the Grand Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "argue" || cmd == "fight") {
        var key = "easter_best_in_show_argue";
        if (user.GetMiscCharacterData(key) != "found") {
            user.SetMiscCharacterData(key, "found");
            user.GrantXP(150, "Swan Suite argument");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You attempt to communicate your needs using the vocabulary both Swans have been practicing. It comes out as: 'I feel that this situation is -- I hear you saying -- what I'm trying to express is --'</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Hamilton looks at you. Meg looks at you. They look at each other. Something shifts.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">'They get it,' Meg says.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">'I know,' Hamilton says.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Beatrice wags her tail once.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"3\">(+150 XP: Therapy-Fluent)</ansi>");
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You've already done the emotional labor here. The Swans appreciate the effort.</ansi>");
        }
        return true;
    }

    if (cmd == "pet" || cmd == "pat") {
        if (rest.indexOf("beatrice") >= 0 || rest.indexOf("dog") >= 0 || rest.indexOf("weimaraner") >= 0 || rest == "") {
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You reach toward Beatrice. She regards you with her grey eyes. She has made a decision about you and the decision, apparently, is acceptable. She allows it. Both Swans watch with the pride of parents whose child has made a new friend.</ansi>");
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You offer a pat to whoever will accept it. In this room, Beatrice is the most receptive.</ansi>");
        }
        return true;
    }

    if (cmd == "read" || (cmd == "look" && rest.indexOf("book") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You open the book to a random page. Chapter Seven: 'Saying What You Mean Without Meaning What You Say.' The chapter is six pages long and contains forty-three instances of the phrase 'in a healthy way.'</ansi>");
        return true;
    }

    return false;
}
