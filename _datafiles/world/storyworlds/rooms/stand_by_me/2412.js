// Stand By Me -- The Body (2412)
// ZONE COMMANDS: look body (easter egg, 200 XP)
var LIBRARY_ROOM = 1;

function onEnter(user, room) {
    if (user.HasQuest(430)) {
        // Mark quest step for reaching the body
        // (quest engine tracks visit-based steps automatically)
    }
    return true;
}

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">You turn away from the body. The ferns close. The embankment dissolves. You are back in the Grand Library. The cap is not in your hand. But you remember it.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " turns away from the embankment and is gone.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "look" && rest.toLowerCase().indexOf("body") >= 0) {
        handleLookBody(user, room);
        return true;
    }

    if (cmd == "look" && rest.toLowerCase().indexOf("brower") >= 0) {
        handleLookBody(user, room);
        return true;
    }

    if (cmd == "look" && rest.toLowerCase().indexOf("ray") >= 0) {
        handleLookBody(user, room);
        return true;
    }

    return false;
}

function handleLookBody(user, room) {
    var key = "easter_sbm_body";
    if (user.GetMiscCharacterData(key) == "found") {
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">You look. You have already looked. You will look for the rest of your life, in a way.</ansi>");
        return;
    }
    user.SetMiscCharacterData(key, "found");
    user.GrantXP(200, "the moment of reckoning");
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"10\">You look at Ray Brower. He is twelve years old. He is wearing a plaid shirt and blue jeans and one sneaker. The other sneaker is ten feet away, as if his foot came out of it when the train hit. His face is turned slightly away from you.</ansi>");
    SendUserMessage(user.UserId(), "<ansi fg=\"15\">He looks like any boy. He looks like a boy who was here and then was not here, and the difference between those two states is so absolute and so physical that you cannot look at it directly for more than a moment before something in you has to look away.</ansi>");
    SendUserMessage(user.UserId(), "<ansi fg=\"10\">Gordie looks longest. He is twelve years old and he is understanding something. The thing he is understanding will not leave him. He will write about it someday -- not yet, but someday. He will try to find the words for what it means to stand here and look at this. He will not entirely succeed. Neither will anyone. The words only go so close.</ansi>");
    SendUserMessage(user.UserId(), "<ansi fg=\"3\">(+200 XP: You looked. You stayed.)</ansi>");
    SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " looks down at the body of Ray Brower for a long time. The boys stand around them in silence.", user.UserId());
}
