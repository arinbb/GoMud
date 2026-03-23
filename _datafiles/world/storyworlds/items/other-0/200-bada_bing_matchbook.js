
// Souvenir Item: Bada Bing Matchbook

function onCommand_use(user, item, room) {
    SendUserMessage(user.UserId(), "<ansi fg=\"red\">You strike one of the matches. It flares briefly and dies. The sulfur smell hangs in the air for a moment, mixed with something that might be cigarette smoke and bass and red light and the particular atmosphere of a room where things get decided. Then it clears and you are just standing here with a matchbook that has ten matches left.</ansi>");
    return true;
}

function onCommand_read(user, item, room) {
    SendUserMessage(user.UserId(), "<ansi fg=\"red\">BADA BING -- Lodi, New Jersey. A phone number beneath it. The last digit might be a seven or a one, it is hard to tell. You do not call it. You close the matchbook and put it back in your pocket.</ansi>");
    return true;
}
