// The Sandlot -- Mr. Mertles Yard (2427)
var LIBRARY_ROOM = 3;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The yard and the great dog and the old oak trees fade. You are back in the Screening Room. The Beast's tail was still wagging when you left.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " disappears from the yard in a shimmer of golden light. The Beast watches them go.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "pet" || cmd == "pat" || (cmd == "touch" && rest.toLowerCase().indexOf("beast") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You hold out your hand. The Beast sniffs it -- a sound like a small bellows -- and then he lowers his enormous head and presses it into your palm. He weighs more than your dad. His fur is coarse on top and soft underneath. His tail is going. You scratch behind his ear and he makes a sound like thunder happening inside a mountain. He is the best dog.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " reaches out and scratches the Beast behind the ear. The ground vibrates faintly.", user.UserId());
        return true;
    }

    if (cmd == "look" && rest.toLowerCase().indexOf("beast") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Up close, the Beast is different from every story you have heard. He is enormous, yes -- his head is at your chest, his paws are dinner plates, his bark could probably knock over a small car. But his eyes are warm and dark and old. He is not a monster. He is just a very large dog who has been misunderstood by a chain-link fence and the fear of childhood. His tail is going. It has been going since you came through the fence.</ansi>");
        return true;
    }

    return false;
}
