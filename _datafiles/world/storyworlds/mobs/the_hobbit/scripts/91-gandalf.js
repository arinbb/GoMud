
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("bilbo") >= 0 || question.indexOf("hobbit") >= 0 || question.indexOf("burglar") >= 0) {
        mob.Command("emote chuckles, eyes twinkling beneath bushy brows.");
        mob.Command("say I chose Mr. Baggins for this adventure, and that is that. Hobbits are remarkably light on their feet and can pass unseen when they wish.");
        mob.Command("say There is a great deal more to him than his appearance suggests. You will see.", 2.0);
        return true;
    }

    if (question.indexOf("quest") >= 0 || question.indexOf("adventure") >= 0 || question.indexOf("mission") >= 0) {
        mob.Command("say The dwarves of Erebor need a burglar. Smaug the dragon stole their home and their treasure long ago.");
        mob.Command("emote puffs thoughtfully on his pipe.");
        mob.Command("say It is no small thing to face a dragon. But these things must be done, or the shadow will only grow.", 2.0);
        return true;
    }

    if (question.indexOf("ring") >= 0) {
        mob.Command("emote 's eyes narrow sharply.");
        mob.Command("say A ring, you say? What sort of ring?");
        mob.Command("emote studies you with sudden, piercing intensity.", 1.5);
        return true;
    }

    if (question.indexOf("smaug") >= 0 || question.indexOf("dragon") >= 0) {
        mob.Command("say Smaug is a very great dragon. Very terrible. The greatest calamity of our age.");
        mob.Command("emote gazes into the distance, his expression grave.");
        mob.Command("say But even the mightiest have their weaknesses, if one knows where to look.", 2.0);
        return true;
    }

    if (question.indexOf("necromancer") >= 0 || question.indexOf("dark") >= 0 || question.indexOf("evil") >= 0) {
        mob.Command("emote goes very still and his expression becomes grave.");
        mob.Command("say There are forces stirring in the world that concern me deeply. A darkness in Dol Guldur...");
        mob.Command("say But that is not a matter for discussion. Not here. Not now.", 2.0);
        return true;
    }

    if (question.indexOf("magic") >= 0 || question.indexOf("spell") >= 0 || question.indexOf("power") >= 0) {
        mob.Command("emote gives a knowing smile.");
        mob.Command("say I am a servant of the Secret Fire, wielder of the Flame of Anor.");
        mob.Command("emote blows a smoke ring that forms into a ship and sails away.", 1.5);
        return true;
    }

    var defaults = [
        "say All good stories deserve embellishment. But I shall not tell you all of mine just yet.",
        "say Do not be hasty. Understanding comes in its own time.",
        "say I am Gandalf, and Gandalf means... me."
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}

function onShow(mob, room, eventDetails) {
    var showText = String(eventDetails);

    if (showText.indexOf("ring") >= 0) {
        mob.Command("emote leans forward, his eyes blazing with sudden intensity.");
        mob.Command("say Where did you find that? Let me see it. Let me see it at once.", 1.5);
        return true;
    }

    if (showText.indexOf("map") >= 0) {
        mob.Command("emote studies it carefully, tracing the runes with a long finger.");
        mob.Command("say Ah yes. Moon-letters. They can only be read by the light of a moon of the same shape and season as the day on which they were written.", 1.5);
        return true;
    }

    return false;
}
