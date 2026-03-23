// The Office - The Parking Lot
// EASTER EGG: 'parkour' -- 150 XP
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You walk back across the parking lot and through the lobby doors. The Scranton sky watches you go, neither approving nor disapproving.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " crosses the parking lot and disappears through the lobby entrance.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    // Easter egg: parkour
    if (cmd == "parkour") {
        if (user.GetMiscCharacterData("office_easter_parkour") != "found") {
            user.SetMiscCharacterData("office_easter_parkour", "found");
            user.GrantXP(150, "PARKOUR");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">PARKOUR! You vault over the hood of a car, roll across the dumpster lid, leap to the concrete divider, and stick the landing with the total physical confidence of a person who has not thought this through. Michael is watching from the lobby window. He is thrilled. Andy is already trying to follow you. This was all Michael's idea.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"10\">PARKOUR. PARKOUR. PARKOUR. (+150 XP)</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " shouts PARKOUR and begins vaulting things in the parking lot. It goes about as well as it looks.", user.UserId());
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">PARKOUR! You vault the car hood again. You have learned nothing. Michael is still watching. He loves it every time.</ansi>");
        }
        return true;
    }

    return false;
}
