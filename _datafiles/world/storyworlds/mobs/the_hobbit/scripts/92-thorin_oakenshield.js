
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("mountain") >= 0 || question.indexOf("erebor") >= 0 || question.indexOf("homeland") >= 0) {
        mob.Command("emote 's eyes burn with fierce longing.");
        mob.Command("say Erebor. The Lonely Mountain. My grandfather Thror built it into the greatest dwarf kingdom in Middle-earth.");
        mob.Command("say The dragon took it all. Our home, our treasure, our people scattered like leaves in the wind. But we WILL take it back.", 2.0);
        return true;
    }

    if (question.indexOf("smaug") >= 0 || question.indexOf("dragon") >= 0) {
        mob.Command("emote 's hand goes to the hilt of his sword.");
        mob.Command("say Smaug the Terrible. He came from the North like a hurricane of fire. He killed my people. He stole our home.");
        mob.Command("say He will pay for what he has done. I swear it on my grandfather's grave.", 2.0);
        return true;
    }

    if (question.indexOf("arkenstone") >= 0 || question.indexOf("jewel") >= 0 || question.indexOf("gem") >= 0) {
        mob.Command("emote 's expression becomes rapturous.");
        mob.Command("say The Arkenstone! The Heart of the Mountain! The King's Jewel!");
        mob.Command("say It was found beneath the roots of the Mountain. It shone like a globe of inner light. It is mine by right.", 2.0);
        return true;
    }

    if (question.indexOf("bilbo") >= 0 || question.indexOf("hobbit") >= 0 || question.indexOf("burglar") >= 0) {
        mob.Command("emote makes a dismissive sound, then pauses.");
        mob.Command("say The halfling? He looks more like a grocer than a burglar.");
        mob.Command("say ...But Gandalf vouches for him. And I admit he has surprised me more than once.", 2.0);
        return true;
    }

    if (question.indexOf("map") >= 0 || question.indexOf("thror") >= 0) {
        mob.Command("emote carefully produces an old parchment.");
        mob.Command("say This is Thror's Map. My grandfather's map of the Lonely Mountain. It shows the secret door on the western slope.");
        mob.Command("say The dragon does not know of it. That is our advantage.", 2.0);
        return true;
    }

    if (question.indexOf("key") >= 0 || question.indexOf("door") >= 0) {
        mob.Command("emote touches the key hanging around his neck.");
        mob.Command("say The key to the secret door of Erebor. Gandalf gave it to me — it was my father's.");
        mob.Command("say When we find the door, this key will open it. And then... we face the dragon.", 2.0);
        return true;
    }

    var defaults = [
        "say I am Thorin, son of Thrain, son of Thror, King under the Mountain.",
        "say The road is long, but my purpose is clear.",
        "say We dwarves are made of sterner stuff than most."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}

function onShow(mob, room, eventDetails) {
    var showText = String(eventDetails);

    if (showText.indexOf("arkenstone") >= 0) {
        mob.Command("emote 's eyes go wide and his face transforms with desperate longing.");
        mob.Command("say The Arkenstone! Give it to me! GIVE IT TO ME!", 1.5);
        return true;
    }

    if (showText.indexOf("key") >= 0) {
        mob.Command("emote nods solemnly.");
        mob.Command("say A fine key. But there is only one key that matters to me.");
        return true;
    }

    mob.Command("emote glances at it with kingly appraisal.");
    mob.Command("say Dwarf-craft is finer, but it will serve.");
    return true;
}
