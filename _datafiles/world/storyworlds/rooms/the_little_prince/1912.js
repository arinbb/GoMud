
// The Stars - Secret room
var LIBRARY_ROOM = 1;

function onEnter(user, room) {
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You rise through the desert air, following the laughter, until the sand is a pale stripe far below and the stars surround you entirely. They are warm. They are ringing. Somewhere in this enormous quiet, a small boy with golden hair is tending his rose and watching his forty-fifth sunset of the day, and when he laughs -- he laughs now, and you hear it, clear as a bell -- all the stars laugh with him.</ansi>");
    SendUserMessage(user.UserId(), "");

    if (user.GetMiscCharacterData("lp_stars_visited") != "found") {
        user.SetMiscCharacterData("lp_stars_visited", "found");
    }

    if (user.HasQuest(230) && user.GetMiscCharacterData("lp_stars_quest_done") != "yes") {
        user.SetMiscCharacterData("lp_stars_quest_done", "yes");
        user.SetMiscCharacterData("souvenir_the_little_prince", "collected");
        user.Command("quest advance 230");
    }

    return false;
}

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You descend back through the stars, which follow you a little way, ringing, before the library reassembles itself around you. You are back. You will always look at stars differently now.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " descends from the stars and is gone.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "listen") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You listen. The stars ring. The laughter is everywhere at once. You cannot tell one star from another by sight, but by sound -- by the particular quality of this warmth, this ringing, this enormous small voice -- you know exactly which one is his.</ansi>");
        return true;
    }

    if (cmd == "laugh" || cmd == "smile") {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You laugh. The stars answer. Not all at once -- one by one, the nearby ones first, then the farther ones, until the whole sky is laughing with you. The sound is extraordinary. It is the finest sound there is.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " laughs, and the stars answer.", user.UserId());
        return true;
    }

    if (cmd == "look" && (rest.indexOf("star") >= 0 || rest == "")) {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You look at the stars. Every single one of them is now, to some small extent, his. When you look at them from now on -- from any field, any window, any desert -- you will know that one of them has three volcanoes and a rose and a glass dome and a small boy who loves them. This knowledge is irreversible and it is a gift.</ansi>");
        return true;
    }

    return false;
}
