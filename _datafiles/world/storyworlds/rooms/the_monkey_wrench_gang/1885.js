
// The Mesa Top - stars easter egg
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The canyon walls shimmer and blur, the smell of sage fading back into the smell of old paper and library dust. The Colorado River recedes like a dream you can almost hold. The red rock dissolves into sentences, the blue sky into margins, and then you are standing in the Grand Library with a sun-bleached paperback in your hands.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " stands very still for a moment, the desert light fading from their skin, then dissolves into the pages of a paperback and is gone.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "look") {
        var target = rest.toLowerCase();
        if (target.indexOf("star") >= 0 || target.indexOf("sky") >= 0 || target.indexOf("night") >= 0 || target.indexOf("milky") >= 0) {
            var key = "mwg_stars_seen";
            if (user.GetMiscCharacterData(key) != "done") {
                user.SetMiscCharacterData(key, "done");
                user.GrantXP(150, "desert mysticism");
                SendUserMessage(user.UserId(), "");
                SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You look up. The sky from the mesa top is not the sky you know. There is no ceiling here, no urban glow to soften the dark. The stars are not scattered -- they are packed, layer upon layer, the Milky Way a river of light that crosses the whole dome overhead. Scorpius rising. Sagittarius pointing toward the galactic center. The Pleiades clustered like a family. You feel the planet turn beneath your feet. You feel, for a moment, the geological scale of what you are standing on -- four hundred million years of rock, cooling slowly, and above it all the stars burning their hydrogen with absolute indifference to your concerns. Abbey wrote that the desert is home. You understand, just now, what he meant.</ansi>");
                SendUserMessage(user.UserId(), "<ansi fg=\"3\">(+150 XP -- the desert as church)</ansi>");
            } else {
                SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The stars are still there. They will outlast everything. This is not sad. This is the point.</ansi>");
            }
            return true;
        }
    }

    return false;
}
