
// Lucky Dog Cart - return handler + eat hotdog easter egg
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The smell of processed meat fades, the hot dog cart dissolves into a sentence, and the French Quarter corner folds back into the pages of the novel. You are in the Grand Library, the book closed, a faint smell of mustard lingering on your fingers.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " shimmers in the heat rising from the hot dog cart and vanishes back to the Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "eat") {
        var target = rest.toLowerCase();
        if (target.indexOf("hotdog") >= 0 || target.indexOf("hot dog") >= 0 || target.indexOf("dog") >= 0) {
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You take a hot dog from the Paradise Vendors cart. It has been on the roller grill for an indeterminate amount of time. You add mustard, because mustard is the only condiment that can improve a situation this far gone. You eat it.</ansi>");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"white\">It is terrible. It is magnificent. It is a tube of processed meat in a soft bun, consumed standing on a French Quarter sidewalk in the subtropical heat, and it tastes like everything that is wrong and right about this city at the same time. You understand, for one brief greasy moment, why Ignatius ate the inventory.</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " eats a hot dog from the Paradise Vendors cart with an expression that suggests both regret and transcendence.", user.UserId());

            if (user.GetMiscCharacterData("dunces_hotdog") != "found") {
                user.SetMiscCharacterData("dunces_hotdog", "found");
                user.GrantXP(100, "eating a Lucky Dog");
                SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">[ You earned 100 XP for eating a Paradise Vendors hot dog. Your pyloric valve has opinions about this. ]</ansi>");
            }

            return true;
        }
    }

    return false;
}
