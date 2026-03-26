
// The Queen of Hearts - execution, justice, croquet, roses, gardeners, rules
// onAsk topics: head, off, justice, roses, croquet, king, rules, gardeners, cheshire, alice

function onAsk(mob, room, user, eventDetails) {
    var ask = eventDetails.askText.toLowerCase();

    if (ask.indexOf("head") >= 0 || ask.indexOf("off") >= 0 || ask.indexOf("execution") >= 0 || ask.indexOf("execute") >= 0) {
        mob.Command("say OFF WITH THEIR HEADS!");
        mob.Command("emote remembers herself and smooths her gown.");
        mob.Command("say That is, of course, the proper response to displeasure. Firm. Decisive. Efficient. Though the King does keep pardoning everyone, which rather undercuts the efficiency.");
        mob.Command("say I have been told my approach to governance is excessive. I have told those people to watch their heads.");
        return true;
    }

    if (ask.indexOf("justice") >= 0 || ask.indexOf("trial") >= 0 || ask.indexOf("verdict") >= 0 || ask.indexOf("sentence") >= 0) {
        mob.Command("say My approach to justice is quite simple.");
        mob.Command("emote counts on her fingers.");
        mob.Command("say Verdict first. Evidence second. Sentence third. This is efficient and results in very few acquittals, which are always time-consuming and frankly insulting.");
        mob.Command("say A verdict of guilty is almost always correct, because almost everyone has done SOMETHING.");
        return true;
    }

    if (ask.indexOf("roses") >= 0 || ask.indexOf("red") >= 0 || ask.indexOf("white") >= 0 || ask.indexOf("paint") >= 0) {
        mob.Command("emote goes very still with a dangerous quiet.");
        mob.Command("say WHO ordered white roses.");
        mob.Command("emote looks around with the focused fury of someone preparing a very specific decree.");
        mob.Command("say I ordered RED roses. RED. The color of hearts. Of QUEENS. If I find the gardener responsible for this white rose situation, there will be a head count. And the count will be shorter afterward.");
        return true;
    }

    if (ask.indexOf("croquet") >= 0 || ask.indexOf("game") >= 0 || ask.indexOf("flamingo") >= 0 || ask.indexOf("hedgehog") >= 0) {
        mob.Command("say I am an EXCEPTIONAL croquet player.");
        mob.Command("emote draws herself up to her full height.");
        mob.Command("say The fact that everyone else loses is not favoritism. It is skill. The flamingos cooperate for me. The hedgehogs stay curled. The hoops stand straight. This is because they respect proper authority.");
        mob.Command("say Do you play croquet? Choose your answer carefully.");
        return true;
    }

    if (ask.indexOf("king") >= 0 || ask.indexOf("husband") >= 0) {
        mob.Command("emote waves a hand dismissively.");
        mob.Command("say The King is very kind. He pardons everyone I sentence, which is either compassion or sabotage -- I have never determined which.");
        mob.Command("say He means well. That is the most charitable thing I can say.");
        return true;
    }

    if (ask.indexOf("rule") >= 0 || ask.indexOf("law") >= 0 || ask.indexOf("law")) {
        mob.Command("say Rule one: what I say is the rule.");
        mob.Command("emote taps her scepter on the ground.");
        mob.Command("say Rule two: if you disagree with rule one, consult rule one.");
        mob.Command("say I find this system admirably self-consistent.");
        return true;
    }

    if (ask.indexOf("cheshire") >= 0 || ask.indexOf("cat") >= 0) {
        mob.Command("say That CAT.");
        mob.Command("emote clenches her scepter.");
        mob.Command("say I ordered its head removed. We could not remove only a head from a body that kept disappearing. It left only the grin. I cannot execute a grin. I looked into it. Legally, a grin is not a head.");
        mob.Command("say I have since had words with my legal advisors. Their heads remain attached. For now.");
        return true;
    }

    if (ask.indexOf("alice") >= 0 || ask.indexOf("girl") >= 0 || ask.indexOf("child") >= 0) {
        mob.Command("say Most impertinent child I have ever encountered.");
        mob.Command("emote goes red in the face at the memory.");
        mob.Command("say She argued. She CONTRADICTED me. To my face. In my garden. She grew very large and said she wasn't afraid of us. I said OFF WITH HER HEAD and then she woke up. Extremely annoying ending to the whole affair.");
        return true;
    }

    return false;
}

function onIdle(mob, room) {
    var idleRoll = UtilDiceRoll(1, 8);
    if (idleRoll == 1) {
        mob.Command("say Off with their heads!");
    } else if (idleRoll == 2) {
        mob.Command("say Who has been painting my roses RED?!");
    } else if (idleRoll == 3) {
        mob.Command("emote glares imperiously at everyone present.");
    } else if (idleRoll == 4) {
        mob.Command("say Let the croquet match begin!");
    } else if (idleRoll == 5) {
        mob.Command("say Every head in this garden is conditionally attached. Remember that.");
    } else if (idleRoll == 6) {
        mob.Command("emote sweeps her gaze across the garden like a searchlight.");
    } else if (idleRoll == 7) {
        mob.Command("say Verdict first! Always verdict first!");
    } else {
        mob.Command("say Card soldiers! Fall in! FALL IN I SAID.");
    }
    return false;
}
