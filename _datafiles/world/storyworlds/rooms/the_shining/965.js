
// The Shining - Heart of the Maze
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The snow closes around you like a fist. In the white nothing, you see the frozen face one last time — grinning, insane, eternal. Then the snow becomes static, the static becomes light, and the Grand Library wraps around you like a warm blanket. You are shaking. You are safe. You are never going back.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " is swallowed by the blizzard and vanishes from the heart of the maze.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if ((cmd == "look" || cmd == "examine") && rest.indexOf("figure") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"red\">You stare into the snow, trying to fix the shape with your gaze. It is there. A man, hunched forward, frost on his eyebrows and in his hair, his lips blue, his eyes open and staring and mad. His mouth is frozen in a grin. He looks like he has been here forever. He looks like he will be here forever. The snow shifts, and he is gone. The bench is empty. The clearing is empty. But you can feel him watching.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " stares into the snow, face pale, and stumbles backward.", user.UserId());
        return true;
    }

    return false;
}
