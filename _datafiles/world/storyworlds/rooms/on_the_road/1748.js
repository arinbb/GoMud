
// On the Road - San Francisco
var LIBRARY_ROOM = 1;
var QUEST_ID = 170;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The San Francisco fog rolls in and keeps rolling, thickening until the city dissolves into it, until the bay dissolves, until the hills of Marin are just a smudge, until everything is white and then nothing and then the warm light of the Grand Library. The book is in your hands. The end of the continent is in your memory.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " is swallowed by the bay fog and vanishes back into the pages of the novel.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "look") {
        var target = rest.toLowerCase();
        if (target.indexOf("bay") >= 0 || target.indexOf("water") >= 0 || target.indexOf("ocean") >= 0 || target.indexOf("sea") >= 0) {
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You look at the bay. The water is cold and grey-green and it moves with a slight chop from the Pacific wind. Beyond it, the Marin hills are green and improbable. Beyond them, more hills. Beyond those: the ocean itself, the Pacific, the largest body of water on the planet, three thousand miles of it running west to Japan.</ansi>");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You are standing at the edge of the continent. Behind you is everything you crossed to get here — the bridge, the cornfields, the highway, Denver, the desert. You walked to the edge of the land and here it is, the edge, the actual physical edge, and what do you do now? You go back. You go back and do it again. And that is the book.</ansi>");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">The fog moves in from the Gate. The city behind you sounds like itself. The water does not care. It has been here longer than the city, longer than the road, longer than the country. It will be here after.</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " stares at the bay for a long time, at something that is farther away than the water.", user.UserId());

            if (user.GetMiscCharacterData("road_end_of_continent") != "found") {
                user.SetMiscCharacterData("road_end_of_continent", "found");
                user.GrantXP(200, "reaching the end of the continent");
                SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">[ You earned 200 XP for looking at the water at the end of the road. ]</ansi>");
            }

            return true;
        }
    }

    return false;
}

function onEnter(user, room) {
    if (user.HasQuest(QUEST_ID)) {
        user.GiveQuest(QUEST_ID);
    }
    return false;
}
