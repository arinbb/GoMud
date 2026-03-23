
// Souvenir: A Monkey Wrench

function onCommand_use(user, item, room) {
    SendUserMessage(user.UserId(), "<ansi fg=\"red\">You hold the monkey wrench and feel the weight of it -- not just the steel, but the intention behind it. In the canyon country, this was an instrument of love as much as destruction. You put it back in your pack.</ansi>");
    return true;
}

function onCommand_examine(user, item, room) {
    SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The red canyon dirt in the adjustment mechanism has been there for years. It is the dirt of the Utah desert, specifically. You know this because you were there.</ansi>");
    return true;
}
