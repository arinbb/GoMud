
// All Apologies - Track 12 (Final Room)
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The cello plays its last note. The sunflowers close. The lake absorbs the final light of the sunset and goes dark -- not black, but the deep blue of something at rest. The silence holds you for one more moment, gentle and complete, and then releases you. You are in the Grand Library. The album is over. The needle lifts. The tape runs out. All in all is all we are.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " sinks into the still water and is gone, leaving only ripples that fade to nothing.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "take" || cmd == "pick") {
        if (rest.indexOf("sunflower") >= 0 || rest.indexOf("flower") >= 0) {
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You reach into the still water and lift a sunflower from the surface. It is perfect — golden petals, dark center, warm in your hand despite floating in cold water. Kurt loved sunflowers. They appeared in his journals, in the band's artwork, in the margins of his lyrics. This one feels like a goodbye and a thank-you at the same time.</ansi>");
            if (user.GetMiscCharacterData("easter_utero_sunflower") != "found") {
                user.SetMiscCharacterData("easter_utero_sunflower", "found");
                user.GrantXP(200, "finding the sunflower in the still water");
            }
            return true;
        }
    }
    if (cmd == "listen") {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You listen. The cello holds a single low note — not a melody, just a vibration, the sound of something fundamental. Beneath it, barely audible, a voice repeats the same words over and over, like a mantra or a prayer. All in all is all we are. All in all is all we are. All in all is all we are.</ansi>");
        return true;
    }

    return false;
}
