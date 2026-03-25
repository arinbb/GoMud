// The Office - The Rooftop
// EASTER EGG: 'kiss' or 'propose' -- 250 XP (Jim and Pam moment)
var LIBRARY_ROOM = 1;
var QUEST_ID = 380;

function onEnter(user, room) {
    if (user.HasQuest(QUEST_ID) && !user.GetMiscCharacterData("office_visited_roof")) {
        user.SetMiscCharacterData("office_visited_roof", "yes");
        user.Command("quest 380 4", 0.5);
    }
    return true;
}

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You take one more look at the Scranton skyline and go back down the stairs. The view is already becoming a memory, the way good things do.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " takes a last look at Scranton and disappears back through the rooftop door.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    // Easter egg: kiss or propose
    if (cmd == "kiss" || cmd == "propose") {
        if (user.GetMiscCharacterData("office_easter_kiss") != "found") {
            user.SetMiscCharacterData("office_easter_kiss", "found");
            user.GrantXP(250, "Jim and Pam moment");
            if (cmd == "propose") {
                SendUserMessage(user.UserId(), "");
                SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">It is raining. It is a gas station on a Delaware highway in the middle of a workday. You pull over and you get out and you walk around to where she is standing with her hood up and you take her hand and you ask her. And she says yes and the camera is somewhere in the distance, small and respectful, barely there. You are on a rooftop in Scranton and you are at a gas station in the rain and you are in all the moments at once. She said yes. She always said yes.</ansi>");
                SendUserMessage(user.UserId(), "<ansi fg=\"10\">You have proposed. In the rain. At a rest stop. Which is actually perfect. (+250 XP)</ansi>");
            } else {
                SendUserMessage(user.UserId(), "");
                SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">It is Casino Night. The office party has been going for hours and you are standing outside in the dark by the loading dock and you have said all the things you came here to say and she has said all the things that mean no and then you lean forward and -- the camera is far away. This is a private moment. The air is warm for a Scranton spring. She kisses you back. Everything in the last two years was true. Everything you said in the parking lot was true. This moment is true in the specific way that only a few moments in a life are true.</ansi>");
                SendUserMessage(user.UserId(), "<ansi fg=\"10\">You have experienced the most important moment in the Dunder Mifflin parking lot. Jim would look at the camera right now. (+250 XP)</ansi>");
            }
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " looks at the Scranton skyline for a long time and does not look at the camera.", user.UserId());
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">You are already standing in the moment. It already happened. The rooftop remembers it. Scranton remembers it. You remember it.</ansi>");
        }
        return true;
    }

    if (cmd == "sit") {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You sit in the folding lawn chair and look at Scranton. The chair tilts slightly on the short leg. You adjust. The HVAC hums. The view is exactly as good as promised. You stay longer than you planned to.</ansi>");
        return true;
    }

    return false;
}
