var LIBRARY_ROOM = 1;
var QUEST_ID = 390;

function onEnter(user, room) {
    if (user.HasQuest(QUEST_ID) && !user.GetMiscCharacterData("quest_siamese_luna")) {
        user.SetMiscCharacterData("quest_siamese_luna", "visited");
        user.GiveQuest(QUEST_ID);

        if (user.GetMiscCharacterData("quest_siamese_today") &&
            user.GetMiscCharacterData("quest_siamese_disarm") &&
            user.GetMiscCharacterData("quest_siamese_silverfuck")) {
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"13\">You have walked through the whole record. The studio and the cathedral of feedback and the impossible sunshine and the longest room and the childhood bedroom floating in space and the acoustic wood and the building wall of sound and the fastest room and the guitar clouds and the gentle room and nine minutes of darkness and now this: moonlight. A Big Muff pedal materializes in your hands -- battered, scratched, the gain knob all the way up. You carry the sound of Siamese Dream with you now.</ansi>");
            user.GrantXP(4000, "completing Siamese Dream");
            var pedal = CreateItem(315);
            user.GiveItem(pedal);
            user.SetMiscCharacterData("souvenir_siamese_dream", "collected");
        }
    }
    return true;
}

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"13\">The moonlight carries you back. The guitar harmonics shimmer one last time and the room dissolves into silver light and you are in the Grand Library, the peace of the last track still on you.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dissolves into moonlight, returning to the Grand Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "rest" || cmd == "sleep") {
        if (user.GetMiscCharacterData("easter_siamese_luna") != "found") {
            user.SetMiscCharacterData("easter_siamese_luna", "found");
            user.GrantXP(200, "resting in Luna");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"13\">You lie down on the luminous floor. The moonlight falls across you. The guitar harmonics drift overhead like slow stars. The album is over. The band nearly destroyed themselves making it. The record will outlast all of it. You rest here for a moment, inside the moonlight, inside the peace at the end of the most beautiful difficult record. The harmonics shiver. The moon stays.</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " lies down in the moonlight, at rest in the final room.", user.UserId());
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"13\">You lie down on the luminous floor again. The moon is still there. It will always be there. This is the peace at the end of the record.</ansi>");
        }
        return true;
    }

    return false;
}
