
// The Fireplace Nook
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"blue\">You step away from the fire's warmth, back into the broader green room. The fireplace nook releases you gently, the way sleep releases you at morning -- reluctantly, gradually, with a faint sense of loss.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " drifts away from the warm fireplace nook, dissolving back toward the Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "sit" || cmd == "rest" || cmd == "lie" || cmd == "lay") {
        if (rest.toLowerCase().indexOf("rug") >= 0 || rest.toLowerCase().indexOf("hearthrug") >= 0 || rest == "") {
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You settle onto the hearthrug before the fire. The warmth is immediate and entire. The knitting needles click above you. The rocking chair sways. The fire murmurs. Your eyes want to close. You let them close, just for a moment. The moment stretches, soft and amber, into something longer.</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " lies down on the hearthrug before the fire.", user.UserId());
            return true;
        }
    }

    if (cmd == "rock" || (cmd == "sit" && rest.toLowerCase().indexOf("chair") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You sit in the rocking chair. It begins to move beneath you as if it has always known how to do this. The fire is directly before you. The room is green and warm. The knitting falls into your lap. Your hands move. You are not sure when you picked it up or what you are making. The chair rocks. The fire glows. Somewhere outside, the moon is rising.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " settles into the rocking chair and begins, slowly, to rock.", user.UserId());
        return true;
    }

    if (cmd == "stoke" || cmd == "tend" || (cmd == "poke" && rest.toLowerCase().indexOf("fire") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You reach toward the fire, but there is nothing to stoke -- no poker, no bellows. The fire is tending itself. It knows it is meant to burn lower. It knows what time it is. You withdraw your hand. The fire continues its careful, unhurried dying-down.</ansi>");
        return true;
    }

    return false;
}
