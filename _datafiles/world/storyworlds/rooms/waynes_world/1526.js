
// Wayne's World - The Gasworks
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The Gasworks stage lights strobe and freeze. The crowd freezes. The music hangs in the air, suspended. Then everything dissolves into warm library light. The bass echo fades last.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " freezes mid-crowd like a paused frame and disappears from the Gasworks.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "dance" || cmd == "headbang") {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You dance at the Gasworks. The crowd parts slightly to give you room and then closes around you. You are part of the thing now. Cassandra nods from the stage.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " headbangs with total commitment. The Gasworks crowd accepts this immediately.", user.UserId());
        return true;
    }

    if (cmd == "cheer" || cmd == "applaud" || cmd == "clap") {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You cheer. The crowd around you amplifies it. Cassandra points at you briefly from the stage. You have been acknowledged. This is everything.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " cheers. The crowd joins in. Cassandra Wong notices from the stage.", user.UserId());
        return true;
    }

    return false;
}

function onEnter(user, room) {
    // Quest step 3: See Crucial Taunt at the Gasworks
    if (user.HasQuest(120) && !user.GetMiscCharacterData("ww_quest_step3")) {
        user.SetMiscCharacterData("ww_quest_step3", "done");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(Quest: Saw Crucial Taunt at the Gasworks.)</ansi>");
    }
    return true;
}
