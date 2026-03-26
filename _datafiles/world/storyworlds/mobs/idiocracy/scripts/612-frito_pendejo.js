function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("law") >= 0 || question.indexOf("degree") >= 0 || question.indexOf("school") >= 0 || question.indexOf("costco") >= 0) {
        mob.Command("emote stands up straight with the dignity of a credentialed professional.");
        mob.Command("say I went to Costco. It is a law school. I did two courses -- LAW 101 and LAW 101 ADVANCED.", 1.5);
        mob.Command("say The advanced one has more law.", 3.0);
        mob.Command("emote takes out a laminated diploma and holds it up briefly.", 4.5);
        return true;
    }

    if (question.indexOf("time machine") >= 0 || question.indexOf("time") >= 0 || question.indexOf("past") >= 0 || question.indexOf("machine") >= 0) {
        mob.Command("say It totally works. I built it myself.");
        mob.Command("say I went to the past once. Or the future. One of them. There were -- it was great. Hot chicks.", 2.0);
        mob.Command("say You press the buttons on the CB radio and then you wait. Sometimes it takes a few trips.", 3.5);
        mob.Command("emote believes this completely.", 5.0);
        return true;
    }

    if (question.indexOf("money") >= 0 || question.indexOf("pay") >= 0 || question.indexOf("fee") >= 0) {
        mob.Command("emote does not look up from his screen.");
        mob.Command("say Go away. I am batin.", 1.5);
        return true;
    }

    if (question.indexOf("joe") >= 0 || question.indexOf("bauers") >= 0) {
        mob.Command("say Joe? Joe is my client. I am his lawyer.");
        mob.Command("say He talks real smart and I do not always understand what he says but he says it real confident so probably it is right.", 2.0);
        mob.Command("say Camacho says Joe is gonna fix everything. I believe Camacho. Camacho is the president.", 3.5);
        return true;
    }

    if (question.indexOf("brawndo") >= 0 || question.indexOf("electrolyte") >= 0) {
        mob.Command("say Brawndo. It has electrolytes.");
        mob.Command("emote takes a long drink of Brawndo.", 2.0);
        mob.Command("say Electrolytes are what plants crave. It is on the can. Look at the can.", 3.5);
        return true;
    }

    return false;
}
