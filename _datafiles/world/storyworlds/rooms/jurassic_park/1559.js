
// Jurassic Park - The Visitor Center Entrance
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The automatic doors cycle open and the lights flicker and you walk backward into the light until the light is the projector and the automatic doors are the screening room doors and the Grand Library is solid around you.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " backs through the automatic doors and dissolves in the light.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "read" && (rest.indexOf("banner") >= 0 || rest.indexOf("when") >= 0 || rest.indexOf("sign") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">WHEN DINOSAURS RULED THE EARTH. The banner hangs at a diagonal, one corner torn loose. Under the right circumstances it would have been inspiring. Under the current circumstances it has a different tone. Geological time does not care about your circumstances.</ansi>");
        return true;
    }

    if (cmd == "look" && (rest.indexOf("extension") >= 0 || rest.indexOf("cord") >= 0 || rest.indexOf("scaffolding") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">The unfinished work is everywhere once you start looking for it. Scaffolding, extension cords, uncapped electrical conduits, caulk tubes left open on window ledges. Hammond opened the park before it was ready. He wanted to show his grandchildren. He wanted to prove the doubters wrong. He wanted. The wanting outran the completing.</ansi>");
        return true;
    }

    return false;
}
