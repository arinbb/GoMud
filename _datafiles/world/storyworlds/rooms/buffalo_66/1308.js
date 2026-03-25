
// Buffalo '66 - Bowling Alley
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The lanes stretch and warp, the blue light bending, and the bowling alley folds in on itself like a dream ending. The Grand Library is waiting on the other side.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dissolves into the shifting blue light of the bowling alley.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "bowl" || cmd == "throw" || cmd == "roll") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"12\">You pick up a bowling ball. It is heavy and cold and perfect in your hand.</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"12\">You step to the line. The lane stretches out before you, impossibly long, the polished wood glowing under shifting blue light. The pins at the far end are tiny and white and waiting. Everything else falls away — the cold, the anger, the years in prison, the parents who never loved you, the city that forgot you. There is only you and the ball and the geometry of the lane.</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"15\">You release. The ball rolls down the center of the lane with a sound like distant thunder, smooth and true and inevitable. Time slows. The light shifts to deep amber. You can see every rotation of the ball, every reflection on its surface. It hits the pins with a sound like the world cracking open.</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"6\">Strike. Every pin falls. The sound echoes through the empty alley like applause from an audience you cannot see. For one perfect moment, you are the greatest bowler who ever lived. Then the pins reset, and the moment passes, and you are back in Buffalo.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " bowls a perfect strike. The sound echoes through the dreamlike alley.", user.UserId());

        if (user.GetMiscCharacterData("buffalo66_bowl") != "found") {
            user.SetMiscCharacterData("buffalo66_bowl", "found");
            user.GrantXP(200, "bowling a perfect frame");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The dream lingers. Something shifted inside you during that roll. [+200 XP]</ansi>");
        }
        return true;
    }

    return false;
}

function onEnter(user, room) {
    if (user.HasQuest(90) && !user.GetMiscCharacterData("buffalo66_bowlvisit")) {
        user.SetMiscCharacterData("buffalo66_bowlvisit", "visited");
        SendUserMessage(user.UserId(), "<ansi fg=\"12\">The bowling alley wraps around you like a dream you have had before. The light shifts blue to amber and back. The lanes stretch impossibly long. It is more beautiful than it has any right to be.</ansi>");
    }
    return true;
}
