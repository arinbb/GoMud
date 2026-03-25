
// The Sahara Desert - Entry room for The Little Prince zone
var LIBRARY_ROOM = 1;

function onEnter(user, room) {
    var visitedKey = "visited_the_little_prince";
    if (user.GetTempData(visitedKey) != "yes") {
        user.SetTempData(visitedKey, "yes");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You open the slender book and the pages fill with light -- watercolour light, desert light, the particular gold of a boy standing on a tiny planet watching his forty-fourth sunset. The library dissolves. You fall through a sky full of stars, each one warm as a voice, and land softly in sand so vast and so quiet that the silence has its own weight...</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"3\">(Type 'return' at any time to go back to the Grand Library.)</ansi>");
        
        if (!user.HasQuest(230)) {
        user.GiveQuest(230);
        }
        
    }
    return false;
}

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The desert fades to watercolour, then to white. The stars dissolve into library ceiling. You are holding a slender book. On its cover, a small boy stands on a tiny planet, his golden hair catching a light that comes from nowhere and everywhere. You set it down gently.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dissolves into a shimmer of desert light and starshine, vanishing back to the Library.", user.UserId());
        user.SetTempData("visited_the_little_prince", "");
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "draw" || (cmd == "draw" && rest.indexOf("sheep") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You crouch and draw a sheep in the sand. It is not a very good sheep. The Little Prince, if present, would probably ask you to draw it again. Or to draw a box with the sheep inside, so you do not have to worry about it getting out.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " draws something in the sand. It might be a sheep.", user.UserId());
        return true;
    }

    if (cmd == "look" && rest.indexOf("star") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You look up at the stars for a long time. There are so many. One of them -- you do not know which one -- has a small planet with three tiny volcanoes and a glass dome over a rose. One of them, somewhere, is laughing. You feel it more than hear it.</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You notice a faint path leading upward into the dark, as if the air itself has been walked enough times to show a way. The path whispers: listen.</ansi>");
        return true;
    }

    if (cmd == "listen") {
        if (user.GetMiscCharacterData("lp_stars_found") != "found") {
            user.SetMiscCharacterData("lp_stars_found", "found");
            user.GrantXP(200, "following the laughter to the stars");
            SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">+200 XP for listening for what cannot be heard.</ansi>");
        }
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You listen. At first there is only wind and sand. Then -- faintly, impossibly -- laughter. It comes from everywhere at once, from all the stars together, as light as silver bells. The sand beneath your feet shimmers and a path opens upward into the dark sky...</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " stands very still, listening to something no one else can hear. Then the air shimmers and opens.", user.UserId());
        room.AddTemporaryExit("stars", "a path of starlight leading upward", 1912, 60);
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">A path of [stars] opens briefly upward.</ansi>");
        return true;
    }

    return false;
}

function onIdle(room) {
    var players = room.GetPlayers();
    if (players.length == 0) {
        return false;
    }
    return false;
}
