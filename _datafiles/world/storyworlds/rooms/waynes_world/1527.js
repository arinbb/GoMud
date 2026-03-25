
// Wayne's World - Music Store
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The guitars blur and shimmer. The NO STAIRWAY sign winks out. The library fills in from the edges, warm and paperbound. The music in your head stays a little longer.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dematerializes between the guitar racks like a bad recording.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "play" || cmd == "strum" || cmd == "guitar") {
        var restLower = rest.toLowerCase();
        var wantsStairway = (restLower.indexOf("stairway") >= 0 || restLower.indexOf("led zeppelin") >= 0 || restLower.indexOf("zeppelin") >= 0);
        var key = "waynes_world_stairway_egg";

        if (wantsStairway || cmd == "stairway") {
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You pick up the Stratocaster. Your fingers find the frets. You play the opening arpeggio of Stairway to Heaven. It sounds incredible. It sounds perfect. The whole store fills with it.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"room-title\">\"HEY! NO STAIRWAY! DENIED!\"</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " begins to play Stairway to Heaven on the Stratocaster. The clerk materializes instantly. \"NO STAIRWAY! DENIED!\"", user.UserId());
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The clerk points firmly at the sign. You carefully replace the guitar. You don't even feel bad about it. Wayne did this too. You are part of the tradition now.</ansi>");
            if (user.GetMiscCharacterData(key) != "found") {
                user.SetMiscCharacterData(key, "found");
                user.GrantXP(200, "no stairway easter egg");
                SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(+200 XP — No Stairway. Denied.)</ansi>");
            }
            return true;
        }

        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You pick up a guitar and play a few notes. Nothing forbidden. The clerk nods. You have passed the test. You play a chord sequence that sounds genuinely excellent. A kid near the back stops to listen.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " picks up a guitar and plays something that isn't Stairway to Heaven. Everyone approves.", user.UserId());

        // Quest step 5: Try to play guitar at the Music Store
        if (user.HasQuest(120) && !user.GetMiscCharacterData("ww_quest_step5")) {
            user.SetMiscCharacterData("ww_quest_step5", "done");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(Quest: Tried to play guitar at the Music Store.)</ansi>");
        }
        return true;
    }

    if (cmd == "stairway") {
        var key3 = "waynes_world_stairway_egg";
        SendUserMessage(user.UserId(), "<ansi fg=\"room-title\">NO STAIRWAY! DENIED!</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The clerk has eyes everywhere. You didn't even have a guitar in your hands.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " says \"Stairway\" and the clerk is there before the word is finished.", user.UserId());
        if (user.GetMiscCharacterData(key3) != "found") {
            user.SetMiscCharacterData(key3, "found");
            user.GrantXP(200, "no stairway easter egg");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(+200 XP — Truly, no Stairway.)</ansi>");
        }
        return true;
    }

    if (cmd == "read" && rest.toLowerCase().indexOf("sign") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"room-title\">NO STAIRWAY TO HEAVEN</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Also no Smoke on the Water, no Iron Man, no Sweet Child O' Mine, no Enter Sandman, no Sweet Home Alabama. The clerk means all of these with his whole heart.</ansi>");
        return true;
    }

    return false;
}

function onEnter(user, room) {
    // Quest step 5 advance (entering counts as trying)
    if (user.HasQuest(120) && !user.GetMiscCharacterData("ww_quest_step5_entered")) {
        user.SetMiscCharacterData("ww_quest_step5_entered", "done");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The NO STAIRWAY sign is right there at eye level. It is the first thing you see. It is not a suggestion.</ansi>");
    }
    return true;
}
