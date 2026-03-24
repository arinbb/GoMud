// Tass Times in Tonetown -- Snottys Mansion Gates (2460)
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The grey gates recede into the chemical haze. The gargoyles watch you go with their characteristic lack of opinion. You are back in the Arcade, where everything is better than it was at the gates.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " disappears from the mansion gates as if rejecting everything they represent.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "look" && (rest.toLowerCase().indexOf("gargoyle") >= 0 || rest.toLowerCase().indexOf("gate") >= 0)) {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">The gargoyles are magnificent in their awfulness. They represent the logical endpoint of Snotty's philosophy applied to decorative architecture: technically correct, functionally present, aesthetically null. You find yourself feeling something like sympathy for the gargoyles, who did not choose to be like this. A stone carver had to carve the life out of them deliberately. That was the instruction. The carver did their job. You feel sorry for the carver too.</ansi>");
        return true;
    }

    if (cmd == "read" && rest.toLowerCase().indexOf("placard") >= 0) {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">SNOTTY INDUSTRIES -- DIVISION OF CONFORMITY SOLUTIONS. Established 1982 (the year Gramps' notes say Snarl left the partnership). Below: OUR MISSION: AN ORDERED, PREDICTABLE, COMFORTABLE TONETOWN. Below that, the anomalous line in smaller type: IF YOU ARE READING THIS, YOU MAY BE TOO INTERESTING FOR THIS FACILITY. Someone who knew what they were doing snuck that line in. Whoever it was is not here anymore.</ansi>");
        return true;
    }

    return false;
}
