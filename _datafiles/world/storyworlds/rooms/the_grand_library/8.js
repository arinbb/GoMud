// The Arcade — browse game discs/cartridges, hint on first visit

function onEnter(user, room) {
    if (user.GetTempData("visited_arcade") != "yes") {
        user.SetTempData("visited_arcade", "yes");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"3\">Game discs and cartridges sit in the console — each one a world to play through.</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"3\">Type <ansi fg=\"command\">get <game> console</ansi> to take one, then <ansi fg=\"command\">play</ansi> or <ansi fg=\"command\">use</ansi> it to enter that world.</ansi>");
    }
    return true;
}

function onCommand(cmd, rest, user, room) {
    if (cmd == "browse" || (cmd == "look" && rest == "console") || (cmd == "look" && rest == "cases") || (cmd == "look" && rest == "games")) {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">.: Games in the Console :.</ansi>");
        SendUserMessage(user.UserId(), "");

        var items = room.GetItems();
        var found = false;
        for (var i in items) {
            var item = items[i];
            SendUserMessage(user.UserId(), "  " + item.DisplayName());
            found = true;
        }

        if (!found) {
            SendUserMessage(user.UserId(), "  <ansi fg=\"8\">The console is empty. Games respawn shortly.</ansi>");
        }

        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"3\">Type <ansi fg=\"command\">get <title> console</ansi> to take one, then <ansi fg=\"command\">play</ansi> or <ansi fg=\"command\">use</ansi> it.</ansi>");
        return true;
    }
    return false;
}
