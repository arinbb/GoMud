
// Forbidden Planet - Morbius House Exterior
// Quest step 2: meet Robby and Morbius
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The dome and the desert and Robby at his gate all peel away like a film exposure burning out. You are deposited, gently but firmly, back in the Screening Room of the Grand Library.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " overexposures like a photograph left in the alien sun, fading back to the Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}

function onEnter(user, room) {
    if (user.HasQuest(270) && user.GetMiscCharacterData("fp_q2_robby") != "done") {
        user.SetMiscCharacterData("fp_q2_robby", "done");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(Quest update: You have met Robby and approached the house of Dr. Morbius.)</ansi>");
    }
    return false;
}
