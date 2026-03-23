
// Buffalo '66 - Billy's Car
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The windshield fills with static and the car interior dissolves into frames of film. The engine fades. The Grand Library materializes around you.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dissolves into windshield static and vanishes from the car.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "listen" || (cmd == "turn" && rest.indexOf("radio") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You turn the radio dial. Static. A preacher. More static. A man talking about the weather — cold, cold, cold. Then a song comes through, faint and crackling, something from decades ago. It plays for thirty seconds and then the station drifts away into static again.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " fiddles with the car radio.", user.UserId());
        return true;
    }

    return false;
}
