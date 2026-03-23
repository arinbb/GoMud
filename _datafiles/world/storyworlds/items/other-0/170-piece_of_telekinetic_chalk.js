
function onCommand_use(user, item, room) {
    SendUserMessage(user.UserId(), "<ansi fg=\"magenta\">You set the chalk down and concentrate. It trembles, then rolls upright. Slowly, shakily, it begins to write on the nearest surface. The letters are wobbly but clear: the chalk writes a single word that means something only to you. Then it falls still, warm and spent.</ansi>");
    SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " sets down a piece of chalk. It stands upright BY ITSELF and begins writing on the nearest surface, then falls still.", user.UserId());
    return true;
}

function onCommand_write(user, item, room) {
    return onCommand_use(user, item, room);
}
