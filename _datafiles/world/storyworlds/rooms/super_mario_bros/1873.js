
// World 8-4 Final Castle Maze - Easter egg: looping maze + hidden true path
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">The looping corridors dissolve. The lava light fades. You are back in the Arcade, the maze-logic of the final castle unwinding from your memory. You know which way is north now. You will always know.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " pixelates in the castle torchlight and dissolves back to the Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "east" || cmd == "go" && rest == "east") {
        SendUserMessage(user.UserId(), "<ansi fg=\"red\">You follow the east passage. It looks right -- well-lit, broad, clearly the main corridor. But the walls begin to repeat. The same fire bar. The same lava grate. The same wall sconce in the same position. The east passage has looped you back to the beginning of the maze. The castle is not interested in what looks right. Try another direction.</ansi>");
        return true;
    }

    if ((cmd == "search" || cmd == "look") && (rest.indexOf("wall") >= 0 || rest.indexOf("passage") >= 0 || rest == "")) {
        if (user.GetMiscCharacterData("mario_maze_solved") == "true") {
            SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You scan the walls again. The north passage is there, smaller and less obvious than the east one but clearly correct once you know what you are looking for. The castle maze only fools you once. After that, the pattern is obvious and the path is certain.</ansi>");
            return true;
        }
        user.SetMiscCharacterData("mario_maze_solved", "true");
        user.GrantXP(200, "solving the World 8-4 maze");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You stop moving and examine the castle walls carefully. The east passage loops -- you can see it now, the architecture of repetition, the way the fire bar positions repeat on a slightly different cycle than they should. But the north passage is different. The stones are slightly different there, the torchlight falls at a different angle. The castle is hiding the true path in the unassuming corridor, the one that does not look like the right way. It is always the less obvious one. You know this. The maze taught you.</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">+200 XP for solving the maze of the final castle!</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " stops and examines the castle walls with careful attention. Something shifts in their expression. They know the way.", user.UserId());
        return true;
    }

    return false;
}
