// Tass Times in Tonetown -- The Toxic Swamp (2459)
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The swamp's grey chemical air recedes. The dead trees fade. You are back in the Arcade, where the air is warm and electronic and considerably more tass than anything you just walked through.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " vanishes from the swamp as if the grey had never quite managed to hold onto them.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "look" && rest.toLowerCase().indexOf("pipe") >= 0) {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">Up close, the pipes are industrial and deliberate -- not an accident of Snotty's operation but a design feature. The output is carefully calibrated, discharged at this specific angle to achieve maximum coverage of the swamp water. A small badge on the pipe reads SNOTTY INDUSTRIES CHROMATIC NEUTRALIZER DELIVERY SYSTEM. It has a patent number. Someone thought this was worth patenting. That person is Donn Snotty.</ansi>");
        return true;
    }

    if (cmd == "sabotage" || (cmd == "break" && rest.toLowerCase().indexOf("pipe") >= 0) || cmd == "wrench") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">You could. The pipes are industrial but not impervious. But taking out one pipe won't stop the operation -- it would just redirect the output elsewhere while Snotty fixes it. The source is the untass ray in the laboratory. That is what needs to stop. Still, the impulse was right.</ansi>");
        return true;
    }

    return false;
}
