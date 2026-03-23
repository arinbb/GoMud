// Northern Exposure - Main Street Cicely (entry room)
var LIBRARY_ROOM = 3;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The cold Alaskan air shimmers. The mountains blur at their edges. The smell of pine and woodsmoke fades, replaced by the warm dusty scent of library shelves and old celluloid. Main Street Cicely dissolves like a dream of somewhere very far north, and the Screening Room closes around you.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " shimmers like a heat mirage in the Alaskan cold and is gone, leaving only a brief scent of pine.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}

function onEnter(user, room) {

    if (!user.HasQuest(340)) {
        user.GiveQuest(340);
    }

    // Quest step 0: arrive in Cicely
    if (user.HasQuest(340) && !user.GetTempData("ne_arrived")) {
        user.SetTempData("ne_arrived", "true");
        user.Command("questadvance 340");
    }

    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The film reel spins up. The screen fills with an impossible sky -- cyan and vast -- and then a town materializes beneath it. Population 215. Cicely, Alaska. A moose is standing in the middle of the street. It does not move for approaching vehicles. The vehicles slow and wait. This is the correct protocol. A voice on the radio says something philosophical about Thoreau and the Alaskan wilderness and you realize you are already inside the broadcast, already inside the town, already inside whatever this place is going to teach you about being human at the edge of the world.</ansi>");
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"3\">(Type 'return' at any time to go back to the Grand Library.)</ansi>");

    return false;
}
