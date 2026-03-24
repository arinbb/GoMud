// Tass Times in Tonetown -- Gramps Workshop (2465)
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The blueprints and hoop models fade. The smell of solder and discovery goes with them. You are back in the Arcade, carrying the knowledge of what Gramps built here and what it cost him and what it was worth.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " steps back through the hidden workshop door and is gone.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "read" && rest.toLowerCase().indexOf("blueprint") >= 0) {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"magenta\">The final blueprint is the complete schematic for the hoop -- every dimension, every material specification, every calibration note. It is the work of decades compressed into a single diagram. At the bottom, Gramps wrote: 'The principle is simple. You build a frame that matches the resonant frequency of the dimensional boundary. The boundary opens. You step through. The frame stays behind. The boundary stays open as long as the frame exists and the frequency holds.' Below that: 'The dangerous part is Snotty. Not the physics. The physics is beautiful. Snotty is the problem.'</ansi>");
        return true;
    }

    if (cmd == "look" && rest.toLowerCase().indexOf("photo") >= 0) {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"magenta\">The workshop photograph shows a younger Gramps and a young Franklin Snarl in front of an early hoop prototype. Both are laughing. They look like people at the beginning of something. Gramps' caption reads: 'Franklin and I, 1979. Before he became Donn Snotty. Before blandness became a business plan.' You look at the photograph for a while. Then you look at Gramps' note: I SHOULD HAVE SEEN IT. You understand that the note is not about failure. It is about grief. He misses who Franklin Snarl was before he chose to be Donn Snotty. That is a different problem from the untass ray. That one does not have an obvious solution.</ansi>");
        return true;
    }

    if (cmd == "look" && rest.toLowerCase().indexOf("model") >= 0) {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"magenta\">The small hoop model nearest you rotates slowly on its string, its inner shimmer resolving into a moving image: Downtown Tonetown as it was, the neon at full saturation, citizens in outfits even more committed than what you have seen, the tass index clearly very high, the untass ray not yet built, the whole city operating at maximum chromatic potential. Gramps built this model from memory. He knows what Tonetown is supposed to look like. The model is both a record and a promise.</ansi>");
        return true;
    }

    return false;
}
