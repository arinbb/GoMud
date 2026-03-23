
// The Andy Griffith Show - Andys Kitchen
var LIBRARY_ROOM = 1;
var QUEST_ID = 310;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">The kitchen dissolves -- the pie smell, the mason jars, Aunt Bees smile -- and the Grand Library gathers around you. Something in you is a little warmer than it was. That is what Aunt Bees kitchen does to a person.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " pushes back from the table, thanks Aunt Bee sincerely, and steps back to the Grand Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "eat" || cmd == "taste" || (cmd == "have" && rest.indexOf("pie") >= 0)) {
        var key = "andy_quest_pie";
        if (!user.HasQuest(QUEST_ID)) {
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Aunt Bee sets a slice of pie in front of you. Apple. Perfect crust. The fork goes through it like it was always meant to. You have eaten Aunt Bees pie. This is one of the finer things a person can do.</ansi>");
        } else if (user.GetMiscCharacterData(key) != "done") {
            user.SetMiscCharacterData(key, "done");
            user.Command("quest advance 310", 0);
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Aunt Bee sets a slice of pie in front of you. Apple. Perfect crust. The fork goes through it like it was always meant to. You have eaten Aunt Bees pie. This is one of the finer things a person can do.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"10\">(Quest advanced: A Day in Mayberry)</ansi>");
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Aunt Bee sets another slice in front of you without asking if you want it. Of course you want it. She has never been wrong about this.</ansi>");
        }
        return true;
    }

    return false;
}

function onIdle(room) {

    var players = room.GetPlayers();
    if (players.length == 0) {
        return false;
    }

    var roll = UtilDiceRoll(1, 8);

    if (roll == 1) {
        room.SendText("<ansi fg=\"yellow\">Aunt Bee sets a fresh slice of pie on the table and gives you a look that says refusing it is not one of your available options.</ansi>");
        return true;
    }

    return false;
}
