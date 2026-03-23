// The Office - Accounting Corner
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You leave the accounting corner. Angela watches you leave without expression. The cat calendar watches too.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " exits the accounting corner. Angela logs the departure time without being asked to.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "look" && (rest.indexOf("cat") >= 0 || rest.indexOf("calendar") >= 0 || rest.indexOf("sprinkles") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">This month's calendar cat is an Abyssinian, photographed against a blue background, wearing an expression of aristocratic composure. Someone has written in the margin of the calendar, in small neat letters: 'Sprinkles would have been beautiful here.' It is Angela's handwriting. The grief in it is genuine and you look away quickly to give it privacy.</ansi>");
        return true;
    }

    return false;
}
