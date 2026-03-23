var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">Times Square dissolves in a shower of film grain and marshmallow. The Stay Puft Marshmallow Man waves as the frame freezes. You return to the Screening Room.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " vanishes from Times Square. Stay Puft does not notice. Stay Puft barely notices most things.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "think") {
        if (user.GetMiscCharacterData("easter_ghostbusters_think") != "found") {
            user.SetMiscCharacterData("easter_ghostbusters_think", "found");
            user.GrantXP(200, "think of something nice easter egg");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You try to clear your mind, but something rises unbidden: a warm memory, a childhood comfort, a thing that felt safe. Somewhere to the north, the dimensional gateway responds to your subconscious choice. The shape of your thought takes form. It is very large. It is very white. It is smiling. You have done exactly what Ray Stantz did and you can't even blame him for it -- some thoughts just have too much hold.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(+200 XP -- You chose the form of the Destructor.)</ansi>");
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You think again. Stay Puft takes a cheerful step toward you. This is your fault. It will always be your fault.</ansi>");
        }
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " thinks of something. Stay Puft appears to grow a little larger in response.", user.UserId());
        return true;
    }

    return false;
}
