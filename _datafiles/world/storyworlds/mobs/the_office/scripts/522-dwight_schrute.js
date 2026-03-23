
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("beet") >= 0 || question.indexOf("farm") >= 0 || question.indexOf("schrute farms") >= 0) {
        mob.Command("emote straightens in his chair.");
        mob.Command("say Schrute Farms is a 60-acre working beet farm and bed-and-breakfast in Honesdale, Pennsylvania.", 1.5);
        mob.Command("say It has been in my family for six generations. I intend to pass it to my children. If I have children. When I have children.", 3.5);
        mob.Command("say The beet is the most nutritious vegetable. It can be eaten raw, pickled, roasted, juiced, or used as a dye.", 5.5);
        mob.Command("emote is warming to this topic considerably.", 7.0);
        mob.Command("say I also make my own beet wine. It is seventeen percent alcohol and has won several self-designated awards.", 9.0);
        return true;
    }

    if (question.indexOf("jim") >= 0 || question.indexOf("halpert") >= 0) {
        mob.Command("emote looks toward Jim's desk with the expression of a man who has thought about this a great deal.");
        mob.Command("say Jim Halpert is my mortal enemy.", 2.0);
        mob.Command("emote pauses.", 3.5);
        mob.Command("say He is also my best friend. These are compatible positions.", 5.0);
        mob.Command("say He saved my life once. Not that I needed it. But he was there.", 7.0);
        mob.Command("emote refuses to say more about this.", 8.5);
        return true;
    }

    if (question.indexOf("battlestar") >= 0 || question.indexOf("galactica") >= 0) {
        mob.Command("emote turns to face you with full body orientation, which is Dwight's highest level of engagement.");
        mob.Command("say Battlestar Galactica is the most important piece of science fiction -- science fact -- of the modern era.", 1.5);
        mob.Command("say It deals with questions of identity, survival, and what it means to be human, which are also the questions of a good paper salesman.", 3.5);
        mob.Command("say I have watched it seven times. I am currently watching it for the eighth time.", 5.5);
        return true;
    }

    if (question.indexOf("assistant") >= 0 || question.indexOf("manager") >= 0) {
        mob.Command("say I am the Assistant Regional Manager of Dunder Mifflin Scranton.", 1.0);
        mob.Command("emote looks at you very carefully.", 2.5);
        mob.Command("say If someone tells you I am the Assistant TO the Regional Manager, that person is Jim Halpert, and he is wrong.", 4.0);
        mob.Command("say The difference is significant.", 5.5);
        return true;
    }

    if (question.indexOf("survival") >= 0 || question.indexOf("safety") >= 0 || question.indexOf("fire") >= 0) {
        mob.Command("say Excellent question. The most important survival skill in an office environment is knowing your exits.", 1.0);
        mob.Command("say I have conducted twelve fire drills at this office. Most of them ended in injuries.", 2.5);
        mob.Command("say This is not a failure. This is information.", 4.0);
        mob.Command("emote is satisfied with this assessment.", 5.5);
        return true;
    }

    // Default
    mob.Command("emote regards you with the evaluative expression of a man deciding if you are a threat.");
    mob.Command("say State your purpose.", 2.0);
    return true;
}

function onShow(mob, room, eventDetails) {
    mob.Command("emote examines it with the thorough attention of a man inspecting evidence.");
    mob.Command("say I have identified what this is.", 2.0);
    mob.Command("say I will not be sharing that information.", 3.5);
    return true;
}
