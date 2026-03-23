
// The Secret Woods - shrine easter egg
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">The ancient trees recede. Their silence follows you a little way before the Library takes over. You bring back the smell of deep forest and old stone.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " steps between the oldest trees and is absorbed quietly by the forest, leaving no trace.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "search" || (cmd == "look" && rest.indexOf("statue") >= 0) || (cmd == "examine" && rest.indexOf("shrine") >= 0)) {
        if (user.GetMiscCharacterData("stardew_shrine_ee") == "found") {
            SendUserMessage(user.UserId(), "<ansi fg=\"10\">The shrine watches from the roots. Its gaze is unhurried. You have been here before and it knows it.</ansi>");
            return true;
        }
        user.SetMiscCharacterData("stardew_shrine_ee", "found");
        user.GrantXP(150, "discovering the hidden shrine in the Secret Woods");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">You push through the ferns and find it: a carved stone face half buried in roots, staring upward at a canopy it has watched for centuries. The carving is simple -- heavy brow, round cheeks, enormous oval eyes -- the face of something that predates the name Pelican Town, predates any name. You crouch beside it. Your hand touches the stone and it is warm, though no sun reaches here. A faint vibration, like a very slow heartbeat. The Wizard has been here. You can tell because there is a single spent candle at the base and a small square of written paper, too weathered to read. Whatever this place is, it is known. It has been honored. You understand, in a way you cannot fully explain, that the valley is older and more alive than it appears.</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">+150 XP for finding the hidden shrine of the Secret Woods!</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " kneels beside something half-hidden in the roots of the oldest tree, face illuminated by an inexplicable warm light.", user.UserId());
        return true;
    }

    return false;
}
