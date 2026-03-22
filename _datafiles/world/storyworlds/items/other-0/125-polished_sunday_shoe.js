
function onCommand_use(user, item, room) {
    SendUserMessage(user.UserId(), "<ansi fg=\"6\">You hold the polished shoe and see your own face reflected in its surface. For a moment you are a child again, slipping on shoes someone else polished in the dark, stepping into warmth someone else made. What did you know, what did you know of love's austere and lonely offices?</ansi>");
    SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " holds up a small polished shoe and gazes at its mirrored surface, lost in thought.", user.UserId());
    return true;
}
