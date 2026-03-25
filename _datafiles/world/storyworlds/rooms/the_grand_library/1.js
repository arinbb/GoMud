// The Grand Library — home room
// Handles: guestbook, browse menus, enter by number

// All portal destinations organized by media type
// Format: [display_name, room_id, ansi_color]
var BOOKS = [
    ["Alices Adventures in Wonderland", 100, "cyan"],
    ["The Odyssey", 200, "11"],
    ["Robert Haydens Collected Poems", 700, "8"],
    ["The Hobbit", 970, "10"],
    ["A Confederacy of Dunces", 1200, "yellow"],
    ["Matilda", 1400, "magenta"],
    ["Goodnight Moon", 1500, "12"],
    ["On the Road", 1740, "3"],
    ["Crime and Punishment", 1800, "red"],
    ["The Monkey Wrench Gang", 1880, "9"],
    ["The Little Prince", 1900, "14"],
    ["Nineteen Eighty Four", 1960, "8"]
];

var FILMS = [
    ["Blade Runner", 300, "12"],
    ["The Princess Bride", 400, "11"],
    ["Beetlejuice", 600, "10"],
    ["Peewees Big Adventure", 800, "red"],
    ["The Shining", 950, "15"],
    ["Buffalo 66", 1300, "8"],
    ["Jurassic Park", 1550, "9"],
    ["Waynes World", 1520, "cyan"],
    ["Die Die My Darling", 1600, "5"],
    ["The Sopranos", 1720, "3"],
    ["Back to the Future", 1940, "11"],
    ["Ghostbusters", 1920, "10"],
    ["Forbidden Planet", 1980, "14"],
    ["Seinfeld", 2000, "yellow"],
    ["Harold and Maude", 2020, "3"],
    ["Its Always Sunny", 2040, "yellow"],
    ["The Andy Griffith Show", 2060, "10"],
    ["Up in Smoke", 2100, "9"],
    ["Paris Texas", 2120, "red"],
    ["Northern Exposure", 2140, "cyan"],
    ["The Wire", 2200, "8"],
    ["Six Feet Under", 2220, "5"],
    ["The Office", 2300, "3"],
    ["Best in Show", 2340, "11"],
    ["MTVs The State", 2380, "magenta"],
    ["Stand By Me", 2400, "10"],
    ["The Sandlot", 2420, "9"],
    ["Billy Madison", 2360, "yellow"],
    ["Idiocracy", 2470, "10"]
];

var MUSIC = [
    ["In Utero (Nirvana)", 1100, "cyan"],
    ["Blonde on Blonde (Bob Dylan)", 1700, "3"],
    ["Harvest (Neil Young)", 2240, "yellow"],
    ["Siamese Dream (Smashing Pumpkins)", 2320, "13"]
];

var PAINTINGS = [
    ["Starry Night (Van Gogh)", 500, "12"]
];

var GAMES = [
    ["Stardew Valley", 1820, "10"],
    ["Far Cry 5", 1840, "red"],
    ["Super Mario Bros", 1860, "9"],
    ["Tass Times in Tonetown", 2450, "magenta"]
];

// Track which menu the player last browsed
function showMenu(user, title, items, menuKey) {
    user.SetTempData("library_menu", menuKey);
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">===== " + title + " =====</ansi>");
    SendUserMessage(user.UserId(), "");
    for (var i = 0; i < items.length; i++) {
        var num = i + 1;
        var pad = num < 10 ? " " : "";
        SendUserMessage(user.UserId(), "  <ansi fg=\"stat\">" + pad + num + ".</ansi> <ansi fg=\"" + items[i][2] + "\">" + items[i][0] + "</ansi>");
    }
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"3\">Type a number to enter that world.</ansi>");
    SendUserMessage(user.UserId(), "");
}

function getMenuItems(menuKey) {
    if (menuKey == "books") return BOOKS;
    if (menuKey == "films") return FILMS;
    if (menuKey == "music") return MUSIC;
    if (menuKey == "paintings") return PAINTINGS;
    if (menuKey == "games") return GAMES;
    if (menuKey == "all") {
        var all = [];
        for (var i = 0; i < BOOKS.length; i++) all.push(BOOKS[i]);
        for (var j = 0; j < FILMS.length; j++) all.push(FILMS[j]);
        for (var k = 0; k < MUSIC.length; k++) all.push(MUSIC[k]);
        for (var l = 0; l < PAINTINGS.length; l++) all.push(PAINTINGS[l]);
        for (var m = 0; m < GAMES.length; m++) all.push(GAMES[m]);
        return all;
    }
    return null;
}

