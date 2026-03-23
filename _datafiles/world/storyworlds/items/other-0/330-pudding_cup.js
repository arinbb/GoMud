function onCommand_use(user, item, room) {
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You peel back the foil lid. The pudding is chocolate. It is room temperature. You dip your finger in.</ansi>");
    SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You understand now. You want to dip everything in it. You want to spend two hundred and forty dollars on it. You want a room full of it. You want to show it to everyone you know and say: this. THIS is what I mean. Do you understand? Do you see?</ansi>");
    SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The pudding is good. It is very good. There are always more.</ansi>");
    SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " opens their pudding cup and dips a finger in with the expression of someone arriving somewhere important.", user.UserId());
    return true;
}

function onCommand_eat(user, item, room) {
    return onCommand_use(user, item, room);
}

function onCommand_dip(user, item, room) {
    return onCommand_use(user, item, room);
}
