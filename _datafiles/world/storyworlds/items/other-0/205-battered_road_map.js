
// Souvenir: Battered Road Map from On the Road

function onCommand_use(user, item, room) {
    SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You unfold the road map, then fold it again, then unfold it a different way because you put it away wrong and the whole thing is a mess of creases now. You spread it out as best you can and trace the penciled route with your finger: New York to Denver, Denver to San Francisco, San Francisco to the Mexican border and back, New Orleans, the highway north. The route crosses itself, doubles back, makes a shape that is not a circle and not a line but something in between -- the shape of a man trying to find something by staying in motion.</ansi>");
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"8\">The map shows you where you went. It does not show you what you found. That is what the book is for.</ansi>");
    SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " unfolds a battered road map and stares at the penciled route across America, expression faraway.", user.UserId());
    return true;
}

function onCommand_look(user, item, room) {
    SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The map is a mess of wrong folds and right routes. Someone -- Dean, probably, or Sal, or both of them arguing over the dashboard -- has traced the journeys in pencil. The pencil line goes west, then east, then south toward the border, then back. It has been gone over more than once. Some stretches are dark with repeated tracing, the parts they came back to, the roads they could not stop taking. The Hudson's route. The American road. America's route through itself.</ansi>");
    return true;
}
