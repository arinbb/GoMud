
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("animal") >= 0 || question.indexOf("dog") >= 0 || question.indexOf("pony") >= 0 || question.indexOf("horse") >= 0) {
        mob.Command("emote rumbles a deep laugh.");
        mob.Command("say My animals are my friends and my servants. They understand me, and I them.");
        mob.Command("say The dogs set the table. The ponies help in the fields. We understand each other.", 2.0);
        return true;
    }

    if (question.indexOf("goblin") >= 0 || question.indexOf("orc") >= 0) {
        mob.Command("emote 's expression darkens with terrible fury.");
        mob.Command("say Goblins! I HATE goblins. Filthy, wicked creatures.");
        mob.Command("say They captured my people. Tortured them. I do not forget, and I do not forgive.", 2.0);
        return true;
    }

    if (question.indexOf("bee") >= 0 || question.indexOf("honey") >= 0) {
        mob.Command("emote 's fierce expression softens.");
        mob.Command("say My bees are the finest in all Middle-earth. Great big fellows, golden and buzzing.");
        mob.Command("say Here — try some honey. You have never tasted anything like it.", 1.5);
        return true;
    }

    if (question.indexOf("bear") >= 0 || question.indexOf("shape") >= 0 || question.indexOf("change") >= 0 || question.indexOf("skin") >= 0) {
        mob.Command("emote goes very quiet, his dark eyes unreadable.");
        mob.Command("say That is my affair, and not a thing to speak of lightly.");
        mob.Command("say Some things are older than words.", 2.0);
        return true;
    }

    if (question.indexOf("honey") >= 0 || question.indexOf("cake") >= 0 || question.indexOf("food") >= 0) {
        mob.Command("emote tears off a chunk of honey-cake and offers it.");
        mob.Command("say Eat! You are too thin. All travellers are too thin when they come to my hall.");
        return true;
    }

    var defaults = [
        "say I keep to myself. The world of men and dwarves does not concern me.",
        "say You may stay the night, but do not wander after dark. Not everything outside is friendly.",
        "say I am Beorn, and this is my land."
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}

function onShow(mob, room, eventDetails) {
    var showText = String(eventDetails);

    if (showText.indexOf("honey") >= 0) {
        mob.Command("emote examines it with a critical eye.");
        mob.Command("say Not bad. But my bees make better.");
        return true;
    }

    return false;
}
