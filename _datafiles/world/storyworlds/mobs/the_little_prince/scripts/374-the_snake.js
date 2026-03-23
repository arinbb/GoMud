
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("home") >= 0 || question.indexOf("return") >= 0 || question.indexOf("send") >= 0 || question.indexOf("back") >= 0) {
        mob.Command("emote shifts one coil, very slowly.");
        mob.Command("say I can send anyone back to where they came from.");
        mob.Command("say It is a quick journey. Quicker than you might expect.", 2.0);
        mob.Command("emote watches you steadily.", 3.5);
        mob.Command("say But I think your home is through the book, not through me. Walk the other way.", 5.0);
        return true;
    }

    if (question.indexOf("riddle") >= 0 || question.indexOf("puzzle") >= 0 || question.indexOf("secret") >= 0) {
        mob.Command("say Everything that ends has its own truth. That is not a riddle. That is a fact.");
        mob.Command("say The fact that things end is why they matter. Not despite it.", 2.0);
        mob.Command("emote watches the stars.", 3.5);
        return true;
    }

    if (question.indexOf("hurt") >= 0 || question.indexOf("bite") >= 0 || question.indexOf("venom") >= 0 || question.indexOf("poison") >= 0) {
        mob.Command("emote turns its head to regard you without urgency.");
        mob.Command("say I hurt the ones I send home. That is the nature of the journey.");
        mob.Command("say It does not hurt for long.", 2.0);
        mob.Command("emote says nothing else.", 3.5);
        return true;
    }

    if (question.indexOf("why") >= 0 || question.indexOf("purpose") >= 0) {
        mob.Command("say Why does anyone do anything? I solve problems that cannot be solved any other way.");
        mob.Command("emote coils tighter, considering.", 2.0);
        mob.Command("say I am very old. I have the answers to all the endings.", 3.5);
        return true;
    }

    var defaults = [
        "say You look like a child from very far away.",
        "emote watches you without moving anything but its eyes.",
        "say The stars know things. I only know some of what the stars know.",
        "say I am never in a hurry. Are you?"
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}

function onShow(mob, room, eventDetails) {
    mob.Command("emote looks at what you are showing with one golden eye.");
    mob.Command("say Every object has a weight in the hand that has nothing to do with its size.");
    return true;
}
