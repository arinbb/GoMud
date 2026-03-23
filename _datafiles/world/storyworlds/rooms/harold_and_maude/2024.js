
// Harold and Maude - Harolds Bedroom
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The theatrical props blur and soften. The noose dissolves upward into warm library light. The smell of stage blood fades into the familiar scent of old books and you are back among the stacks, alive and unremarkably so.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " fades from the bedroom like the morning mist of a staged death scene.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "die" || cmd == "fake" || (cmd == "fake" && rest == "death") || cmd == "suicide" || cmd == "perform") {
        if (user.GetMiscCharacterData("ham_bedroom_easter") != "found") {
            user.SetMiscCharacterData("ham_bedroom_easter", "found");
            user.GrantXP(200, "Harold and Maude: the theater of death");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"10\">You arrange yourself dramatically on the chaise longue, spreading the fake blood with the practiced ease of someone who has given this considerable thought. Harold watches from across the room and nods, very slowly, with the expression of a master acknowledging a fellow craftsman. It is, he says quietly, very convincing. You feel seen. (+200 XP)</ansi>");
            SendUserMessage(user.UserId(), "");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " performs a dramatic fake death on the chaise longue. Harold applauds softly, twice.", user.UserId());
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">You strike the pose again. Harold watches, unmoved -- he has seen better, including your first performance, which was genuinely excellent. But he appreciates the commitment.</ansi>");
        }
        return true;
    }

    return false;
}

function onEnter(user, room) {

    // Quest step 2: visit Harold's bedroom
    if (user.HasQuest(290) && !user.GetTempData("ham_bedroom")) {
        user.SetTempData("ham_bedroom", "visited");
        user.Command("questadvance 290");
    }

    return false;
}
