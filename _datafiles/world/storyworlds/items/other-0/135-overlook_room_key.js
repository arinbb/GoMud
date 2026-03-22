
function onCommand_use(user, item, room) {
    SendUserMessage(user.UserId(), "<ansi fg=\"12\">You hold up the brass key. The number 237 blurs and shifts, the digits rearranging themselves. For a moment it clearly reads REDRUM. Then the letters blur again and it's just a number. Just a room key. Just 237.</ansi>");
    SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " holds up an old brass room key and stares at it. A chill passes through the room.", user.UserId());
    return true;
}
