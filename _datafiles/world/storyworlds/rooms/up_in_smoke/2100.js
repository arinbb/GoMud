// Up in Smoke - Pedros Lowrider (entry room)
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The hydraulics give one last chirp. The oldies fade. The cherry-red paint dissolves into the warm amber light of the Grand Library, and you are standing among the shelves again, the smell of hot asphalt replaced by the smell of old books.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " shimmers like heat rising off asphalt and vanishes, leaving only the faint ghost of an oldies station.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}

function onEnter(user, room) {

    if (!user.HasQuest(320)) {
        user.GiveQuest(320);
    }

    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"3\">The film reel loads into the projector and the screen fills with the California sun -- white, generous, absolutely everywhere. A cherry-red lowrider idles at the curb. The radio is playing something with brass and heartache. Pedro is behind the wheel, mustache magnificent, nodding at you like he was expecting you. He probably was. Man is somewhere north of here, philosophizing at a lava lamp. Los Angeles, 1978. The whole city smells like engine oil and possibility and something else, something botanical, something you can not quite identify but which smells incredible. Welcome to Up in Smoke.</ansi>");
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"3\">(Type 'return' at any time to go back to the Grand Library.)</ansi>");

    return false;
}
