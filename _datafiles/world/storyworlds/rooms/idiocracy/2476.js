// Idiocracy -- Fuddruckers (2476)
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The fast food smell fades to the Screening Room's popcorn-and-celluloid. You are back in the Library. You feel full in a way that has nothing to do with eating. You think about the original sign. You think about the five hundred years of small decisions that brought the name to where it is now. Each change was a small step down. Each step was agreed upon by everyone present. This is the thing about small steps.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " leaves the restaurant and returns to somewhere with different naming conventions.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "eat" || cmd == "order" || (cmd == "ask" && rest.toLowerCase().indexOf("menu") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">'WELCOME TO -- THE RESTAURANT,' the speaker says. 'WOULD YOU LIKE AN EXTRA BIG ASS FRY?' You order something. It comes in a bag. The bag is warm. Whatever is inside the bag is warm and wrapped and probably food. You eat it. It tastes like the logical endpoint of convenience. You are full. You do not ask what it was. This turns out to be the right call.</ansi>");
        return true;
    }

    return false;
}
