
// Souvenir: A Harmonica from Blonde on Blonde

function onCommand_play(user, item, room) {
    SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You put the harmonica to your lips and play. The sound that comes out is somewhere between a cry and a statement -- not a melody exactly, more a feeling organized into breath and metal. Anyone in earshot stops for a moment. That is what a harmonica in A does when it is played with any feeling at all.</ansi>");
    SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " plays a harmonica. The sound fills the air with something aching and alive.", user.UserId());
    return true;
}

function onCommand_use(user, item, room) {
    return onCommand_play(user, item, room);
}

function onCommand_blow(user, item, room) {
    return onCommand_play(user, item, room);
}
