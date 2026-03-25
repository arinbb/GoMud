// Back to the Future -- Twin Pines Mall Parking Lot (entry room, 1985)
var LIBRARY_ROOM = 1;

function onEnter(user, room) {
    var visitedKey = "visited_back_to_the_future";
    if (user.GetTempData(visitedKey) != "yes") {
        user.SetTempData(visitedKey, "yes");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The film reel snaps into the projector. The screen fills with a black-and-white security camera feed -- a vast, empty mall parking lot, 1:15 AM. Then a modified DeLorean rolls into frame, stops. A man in a radiation suit climbs out. A dog on a leash. A video camera on a tripod. The image goes electric, the screen goes white, and you stumble forward onto cold asphalt. The parking-lot lights are blinding. Somewhere behind you, a pair of fire trails scar the blacktop. Doc Brown's DeLorean idles thirty feet away, its flux capacitor glowing.</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"3\">(Type 'return' at any time to go back to the Grand Library.)</ansi>");
        
        if (user.HasQuest(250) == false) {
        user.GiveQuest(250);
        }
        
    }
    return true;
}

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The parking-lot lights strobe and flicker. The fire trails on the asphalt glow brighter, brighter -- then the image collapses into a rectangle of projected light on the Screening Room screen. The projector clicks to a halt. You are back in the Grand Library, the smell of burning rubber still faintly in your hair.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " is swallowed by twin streaks of fire and vanishes from the parking lot.", user.UserId());
        user.SetTempData("visited_back_to_the_future", "");
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}
