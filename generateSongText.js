function generateSongText () {
    for (let i = 99; i > 0; i--) {
        print(i);
    }
};

function print (countBottle) {
    console.log(`${countBottle} ${generateSingleStanza(countBottle)} пива на стене, ${countBottle} ${generateSingleStanza(countBottle)} пива!
    Возьми одну, пусти по кругу, ${--countBottle} ${generateSingleStanza(countBottle)} пива на стене!`)
};

function generateSingleStanza (countBottle) {
    if (countBottle > 1 && countBottle < 5 || countBottle % 10 === 2 || countBottle % 10 === 3 || countBottle % 10 === 4) {
        return "бутылки";
    }
    else if (countBottle === 1 || countBottle % 10 === 1) {
        return "бутылка";
    }
    else {
        return "бутылок";
    }
};

generateSongText();