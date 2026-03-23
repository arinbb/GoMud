
// Billy Madison - The Principals Office
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">Anderson looks up as the office begins to dissolve. He gives you one slow nod -- the nod of a man who has seen students come and go and still thinks each one of them matters. The Grand Library returns around you.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dissolves from the principal's office. Anderson watches them go.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "look" && rest.toLowerCase().indexOf("trophy") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">STATE CHAMPION 1974. The trophy is small and brass-plated, the kind that came from a sporting goods store. It has been polished many times. Anderson sees you looking at it and says nothing, which is its own kind of statement.</ansi>");
        return true;
    }

    if (cmd == "read" && rest.toLowerCase().indexOf("drawing") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">\"PRINSIPAL ANDERSON IS THE BEST\" in red crayon, with a drawing of a man at a desk (square body, circle head, enormous smile). \"by Billy M., AGE 8.\" The spelling has never been corrected. Not once.</ansi>");
        return true;
    }

    return false;
}
