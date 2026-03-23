
// Sad Eyed Lady of the Lowlands - Track 14
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The organ chord sustains as you dissolve. The warehouse light holds its position on the far wall. Her silhouette remains exactly where it was. You are back in the Grand Library, changed in a way that will take time to identify.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " fades out of the warehouse dawn, dissolving back to the Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "wait" || cmd == "listen") {
        if (user.GetMiscCharacterData("easter_bob_sad_eyed_wait") != "found") {
            user.SetMiscCharacterData("easter_bob_sad_eyed_wait", "found");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">You wait. The organ chord sustains. The warehouse holds eleven minutes of silence around the note, and in that silence the light on the far wall moves down by one band-width. She does not turn. She does not come closer. She does not need to. The song has been building to this from the first harmonica note -- all the way through the carnival chaos and the blues bar and the loft and the snowstorm and the doorstep and the surrealism and the fashion satire and the dressing room and the fork in the road and the closed door and the jail cell and the spiral staircase and the garage -- all of it was the approach. The warehouse is the arrival. Her silhouette is the whole point. And she is mercury-mouthed and savage-gifted and sad-eyed and you can feel that without being told because Dylan spent eleven minutes building the architecture of it and you are standing inside it now. The organ holds. The light moves. The warehouse breathes. This is enough. This is everything.</ansi>");
            user.GrantXP(300, "waiting in the warehouse with the Sad Eyed Lady");
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">You wait again. The organ chord sustains. The light moves its slow band down the far wall. Her silhouette holds the window. This is always true here. You can come back as many times as you need. The warehouse will always be this hour, this light, this chord.</ansi>");
        }
        return true;
    }

    if (cmd == "approach" || cmd == "move") {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You walk toward the far window. The warehouse is larger than it appeared -- the distance does not close at the expected rate. The pallets rise on either side. The light from the windows stays ahead of you. After some time you realize you are not getting closer; you are getting more aware of the distance. She is at the window. The window is at the end of the warehouse. The warehouse is the size of the song. You stop. This is where you stand.</ansi>");
        return true;
    }

    return false;
}
