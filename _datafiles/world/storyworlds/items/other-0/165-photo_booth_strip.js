
// Souvenir: Photo booth strip from Buffalo '66

function onCommand_look(user, item, room) {
    SendUserMessage(user.UserId(), "<ansi fg=\"15\">You hold the photo strip up to the light. Four frames of a face trying to remember what it feels like to be human. The last frame — the one with the almost-smile — catches the light in a way that makes it glow. It is the most honest photograph you have ever seen.</ansi>");
    return true;
}

function onCommand_read(user, item, room) {
    SendUserMessage(user.UserId(), "<ansi fg=\"8\">On the back of the strip, in faint pencil, someone has written: 'Buffalo, NY.' Nothing else. That is enough.</ansi>");
    return true;
}
