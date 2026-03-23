// Back to the Future -- Lous Cafe
// Easter egg: "order pepsi" or "order tab" triggers the Pepsi Free confusion
var LIBRARY_ROOM = 1;
var EASTER_KEY = "bttf_egg_pepsi";

function onEnter(user, room) {
    if (user.HasQuest(250)) {
        var step = user.GetMiscCharacterData("bttf_quest_step");
        if (step == "1") {
            user.SetMiscCharacterData("bttf_quest_step", "2");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">A boy at the counter catches your eye -- hunched over a notebook, clearly nervous, clearly dreaming. That is George McFly. That is your father. And he does not know you exist yet.</ansi>");
        }
    }
    return false;
}

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The jukebox scratches off mid-song. The diner lights pulse once and the chrome counters dissolve into the warm amber glow of the Grand Library. The smell of bacon and vanilla lingers for just a moment before it, too, fades.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " flickers like a bad television signal and disappears from the diner.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "order") {
        var restLower = rest.toLowerCase();
        if (restLower.indexOf("pepsi") >= 0 || restLower.indexOf("tab") >= 0 || restLower.indexOf("diet") >= 0 || restLower.indexOf("free") >= 0) {
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Lou sets down his cloth and stares at you.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"white\">\"Pepsi Free? You want a Pepsi, PAL, you're gonna pay for it!\"</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You try to clarify. Lou stares harder.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"white\">\"Tab? I can't give you a tab. I don't know you!\"</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Lou slides you a Coca-Cola. You take it.</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " tries to order something that doesn't exist yet and ends up with a Coke.", user.UserId());

            if (user.GetMiscCharacterData(EASTER_KEY) != "found") {
                user.SetMiscCharacterData(EASTER_KEY, "found");
                user.GrantXP(150, "Pepsi Free confusion");
                SendUserMessage(user.UserId(), "<ansi fg=\"10\">(+150 XP -- you tried to order the future in the past)</ansi>");
            }
            return true;
        }

        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Lou slides a Coca-Cola across the counter without looking up. \"Ten cents.\"</ansi>");
        return true;
    }

    return false;
}
