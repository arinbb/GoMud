
var LIBRARY_ROOM = 1;
function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The magic shop shimmers. The cards, the masks, the swords all blur into a kaleidoscope of purple and gold. A puff of stage smoke, and you are back in the Grand Library.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " vanishes in a puff of stage smoke. Classic.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }
    if (cmd == "squeeze" || cmd == "honk") {
        if (rest.indexOf("chicken") >= 0) {
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You squeeze the rubber chicken. It emits a sound that is somehow a honk, a scream, and a laugh all at once. Every item in the shop rattles sympathetically. The knocking from inside the magic cabinet intensifies briefly.</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " squeezes a rubber chicken. The resulting noise defies description.", user.UserId());
            return true;
        }
    }
    if (cmd == "reach" || cmd == "look") {
        if (rest.indexOf("hat") >= 0 && cmd == "reach") {
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You reach into the top hat. Your hand goes in... and in... and in. Much further than should be physically possible. Your fingers brush against something soft and warm. It twitches. You pull your hand out quickly. A white rabbit ear pokes briefly from the hat, wiggles, and disappears back inside.</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " reaches into the top hat and pulls their hand out very quickly.", user.UserId());
            if (user.GetMiscCharacterData("easter_peewee_hat") != "found") {
                user.SetMiscCharacterData("easter_peewee_hat", "found");
                user.GrantXP(100, "finding the rabbit in the hat");
            }
            return true;
        }
    }
    if (cmd == "knock" || cmd == "open") {
        if (rest.indexOf("cabinet") >= 0) {
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You knock on the magic cabinet. From inside, a muffled voice says: \"Is the show over? Can I come out now? It's been THREE WEEKS.\" The swords rattle but the cabinet stays firmly shut.</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " knocks on the magic cabinet. Someone inside knocks back.", user.UserId());
            return true;
        }
    }
    return false;
}
