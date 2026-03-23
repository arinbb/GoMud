
// Die! Die! My Darling! - The Guest Bedroom
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The grey English lane unravels like film leader. Hedgerow and grey sky dissolve into flickering frames — a woman's face, a Bible, a locked barn door — and then the warm light of the Library reasserts itself around you.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dissolves into grey celluloid frames and is gone.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "look") {
        var target = rest.toLowerCase();
        if (target == "window" || target == "barn" || target == "outside") {
            if (user.GetMiscCharacterData("ddie_easter_window") != "found") {
                user.SetMiscCharacterData("ddie_easter_window", "found");
                user.GrantXP(150, "watching from the window");
                SendUserMessage(user.UserId(), "");
                SendUserMessage(user.UserId(), "<ansi fg=\"8\">You go to the window and look out. Below, the garden stretches toward the barn. As you watch, Harry crosses the space between them in long, unhurried strides. He is carrying something — a chain. He threads it through the barn door handles with practised ease and snaps the padlock shut. He does not look up. He does not look up because he does not need to. He knows you are up here. He knows you are watching. He locks your car inside and walks back toward the house and the door opens and closes and the garden is empty and very still.</ansi>");
                SendUserMessage(user.UserId(), "<ansi fg=\"3\">(+150 XP)</ansi>");
            } else {
                SendUserMessage(user.UserId(), "<ansi fg=\"8\">The garden lies below, the barn beyond it. The chain on the barn doors glints in the grey light.</ansi>");
            }
            return false;
        }
    }

    return false;
}
