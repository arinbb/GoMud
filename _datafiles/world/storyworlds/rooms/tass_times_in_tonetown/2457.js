// Tass Times in Tonetown -- The Jam Session (2457)
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The bass fades to nothing. The stage lights cut. You are back in the Arcade with the sustained chord of the Jam Session still in your chest, fading slowly, the way good music does.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " disappears from the Jam Session between the last note and the next one.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "dance" || cmd == "headbang" || cmd == "move") {
        if (user.GetMiscCharacterData("easter_tass_dance") != "found") {
            user.SetMiscCharacterData("easter_tass_dance", "found");
            user.GrantXP(200, "danced at the Jam Session");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"magenta\">You find the beat -- not on the first try, but on the second, when you stop trying and just let the bass tell you where the downbeat is. Your body finds an angular geometry that matches the music. The crowd around you doesn't stare; they simply make room and continue their own geometries, and you are part of it. The Bouncer, from the entrance, clocks you. Gives you the nod. You are, right now, in this moment, at the Jam Session, extremely tass.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(+200 XP -- danced at the Jam Session)</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " finds the beat at the Jam Session and moves with the angular certainty of someone who belongs here.", user.UserId());
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"magenta\">You step back into the crowd and find your geometry again. The bass welcomes you back. The Bouncer nods without looking up.</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dances with the easy confidence of a regular.", user.UserId());
        }
        return true;
    }

    if (cmd == "sing" || cmd == "play") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"magenta\">You try to join the band's sound -- singing along, or miming the guitar, or following the drum pattern with your hands. The band doesn't stop but the singer glances over. It is not a disapproving glance. It is the glance of someone noting that you are trying, which in Tonetown is worth something.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " sings along with the Jam Session band, contributing to the sonic geometry.", user.UserId());
        return true;
    }

    if (cmd == "listen") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"magenta\">You stop and just listen to the band. The bass is the floor. The guitars are the walls. The drum machine runs in irregular time that your body figures out by feel rather than logic. Above all of it, the melody -- angular, angular, then one moment of something unexpectedly sweet that resolves back to angular. This is music that has opinions and is willing to defend them. You stand in it and let it have its argument around you. It is very good.</ansi>");
        return true;
    }

    return false;
}
