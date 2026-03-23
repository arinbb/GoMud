
// Souvenir: Festivus Pole
// From the Seinfeld zone

function onCommand_use(user, item, room) {
    SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You hold up the Festivus pole. It is aluminum. It is unadorned. You feel, briefly, the gravity of a holiday invented out of frustration with tinsel. A holiday for the rest of us. You are the rest of us.</ansi>");
    SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " holds up a small aluminum pole. 'A Festivus for the rest of us,' they say.", user.UserId());
    return true;
}

function onCommand_air(user, item, room) {
    SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You hold the pole and begin the Airing of Grievances. You have a lot of problems with people. And now they are going to hear about it.</ansi>");
    return true;
}
