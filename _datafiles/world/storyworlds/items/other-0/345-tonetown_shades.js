function onCommand_use(user, item, room) {
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"magenta\">You put on the Tonetown shades. The world sharpens into angular neon. For a moment, everything is perfectly tass.</ansi>");
    SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " puts on a pair of angular neon sunglasses. Their expression settles into something that can only be described as extremely tass.", user.UserId());
    user.SetMiscCharacterData("souvenir_tass_times", "collected");
    return true;
}

function onCommand_wear(user, item, room) {
    return onCommand_use(user, item, room);
}
