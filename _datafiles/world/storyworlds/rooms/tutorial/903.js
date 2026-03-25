function onEnter(user, room) {
    var exits = room.GetExits();
    if (!exits.portal) {
        room.AddTemporaryExit("swirling portal", ":pink", 0, 9000);
    }

    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Step through the portal to enter the Grand Library.</ansi>");
    SendUserMessage(user.UserId(), "<ansi fg=\"3\">Type <ansi fg=\"command\">portal</ansi> or <ansi fg=\"command\">swirling portal</ansi> to proceed.</ansi>");

    return true;
}
