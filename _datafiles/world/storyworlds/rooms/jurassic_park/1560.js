
// Jurassic Park - The Main Hall
var LIBRARY_ROOM = 1;

function onEnter(user, room) {
    if (user.HasQuest(130) && !user.GetMiscCharacterData("jp_quest_mainhall")) {
        user.SetMiscCharacterData("jp_quest_mainhall", "true");
        // Quest step 7: Reach the Main Hall — final step, quest completes
        user.Command("quest advance 130");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The T. Rex roar echoes through the rotunda. The banner falls. The bones rattle. And then, improbably, impossibly, you are still alive.</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">(Quest complete: Jurassic Park)</ansi>");
    }
    return true;
}

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The T. Rex skeletons rattle in their armatures as something enormous passes through the hall, and in the shockwave the bones become film frames, become dust, become the warm stillness of the Grand Library with the projector cooling behind you.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " is lost in the shudder of the rotunda and does not reappear.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "look" && (rest.indexOf("skeleton") >= 0 || rest.indexOf("fossil") >= 0 || rest.indexOf("trex") >= 0 || rest.indexOf("t.rex") >= 0 || rest.indexOf("rex") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The fossil T. Rex skeletons rear up in posed combat, their bones wired with steel armatures into poses that never existed in life. They are beautiful. They are dramatic. They are twenty-five percent of the size of the living version currently somewhere in the building. You look at the skeletons and then you think about the scale difference and you stop looking at the skeletons.</ansi>");
        return true;
    }

    if (cmd == "look" && (rest.indexOf("mural") >= 0 || rest.indexOf("ceiling") >= 0 || rest.indexOf("rotunda") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The rotunda ceiling is painted floor-to-ceiling with geological time — Cambrian seas, Triassic deserts, Jurassic forests, Cretaceous plains. The whole sweep of life on earth before the mass extinction. You stand in the center of the rotunda and turn slowly and sixty-five million years passes over your head. It is one of the most beautiful things you have ever seen. Hammond did not spare expense on this.</ansi>");
        return true;
    }

    if (cmd == "read" && (rest.indexOf("banner") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">WHEN DINOSAURS RULED THE EARTH. The banner trails nearly to the floor, torn and hanging. The letters are still visible. The statement is present tense.</ansi>");
        return true;
    }

    return false;
}
