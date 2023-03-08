const games = ['1on1soccer.swf', '3dtanks.swf', 'Achievement Unlocked.swf', 'Age of War.swf', 'Art of War.swf', 'Avalanche.swf', 'Bloons TD 2.swf', 'Bloons TD.swf', 'Bloons.swf', 'Bloxorz.swf', 'Castle Hero.swf', 'Checkers.swf', 'Doodle Jump.swf', 'Duck Life 1.swf', 'Duck Life 2 - World Champion.swf', 'Duck Life 3 - Evolution.swf', 'Duck Life 4.swf', 'Flash Sonic.swf', 'Henry Stickmin - Breaking the Bank.swf', 'Henry Stickmin - Escaping the Prison.swf', 'Henry Stickmin - Stealing the Diamond.swf', 'Interactive Buddy.swf', 'Learn to Fly.swf', 'Mario Kart Flash.swf', 'Minecraft TD.swf', 'Minesweeper.swf', 'Motherload.swf', 'N.swf', 'PC Breakdown.swf', 'Pacman.swf', 'Pandemic 1.swf', 'Pandemic 2.swf', 'Portal Flash.swf', 'Portal.swf', 'QWOP.swf', 'README.md', 'Riddle School - Transfer 2.swf', 'Riddle School - Transfer.swf', 'Riddle School 2.swf', 'Riddle School 3.swf', 'Riddle School 4.swf', 'Riddle School 5.swf', 'Riddle School.swf', 'Rubiks Cube.swf', 'Shopping Cart Hero.swf', 'Snake.swf', 'Stick RPG.swf', 'Storm the House 2.swf', 'Storm the House.swf', 'Super Mario 63.swf', 'Super Mario Flash.swf', 'Super Meat Boy.swf', 'Super Smash Flash.swf', 'Tetris.swf', 'The Impossible Quiz.swf', 'The Worlds Hardest Game.swf', 'Tron.swf', 'Unfair Mario.swf', 'abobosbigadventure.swf', 'achievementunlocked.swf', 'achievementunlocked2.swf', 'achievementunlocked3.swf', 'actionturnip.swf', 'adaran.swf', 'adrenaline.swf', 'americanracing1.swf', 'americanracing2.swf', 'arkandianrevenant.swf', 'armyofages.swf', 'awesomecars.swf', 'awesomeplanes.swf', 'battlepanic.swf', 'bobtherobber.swf', 'boombot2.swf', 'boxhead2play.swf', 'bubbletanks2.swf', 'bulletbill.swf', 'bullettimefighting.swf', 'burritobison.swf', 'burritobisonrevenge.swf', 'cactusmccoy.swf', 'cactusmccoy2.swf', 'cannonbasketball2.swf', 'cargobridge.swf', 'causality.swf', 'chibiknight.swf', 'clickerheroes.swf', 'computerbashing.swf', 'crushthecastle.swf', 'crushthecastle2.swf', 'cubefield.swf', 'cyclomaniacs2.swf', 'diggy.swf', 'donkeykong.swf', 'dontshootthepuppy.swf', 'doodledefender.swf', 'doom.swf', 'dragracing.swf', 'flashflightsimulator.swf', 'flight.swf', 'fracuum.swf', 'freerider2.swf', 'games', 'getontop.swf', 'giveuprobot.swf', 'giveuprobot2.swf', 'hanger.swf', 'hanger2.swf', 'happywheels.swf', 'hobo.swf', 'hobo2.swf', 'hobo3.swf', 'hobo4.swf', 'hobo5.swf', 'hobo6.swf', 'hobo7.swf', 'houseofwolves.swf', 'interactivebuddy.swf', 'jacksmith.swf', 'jellytruck.swf', 'johnnyupgrade.swf', 'jumpix2.swf', 'knightmaretower.swf', 'learn2fly2.swf', 'learn2fly3.swf', 'magnetface.swf', 'mariocombat.swf', 'marioracingtournament.swf', 'meatboy.swf', 'megamanprojectx.swf', 'metroidelements.swf', 'mineblocks.swf', 'minesweeper.swf', 'mirrorsedge.swf', 'moneymovers.swf', 'moneymovers3.swf', 'motherload.swf', 'motox3m.swf', 'multitask.swf', 'mutilateadoll2.swf', 'myangel.swf', 'nanotube.swf', 'newgroundsrumble.swf', 'ngame.swf', 'nitromemustdie.swf', 'nucleus.swf', 'nv2.swf', 'nyancatlostinspace.swf', 'offroaders.swf', 'onemanarmy2.swf', 'outofthisworld.swf', 'pacman.swf', 'pandemic.swf', 'pandemic2.swf', 'papalouie.swf', 'papalouie2.swf', 'papalouie3.swf', 'picosschool.swf', 'picosschool2.swf', 'pirates.swf', 'polarjump.swf', 'portal.swf', 'portal2d.swf', 'raftwars.swf', 'raftwars2.swf', 'raze.swf', 'redball.swf', 'redball2.swf', 'redball4.sw', 'redball4v2.swf', 'redball4v3.swf', 'redshift.swf', 'revenant2.swf', 'saszombieassault3.swf', 'sentryknight.swf', 'shoppingcarthero3.swf', 'siftheads.swf', 'siftheads2.swf', 'siftheads3.swf', 'siftheads4.swf', 'siftheads5.swf', 'sniperassassin4.swf', 'sportsheadsfootball.swf', 'sportsheadsracing.swf', 'sportsheadstennis.swf', 'stickrpg.swf', 'stickrun2.swf', 'stickwar.swf', 'strikeforceheroes2.swf', 'strikeforcekittylaststand.swf', 'sugarsugar.swf', 'sugarsugar2.swf', 'sugarsugar3.swf', 'theimpossiblequiz2.swf', 'theworldshardestgame2.swf', 'thingthingarena.swf', 'thisistheonlylevel.swf', 'tosstheturtle.swf', 'truckloader4.swf', 'ultimateflashsonic.swf', 'ultimatetactics.swf', 'unrealflash.swf', 'vex.swf', 'vex2.swf', 'vex3.swf', 'warfare1917.swf', 'warfare1944.swf', 'warp.swf', 'xenos.swf', 'xtremecliffdiving.swf', 'yearofthesnake.swf', 'yuriusshouseofspooks.swf', 'zombiealienparasites.swf'];
alert("hi")

let games_select = document.getElementById("select-game");
for (let i = 0; i < games.length; i++){
    let option = document.createElement("option");
    option.text = games[i];
    games_select.add(option);
}

function playGame(){
  let choice = document.getElementById('select-game');
  let text = choice.options[choice.selectedIndex].text;
  window.RufflePlayer = window.RufflePlayer || {};
  window.addEventListener("load", (event) => {
    const ruffle = window.RufflePlayer.newest();
    const player = ruffle.createPlayer();
    const container = document.getElementById("container");
    container.appendChild(player);
    player.style.width = "99vw"; 
    player.style.height = "99vh";
    player.load("games/"+text);
  });
}



window.RufflePlayer = window.RufflePlayer || {};
      window.addEventListener("load", (event) => {
          const ruffle = window.RufflePlayer.newest();
          const player = ruffle.createPlayer();
          const container = document.getElementById("container");
          container.appendChild(player);
          player.style.width = "99vw"; 
          player.style.height = "99vh";
          player.load("games/Duck Life 1.swf");
      });
