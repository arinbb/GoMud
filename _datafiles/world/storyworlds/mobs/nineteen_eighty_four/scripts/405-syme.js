// Syme

function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("newspeak") >= 0 || question.indexOf("dictionary") >= 0 || question.indexOf("language") >= 0) {
        mob.Command("emote looks up with the bright eyes of a man who has found his life's work.");
        mob.Command("say The Eleventh Edition! The definitive edition! We are cutting the language down to the bone.", 1.5);
        mob.Command("say Every concept that isn't necessary to the Party's purposes: eliminated. The word for it destroyed.", 3.0);
        mob.Command("say By 2050, not a single human being will be capable of the concept of freedom in its old sense. The words simply will not exist.", 4.5);
        mob.Command("emote says this with genuine satisfaction, which is the most frightening thing about it.", 6.0);
        return true;
    }

    if (question.indexOf("thoughtcrime") >= 0 || question.indexOf("thought") >= 0) {
        mob.Command("emote leans forward with evangelistic intensity.");
        mob.Command("say Don't you see the beauty of it? Thoughtcrime will be literally impossible.", 1.5);
        mob.Command("say When there are no words for a thing, you cannot think the thing. Not clearly. Not precisely enough to act on.", 3.0);
        mob.Command("say We are not suppressing thought. We are making it unnecessary. There is a difference.", 4.5);
        return true;
    }

    if (question.indexOf("double") >= 0 || question.indexOf("doublethink") >= 0 || question.indexOf("blackwhite") >= 0) {
        mob.Command("emote nods approvingly.");
        mob.Command("say Doublethink. The ability to hold two contradictory beliefs simultaneously and accept both as true.", 1.5);
        mob.Command("say It is what allows the Party to function. To know that you are falsifying the record and to believe that you are recording facts.", 3.0);
        mob.Command("say I practice it. It becomes easier with time. Everything becomes easier with time.", 4.5);
        return true;
    }

    if (question.indexOf("shakespeare") >= 0 || question.indexOf("book") >= 0 || question.indexOf("literature") >= 0) {
        mob.Command("say Oh, Shakespeare! I am translating him right now. In Newspeak.", 1.5);
        mob.Command("say It is a difficult project. Most of his thought is untranslatable. Which is, of course, precisely the point.", 3.0);
        mob.Command("say When the translation is finished, the original will be destroyed. The translation will then be useless too. Then it will also be destroyed.", 4.5);
        mob.Command("emote seems to find this melancholy and logical in equal measure.", 6.0);
        return true;
    }

    if (question.indexOf("you") >= 0 && (question.indexOf("vaporize") >= 0 || question.indexOf("disappear") >= 0 || question.indexOf("unperson") >= 0)) {
        mob.Command("emote pauses with a pen over the dictionary page.");
        mob.Command("say I... no. The Party values useful work. My work is useful.", 1.5);
        mob.Command("emote goes back to the dictionary. He does not raise his eyes.", 3.0);
        return true;
    }

    var defaults = [
        "say The Eleventh Edition will contain not more than a tenth as many words as the Tenth. Isn't that extraordinary?",
        "emote taps the dictionary with one finger. 'Every unnecessary word is a potential thought. Every eliminated word is a potential crime prevented.'",
        "say The whole point of Newspeak is to narrow the range of thought. We are winning, you know."
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}
