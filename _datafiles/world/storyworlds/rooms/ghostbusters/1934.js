var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The Ecto-1 fades around you, siren fading to projector whir. Manhattan streaks past the windows one last time and then it is the Library. The Screening Room. Still.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " bails out of the moving vehicle, which is dramatic but effective.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "siren" || cmd == "drive" || cmd == "race") {
        if (user.GetMiscCharacterData("easter_ghostbusters_siren") != "found") {
            user.SetMiscCharacterData("easter_ghostbusters_siren", "found");
            user.GrantXP(100, "Ecto-1 chase easter egg");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Ray hits the siren and the Ecto-1 screams through midtown Manhattan at a speed that has never been legal and never will be. You pass through a red light, clip a newsstand, nearly collide with a crosstown bus, and emerge onto Fifth Avenue at a velocity that sends pigeons into the air for two blocks in every direction. Somewhere behind you, a traffic cop writes the Ecto-1's license plate down and then tears it up because he does not know what he would even put on the citation.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(+100 XP -- Full NYC chase sequence triggered.)</ansi>");
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The siren wails and the Ecto-1 surges forward. Ray is driving. This is how it always goes.</ansi>");
        }
        SendRoomMessage(room.RoomId(), "The Ecto-1 explodes forward as " + user.GetCharacterName(true) + " hits the siren. Somewhere outside, pigeons scatter.", user.UserId());
        return true;
    }

    return false;
}
