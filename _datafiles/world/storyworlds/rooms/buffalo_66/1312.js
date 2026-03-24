
// Buffalo '66 - Scott Wood's House
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The trophies on the shelf catch light one last time, then the room dissolves into flickering film. The Grand Library takes shape around you.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " flickers and fades like an old broadcast signal.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "forgive" || cmd == "leave" || (cmd == "walk" && rest.indexOf("away") >= 0) || (cmd == "go" && rest.indexOf("away") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You stand at the edge of the room and look at Scott Wood in his recliner, in his house full of trophies from a life already lived. The missed kick. The Super Bowl. The bet that sent Billy Brown to prison. The five years. The rage that built up like sediment, layer by layer, into something that could only be resolved one way.</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"15\">Or another way.</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">Scott Wood is not a villain. He is just a man who missed a kick and has been missing it every day for twenty-five years. The same as Billy has been missing something every day for five. Two men stuck in the same moment from different sides of it.</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"15\">You turn and walk out. The door closes behind you. The cold Buffalo air hits your face and it feels, for a moment, like the beginning of something instead of the end.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " looks at Scott Wood for a long moment, then turns and walks out into the cold.", user.UserId());

        if (user.GetMiscCharacterData("buffalo66_forgive") != "found") {
            user.SetMiscCharacterData("buffalo66_forgive", "found");
            user.GrantXP(300, "choosing to walk away");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Letting go is harder than holding on. [+300 XP]</ansi>");
        }
        return true;
    }

    return false;
}

function onEnter(user, room) {
    if (user.HasQuest(90) && !user.GetMiscCharacterData("buffalo66_wood")) {
        user.SetMiscCharacterData("buffalo66_wood", "visited");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You step into Scott Wood's house and the air is stale with failure. The trophies gleam on the shelf, golden monuments to a life that peaked decades ago. The man in the recliner does not get up. He barely registers your presence. This is what happens after the last kick goes wide.</ansi>");
    }
    return false;
}
