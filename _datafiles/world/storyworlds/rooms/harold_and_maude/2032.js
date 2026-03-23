
// Harold and Maude - The Seaside Cliffs
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The Pacific wind fades. The cliff edge and the wildflowers and the grey-green ocean dissolve into warm library light. The sound of the surf goes with them, replaced by the quiet of the Grand Library. You carry something back with you. It is hard to name.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dissolves from the seaside cliffs, carried off on the Pacific wind.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "play" && rest.indexOf("banjo") >= 0) {
        if (user.GetMiscCharacterData("ham_cliffs_easter") != "found") {
            user.SetMiscCharacterData("ham_cliffs_easter", "found");
            user.GrantXP(300, "Harold and Maude: playing the banjo at the cliffs");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"10\">You pick up the banjo and play it badly, but with feeling, standing at the edge of the California cliffs in the Pacific wind. The wildflowers blow. The ocean moves below. Harold listens with his hands in his pockets and something in his face that is not sadness and is not happiness but is the thing underneath both of them. You play. The wind takes the notes and carries them out over the water. Maude would have approved enormously. (+300 XP)</ansi>");
            SendUserMessage(user.UserId(), "");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " picks up Maude's banjo and plays it at the cliff edge. The Pacific wind carries the notes out over the water.", user.UserId());
            // Quest completion
            if (user.HasQuest(290) && !user.GetTempData("ham_quest_complete")) {
                user.SetTempData("ham_quest_complete", "done");
                user.Command("questadvance 290");
                user.SetMiscCharacterData("souvenir_harold_and_maude", "collected");
            }
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"10\">You play the banjo at the cliff edge again. The ocean doesn't mind. The wildflowers blow. Harold nods once, slowly, which is all the applause you need.</ansi>");
        }
        return true;
    }

    if (cmd == "look" && (rest == "edge" || rest == "cliff" || rest == "down")) {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">The cliff drops three hundred feet to rocks and white water. The Pacific extends west without apparent limit. The wind comes off all that water and hits you in the face and says: this is where things are. Harold has stood at this edge many times, in many states of mind, and always walked away. He says: 'The view is better when you stay.'</ansi>");
        return true;
    }

    return false;
}

function onEnter(user, room) {

    // Quest step 5: visit the cliffs
    if (user.HasQuest(290) && !user.GetTempData("ham_cliffs")) {
        user.SetTempData("ham_cliffs", "visited");
        user.Command("questadvance 290");
    }

    return false;
}
