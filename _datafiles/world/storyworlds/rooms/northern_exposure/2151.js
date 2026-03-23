// Northern Exposure - The Lake
var LIBRARY_ROOM = 3;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The lake fades. The still water, the dock, the aurora reflected below the aurora above -- all of it dissolves back into the warm, dry air of the Screening Room. The loon calls one more time from somewhere you have left behind.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " fades from the dock, ripples spreading where they were standing.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "fish" || cmd == "sit") {
        if (user.GetMiscCharacterData("easter_ne_lake") != "found") {
            user.SetMiscCharacterData("easter_ne_lake", "found");
            user.GrantXP(150, "sat by the lake in Cicely");

            // Quest step 4: see the northern lights at the lake
            if (user.HasQuest(340) && !user.GetTempData("ne_lake")) {
                user.SetTempData("ne_lake", "visited");
                user.Command("questadvance 340");
            }

            if (cmd == "fish") {
                SendUserMessage(user.UserId(), "");
                SendUserMessage(user.UserId(), "<ansi fg=\"10\">You sit on the dock with your feet hanging over the cold water and a line in. The lake is very still. The mountains are enormous. The sky goes on past any reasonable limit. A loon calls from the far end and the sound falls down over the water and is absorbed by it. You do not catch anything. This is not the point. The point is sitting here with the cold coming off the water and the aurora beginning to stir at the edge of the sky and the knowledge that you are very far north and the world is very large and this specific place exists. You sit for a long time. Something settles in you that has been unsettled.</ansi>");
            } else {
                SendUserMessage(user.UserId(), "");
                SendUserMessage(user.UserId(), "<ansi fg=\"10\">You sit on the dock and look at the lake. The water reflects the mountains, then the wind moves the surface and the mountains break apart and reform. The northern lights are beginning above the peaks -- green, then cyan, folding slowly. The reflection arrives in the water a moment later. You are looking at the lights above and the lights below and for a moment the dock is the only thing between them, and you are sitting in the middle of the northern lights, surrounded, held. The cold does not matter. The distance does not matter. You are here.</ansi>");
            }
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(+150 XP -- sat by the lake in Cicely)</ansi>");
        } else {
            if (cmd == "fish") {
                SendUserMessage(user.UserId(), "<ansi fg=\"8\">You sit on the dock with a line in the cold water. The lake accepts your presence without comment. The mountains watch. A fish declines to be caught. This is fine.</ansi>");
            } else {
                SendUserMessage(user.UserId(), "<ansi fg=\"8\">You sit on the dock and look at the lake. The aurora is there if you look toward the mountains. The water reflects it. This is still true.</ansi>");
            }
        }
        return true;
    }

    if (cmd == "look") {
        var lookRest = rest ? rest.toLowerCase() : "";
        if (lookRest.indexOf("aurora") >= 0 || lookRest.indexOf("lights") >= 0 || lookRest.indexOf("sky") >= 0) {
            if (!UtilIsDay()) {
                SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The northern lights above the lake are doubled in the water below -- green and cyan, breathing over the peaks and breathing again in the reflection. You cannot tell which is more real. Perhaps both are equally real. This is the kind of question the lake encourages.</ansi>");
            } else {
                SendUserMessage(user.UserId(), "<ansi fg=\"8\">The daytime sky above the lake is vast and pale blue, reflected perfectly in the still water. The northern lights need the dark. Come back tonight.</ansi>");
            }
            return true;
        }
    }

    return false;
}
