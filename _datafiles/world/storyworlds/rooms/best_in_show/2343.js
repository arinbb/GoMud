// Best in Show -- The Main Show Ring (2343)
// COMMANDS: sit, watch (easter egg 200 XP), gait/trot/walk, stack/stand/pose
var LIBRARY_ROOM = 3;
var QUEST_ID = 400;

function onEnter(user, room) {
    if (user.HasQuest(QUEST_ID)) {
        var step = user.GetMiscCharacterData("bis_quest_step");
        if (step == "2") {
            user.SetMiscCharacterData("bis_quest_step", "3");
            SendUserMessage(user.UserId(), "<ansi fg=\"3\">(Quest: Best in Show -- You have entered the main ring. Find the judges table and witness the Best in Show competition.)</ansi>");
        }
    }
    return false;
}

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The show ring dissolves. The carpet, the lights, the bleachers -- all folding back into film. The Grand Library returns and it is very quiet here, the way places get quiet after something has mattered.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " steps back from the ring and through the screen to the Grand Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "sit" || cmd == "watch") {
        var key = "easter_bis_ring_watch";
        if (user.GetMiscCharacterData(key) != "found") {
            user.SetMiscCharacterData(key, "found");
            user.GrantXP(200, "Watching the show ring");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You find a spot and watch. The ring unfolds in front of you: handler after handler, each one moving with the trained economy of someone who has done this hundreds of times. Each dog is different -- size, coat, bearing, the specific way it holds its head. The judge watches all of it with the same composed attention. You begin to understand what you are looking at. You begin to see the thing they are all reaching for: the dog that is entirely, completely what it is supposed to be. You will know it when you see it.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"3\">(+200 XP: You watched the competition.)</ansi>");
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You watch the ring. Another handler, another dog. You know what to look for now. The audience around you knows too. There is a pleasure in being in a room full of people who understand the same thing.</ansi>");
        }
        return true;
    }

    if (cmd == "gait" || cmd == "trot" || (cmd == "walk" && rest.indexOf("ring") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You walk across the show carpet. The audience in the bleachers watches with polite incomprehension. Dr. Millbank observes your movement with professional attention. His expression does not change. This is a kind of respect.</ansi>");
        return true;
    }

    if (cmd == "stack" || (cmd == "stand" && rest.indexOf("still") >= 0) || cmd == "pose") {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You attempt the free-stack: feet square, head up, absolutely still. You hold it for three seconds. Four. Five. Dr. Millbank watches. The audience is quiet. You are not a show dog. But in this moment you are trying very hard to be the best possible version of whatever you are, and there is something in that the room recognizes.</ansi>");
        return true;
    }

    if (cmd == "look" && rest.indexOf("ribbon") >= 0 || cmd == "look" && rest.indexOf("trophy") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The Best in Show cup. Silver, genuine, polished to a standard that suggests it was done twice by someone who cared. The blue-and-gold ribbon beside it is almost absurdly large. This is correct. This ribbon is the size of the thing it represents, which is large.</ansi>");
        return true;
    }

    return false;
}