function enterWorld(user, room, name, destRoom) {
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"15\">You step into " + name + "...</ansi>");
    SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " steps into a story and vanishes.", user.UserId());
    user.SetTempData("library_menu", "");
    user.MoveRoom(destRoom);
}

function onCommand(cmd, rest, user, room) {

    // Browse menus
    if (cmd == "browse") {
        if (rest == "" || rest == "all") {
            showMenu(user, "All Worlds", getMenuItems("all"), "all");
            return true;
        }
        if (rest == "books" || rest == "bookshelf" || rest == "book") {
            showMenu(user, "Books and Poetry", BOOKS, "books");
            return true;
        }
        if (rest == "films" || rest == "projector" || rest == "reels" || rest == "film" || rest == "movies" || rest == "movie") {
            showMenu(user, "Films and Television", FILMS, "films");
            return true;
        }
        if (rest == "music" || rest == "turntable" || rest == "records" || rest == "vinyl" || rest == "albums") {
            showMenu(user, "Music", MUSIC, "music");
            return true;
        }
        if (rest == "paintings" || rest == "wall" || rest == "art" || rest == "painting" || rest == "gallery") {
            showMenu(user, "Paintings and Visual Art", PAINTINGS, "paintings");
            return true;
        }
        if (rest == "games" || rest == "console" || rest == "game") {
            showMenu(user, "Video Games", GAMES, "games");
            return true;
        }
        // Default to all
        showMenu(user, "All Worlds", getMenuItems("all"), "all");
        return true;
    }

    // Number selection — enter a world from the last browsed menu
    var num = parseInt(cmd);
    if (!isNaN(num) && num > 0) {
        var menuKey = user.GetTempData("library_menu");
        if (menuKey != "" && menuKey != null) {
            var items = getMenuItems(menuKey);
            if (items != null && num <= items.length) {
                var pick = items[num - 1];
                enterWorld(user, room, pick[0], pick[1]);
                return true;
            } else {
                SendUserMessage(user.UserId(), "<ansi fg=\"red\">No world at that number. Type browse to see the list.</ansi>");
                return true;
            }
        }
    }

    // Direct enter command
    if (cmd == "enter" && rest != "") {
        var num2 = parseInt(rest);
        if (!isNaN(num2) && num2 > 0) {
            var menuKey2 = user.GetTempData("library_menu");
            if (menuKey2 != "" && menuKey2 != null) {
                var items2 = getMenuItems(menuKey2);
                if (items2 != null && num2 <= items2.length) {
                    var pick2 = items2[num2 - 1];
                    enterWorld(user, room, pick2[0], pick2[1]);
                    return true;
                }
            }
        }
    }

    // Guestbook signing
    if (cmd == "sign") {
        var signKey = "library_guestbook_signed";
        var playerName = user.GetCharacterName(false);

        if (rest == "" || rest == "guestbook") {
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"3\">What would you like to write? Type: sign <your message></ansi>");
            return true;
        }

        var message = rest;
        if (message.indexOf("guestbook ") == 0) {
            message = message.substring(10);
        }
        if (message.length > 80) {
            message = message.substring(0, 80);
        }

        var entryKey = "guestbook_" + playerName;
        room.SetPermData(entryKey, message);

        if (user.GetMiscCharacterData(signKey) != "signed") {
            user.SetMiscCharacterData(signKey, "signed");
            user.GrantXP(50, "signing the guestbook");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(+50 XP — Welcome to the Library.)</ansi>");
        }

        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You write in the guestbook. The ink shimmers, then settles.</ansi>");
        SendUserMessage(user.UserId(), "  <ansi fg=\"10\">\"" + message + "\" -- " + playerName + "</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " writes something in the guestbook.", user.UserId());
        return true;
    }

    // Guestbook reading
    if (cmd == "read" && rest.indexOf("guestbook") >= 0) {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">Names and notes fill the pages:</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "  <ansi fg=\"8\">\"I found the heart of gold. Still searching.\" -- N.Y.</ansi>");
        SendUserMessage(user.UserId(), "  <ansi fg=\"8\">\"The Overlook remembers.\" -- J.T.</ansi>");
        SendUserMessage(user.UserId(), "  <ansi fg=\"8\">\"Omar comin.\" -- O.L.</ansi>");
        SendUserMessage(user.UserId(), "  <ansi fg=\"8\">\"Party on.\" -- W. & G.</ansi>");

        var playerName2 = user.GetCharacterName(false);
        var myEntry = room.GetPermData("guestbook_" + playerName2);
        if (myEntry != null && myEntry != "") {
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "  <ansi fg=\"10\">\"" + myEntry + "\" -- " + playerName2 + "</ansi>");
        }
        SendUserMessage(user.UserId(), "");
        return true;
    }

    return false;
}
