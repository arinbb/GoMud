
// Die! Die! My Darling! - The Cellar
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

        if (target == "mirrors" || target == "mirror" || target == "reflection" || target == "yourself" || target == "self") {
            if (user.GetMiscCharacterData("ddie_easter_mirrors") != "found") {
                user.SetMiscCharacterData("ddie_easter_mirrors", "found");
                user.GrantXP(300, "the cellar mirrors");
                SendUserMessage(user.UserId(), "");
                SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You stand before the mirrors and look at yourself. After all this time in the grey house — no mirrors above, no reflective surface, nothing to show you your own face — you have almost forgotten what you look like. Here you are. Here is your face. Your expression is one you do not recognise at first: you are frightened. You look frightened. The mirrors multiply you outward in every direction, you and you and you, each one carrying the same expression, stretching back into yellow light and theatrical costumes and the enormous hidden life of a woman upstairs who was once like you.</ansi>");
                SendUserMessage(user.UserId(), "<ansi fg=\"3\">(+300 XP)</ansi>");
            } else {
                SendUserMessage(user.UserId(), "");
                SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You look into the mirrors again. Dozens of you look back, stretching into the yellow light. You look very much like someone who wants to leave.</ansi>");
            }
            return false;
        }

        if (target == "portrait" || target == "stephen" || target == "photograph") {
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">Stephen Trefoile stares out from the enlarged photograph with the confident vacancy of someone who has never had to earn anything. He is handsome. He is cold. He died and his mother built a religion out of the absence of him, and in the religion she built, you are the sin.</ansi>");
            return false;
        }

        if (target == "costumes" || target == "gowns" || target == "clothes" || target == "dresses") {
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"3\">You move among the theatrical costumes on their racks — red velvet, gold lamé, midnight blue silk. Each one is vibrant, each one the colour of something alive. You look at the label in one of the evening gowns: 'E. Trefoile. Autumn Season, 1939.' She wore this. She was on a stage in this, in a spotlight, and people applauded, and she was young and brilliant and full of colour. And then something happened, and the colour was put down here, and the grey closed over everything above, and now the costumes hang in the cellar while she reads Leviticus upstairs and waits for her dead son to tell her what to do.</ansi>");
            return false;
        }
    }

    if (cmd == "wear" || cmd == "try" || cmd == "put") {
        var target2 = rest.toLowerCase();
        if (target2.indexOf("costume") >= 0 || target2.indexOf("gown") >= 0 || target2.indexOf("dress") >= 0) {
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"3\">You take a red gown from its hanger and hold it against yourself. In the mirror, you look like a person again — coloured, present, real. You hear a sound at the top of the cellar stairs and hang the gown back quickly. The sound does not come closer. Not yet.</ansi>");
            return true;
        }
    }

    return false;
}

function onEnter(user, room) {
    // Quest step 6 completion: Reach the cellar
    if (user.HasQuest(140) && !user.GetMiscCharacterData("ddie_q_cellar")) {
        user.SetMiscCharacterData("ddie_q_cellar", "1");
    }

    // Quest completion: all steps done
    if (user.HasQuest(140) &&
        user.GetMiscCharacterData("ddie_q_arrived") == "1" &&
        user.GetMiscCharacterData("ddie_q_dinner") == "1" &&
        user.GetMiscCharacterData("ddie_q_nomirrors") == "1" &&
        user.GetMiscCharacterData("ddie_q_service") == "1" &&
        user.GetMiscCharacterData("ddie_q_barn") == "1" &&
        !user.GetMiscCharacterData("ddie_quest_complete")) {
        user.SetMiscCharacterData("ddie_quest_complete", "1");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You descend into the cellar and the world opens up in colour — costumes and mirrors and the hidden life of this house laid bare. You understand everything now: what she was, what she lost, what she became, and what she intends for you.</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"3\">You have completed: Die! Die! My Darling!</ansi>");
        user.GrantXP(5000, "completing Die! Die! My Darling!");
        var mirror = CreateItem(190);
        if (mirror) {
            user.GiveItem(mirror);
            SendUserMessage(user.UserId(), "<ansi fg=\"3\">You take one of the smaller mirrors from the cellar wall. It shows you your face. You keep it.</ansi>");
        }
    }

    return false;
}
