
// Lydia's Bedroom - gothic teen sanctuary
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">Lydia's camera flash goes off, blinding you. When the afterimage fades, the dark bedroom has been replaced by the Library. In your pocket, you find a Polaroid of yourself -- standing in a library that doesn't exist yet.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " is caught in a camera flash and vanishes with the light.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    // Read the journal
    if (cmd == "read" && rest.indexOf("journal") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"magenta\">You read the open page of Lydia's journal. The handwriting is small, precise, and deeply felt. Between the poems and sketches, one entry catches your eye:</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"white\">\"I can see them. Adam and Barbara. They're still here. Everyone else walks right through them but I SEE them. Maybe being strange and unusual isn't a curse. Maybe it's the only thing that's real.\"</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"magenta\">A beetle is pressed flat between the next two pages, perfectly preserved like a bookmark.</ansi>");
        return true;
    }

    // Look through the camera
    if (cmd == "look" && rest.indexOf("camera") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"magenta\">You press your eye to the camera viewfinder. Through the lens, the room looks different -- the shadows are deeper, the candle flames are blue, and there are figures in the room with you. Transparent, shimmering figures going about routines from a life that ended. One of them looks directly into the lens and mouths a single word. You can't tell what it is. Then the viewfinder fogs over and the vision is gone.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " peers through Lydia's camera and goes very still for a long moment.", user.UserId());
        return true;
    }

    // Open the curtains
    if (cmd == "open" && rest.indexOf("curtain") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You pull back the black curtains. Daylight floods in, harsh and unwelcome. For a split second, the room looks completely ordinary -- just a teenager's messy bedroom. No ghosts, no atmosphere, no magic. Then Lydia's candles flare, the curtains rip themselves from your hands and slam shut, and the darkness rushes back like a tide. The room prefers it this way. So does Lydia.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " opens the curtains. The darkness immediately disagrees and pulls them shut again.", user.UserId());
        return true;
    }

    return false;
}
