function onCommand_use(user, item, room) {
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You activate the miniature proton pack. The cyclotron spins up with a high whine and a beam of blue-white particle energy lances from the wand, about six inches long. It singes a small scorch mark on the floor. Somewhere in the city, Egon Spengler's PKE meter chirps once.</ansi>");
    return true;
}

function onCommand_read(user, item, room) {
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "The proton pack has a small plate on the side. It reads: \"POSITRON COLLIDER -- DO NOT CROSS THE STREAMS -- SAFETY LEVEL: NONE.\"");
    return true;
}
