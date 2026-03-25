// The Book Stacks — browse books, hint on first visit

function onEnter(user, room) {
    if (user.GetTempData("visited_stacks") != "yes") {
        user.SetTempData("visited_stacks", "yes");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"3\">The shelves hold portal books — stories you can step inside.</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"3\">Type <ansi fg=\"command\">get <book> shelf</ansi> to take one, then <ansi fg=\"command\">read</ansi> or <ansi fg=\"command\">use</ansi> it to enter that world.</ansi>");
    }
    return true;
}

function onCommand(cmd, rest, user, room) {
    if (cmd == "browse" || (cmd == "look" && rest == "shelf") || (cmd == "look" && rest == "shelves")) {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">.: Books on the Shelf :.</ansi>");
        SendUserMessage(user.UserId(), "");

        var items = room.GetItems();
        var found = false;
        for (var i in items) {
            var item = items[i];
            SendUserMessage(user.UserId(), "  " + item.DisplayName());
            found = true;
        }

        if (!found) {
            SendUserMessage(user.UserId(), "  <ansi fg=\"8\">The shelves are empty. Books respawn shortly.</ansi>");
        }

        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"3\">Type <ansi fg=\"command\">get <title> shelf</ansi> to take a book, then <ansi fg=\"command\">read</ansi> or <ansi fg=\"command\">use</ansi> it.</ansi>");
        return true;
    }
    return false;
}
