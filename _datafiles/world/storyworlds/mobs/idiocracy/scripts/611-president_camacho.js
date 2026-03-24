function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("policy") >= 0 || question.indexOf("plan") >= 0 || question.indexOf("how") >= 0 || question.indexOf("what") >= 0) {
        mob.Command("emote fires the weapon into the air once. Room quiets.");
        mob.Command("say SHUT UP. I AM TALKIN.", 1.5);
        mob.Command("say I KNOW EVERYONE IS REAL SCARED AND REAL UPSET. I AM ALSO SCARED AND UPSET. BUT WE GOT THIS.", 3.0);
        mob.Command("say JOE IS GONNA FIX IT. THAT IS THE PLAN. JOE FIXES IT.", 4.5);
        mob.Command("emote nods with absolute conviction.", 5.5);
        return true;
    }

    if (question.indexOf("economy") >= 0 || question.indexOf("crops") >= 0 || question.indexOf("food") >= 0 || question.indexOf("water") >= 0) {
        mob.Command("say WE GOT THIS.");
        mob.Command("say I KNOW THE CROPS ARE DYING. I KNOW. JOE KNOWS. JOE IS GONNA FIX IT. THAT IS WHY I MADE JOE THE SECRETARY OF THE INTERIOR.", 2.0);
        mob.Command("say JOE HAS A PLAN. THE PLAN IS WATER. OR SOMETHING. SCIENCE STUFF.", 3.5);
        mob.Command("emote seems to understand he is about forty percent clear on the details.", 4.5);
        return true;
    }

    if (question.indexOf("joe") >= 0 || question.indexOf("bauers") >= 0) {
        mob.Command("emote gets very animated.");
        mob.Command("say JOE. JOE IS A GENIUS. JOE IS THE SMARTEST PERSON I HAVE EVER MET. JOE KNOWS THINGS.", 1.5);
        mob.Command("say JOE IS GONNA FIX EVERYTHING. THE CROPS. THE ECONOMY. PROBABLY THE HOSPITALS. JOE KNOWS STUFF ABOUT HOSPITALS.", 3.0);
        mob.Command("emote is extremely enthusiastic about Joe.", 4.5);
        return true;
    }

    if (question.indexOf("electrolyte") >= 0 || question.indexOf("brawndo") >= 0) {
        mob.Command("say ELECTROLYTES. THEY GOT WHAT PLANTS CRAVE. EVERYBODY KNOWS THAT.");
        mob.Command("say BRAWNDO HAS ELECTROLYTES. PLANTS CRAVE ELECTROLYTES. IT IS SCIENCE.", 2.0);
        mob.Command("emote fires a celebratory shot into the ceiling. For the electrolytes.", 3.5);
        return true;
    }

    if (question.indexOf("president") >= 0 || question.indexOf("election") >= 0 || question.indexOf("wrestling") >= 0) {
        mob.Command("emote strikes a pose.");
        mob.Command("say DWAYNE ELIZONDO MOUNTAIN DEW HERBERT CAMACHO. THAT IS ME. FORMER SIX-TIME WRESTLING CHAMPION. FORMER FILM ENTERTAINER. CURRENT PRESIDENT.", 1.5);
        mob.Command("say THE PEOPLE VOTED FOR ME. THE PEOPLE KNOW WHAT THEY WANT. I AM WHAT THEY WANT.", 3.0);
        mob.Command("emote seems genuinely touched by this.", 4.5);
        return true;
    }

    mob.Command("emote fires the weapon into the ceiling. Not at anyone.");
    mob.Command("say WE GOT THIS.", 1.5);
    return true;
}
