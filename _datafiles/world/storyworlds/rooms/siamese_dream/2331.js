var LIBRARY_ROOM = 1;
var QUEST_ID = 390;

function onEnter(user, room) {
    if (user.HasQuest(QUEST_ID) && !user.GetMiscCharacterData("quest_siamese_silverfuck")) {
        user.SetMiscCharacterData("quest_siamese_silverfuck", "visited");
        user.GiveQuest(QUEST_ID);
    }
    return false;
}

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"13\">The noise reaches a peak -- a final, sustained, impossible volume -- and then cuts to silence, and you are in the Grand Library, your ears ringing with nine minutes of everything.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " is released from the noise into silence, returning to the Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "listen" || cmd == "wait") {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You wait inside the nine minutes. The noise builds around you, the floor bucks at irregular intervals, the darkness is complete. But you wait. And at around the four-minute mark -- deep inside the noise, almost impossible to locate -- you find the melody. It has been there the whole time, playing at a ratio of one part song to eight parts distortion. It is the most beautiful thing in the room. It is almost certainly the most beautiful thing on the record. You had to survive the darkness to find it.</ansi>");
        return true;
    }

    return false;
}
