// Best in Show - The Parking Lot
var LIBRARY_ROOM = 3;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The parking lot dissolves. The amber lights, the cars, the handlers still talking -- all folding back into celluloid. The Grand Library settles around you, warm and permanent, and you carry with you the afterimage of people who cared enormously about something small and specific and entirely their own.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " watches the last car pull away and steps back through the screen to the Grand Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "wait" || cmd == "stand" || cmd == "stay") {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You stand in the parking lot under the sodium lights. The cold November Philadelphia air is very clear. You can see your breath. Somewhere across the lot, Gerry Fleck is telling Cookie something, and she laughs. Harlan's truck rumbles to life. These people are going home. They will come back next year. They will come back every year. This is what people do with the things they love.</ansi>");
        return true;
    }

    if (cmd == "look" && rest.indexOf("gerry") >= 0 || cmd == "look" && rest.indexOf("cookie") >= 0 || cmd == "look" && rest.indexOf("fleck") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Gerry and Cookie Fleck are loading the car. Cookie's shoe situation has created a small navigational moment. Gerry has her arm. They're laughing. Winky is already in the crate in the back, curled up, ears still. Whatever happened in the ring tonight, these two are going home fine. They always go home fine. That's the whole thing about the Flecks.</ansi>");
        return true;
    }

    return false;
}
