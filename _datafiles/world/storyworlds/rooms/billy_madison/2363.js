
// Billy Madison - Miss Lippys Classroom
// Easter egg: "eat paste" or "glue" -- 200 XP
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The classroom dissolves -- the tiny desks, the paste jar, Miss Lippy's knowing expression. The chalk smell becomes old paper. The Grand Library reassembles with the solidity of things that actually existed.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dissolves into film grain and vanishes from Miss Lippy's classroom.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "eat" && (rest.toLowerCase().indexOf("paste") >= 0 || rest.toLowerCase().indexOf("glue") >= 0)) {
        var key = "billy_madison_paste_egg";
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You pick up the paste spreader. You consider it seriously. It smells sweet. Not unpleasantly sweet.</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Miss Lippy looks up from her desk. She does not say anything. She does not need to say anything. Her expression is one of pure, unbothered solidarity.</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You taste the paste. It tastes like childhood and very poor decisions and somehow the exact texture of an afternoon you've been trying to remember for years.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " eats the paste. Miss Lippy watches with profound neutrality.", user.UserId());
        if (user.GetMiscCharacterData(key) != "found") {
            user.SetMiscCharacterData(key, "found");
            user.GrantXP(200, "paste eating easter egg");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(+200 XP -- It's technically non-toxic.)</ansi>");
        }
        return true;
    }

    if (cmd == "glue" || (cmd == "eat" && rest.toLowerCase().indexOf("glue") >= 0) || cmd == "paste") {
        var key2 = "billy_madison_paste_egg";
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You reach for the paste. Miss Lippy looks up. She has the expression of a woman who has seen this before and has made peace with it.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " reaches for the paste jar with suspicious intent.", user.UserId());
        if (user.GetMiscCharacterData(key2) != "found") {
            user.SetMiscCharacterData(key2, "found");
            user.GrantXP(200, "paste easter egg");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(+200 XP -- It's technically non-toxic.)</ansi>");
        }
        return true;
    }

    return false;
}
