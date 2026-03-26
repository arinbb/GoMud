
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("boss") >= 0 || question.indexOf("manager") >= 0 || question.indexOf("mug") >= 0) {
        mob.Command("emote holds up the World's Best Boss mug.");
        mob.Command("say World's Best Boss. I bought it for myself. From Spencer's Gifts.", 1.5);
        mob.Command("say Some people have questioned this. But those people have not managed a regional paper company with this level of heart.", 3.5);
        mob.Command("emote looks at the mug with private satisfaction.", 5.5);
        mob.Command("say The mug is accurate.", 7.0);
        return true;
    }

    if (question.indexOf("dwight") >= 0 || question.indexOf("schrute") >= 0) {
        mob.Command("say Dwight is my right hand man. My number two. My Dwight.", 1.0);
        mob.Command("emote leans forward conspiratorially.", 3.0);
        mob.Command("say He's also Assistant TO the Regional Manager, which is different from Assistant Regional Manager, which is what he tells people.", 4.5);
        mob.Command("emote sits back.", 6.0);
        mob.Command("say But between us? He's basically my co-manager. But don't tell him I said that because he will make it weird.", 7.5);
        return true;
    }

    if (question.indexOf("jim") >= 0 || question.indexOf("halpert") >= 0) {
        mob.Command("say Jim. Jim Halpert.", 1.0);
        mob.Command("emote thinks about this with the expression of a man composing a very long answer.", 2.5);
        mob.Command("say Jim is like a son to me. Or a little brother. Or a best friend. He's in my circle. My inner circle.", 4.5);
        mob.Command("say He doesn't always appreciate what we have here. But he's still here. That means something.", 6.5);
        mob.Command("emote nods with complete certainty about this.", 8.0);
        return true;
    }

    if (question.indexOf("pam") >= 0 || question.indexOf("beesly") >= 0) {
        mob.Command("say Pam is the best receptionist I have ever had. And also my friend.", 1.0);
        mob.Command("emote looks toward the window overlooking reception with real warmth.", 3.0);
        mob.Command("say She's like the office's mom. Except I'm also the office's dad. So we're like the office's parents, which is not weird, it's just a family structure.", 5.0);
        return true;
    }

    if (question.indexOf("dundie") >= 0) {
        mob.Command("emote brightens enormously.");
        mob.Command("say The Dundies! The Dundies are the most important night of the Dunder Mifflin calendar year.", 1.5);
        mob.Command("say I created the Dundies. I host them. I design the awards. I present them at Chili's.", 3.0);
        mob.Command("say It is a ceremony of recognition and love and also excellent appetizers.", 4.5);
        mob.Command("emote is already visibly planning this year's Dundies.", 6.0);
        return true;
    }

    if (question.indexOf("that's what she said") >= 0 || question.indexOf("joke") >= 0 || question.indexOf("comedy") >= 0) {
        mob.Command("say That's what she said.", 0.5);
        mob.Command("emote looks at you to make sure you heard that.", 1.5);
        mob.Command("say Comedy is the most important thing in the world. After love. And before success.", 3.0);
        mob.Command("say My comedy hero is Chris Rock. And also Eddie Murphy. And a little bit me.", 5.0);
        return true;
    }

    // Default
    var defaults = [
        "say I don't understand the question and I won't respond to it.",
        "say That is a great question. I'm going to let that marinate.",
        "emote points finger-guns at you. 'Boom. That's what I'm talking about.'",
        "say I have a lot of qualities. That's one of them."
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}

function onShow(mob, room, eventDetails) {

    return false;
}

function onGive(mob, room, eventDetails) {
    mob.Command("emote receives the gift with genuine delight.");
    mob.Command("say For me? You shouldn't have. Actually, you should have. This is exactly right.", 1.5);
    return true;
}
