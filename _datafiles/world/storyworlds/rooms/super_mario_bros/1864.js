
// Toad Says Thank You - Quest advance + Toad bad news delivery
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
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">Toad waves goodbye cheerfully. The throne room dissolves. You are back in the Arcade with the particular feeling of someone who has been told, very politely, that the thing they came for is somewhere else.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " pixelates and vanishes. Toad waves goodbye at the empty space where they were.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "ask" && (rest.indexOf("princess") >= 0 || rest.indexOf("peach") >= 0 || rest.indexOf("castle") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">Toad clasps his hands and gives you an apologetic look of extraordinary cheerfulness. 'Thank you Mario! But our princess is in another castle!' He gestures vaguely eastward with a tiny hand. You have come through an entire castle, defeated the boss, crossed the bridge, and the princess is in another castle. This will happen seven more times. You will not stop. That is the thing about Mario: he never stops.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " asks Toad about the princess. Toad's expression achieves the perfect intersection of apology and cheer.", user.UserId());
        return true;
    }

    return false;
}
