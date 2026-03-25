// The Gallery — browse paintings, hint on first visit

function onEnter(user, room) {
    if (user.GetTempData("visited_gallery") != "yes") {
        user.SetTempData("visited_gallery", "yes");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"3\">Paintings hang on the walls — some of them are doorways to the worlds they depict.</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"3\">Type <ansi fg=\"command\">get <painting> shelf</ansi> to take one, then <ansi fg=\"command\">enter</ansi> or <ansi fg=\"command\">use</ansi> it to step inside.</ansi>");
    }
    return true;
}

function onCommand(cmd, rest, user, room) {
    if (cmd == "browse" || (cmd == "look" && rest == "shelf") || (cmd == "look" && rest == "shelves") || (cmd == "look" && rest == "wall") || (cmd == "look" && rest == "paintings")) {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">.: Paintings on Display :.</ansi>");
        SendUserMessage(user.UserId(), "");

        var items = room.GetItems();
        var found = false;
        for (var i in items) {
            var item = items[i];
            SendUserMessage(user.UserId(), "  " + item.DisplayName());
            found = true;
        }

        if (!found) {
            SendUserMessage(user.UserId(), "  <ansi fg=\"8\">The walls are bare. Paintings return shortly.</ansi>");
        }

        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"3\">Type <ansi fg=\"command\">get <title> shelf</ansi> to take one, then <ansi fg=\"command\">enter</ansi> or <ansi fg=\"command\">use</ansi> it.</ansi>");
        return true;
    }
    return false;
}
