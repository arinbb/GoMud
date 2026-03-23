// The Rat Tunnel - Charlie's domain, easter egg
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The rat tunnel closes around you and then releases you. The chalk drawings fade. The rats scatter into retreating dark. Charlie's underground kingdom dissolves into the smell of old paper and binding glue. You are back in the Grand Library. You will think about the chalk crown rat drawing for some time.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dissolves in the rat tunnel, watched impassively by several rats as the scene closes.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "fight" && rest.toLowerCase().indexOf("rat") >= 0) {
        var key = "easter_sunny_rats";
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You pick up one of Charlie's improvised rat-management tools and wade in. The rats are faster than you. They are smarter than you, individually and as a collective. You are not the rat king. Charlie is the rat king. You are just a visitor who swung at some rats and lost a shoe. The rats sit in a ring around you after, watching. They are not angry. They respect the effort.</ansi>");
        if (user.GetMiscCharacterData(key) != "found") {
            user.SetMiscCharacterData(key, "found");
            user.GrantXP(200, "Fought the rats in the rat tunnel");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">+200 XP: You Are Not the Rat King</ansi>");
        }
        return true;
    }

    if (cmd == "bash") {
        var key2 = "easter_sunny_rats";
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You bash something against the wall. The rats scatter, then regroup. You have not solved the rat situation. You have only moved it temporarily. Charlie would be disappointed but also kind of impressed. The rats resume their positions.</ansi>");
        if (user.GetMiscCharacterData(key2) != "found") {
            user.SetMiscCharacterData(key2, "found");
            user.GrantXP(200, "Fought the rats in the rat tunnel");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">+200 XP: You Are Not the Rat King</ansi>");
        }
        return true;
    }

    return false;
}
