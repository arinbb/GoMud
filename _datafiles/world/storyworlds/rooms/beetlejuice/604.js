
// Living Room - Beetlejuice summoning mechanic
// Say "beetlejuice" three times to summon him
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The living room flickers like a TV losing signal. Static fills your vision, then clears to reveal the Library.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dissolves into static and vanishes.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "say") {
        var words = rest.toLowerCase();
        if (words.indexOf("beetlejuice") >= 0 || words.indexOf("betelgeuse") >= 0) {
            var count = user.GetTempData("bj_count");
            if (count == "") {
                count = 0;
            } else {
                count = parseInt(count);
            }
            count = count + 1;
            user.SetTempData("bj_count", String(count));

            if (count == 1) {
                SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The lights in the room flicker once. A fly buzzes past your ear.</ansi>");
                SendRoomMessage(room.RoomId(), "The lights flicker as " + user.GetCharacterName(true) + " speaks that name.", user.UserId());
            } else if (count == 2) {
                SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The fire in the fireplace turns blue. Delia's sculptures rattle on their bases. The temperature drops sharply. One more time...</ansi>");
                SendRoomMessage(room.RoomId(), "The fireplace flares blue and the sculptures begin to rattle. Something is coming.", user.UserId());
            } else if (count >= 3) {
                SendUserMessage(user.UserId(), "");
                SendUserMessage(user.UserId(), "<ansi fg=\"green\">The floor splits open with a deafening crack. Green smoke billows upward in choking clouds. Lightning arcs between Delia's sculptures. And rising from the chaos, arms spread wide, grinning like a maniac in a black-and-white striped suit --</ansi>");
                SendUserMessage(user.UserId(), "");
                SendUserMessage(user.UserId(), "<ansi fg=\"white\">\"IT'S SHOWTIME!\"</ansi>");
                SendUserMessage(user.UserId(), "");
                SendRoomMessage(room.RoomId(), "The floor cracks open, green smoke erupts, and BEETLEJUICE rises from the chaos, cackling wildly!", user.UserId());

                // Spawn Beetlejuice and create temporary exit to his lair
                room.SpawnMob(22);
                room.AddTemporaryExit("crack in the floor", ":green", 615, "10 real minutes");
                user.SetTempData("bj_count", "0");
            }
            return false; // Let the say command still process normally
        }
    }

    return false;
}
