
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("strange") >= 0 || question.indexOf("unusual") >= 0 || question.indexOf("weird") >= 0) {
        mob.Command("say I, myself, am strange and unusual.");
        mob.Command("emote stares at you with dark, unblinking eyes.");
        mob.Command("say I've read through the encyclopedia of the undead. I've studied every ghost story ever written. I've photographed things that aren't supposed to exist.", 2.0);
        mob.Command("say Most people think that's strange. I think the strange thing is pretending the world is normal when it clearly isn't.", 4.0);
        return true;
    }

    if (question.indexOf("ghost") >= 0 || question.indexOf("spirit") >= 0 || question.indexOf("see") >= 0) {
        mob.Command("say I can see them. I've always been able to see them.");
        mob.Command("say Most people walk right past the dead without even noticing. But I see them everywhere — in the corners, in the mirrors, in the spaces between things.");
        mob.Command("emote adjusts her camera thoughtfully.", 2.0);
        mob.Command("say I don't know why I can and others can't. Maybe it's because I actually want to.", 3.5);
        return true;
    }

    if (question.indexOf("parent") >= 0 || question.indexOf("dad") >= 0 || question.indexOf("father") >= 0 || question.indexOf("delia") >= 0 || question.indexOf("mom") >= 0 || question.indexOf("mother") >= 0) {
        mob.Command("say My dad tries. He really does. He just... doesn't understand me.");
        mob.Command("say And Delia is NOT my mother. My real mother died when I was young.", 1.5);
        mob.Command("say Delia thinks she can fix everything with art and positive energy. She can't even fix her own hair.", 3.0);
        mob.Command("emote looks down, her dark veil casting a shadow over her face.", 4.5);
        return true;
    }

    if (question.indexOf("death") >= 0 || question.indexOf("die") >= 0 || question.indexOf("dead") >= 0) {
        mob.Command("say I think about death a lot. Not in a scary way. In a beautiful way.");
        mob.Command("say Everything alive is in the process of dying. Flowers, trees, people. There's something honest about that.");
        mob.Command("emote gazes into the middle distance with a melancholy expression.", 2.0);
        mob.Command("say The dead are more real than the living, sometimes. They don't pretend anymore.", 3.5);
        return true;
    }

    if (question.indexOf("photo") >= 0 || question.indexOf("camera") >= 0 || question.indexOf("picture") >= 0) {
        mob.Command("say My camera sees things I can't always see with my eyes.");
        mob.Command("emote holds up her vintage camera reverently.");
        mob.Command("say I photograph the invisible. Shadows that shouldn't be there. Empty rooms that aren't really empty.", 1.5);
        mob.Command("say People think I'm just taking pictures of nothing. But nothing is always something, if you look long enough.", 3.0);
        return true;
    }

    if (question.indexOf("adam") >= 0 || question.indexOf("barbara") >= 0 || question.indexOf("maitland") >= 0) {
        mob.Command("say Adam and Barbara are my best friends. Maybe my only real friends.");
        mob.Command("say They're dead, obviously. But they understand me better than any living person ever has.");
        mob.Command("say They actually listen when I talk. They don't tell me to cheer up or go outside or make friends my own age.", 2.0);
        mob.Command("emote smiles slightly — a rare, genuine smile.", 3.5);
        return true;
    }

    if (question.indexOf("beetlejuice") >= 0 || question.indexOf("betelgeuse") >= 0) {
        mob.Command("say Betelgeuse is... complicated.");
        mob.Command("emote fidgets with her lace gloves nervously.");
        mob.Command("say He's dangerous. Really dangerous. He tried to marry me once. That was... not great.", 1.5);
        mob.Command("say But there's something exciting about him too. He doesn't follow any rules. He doesn't care what anyone thinks.", 3.0);
        mob.Command("say I know I shouldn't find that appealing. But I do.", 4.5);
        return true;
    }

    if (question.indexOf("school") >= 0 || question.indexOf("friend") >= 0 || question.indexOf("kid") >= 0) {
        mob.Command("say School? I don't fit in there. I don't want to fit in there.");
        mob.Command("say Everyone is so concerned with being normal. With wearing the right clothes and saying the right things.");
        mob.Command("emote shrugs dismissively.", 2.0);
        mob.Command("say I'd rather be strange and unusual than normal and boring.", 3.0);
        return true;
    }

    return false;
}

function onShow(mob, room, eventDetails) {
    var showText = String(eventDetails);

    if (showText.indexOf("camera") >= 0) {
        mob.Command("emote 's eyes light up.");
        mob.Command("say That's MY camera! I can see ghosts through the viewfinder, you know. Things the living aren't supposed to see.", 1);
        return true;
    }

    if (showText.indexOf("handbook") >= 0) {
        mob.Command("say I've read parts of it. It's actually fascinating once you get past all the jargon. Death is just... the next strange thing.");
        return true;
    }

    if (showText.indexOf("business card") >= 0 || showText.indexOf("card") >= 0) {
        mob.Command("emote fidgets with her lace gloves.");
        mob.Command("say Beetlejuice... he's terrifying. But he's also the most ALIVE dead person I've ever met. If that makes any sense.", 1);
        return true;
    }

    return false;
}
