// Six Feet Under - The Prep Room
// Room 2223
var LIBRARY_ROOM = 3;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The fluorescent hum fades. The chemical smell softens and goes. The prep room dissolves and the warm wood of the Grand Library takes its place.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " steps back up the stairs from the prep room.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if ((cmd == "look" && (rest.indexOf("table") >= 0 || rest.indexOf("body") >= 0 || rest.indexOf("work") >= 0)) || cmd == "examine") {
        if (!user.GetMiscCharacterData("sfu_easter_prep")) {
            user.SetMiscCharacterData("sfu_easter_prep", "found");
            user.GrantXP(200, "Witnessing the art of restoration");
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">You look at the work on the embalming table -- the care in the positioning, the cosmetics applied with the precision of a portrait painter, the reference photograph propped where Rico can check it. He is giving someone back to their family. Not alive -- never that -- but recognizable. Themselves, one last time. It is art. It is service. It is love expressed through the most difficult medium imaginable.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"3\">(+200 XP: witnessing the art of restoration)</ansi>");
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">The preparation table holds someone in the process of being returned to themselves. The work requires skill and patience and a belief that dignity matters, even now, especially now.</ansi>");
        }
        return true;
    }

    if ((cmd == "look" && rest.indexOf("photo") >= 0) || cmd == "compare") {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">The reference photograph shows someone at what looks like a birthday party -- mid-fifties, laughing at something, a paper hat slightly crooked. Rico glances between the photograph and the person on the table. His brush moves. He is trying to get back to that laugh, or at least to the face that was capable of it.</ansi>");
        return true;
    }

    return false;
}

function onEnter(user, room) {
    if (user.HasQuest(360) && !user.GetMiscCharacterData("sfu_quest_prep")) {
        user.SetMiscCharacterData("sfu_quest_prep", "done");
        SendUserMessage(user.UserId(), "<ansi fg=\"3\">You have seen the prep room. The quest advances.</ansi>");
    }
    return false;
}