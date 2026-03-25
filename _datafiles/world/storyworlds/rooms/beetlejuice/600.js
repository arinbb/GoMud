
// Beetlejuice entry room - Covered Bridge
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The covered bridge seems to stretch and twist around you. The autumn leaves swirl into a vortex of celluloid frames, each one a frozen image from the film. The projector clicks, the screen goes dark, and you find yourself back in the Library's Screening Room.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " is swept up in a whirlwind of autumn leaves and film frames, vanishing back to the Library.", user.UserId());
        user.SetTempData("visited_beetlejuice", "");
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }
    return false;
}

function onEnter(user, room) {
    var visitedKey = "visited_beetlejuice";
    if (user.GetTempData(visitedKey) != "yes") {
        user.SetTempData(visitedKey, "yes");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The projector whirs. Rain on a car windshield. A model town on a hilltop. Then suddenly you're standing in cool autumn air, the smell of damp wood and fallen leaves all around you. The covered bridge materializes around you, solid and real.</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"3\">(Type 'return' at any time to go back to the Grand Library.)</ansi>");
    }
    return false;
}
