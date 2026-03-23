
// Souvenir: A Fishing Lure from Myers Lake (The Andy Griffith Show)
function onCommand_use(user, item, room) {
    SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You hold the lure up to the light. The spinner catches it and throws a small glitter around the room. The feathers are still bright. The hook is still sharp. Somewhere in your memory the fishing hole is still and dark green and the afternoon is still golden and the bobber is floating and Mayberry is still exactly as it was.</ansi>");
    user.SetMiscCharacterData("souvenir_the_andy_griffith_show", "collected");
    return true;
}

function onCommand_look(user, item, room) {
    SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">A hand-tied fishing lure from Myers Lake. A spinner, a tuft of feathers, a bent hook, and a short length of Andys line. The smell of pine resin and lake water. A summer afternoon in Mayberry, kept.</ansi>");
    return true;
}
