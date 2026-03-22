
// Starry Night entry room - Cypress Hill
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The swirling sky descends around you, the stars spinning faster and faster until they blur into streaks of light. The thick brushstrokes of the landscape dissolve into wet paint, running and pooling until the world is nothing but color. Then the colors thin, the canvas fades, and you stand once more in the quiet Gallery of the Grand Library.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " is caught up in a spiral of stars and dissolving paint, vanishing back to the Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }
    return false;
}

function onEnter(user, room) {
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"14\">The painting expands around you. You feel the thick impasto beneath your feet, smell oil paint and night air. The swirling sky opens above you — impossibly vast, impossibly alive. You are standing on a hill in the world of Starry Night.</ansi>");
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"3\">(Type 'return' at any time to go back to the Grand Library.)</ansi>");
    return false;
}
