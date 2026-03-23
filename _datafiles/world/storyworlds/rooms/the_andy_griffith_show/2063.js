
// The Andy Griffith Show - Main Street Mayberry
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">The elm trees and the storefronts and the old men on the bench all fade slowly into the warm air of the Grand Library. You take one last wave from the street before the scene dissolves. Mayberry holds its wave for a beat, then lets you go.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " waves to the checkers players on the bench, waves back at a passing car, and steps through the screen to the Grand Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "wave") {
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">You wave at whoever is passing. Three separate people wave back immediately. That is the thing about Mayberry -- when you wave, Mayberry waves back.</ansi>");
        return true;
    }

    if (cmd == "search" || (cmd == "look" && rest.indexOf("road") >= 0) || (cmd == "look" && rest.indexOf("north") >= 0 && rest.indexOf("road") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You look north past the Taylor house and spot a dirt road winding through the pines toward Myers Lake. The road to the fishing hole.</ansi>");
        if (room.GetTempData("mount_pilot_found") != "yes") {
            room.SetTempData("mount_pilot_found", "yes");
            room.AddTemporaryExit("road", "the road north", 2073, 3600);
        }
        return true;
    }

    return false;
}

function onIdle(room) {

    var players = room.GetPlayers();
    if (players.length == 0) {
        return false;
    }

    var roll = UtilDiceRoll(1, 10);

    if (roll == 1) {
        room.SendText("<ansi fg=\"10\">One of the old men at the checkerboard looks up, nods at you with the gravity of a man who has assessed the situation and found it acceptable, and looks back at the board.</ansi>");
        return true;
    }

    if (roll == 2) {
        room.SendText("<ansi fg=\"10\">A woman in a flower-print dress passes on the sidewalk, smiles, says 'Afternoon,' and continues. That is the entire interaction. It is completely satisfying.</ansi>");
        return true;
    }

    return false;
}
