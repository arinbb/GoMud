
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The Hatter raises his teacup in a toast: 'Goodbye! Or is it hello? Time is funny here.' The tea party dissolves into swirling text and you tumble back through the pages to the Library.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " is toasted by the Hatter and dissolves into a swirl of tea-colored words, vanishing back to the Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "drink") {
        var easterKey = "wonderland_tea";
        if (user.GetMiscCharacterData(easterKey) != "found") {
            user.SetMiscCharacterData(easterKey, "found");
            user.GrantXP(200, "attending the Mad Tea Party");
            SendUserMessage(user.UserId(), "<ansi fg=\"3\">You take a sip of tea. It tastes of everything and nothing at the same time. The Hatter asks eagerly how you like it. Before you can answer, the March Hare shouts MOVE DOWN and everyone shuffles one seat to the left.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(+200 XP — A very merry unbirthday to you.)</ansi>");
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"3\">You sip more tea. The Hatter has moved on to asking the Dormouse about treacle wells.</ansi>");
        }
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " sips some tea and is swept into the chaos of musical chairs.", user.UserId());
        return true;
    }

    if (cmd == "sit") {
        SendUserMessage(user.UserId(), "<ansi fg=\"3\">'No room! No room!' cry the Hare and the Hatter in unison. There is, in fact, plenty of room. You sit down anyway. The Dormouse opens one eye, says 'Once upon a time there were three little sisters,' and falls back asleep.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " sits down at the tea party despite protests of 'No room!'", user.UserId());
        return true;
    }

    return false;
}
