// Back to the Future -- Doc Browns Mansion
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The grandfather clock begins to tick. Once, twice -- then faster, its pendulum a blur -- and then it chimes the hour all at once, every hour simultaneously, and the mansion dissolves in the resonance. You are back in the Grand Library. The ticking fades.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " is swallowed by the clockwork and vanishes from the mansion.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "read" || cmd == "look") {
        var restLower = rest.toLowerCase();
        if (restLower.indexOf("time machine") >= 0 || restLower.indexOf("wells") >= 0) {
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The copy of H.G. Wells' \"The Time Machine\" falls open to a heavily annotated page. In the margin, in Doc Browns hand: \"What if it does not require a machine? What if the mechanism is SPEED? 88 mph. c^2 -- yes. Yes. The FLUX.\" The next page is blank except for a crude sketch of a Y-shape.</ansi>");
            return true;
        }
    }

    return false;
}
