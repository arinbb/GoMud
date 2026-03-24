// The Screening Room — browse film reels, hint on first visit

function onEnter(user, room) {
    if (user.GetTempData("visited_screening") != "yes") {
        user.SetTempData("visited_screening", "yes");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"3\">Film reels line the shelves — each one a world waiting to unspool.</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"3\">Type <ansi fg=\"command\">get <reel> shelf</ansi> to take one, then <ansi fg=\"command\">play</ansi> or <ansi fg=\"command\">use</ansi> it to enter that world.</ansi>");
    }
    return false;
}

function onCommand(cmd, rest, user, room) {
    if (cmd == "browse" || (cmd == "look" && rest == "shelf") || (cmd == "look" && rest == "shelves")) {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">.: Film Reels on the Shelf :.</ansi>");
        SendUserMessage(user.UserId(), "");

        var items = room.GetItems();
        var found = false;
        for (var i in items) {
            var item = items[i];
            SendUserMessage(user.UserId(), "  " + item.DisplayName());
            found = true;
        }

        if (!found) {
            SendUserMessage(user.UserId(), "  <ansi fg=\"8\">The shelves are empty. Reels respawn shortly.</ansi>");
        }

        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"3\">Type <ansi fg=\"command\">get <title> shelf</ansi> to take a reel, then <ansi fg=\"command\">play</ansi> or <ansi fg=\"command\">use</ansi> it.</ansi>");
        return true;
    }
    return false;
}
