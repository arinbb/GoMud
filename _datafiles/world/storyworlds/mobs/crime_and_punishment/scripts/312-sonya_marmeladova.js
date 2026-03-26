
// Sonya Marmeladova - thin, pale, enormous eyes, pure despite everything

function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("lazarus") >= 0 || question.indexOf("resurrection") >= 0 || question.indexOf("bible") >= 0 || question.indexOf("read") >= 0) {
        mob.Command("emote opens the New Testament to the page she knows by heart.");
        mob.Command("say 'Jesus said unto her, I am the resurrection, and the life: he that believeth in me, though he were dead, yet shall he live.'", 1.5);
        mob.Command("emote reads quietly, the words coming steady and direct, not performed.", 3.0);
        mob.Command("say He that was dead came forth. And Jesus said, Loose him, and let him go.", 5.0);
        mob.Command("emote closes the book. Her hands rest on the cover.", 7.0);
        return true;
    }

    if (question.indexOf("god") >= 0 || question.indexOf("faith") >= 0 || question.indexOf("believe") >= 0) {
        mob.Command("emote is quiet for a moment.");
        mob.Command("say I don't know how to explain it. If God did not exist I would be -- nothing. There would be nothing.", 2.0);
        mob.Command("say In this life there is only this. What I have. And I have this.", 4.0);
        mob.Command("emote touches the Bible without opening it.", 5.5);
        return true;
    }

    if (question.indexOf("suffer") >= 0 || question.indexOf("pain") >= 0 || question.indexOf("why") >= 0) {
        mob.Command("say Why do people suffer?");
        mob.Command("say I don't know. I used to ask. Now I think -- the question is what to do while it is happening.", 2.0);
        mob.Command("emote looks at her hands.", 3.5);
        return true;
    }

    if (question.indexOf("raskolnikov") >= 0 || question.indexOf("rodya") >= 0 || question.indexOf("student") >= 0) {
        mob.Command("emote looks up with those enormous eyes.");
        mob.Command("say He is suffering terribly. More than he will say.", 1.5);
        mob.Command("say He needs to confess. Not to the police. To himself. To God.", 3.0);
        mob.Command("say I told him I will go with him. Wherever he goes. I meant it.", 4.5);
        return true;
    }

    if (question.indexOf("father") >= 0 || question.indexOf("marmeladov") >= 0) {
        mob.Command("emote is quiet.");
        mob.Command("say He loved us. In his way. He was very weak and he loved us.", 2.0);
        mob.Command("say I do not blame him.", 3.5);
        mob.Command("emote says this as if it has been considered carefully and is simply true.", 5.0);
        return true;
    }

    if (question.indexOf("work") >= 0 || question.indexOf("what you do") >= 0) {
        mob.Command("emote looks down at the floor.");
        mob.Command("say The children needed to eat. My stepmother was ill. My father --", 1.5);
        mob.Command("say It was the only thing I could do. I did it.", 3.0);
        mob.Command("say I am not ashamed of keeping them alive.", 4.5);
        return true;
    }

    var defaults = [
        "emote looks at you with those enormous eyes, as if she sees something in you she recognizes.",
        "say I will pray for you if you like. I pray for everyone. It is not an imposition.",
        "emote folds her hands and is quiet. The quietness is not an absence of something. It is a presence."
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}

function onGive(mob, room, eventDetails) {
    mob.Command("emote receives the gift with both hands, formally, the way she receives everything given freely.");
    mob.Command("say Thank you. This is -- thank you.", 1.5);
    return true;
}

function onShow(mob, room, eventDetails) {
    var item = String(eventDetails);
    if (item.indexOf("cap") >= 0 || item.indexOf("hat") >= 0) {
        mob.Command("emote recognizes it. Her eyes go large.");
        mob.Command("say He used to wear something like this. Before.", 1.5);
        return true;
    }

    return false;
}
