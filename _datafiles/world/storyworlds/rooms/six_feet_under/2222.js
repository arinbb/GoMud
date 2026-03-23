// Six Feet Under - The Slumber Room
// Room 2222
var LIBRARY_ROOM = 3;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The soft music fades. The flowers lose their color. The slumber room dissolves gently into the warm shelves of the Grand Library.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " steps quietly back out of the slumber room.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "sit" || (cmd == "look" && rest.indexOf("chair") >= 0)) {
        if (!user.GetMiscCharacterData("sfu_easter_slumber")) {
            user.SetMiscCharacterData("sfu_easter_slumber", "found");
            user.GrantXP(150, "Sitting with the dead and the living both");
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">You take a seat in one of the folding chairs. Around you, people are doing the same thing -- sitting with it, sitting with the fact of it. Nobody is performing. There is nowhere to hide in a room like this and no reason to. The flowers are real. The music is quiet. The person in the casket is gone. You sit with all of this and something in you settles, slightly.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"3\">(+150 XP: sitting with it)</ansi>");
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">You take a seat in one of the folding chairs and sit for a while. The room holds its quiet around you.</ansi>");
        }
        return true;
    }

    if (cmd == "pay" || (cmd == "look" && (rest.indexOf("casket") >= 0 || rest.indexOf("body") >= 0 || rest.indexOf("deceased") >= 0))) {
        if (!user.GetMiscCharacterData("sfu_easter_slumber")) {
            user.SetMiscCharacterData("sfu_easter_slumber", "found");
            user.GrantXP(150, "Paying respects");
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">You approach the casket. The person inside looks peaceful -- more peaceful than people usually look, which is the point. Rico has done his work. The hands are folded. The suit is pressed. The expression is one of rest. You stand there for a moment and do not look away. This is the thing we do not look at, and you are looking at it.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"3\">(+150 XP: paying respects)</ansi>");
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">You approach the casket and stand at it for a moment. There is nothing to say. Sometimes that is enough.</ansi>");
        }
        return true;
    }

    if (cmd == "read" || (cmd == "look" && rest.indexOf("sign") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">A name. Two dates. A hyphen between them. The photograph shows someone at a birthday party, years ago, holding a piece of cake and laughing. They did not know the photograph would end up here. They never do. That is what makes the photograph unbearable and beautiful at the same time.</ansi>");
        return true;
    }

    return false;
}