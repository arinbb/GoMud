// ZONE COMMANDS: dip (2381), sit/live here (2382), bet/race (2384), accept/speech (2389), jump/swim (2390)
// MTVs The State - MTV Studio (entry room 2380)
var LIBRARY_ROOM = 1;

function onEnter(user, room) {
    var visitedKey = "visited_mtvs_the_state";
    if (user.GetTempData(visitedKey) != "yes") {
        user.SetTempData(visitedKey, "yes");
        if (!user.HasQuest(420)) {
        user.GiveQuest(420);
        }
        
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"13\">The film reel starts. What comes up first is not footage but a feeling: the feeling of being twenty-three years old in New York City in 1994 with ten of your best friends and a camera and no money and absolutely no doubt that you are going to make the funniest thing anyone has ever seen. The set is plywood. The lights are too bright. Someone is wearing a costume that makes no sense and everyone is playing it completely straight. A man looks directly into the camera. He has the calm, satisfied expression of someone who has just thought of something very funny and cannot wait to show you. You are in the studio. The sketch is about to begin.</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"3\">(Type 'return' at any time to go back to the Grand Library.)</ansi>");
    }
    return true;
}

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"13\">The set wobbles. The camera pans away. The lights go to black one by one, the way they always do at the end of a sketch — not with fanfare, just with the simple fact of ending. You carry something with you: the specific knowledge that eleven people from NYU did something that was exactly themselves and it was enough and more than enough. The Grand Library closes around you.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " shimmers like bad broadcast signal and vanishes from the studio.", user.UserId());
        user.SetTempData("visited_mtvs_the_state", "");
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}
