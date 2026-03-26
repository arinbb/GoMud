// The Chelsea Hotel - Blonde on Blonde (1703)
// ZONE COMMANDS: return (exit zone), read typewriter (quest completion), look sad/lady (special description)
var LIBRARY_ROOM = 1;
var QUEST_ID = 150;
var SOUVENIR_ID = 195;

function onEnter(user, room) {
    var chelseaKey = "bob_visited_chelsea";
    if (user.GetTempData(chelseaKey) != "yes") {
        user.SetTempData(chelseaKey, "yes");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You step through the door and the loft is gone. You are in a hotel room -- the Chelsea Hotel, West 23rd Street, Manhattan. The room number on the door keeps changing. The bed is made and unmade at the same time. Dawn is coming through the east window but it is taking eleven minutes to arrive, which is the exact length of the song playing somewhere beneath everything. The Sad Eyed Lady stands at the window, backlit, luminous, the person the whole album has been moving toward. A typewriter on the desk holds an unfinished lyric. This is where the album ends.</ansi>");
    }

    if (user.HasQuest(QUEST_ID) && user.GetMiscCharacterData("souvenir_blonde_on_blonde") != "collected") {
        user.SetMiscCharacterData("souvenir_blonde_on_blonde", "collected");
        user.GiveQuest(QUEST_ID);
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You have found the room where the album ends -- the Chelsea Hotel, the Sad Eyed Lady, the eleven-minute dawn. The quest is complete.</ansi>");
    }

    return true;
}

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The eleven-minute dawn finally arrives -- light floods the Chelsea Hotel room, washing out the walls, the typewriter, the Sad Eyed Lady at the window, until everything is white and warm and gone. The organ chord finally resolves. The album is over. You are home.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " is caught in the dawn light and dissolves, carried back to the Library on the last chord of the album.", user.UserId());
        user.SetTempData("visited_blonde_on_blonde", "");
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "read") {
        var target = rest.toLowerCase();
        if (target.indexOf("typewriter") >= 0 || target.indexOf("lyric") >= 0 || target.indexOf("paper") >= 0) {
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">You lean over the typewriter. The paper in the platen reads:</ansi>");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">    JOHANNA ----</ansi>");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">Four dashes where the rest of the line should be. The lyric is unfinished -- or it is finished, and the dashes are the point. The name is enough. The absence after it is enough. That is what the whole album has been saying: the name, and then the space the name leaves behind. You straighten up. The typewriter keys are cool. The ribbon is nearly spent. There is nothing left to write.</ansi>");
            return true;
        }
    }

    if (cmd == "look") {
        var target = rest.toLowerCase();
        if (target.indexOf("sad") >= 0 || target.indexOf("lady") >= 0) {
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The Sad Eyed Lady turns from the window. For one moment she almost speaks -- her lips part, the dawn light catches her face, and you can see everything Dylan spent eleven minutes trying to describe: the mercury mouth, the eyes like smoke, the sadness that is not sadness but something more complicated and more beautiful, the thing that required a whole side of a record to even approach. Then she turns back to the window. She did not speak. She does not need to. The dawn holds for another minute of its eleven.</ansi>");
            return true;
        }
    }

    return false;
}
