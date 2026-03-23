
// Souvenir: Small Hand Mirror from the Cellar

function onCommand_use(user, item, room) {
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"8\">You hold up the small mirror and look at your own face. You are here. You are yourself. The mirror shows you nothing more and nothing less, and after the Trefoile house, that is a considerable relief.</ansi>");
    return true;
}

function onCommand_look(user, item, room) {
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"8\">The mirror is small and plain — pewter frame, oval glass, handle worn from use. The face in it is yours. You keep it as a reminder of what it means to be denied one.</ansi>");
    return true;
}
