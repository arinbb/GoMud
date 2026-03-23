
// Wayne's World - Garth's Workshop
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The workshop's electronics flicker and go dark in sequence. The oscilloscope flatlines. The library comes back in from the edges. You feel slightly smarter for having been there.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " phases out of Garth's workshop. One of the circuit boards blinks once in farewell.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "look" && (rest.toLowerCase().indexOf("invention") >= 0 || rest.toLowerCase().indexOf("device") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The device on the workbench has a dial with no markings, five wires exiting from an unmarked port, and what appears to be a Walkman component at its core. It hums. You have no idea what it does. Garth knows. Garth built it with a specific excellent purpose in mind.</ansi>");
        return true;
    }

    if (cmd == "look" && rest.toLowerCase().indexOf("schematic") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The schematics are dense and precise. You can read some of it — this section is a modified amp circuit. This part is something to do with radio frequency. This corner is labeled \"FOXY LADY ENHANCEMENT - CLASSIFIED.\" You're not sure what that means but you respect it.</ansi>");
        return true;
    }

    if (cmd == "drum" || cmd == "play") {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You tap on a nearby surface in an imitation of the Neil Peart influence that fills this room. It is nowhere near as good as Garth. Nothing in this room that isn't Garth is as good as Garth.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " taps out a drum pattern. It is clearly not Garth, but it is sincere.", user.UserId());
        return true;
    }

    if (cmd == "touch" && rest.toLowerCase().indexOf("tape") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The DO NOT TOUCH label on the tape case is underlined three times and circled. You put it down immediately. Some things are sacred.</ansi>");
        return true;
    }

    return false;
}
