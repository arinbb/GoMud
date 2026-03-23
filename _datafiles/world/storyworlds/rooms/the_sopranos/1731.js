
// The Sopranos - Dr. Melfis Office
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The therapy room holds you for a moment longer, the chairs and the painting and the silence -- then it all releases. The Grand Library forms around you, warm and undemanding.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " stands, thanks Dr. Melfi for her time, and steps through a door that leads somewhere else entirely.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "sit" || cmd == "talk" || (cmd == "sit" && rest.indexOf("chair") >= 0)) {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"12\">You sit in the patient's chair. Dr. Melfi is across from you, notepad on her knee, expression open and still. You feel, unexpectedly, like you might say something true. She waits. The room waits. The tissues are there if you need them.</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"12\">She says: 'What brings you in today?' Her voice is even, unhurried. Whatever you say, she has heard something like it before. You begin to talk. You do not say what you meant to say. You say something else, something that surprises you. This is how therapy works, when it works.</ansi>");

        if (user.GetMiscCharacterData("sopranos_therapy") != "found") {
            user.SetMiscCharacterData("sopranos_therapy", "found");
            user.GrantXP(200, "sitting in the therapy chair");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You have sat in the patient's chair in Dr. Melfi's office. Something in you loosens slightly. Quest updated. [+200 XP]</ansi>");
        }

        if (user.GetMiscCharacterData("sopranos_quest2") != "done") {
            user.SetMiscCharacterData("sopranos_quest2", "done");
            SendUserMessage(user.UserId(), "<ansi fg=\"3\">You have visited Dr. Melfis office. Quest updated.</ansi>");
        }
        return true;
    }

    if (cmd == "look" && rest.indexOf("painting") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"12\">You look at the painting for a long time. The ochres and blues resolve into something that might be a landscape and might be an interior. There is warmth in it. There is also something that is not warmth, something at the edges that you can only see if you stop trying to see it. This painting is doing its job.</ansi>");
        return true;
    }

    return false;
}
