
// World 4-1 Lakitu Level - Quest advance on underwater arrival
var LIBRARY_ROOM = 1;

function onEnter(user, room) {
    if (user.HasQuest(210)) {
        user.Command("questadvance 210");
    }
    return true;
}

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">Lakitu watches you go, adjusting his spectacles. The cloud, the rod, the Spinies -- all dissolve into pixel static. You are back in the Arcade. The sky is motionless. Lakitu is nowhere. You feel mildly triumphant.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " pixelates and vanishes. Lakitu peers down from his cloud at the empty space below.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "look" && rest.indexOf("cloud") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You look up at Lakitu's cloud. It is a pixel-art cloud, simple and round, white against the blue sky. Lakitu rides it with the casual ease of something that has always ridden clouds. The cloud has no visible means of support. The cloud does not need visible means of support. This is the Mushroom Kingdom and clouds just do that here.</ansi>");
        return true;
    }

    return false;
}
