
// The Sopranos - Holstens Diner
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The diner door opens. You look up. The projector beam comes through the doorway and the booth and the jukebox and the onion rings dissolve into warm library light. Don't stop believin.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " looks up when the door opens. Then they are gone. Just like that.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "sit" || (cmd == "look" && rest.indexOf("door") >= 0)) {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You are sitting in the booth. Journey is on the jukebox. 'Don't Stop Believin,' the piano riff ascending and descending. The onion rings are in front of you. Carmela comes in and slides in across from you. The bell above the door rings. A man at the counter turns on his stool to look at you. The song is building. Every time the door opens, a small alarm in your hindbrain fires -- this one? Not this one. The door opens again. You look up.</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">The room fills with the specific anxiety of a moment that could be any moment, that could be the last moment, that is just a moment in a diner where a family is having dinner and Journey is on the jukebox. The door opens.</ansi>");

        if (user.GetMiscCharacterData("sopranos_holstens") != "found") {
            user.SetMiscCharacterData("sopranos_holstens", "found");
            user.GrantXP(300, "experiencing the final scene");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You have sat in the booth at Holstens. You understand what the ending was. [+300 XP]</ansi>");
        }

        if (user.GetMiscCharacterData("sopranos_quest6") != "done") {
            user.SetMiscCharacterData("sopranos_quest6", "done");
            SendUserMessage(user.UserId(), "<ansi fg=\"3\">You have visited Holstens Diner. Quest complete -- check your inventory.</ansi>");
            var item = CreateItem(200);
            if (item) {
                user.GiveItem(item);
                SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">A Bada Bing matchbook appears in your pocket. A small piece of New Jersey, yours to keep.</ansi>");
            }
        }
        return true;
    }

    if (cmd == "eat" && rest.indexOf("onion") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You take an onion ring. It is golden and crispy and perfect. You eat it. It tastes exactly like an onion ring. In this moment that is extraordinary. You reach for another one. Journey is still playing.</ansi>");
        return true;
    }

    if (cmd == "listen" || (cmd == "look" && rest.indexOf("jukebox") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">'Don't Stop Believin.' The piano starts it, four notes in a repeating figure, ascending and descending. Then the guitar comes in. Then Steve Perry's voice, high and clean and certain about something. 'Just a small town girl, livin in a lonely world.' You have heard this song a thousand times. You are hearing it for the first time.</ansi>");
        return true;
    }

    return false;
}
