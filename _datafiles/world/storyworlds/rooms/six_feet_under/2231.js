// Six Feet Under - The Cemetery
// Room 2231
var LIBRARY_ROOM = 3;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The green cemetery fades. The LA sky goes. The headstones dissolve into the Grand Library around you, warm and full of stories.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " steps back from the grave and fades from the cemetery.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "visit" || cmd == "kneel" || (cmd == "look" && (rest.indexOf("grave") >= 0 || rest.indexOf("nathaniel") >= 0 || rest.indexOf("fisher") >= 0))) {
        if (!user.GetMiscCharacterData("sfu_easter_cemetery")) {
            user.SetMiscCharacterData("sfu_easter_cemetery", "found");
            user.GrantXP(200, "Visiting Nathaniel Sr at the cemetery");
            SendUserMessage(user.UserId(), "<ansi fg=\"10\">You stand at Nathaniel Sr's grave. The stone says what it says. The flowers are fresh -- Ruth was here. You stand there for a while without trying to make anything of it, without resolving anything. You are just standing at a grave. He started a business and raised a family and died on New Years Eve in his car and now his children are trying to figure out what to do with what he left them, which is everything. You stand there. The grass is green. The sky is blue. He is gone.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"3\">(+200 XP: standing with the dead)</ansi>");
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"10\">You stand at Nathaniel Sr's grave. The stone. The fresh flowers. The green grass. The LA sky. You stand there for a while. There is nothing to say that the visit itself does not already say.</ansi>");
        }
        return true;
    }

    if (cmd == "look" && rest.indexOf("crow") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">The crow regards you from a headstone nearby, its head tilted at the particular angle crows use to indicate that they have assessed you and found you neither threatening nor interesting. It knows something you do not. They always look like they know something you do not.</ansi>");
        return true;
    }

    return false;
}

function onEnter(user, room) {
    if (user.HasQuest(360) && !user.GetMiscCharacterData("sfu_quest_cemetery")) {
        user.SetMiscCharacterData("sfu_quest_cemetery", "done");
        SendUserMessage(user.UserId(), "<ansi fg=\"3\">You have come to the cemetery. The quest advances.</ansi>");
    }
    return true;
}