
// Forbidden Planet - The Krell Laboratory
// Quest step 4: enter the Krell lab
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The Krell instrument panels cycle through one final readout sequence -- something that looks almost like a farewell -- and then everything dims to the warm light of the Grand Library. You exhale. You had not realized you were holding your breath.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " is logged and released by the Krell machine, returning to the Grand Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "touch" && (rest.indexOf("panel") >= 0 || rest.indexOf("wall") >= 0 || rest.indexOf("krell") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You place your hand against an instrument panel. It brightens under your palm. The readouts shift, adapting -- running something that feels like a scan. The panel displays a complex readout. Then another. Then a third, simpler one, like a result. You cannot read Krell. But the machine seems satisfied. Or at least, it seems to have learned something.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " touches a Krell panel. The panel brightens and shifts its readouts.", user.UserId());
        return true;
    }

    return false;
}

function onEnter(user, room) {
    if (user.HasQuest(270) && user.GetMiscCharacterData("fp_q4_lab") != "done") {
        user.SetMiscCharacterData("fp_q4_lab", "done");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(Quest update: You have entered the Krell laboratory.)</ansi>");
    }
    return false;
}
