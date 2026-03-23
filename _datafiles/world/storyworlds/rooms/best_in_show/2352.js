// Best in Show - Winners Circle
var LIBRARY_ROOM = 3;
var QUEST_ID = 400;

function onEnter(user, room) {
    // Quest completion: visitor has seen the winners circle
    if (user.HasQuest(QUEST_ID)) {
        var questData = user.GetMiscCharacterData("best_in_show_quest_complete");
        if (questData != "done") {
            user.SetMiscCharacterData("best_in_show_quest_complete", "done");
            user.SetMiscCharacterData("souvenir_best_in_show", "collected");
            var bee = CreateItem(320);
            user.GiveItem(bee);
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You step into the Winners Circle. The spotlight is on you. The trophy is beside you. The bleachers are visible. The audience is watching.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You understand, standing here, what it is about. Not just dogs -- though it is absolutely about dogs -- but about the people who care this much about something that most of the world barely glances at. The Flecks with their two left feet and their unwavering niceness. The Swans with their therapy vocabulary and their genuine anxiety. Harlan and his nuts and his bloodhound and his easy southern ease. Stefan and Scott with their lighting rig and their absolute dedication to Miss Agnes. Sherri Ann, who came second last year, and Christy, who will get her there. All of them here, in this building, for this.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">It is, in its way, beautiful.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"3\">Quest complete: Best in Show! You receive a Busy Bee dog toy as a souvenir.</ansi>");
        }
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
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You read the engraved names on the trophy. One hundred and twenty years of winners, each one the best dog in the building on that specific night. The oldest names have the formal grandeur of another era. The recent ones are no different, really. Each was loved by someone who was absolutely certain they had the best dog. Most of them were right, in the way that matters.</ansi>");
        return true;
    }

    return false;
}
