
// The Window
var LIBRARY_ROOM = 1;

function onEnter(user, room) {
    if (user.HasQuest(110) && !user.GetMiscCharacterData("gm_found_mouse")) {
        var mobs = room.GetMobs(233);
        if (mobs.length > 0) {
            user.SetMiscCharacterData("gm_found_mouse", "true");
            user.Command("quest advance 110");
            SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">(Quest updated: you have found the little mouse.)</ansi>");
        }
    }
    return true;
}

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"blue\">You turn from the window, back to the warm green room. The moon follows you -- not literally, but in the sense that you carry the image of it: white, large, rising. You carry it back to the Library in you.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " turns from the window and dissolves back toward the Grand Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "listen") {
        if (user.HasQuest(110) && !user.GetMiscCharacterData("gm_listened_window")) {
            user.SetMiscCharacterData("gm_listened_window", "true");
            user.Command("quest advance 110");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"blue\">You press your ear to the cold glass and listen. Outside: the faint creak of the bare tree. The distant hush of wind in something far away. The sound of a very still world doing the work of growing more still. And beneath that -- not a sound exactly, but a quality of sound -- the moon's white presence filling the upper pane. You have been listening for this your whole life. You did not know that until now.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">(Quest updated: you have listened at the window.)</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " presses close to the window glass and listens to the quiet night.", user.UserId());
            return true;
        }
        SendUserMessage(user.UserId(), "<ansi fg=\"blue\">You press your ear to the glass and listen to the night: the creak of the bare tree, the faint wind, the enormous quiet presence of the moon. The world outside is very still.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " listens at the window.", user.UserId());
        return true;
    }

    if (cmd == "open" && rest.toLowerCase().indexOf("window") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"blue\">You touch the brass latch. It is cold and firm. You do not open the window. The room is warm. The night outside is cold and perfect. Some things are better kept at glass-distance, admired rather than entered. You let the latch go.</ansi>");
        return true;
    }

    if (cmd == "look" && rest.toLowerCase().indexOf("moon") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"15\">From this close to the window, the moon is extraordinary. It fills the upper pane entirely -- a white disk of impossible size, of absolute brightness in the dark sky. It is not quite the moon you see from ordinary windows. This moon is the Platonic ideal of moon, the moon as it exists in the imagination of a child at a window at bedtime, impossibly present, attentive, permanent. It will be here when you wake up. It has always been here.</ansi>");
        return true;
    }

    return false;
}
