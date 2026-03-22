
// Day-O Banana
// Food item - eating triggers an involuntary calypso dance

function onCommand_eat(user, item, room) {

    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You peel the banana and take a bite. It tastes like sunshine and Caribbean rum.</ansi>");
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Suddenly your hands shoot up over your head. Your hips begin to sway. Your feet</ansi>");
    SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">start shuffling in a rhythm you don't recognize but your body clearly does.</ansi>");
    SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You are dancing. You did not choose to dance. The calypso chose you.</ansi>");
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Your arms wave like palm trees in a tropical breeze. Your shoulders shimmy.</ansi>");
    SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Your head bobs to a beat that seems to come from everywhere and nowhere.</ansi>");
    SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Somewhere, impossibly, you hear the faint sound of a steel drum.</ansi>");
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The calypso possession fades after a minute, leaving you breathless and oddly</ansi>");
    SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">happy. You have a sudden craving for more bananas.</ansi>");

    SendRoomMessage(room.RoomId(), user.GetCharacterName(true)+" <ansi fg=\"yellow\">eats a banana and is immediately seized by an involuntary calypso dance! Their arms wave, their hips sway, and their feet shuffle to a beat no one else can hear. After a minute of uncontrollable dancing, they stop, breathless and grinning.</ansi>", user.UserId());

    return true;
}
