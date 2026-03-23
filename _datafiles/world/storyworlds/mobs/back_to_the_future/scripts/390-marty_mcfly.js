function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("doc") >= 0 || question.indexOf("brown") >= 0 || question.indexOf("emmett") >= 0) {
        mob.Command("say Doc Brown? Look -- he's eccentric, okay, but he's a GENIUS. The man invented time travel in his garage.");
        mob.Command("emote pokes a finger toward the garage.", 1.5);
        mob.Command("say He just needs to find 1.21 gigawatts. That's all. We just need the lightning to hit at exactly the right moment.", 2.5);
        return true;
    }

    if (question.indexOf("future") >= 0 || question.indexOf("1985") >= 0) {
        mob.Command("emote shakes his head hard.");
        mob.Command("say I can't -- I really can't tell you about the future. Even telling you what year I'm from could change everything.", 1.5);
        mob.Command("say Except -- okay, look: things are going to be different. Better. If everything works out.", 3.0);
        return true;
    }

    if (question.indexOf("parents") >= 0 || question.indexOf("george") >= 0 || question.indexOf("lorraine") >= 0) {
        mob.Command("emote winces.");
        mob.Command("say It's complicated. Really complicated. I need them to -- look, there's this dance. The Enchantment Under the Sea.", 1.5);
        mob.Command("say If my dad doesn't ask my mom to dance, I -- I just have to make it happen. That's all. No big deal.", 2.5);
        mob.Command("emote looks at his fading photograph and goes pale.", 3.5);
        return true;
    }

    if (question.indexOf("skateboard") >= 0 || question.indexOf("skate") >= 0) {
        mob.Command("say Nobody skates in 1955. I tried to hitch a ride off a truck and people acted like I was from another planet.");
        mob.Command("emote pauses.", 1.5);
        mob.Command("say I mean. Technically.", 2.5);
        return true;
    }

    if (question.indexOf("delorean") >= 0 || question.indexOf("car") >= 0 || question.indexOf("time machine") >= 0) {
        mob.Command("say It does 88 miles per hour. And it needs 1.21 gigawatts. And it runs on plutonium, which we kind of don't have anymore.");
        mob.Command("emote looks significantly at the empty space where the car was.", 2.0);
        mob.Command("say Doc says the lightning will work. I have to trust him.", 3.0);
        return true;
    }

    if (question.indexOf("guitar") >= 0 || question.indexOf("music") >= 0 || question.indexOf("band") >= 0) {
        mob.Command("say I play guitar. Not like -- professionally or anything. But I play.");
        mob.Command("emote grins for the first time.", 1.5);
        mob.Command("say There might be a situation at the school dance where someone needs to play guitar. I might be the one.", 2.5);
        return true;
    }

    if (question.indexOf("heavy") >= 0) {
        mob.Command("say That's just -- I say that. It means something is intense or hard to process.");
        mob.Command("emote frowns slightly.", 1.5);
        mob.Command("say Wait, do people not say that here? This is 1955.", 2.5);
        return true;
    }

    var defaults = [
        "say Look, I don't have time to explain everything. I need to find Doc Brown.",
        "say Things are really complicated right now. You have no idea.",
        "emote stares at his watch and mutters numbers to himself."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}

function onShow(mob, room, eventDetails) {
    var showText = String(eventDetails);

    if (showText.indexOf("photo") >= 0 || showText.indexOf("photograph") >= 0) {
        mob.Command("emote stares at the photograph with obvious distress.");
        mob.Command("say It's fading. See that? That's me, my brother, my sister. We're fading out.", 1.5);
        mob.Command("say I need to get my parents together before the dance or I -- I stop existing.", 2.5);
        return true;
    }

    if (showText.indexOf("keychain") >= 0 || showText.indexOf("flux") >= 0) {
        mob.Command("emote 's eyes go wide.");
        mob.Command("say Is that -- how do you have a flux capacitor keychain? Those don't exist yet. That won't exist for --", 1.5);
        mob.Command("say You know what, never mind. This is fine. Everything is fine.", 3.0);
        return true;
    }

    mob.Command("emote glances at it and looks back toward the parking lot.");
    mob.Command("say That's great. I really gotta find Doc.");
    return true;
}
