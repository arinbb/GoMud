
// The Andy Griffith Show - The Drugstore
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">The drugstore -- the jukebox, the stools, the soda fountain -- fades into the familiar warmth of the Grand Library. You still taste the malt. Or you think you do. In Mayberry the memory of things stays longer than the things themselves.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " drains the last of the malt, sets the glass down, and steps back through the screen to the Grand Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "order" || (cmd == "drink" && rest.indexOf("malt") >= 0) || cmd == "malt" || (cmd == "sit" && rest.indexOf("counter") >= 0) || cmd == "soda") {
        var drinks = [
            "chocolate malt with extra malt, cold and thick, arriving in a frosty metal cup with the overflow in a separate glass",
            "cherry coke from the fountain, dark and sweet, with a paper straw",
            "vanilla phosphate, lightly fizzy, tasting of summer and the particular optimism of 1962",
            "strawberry shake, pink and cold, requiring effort with the straw and completely worth it"
        ];
        var pick = Math.floor(Math.random() * drinks.length);
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You order a " + drinks[pick] + ". The soda jerk produces it with quiet expertise. The jukebox changes songs. The afternoon continues at the pace of a Mayberry afternoon, which is the correct pace.</ansi>");
        return true;
    }

    if (cmd == "play" && rest.indexOf("jukebox") >= 0 || cmd == "jukebox") {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You drop a nickel in the jukebox. The mechanism whirs, finds its selection, and a warm country melody fills the drugstore. The two teenagers in the booth do not look up but their conversation pauses in a good way. Floyd could hear this from next door if he is paying attention, which he always is.</ansi>");
        return true;
    }

    return false;
}
