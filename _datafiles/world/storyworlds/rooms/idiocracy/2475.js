// Idiocracy -- The Courtroom (2475)
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The gallery fades and the verdict screen goes blank and you step sideways out of 2505 justice and back into the Screening Room. The projector clicks. The screen is white. You stand thinking about a legal system where guilty comes before the trial and nobody minds because everyone already knew and also it moves faster that way. You do not feel fully cleared, but you were probably not fully guilty either. In 2505 this distinction is academic.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " exits the courtroom before the verdict is formalized.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "guilty" || cmd == "object" || cmd == "objection" || (cmd == "say" && (rest.toLowerCase().indexOf("guilty") >= 0 || rest.toLowerCase().indexOf("object") >= 0 || rest.toLowerCase().indexOf("objection") >= 0))) {
        handleCourtEasterEgg(user, room);
        return true;
    }

    return false;
}

function onEnter(user, room) {
    var step = user.GetMiscCharacterData("idiocracy_quest_step");
    if (step == "3" || step == "2" || step == "1") {
        user.SetMiscCharacterData("idiocracy_quest_step", "4");
        SendUserMessage(user.UserId(), "<ansi fg=\"3\">(Quest updated: You stood trial in the Courtroom of 2505.)</ansi>");
    }
    return false;
}

function handleCourtEasterEgg(user, room) {
    var key = "easter_idiocracy_court";
    if (user.GetMiscCharacterData(key) == "found") {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The gallery cheers. Judge Hector hits the bench with his PVC pipe. Order is restored or a reasonable facsimile of order. You are still guilty.</ansi>");
        return;
    }
    user.SetMiscCharacterData(key, "found");
    user.GrantXP(200, "guilty until proved innocent");
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You shout something -- guilty, objection, it does not matter -- and the gallery ERUPTS. Judge Hector hits his PVC gavel. 'ORDER! ORDER IN THE COURT!' The gallery does not achieve order but it does achieve a lower volume of disorder. A lawyer points at you and says 'SEE, YOUR HONOR -- TALKIN FANCY.' The crowd boos. Another lawyer, who may be Frito, says 'NOT GUILTY MAYBE' and holds up the legal pad. The crowd evaluates this argument. The crowd finds it insufficient. The verdict screen already says GUILTY. It said GUILTY before the trial started. This is simply what trials look like now and you find you cannot fully explain why it is wrong to people who have only ever seen this kind of trial.</ansi>");
    SendUserMessage(user.UserId(), "<ansi fg=\"3\">(+200 XP: You have participated in 2505 justice.)</ansi>");
    SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " addresses the courtroom. The gallery reacts. The verdict does not change.", user.UserId());
}
