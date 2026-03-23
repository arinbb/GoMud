
// The Andy Griffith Show - The Jail Cell
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">The jail cell -- the cot, the blanket, the open door -- dissolves quietly into the Grand Library. You were never really a prisoner. That is the point of Mayberry. Even the jail is friendly.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " steps out of the open cell, nods to no one in particular, and steps back through the screen to the Grand Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "sleep" || cmd == "lie" || (cmd == "rest" && rest.indexOf("cot") >= 0) || cmd == "nap") {
        var key = "easter_mayberry_cell";
        if (user.GetMiscCharacterData(key) != "done") {
            user.SetMiscCharacterData(key, "done");
            user.GrantXP(100, "slept in Otis Campbells cell");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">You stretch out on the cot, just to see what it is like. The mattress is thin but the blanket is warm. The iron bars are comforting in an odd way -- a border, a defined space, the reassurance of known limits. This is what Otis knows that the rest of Mayberry does not quite understand: sometimes you need a safe place to be, and the jail is the safest place in town.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(+100 XP)</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " lies down on the cot and stares at the ceiling of the Mayberry jail. Otis knew what he was doing.", user.UserId());
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">You rest a moment on the cot. The blanket is still warm. The cell is still exactly as tidy as Otis left it.</ansi>");
        }
        return true;
    }

    if (cmd == "lock" || (cmd == "close" && rest.indexOf("door") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You push the cell door. It swings closed with a satisfying clank. Then you realize you are inside. The door is unlocked. You push it back open. Otis has navigated this sequence many times and has systems in place.</ansi>");
        return true;
    }

    return false;
}
