
// Souvenir: Guitar Pick from Harvest

function onCommand_use(user, item, room) {
    SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You hold the pick between thumb and forefinger, the way you would if you were about to play. Your hand knows the motion. Downstroke, upstroke, downstroke. The air in the room thickens for a moment with the ghost of an acoustic guitar, warm and open, the sound of a man on a ranch in California who was twenty-four and had already written everything he needed to say. Then the moment passes. The pick is just a pick again. But your hand still wants to play.</ansi>");
    SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " holds a guitar pick between two fingers, and for a moment the air smells like old wood and California dust.", user.UserId());
    return true;
}

function onCommand_look(user, item, room) {
    SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Worn smooth on one side. The logo is gone, rubbed away by downstrokes and years. The celluloid has a slight warmth to it, as if it was used recently, as if it is always in the middle of a song.</ansi>");
    return true;
}
