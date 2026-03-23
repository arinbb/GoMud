// Souvenir: Castle Rock cap from Stand By Me

function onCommand_use(user, item, room) {
    user.SetMiscCharacterData("souvenir_stand_by_me", "collected");
    SendUserMessage(user.UserId(), "<ansi fg=\"10\">You put on the cap. The bill sits low over your eyes. For a moment you are twelve again, and the whole world is the distance between here and the railroad tracks, and the tracks run south into the forest, and your friends are with you, and none of you know yet how it ends.</ansi>");
    SendUserMessage(user.UserId(), "<ansi fg=\"10\">The moment passes. You are back in the library. But for a second -- for one whole second -- you had it. The summer. The tracks. All of it.</ansi>");
    SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " puts on a faded Castle Rock baseball cap and stands very still for a moment.", user.UserId());
    return true;
}

function onCommand_look(user, item, room) {
    SendUserMessage(user.UserId(), "<ansi fg=\"10\">CASTLE ROCK in red thread, faded to pink at the top of each letter where the sun has had at it longest. The bill is curved and worn. The sweatband inside is soft from use. This cap was on a boy's head and then it was not, and the space between those two facts is the whole film.</ansi>");
    return true;
}

function onCommand_wear(user, item, room) {
    return onCommand_use(user, item, room);
}
