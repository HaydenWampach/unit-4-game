$(document).ready(function() {


    //variables
    var wins = 0;
    var losses = 0;
    var userTotalPoints = 0;
    var targetScore = Math.floor(Math.random() * 101 + 19);
    var gem1 = Math.floor(Math.random() *11 + 1);
    var gem2 = Math.floor(Math.random() * 11 + 1);
    var gem3 = Math.floor(Math.random() * 11 + 1);
    var gem4 = Math.floor(Math.random() * 11 + 1);

    // var to html tag
    $('#goalScore').text(targetScore);
    $('winCount').text(wins);
    $('#lossCount').text(losses);
    $('#totalPoints').text(userTotalPoints);
    $('#alert').text('');

    // determines wins and losses
    function winWin(){
        $('#alert').html('<h3>"Winner!"</h3>')
        wins++;
        $('#winCount').text(wins);
        reset();
    }

    function youLose(){
        $('#alert').html('<h4>"Loser!"</h4>')
        losses++;
        $('#lossCount').text(losses);
        reset();
    }

    //event for button click
    //add random point value
    //determine if user wins or losses
    $('.gem1').on('click', function() {
        userTotalPoints = eval(userTotalPoints) + eval(gem1);
        $('#totalPoints').text(userTotalPoints);
        determineWinLoss();
    })

    $('.gem2').on('click', function() {
        userTotalPoints = eval(userTotalPoints) + eval(gem2);
        $('#totalPoints').text(userTotalPoints);
        determineWinLoss();
    })

    $('.gem3').on('click', function() {
        userTotalPoints = eval(userTotalPoints) + eval(gem3);
        $('#totalPoints').text(userTotalPoints);
        determineWinLoss();
    })

    $('.gem4').on('click', function() {
        userTotalPoints = eval(userTotalPoints) + eval(gem4);
        $('#totalPoints').text(userTotalPoints);
        determineWinLoss();
    })

    function determineWinLoss() {
        if (userTotalPoints == targetScore) {
            winWin();
        } else if (userTotalPoints > targetScore) {
            youLose();
        }
    }

    function reset() {
        userTotalPoints = 0;
        targetScore = Math.floor(Math.random() * 101 + 19);
        $('#goalScore').text(targetScore);
        gem1 = Math.floor(Math.random() * 11 + 1);
        gem2 = Math.floor(Math.random() * 11 + 1);
        gem3 = Math.floor(Math.random() * 11 + 1);
        gem4 = Math.floor(Math.random() * 11 + 1);
    }

})