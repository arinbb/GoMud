
function onCommand_use(user, item, room) {
    SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You hold up the Arkenstone and it blazes with light — pure, white, brilliant. Rainbows dance across the walls, the ceiling, your own skin. The Heart of the Mountain pulses with warmth in your palm, and for a moment you understand why Thorin would risk everything to possess it.</ansi>");
    SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " holds up a great white gem. It blazes with inner light, casting rainbows across the room. The air itself seems to hum.", user.UserId());
    return true;
}
