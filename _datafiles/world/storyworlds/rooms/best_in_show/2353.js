// Best in Show -- Winners Circle (2353)
// Quest completion + 250 XP easter egg on first entry
var LIBRARY_ROOM = 3;
var QUEST_ID = 400;

function onEnter(user, room) {
    var completedKey = "best_in_show_quest_complete";
    if (user.HasQuest(QUEST_ID) && user.GetMiscCharacterData(completedKey) != "done") {
        user.SetMiscCharacterData(completedKey, "done");
        user.SetMiscCharacterData("souvenir_best_in_show", "collected");
        user.GrantXP(250, "Winners Circle");

        var bee = CreateItem(320);
        user.GiveItem(bee);

        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You step into the Winners Circle. The spotlight is on you. The trophy is beside you. The bleachers are visible, the audience watching.</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You understand, standing here, what it is about. Not just dogs -- though it is absolutely about dogs -- but about the people who care this much about something that most of the world barely notices. The Flecks with their two left shoes and their uncomplicated love. The Swans with their therapy vocabulary and their genuine anxiety and Beatrice who monitors them both. Harlan and his nuts and his Bloodhound and his southern ease. Scott with his clipboard, Stefan with his eye. Buck Laughlin saying things. Trevor Beckwith redirecting them. Dr. Millbank watching everything with thirty years of informed attention. All of them here, in this building, for this.</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">It is, in its way, beautiful.</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"3\">Quest complete: Best in Show! You receive a Busy Bee dog toy as a souvenir of the Mayflower Kennel Club. (+250 XP)</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " steps into the Winners Circle. The spotlight is on them. The audience in the bleachers holds its breath.", user.UserId());
    }
    return false;
}

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The Winners Circle dissolves. The spotlight, the trophy, the gold rope -- all folding back into celluloid. The Grand Library returns around you and it is very comfortable here, in all this quiet, after all that caring.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " steps back from the Winners Circle and through the screen to the Grand Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "stand" || cmd == "pose" || cmd == "step") {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You step into the spotlight. It is very bright. Your shadow extends behind you across the green carpet. The photographer, on instinct, checks the frame. You stand there for a moment. You are not a show dog. You are not a champion. But you are in the light, and for a moment that is enough.</ansi>");
        return true;
    }

    if (cmd == "look" && rest.indexOf("trophy") >= 0 || cmd == "read" && rest.indexOf("trophy") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You read the engraved names on the trophy. One hundred and twenty years of winners, each one the best dog in the building on that specific night. The oldest names have the formal grandeur of another era. The most recent ones are no different. Each was loved by someone who was absolutely certain they had the best dog. Most of them were right, in the way that matters.</ansi>");
        return true;
    }

    if (cmd == "pet" || cmd == "pat") {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">There is no dog in the Winners Circle right now. The dog is on its way. You wait for it. This is the correct thing to do in the Winners Circle: wait for the dog.</ansi>");
        return true;
    }

    return false;
}
