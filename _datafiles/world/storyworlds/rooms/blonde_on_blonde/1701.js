// The Alley Behind the Studio - Blonde on Blonde (1701)
// ZONE COMMANDS: return (exit zone), ask ragman/undertaker (riddle responses)
var LIBRARY_ROOM = 1;

function onEnter(user, room) {
    var alleyKey = "bob_visited_alley";
    if (user.GetTempData(alleyKey) != "yes") {
        user.SetTempData(alleyKey, "yes");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You step out the back door of the studio and the music cuts to a muffle. The alley is wet and neon-lit, Nashville at its most cinematic, and two figures stand in the colored light who are definitely not session musicians. They are from the songs. They have walked out of the lyrics and into the alley and they are standing here with opinions and burlap sacks and pocket watches, waiting to be asked about things they half-understand.</ansi>");
    }
    return true;
}

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The neon reflections in the puddles blur and run together, the colors mixing into white, and the alley dissolves into the warm light of the Library. The last thing you hear is the Ragman muttering something about a compass.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " steps into a neon puddle and dissolves, the colors scattering like startled fish.", user.UserId());
        user.SetTempData("visited_blonde_on_blonde", "");
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "look") {
        var target = rest.toLowerCase();
        if (target.indexOf("coin") >= 0 || target.indexOf("silver") >= 0 || target.indexOf("dollar") >= 0) {
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">You reach for the silver dollar in the guitar case. Your fingers pass through it. The coins are real but they belong to someone else's song. You cannot take what the music put here.</ansi>");
            return true;
        }
    }

    if (cmd == "take" || cmd == "get" || cmd == "grab") {
        var target = rest.toLowerCase();
        if (target.indexOf("coin") >= 0 || target.indexOf("case") >= 0 || target.indexOf("guitar") >= 0 || target.indexOf("dollar") >= 0) {
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">Your hand passes through. These things belong to the song, not to anyone passing through the alley.</ansi>");
            return true;
        }
    }

    return false;
}
