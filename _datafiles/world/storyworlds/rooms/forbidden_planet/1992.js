
// Forbidden Planet - The Perimeter
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The force field emitters flicker and dim. The alien sky contracts to a single point of green light, then winks out. The Grand Library expands from that darkness to fill the world.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " flickers out like an emitter losing power, returning to the Grand Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}

function onIdle(room) {
    var players = room.GetPlayers();
    if (players.length == 0) {
        return false;
    }

    var roll = UtilDiceRoll(1, 6);
    if (roll == 1) {
        SendRoomMessage(room.RoomId(), "<ansi fg=\"red\">An emitter at the far end of the perimeter flares suddenly, its glow jumping to twice normal intensity, then stabilizes. A watch crewman shouts something into his comm. No one answers.</ansi>", -1);
        return true;
    }

    return false;
}
