
// Porfirys Office - Quest step 5 + Easter egg: confess
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The warm lamplight of Porfiry's office fades. The papers on the desk become pages of a novel. You are back in the Grand Library.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " fades from Porfiry's office, gone back to the Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "confess") {
        var xpKey = "cnp_porfiry_confess";
        if (user.GetMiscCharacterData(xpKey) != "found") {
            user.SetMiscCharacterData(xpKey, "found");
            user.GrantXP(200, "a confession before Porfiry");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">You open your mouth to speak.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Porfiry looks up from his papers. His small eyes open fully for one half-second — all the intelligence and patience and certainty of a man who has known for months and has been waiting with exquisite courtesy — and then he closes them again, lazy, amused, the smile settling back on his round face.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"white\">'I know,' he says pleasantly. 'I have known for quite some time. Sit down. Have some tea. Tell me everything. We have all the time in the world.'</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">His pen taps once on the desk. The sound is very small in the room.</ansi>");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(+200 XP: confessing to the one who already knew)</ansi>");
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Porfiry smiles his pleasant smile. 'You already told me,' he says. 'You have been telling me since the moment you walked in.'</ansi>");
        }
        return true;
    }

    return false;
}

function onEnter(user, room) {
    if (user.HasQuest(180) && !user.GetMiscCharacterData("cnp_q_porfiry")) {
        user.SetMiscCharacterData("cnp_q_porfiry", "done");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(Quest: You have entered Porfiry Petrovich's office.)</ansi>");
    }
    return true;
}
