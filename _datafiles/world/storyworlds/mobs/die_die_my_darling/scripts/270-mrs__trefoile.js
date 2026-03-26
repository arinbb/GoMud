
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("stephen") >= 0 || question.indexOf("son") >= 0 || question.indexOf("boy") >= 0) {
        mob.Command("emote 's expression softens for a moment into something almost unbearable to look at.");
        mob.Command("say Stephen was... he was everything that was good. Everything that was pure.", 1.5);
        mob.Command("emote holds the Bible tighter against her chest.", 2.5);
        mob.Command("say He speaks to me still. He tells me what must be done.", 3.5);
        mob.Command("emote 's eyes go somewhere else briefly, then return to you. 'He is very clear about you.'", 5.0);
        return true;
    }

    if (question.indexOf("god") >= 0 || question.indexOf("prayer") >= 0 || question.indexOf("church") >= 0 || question.indexOf("religion") >= 0) {
        mob.Command("say God is not a subject for casual conversation.", 0.5);
        mob.Command("emote opens the Bible and runs one finger along a marked passage.", 1.5);
        mob.Command("say We will pray at six o'clock. You will understand more clearly then.", 3.0);
        return true;
    }

    if (question.indexOf("mirror") >= 0 || question.indexOf("mirrors") >= 0) {
        mob.Command("emote looks at you with something approaching pity.");
        mob.Command("say Mirrors. Tools of vanity. Of self-worship.", 1.5);
        mob.Command("say The body is not the self. To gaze at one's reflection is to love what is corrupt.", 2.5);
        mob.Command("emote tilts her head very slightly.", 3.5);
        mob.Command("say You will understand this. In time. Stephen insisted on it.", 5.0);
        return true;
    }

    if (question.indexOf("rule") >= 0 || question.indexOf("rules") >= 0 || question.indexOf("allowed") >= 0 || question.indexOf("forbidden") >= 0) {
        mob.Command("say There are no rules here. There is only what is right and what is sinful.", 0.5);
        mob.Command("emote counts on her fingers with quiet precision.", 1.5);
        mob.Command("say No mirrors. No paint on the face. No coloured clothing. No flavoured food.", 2.5);
        mob.Command("say Prayer at six and at nine. These are not rules. They are the minimum.", 4.0);
        return true;
    }

    if (question.indexOf("patricia") >= 0 || question.indexOf("sin") >= 0 || question.indexOf("vanity") >= 0) {
        mob.Command("emote 's voice drops to something very quiet and very certain.");
        mob.Command("say Stephen loved her. That was her power over him. Her painted face, her coloured clothes.", 2.0);
        mob.Command("say She corrupted him. She drew him away from God.", 3.5);
        mob.Command("emote looks at you with that patient, focused attention.", 4.5);
        mob.Command("say But Stephen has told me how to undo it. He is very specific.", 6.0);
        return true;
    }

    if (question.indexOf("rector") >= 0 || question.indexOf("vicar") >= 0 || question.indexOf("priest") >= 0) {
        mob.Command("emote 's lips compress into a thin line.");
        mob.Command("say That adulterer. That hypocrite. He speaks of God while living like an animal.", 2.0);
        mob.Command("say We do not require his church. We have our own.", 3.5);
        return true;
    }

    if (question.indexOf("past") >= 0 || question.indexOf("young") >= 0 || question.indexOf("before") >= 0 || question.indexOf("stage") >= 0 || question.indexOf("theatre") >= 0) {
        mob.Command("emote 's face closes like a door.");
        mob.Command("say I don't know what you mean.", 1.0);
        mob.Command("emote looks down at the Bible.", 2.0);
        mob.Command("say That is enough for today. It is nearly time for prayer.", 3.0);
        return true;
    }

    var defaults = [
        "say You ask a great many questions for a guest.",
        "say We will discuss this at prayer.",
        "emote looks at you steadily and says nothing."
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}

function onShow(mob, room, eventDetails) {
    var item = eventDetails.item;
    if (!item) {
        mob.Command("emote examines what you hold with flat attention.");
        return true;
    }

    var name = item.NameSimple().toLowerCase();

    if (name.indexOf("lipstick") >= 0 || name.indexOf("makeup") >= 0 || name.indexOf("cosmetic") >= 0 || name.indexOf("compact") >= 0) {
        mob.Command("emote recoils as though you have produced a weapon.");
        mob.Command("say Take that away. Take it away immediately.", 1.5);
        mob.Command("emote 's voice drops to something barely controlled. 'Paint. For the face. In my house.'", 3.0);
        mob.Command("say Stephen will not permit this. Stephen WILL NOT PERMIT THIS.", 4.5);
        return true;
    }

    if (name.indexOf("mirror") >= 0) {
        mob.Command("emote goes very still.");
        mob.Command("say Where did you get that.", 2.0);
        mob.Command("emote 's voice is not loud but something in it makes the room feel smaller.", 3.5);
        mob.Command("say Give it to me. Give it to me now. You do not need to see yourself.", 5.0);
        return true;
    }

    return false;
}

function onGive(mob, room, eventDetails) {
    var item = eventDetails.item;
    if (!item) { return false; }

    var name = item.NameSimple().toLowerCase();

    if (name.indexOf("mirror") >= 0) {
        mob.Command("emote takes the mirror without a word.");
        mob.Command("emote holds it face-down against her dress.", 1.5);
        mob.Command("say Thank you. You are beginning to understand.", 3.0);
        return true;
    }

    mob.Command("say I have no need of things.");
    mob.Command("emote returns her attention to the Bible.", 1.5);
    return true;
}
