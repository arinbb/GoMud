var teacherMobId = 57;
var teacherName = "Guide";

function onEnter(user, room) {
    var mob = room.GetMob(teacherMobId, true);
    mob.SetCharacterName(teacherName);

    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">Welcome to StoryWorlds!</ansi>");
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "  <ansi fg=\"command\">look</ansi>          - examine your surroundings");
    SendUserMessage(user.UserId(), "  <ansi fg=\"command\">look <thing></ansi>  - examine something specific");
    SendUserMessage(user.UserId(), "  <ansi fg=\"command\">inventory</ansi>     - see what you are carrying");
    SendUserMessage(user.UserId(), "  <ansi fg=\"command\">status</ansi>        - view your stats");
    SendUserMessage(user.UserId(), "  <ansi fg=\"command\">equip <item></ansi> - wield or wear an item");
    SendUserMessage(user.UserId(), "  <ansi fg=\"command\">attack <target></ansi> - start combat");
    SendUserMessage(user.UserId(), "  <ansi fg=\"command\">help</ansi>          - see all available commands");
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "  Move by typing a direction: <ansi fg=\"exit\">north</ansi>, <ansi fg=\"exit\">south</ansi>, <ansi fg=\"exit\">east</ansi>, <ansi fg=\"exit\">west</ansi>, <ansi fg=\"exit\">up</ansi>, <ansi fg=\"exit\">down</ansi>");
    SendUserMessage(user.UserId(), "  Some exits have custom names — just type the name to go through.");
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Head east when you are ready.</ansi>");

    mob.Command("say Welcome! Head <ansi fg=\"exit\">east</ansi> when you are ready to begin your adventure.", 1.0);

    return true;
}

function onExit(user, room) {
    var mob = room.GetMob(teacherMobId);
    if (mob != null) {
        mob.Command("suicide vanish");
    }
}
