function CalcEra(er,ip) {
    if (ip === 0) {
        return 0.00.toFixed(2);
    }
    else {
        return (er/ip*9).toFixed(2);
    }
}

function CalcWhip(h,bb,ip) {
    if (ip === 0) {
        return 0.00.toFixed(2);
    }
    else {
        return ((h+bb)/ip).toFixed(2);
    }
}

function CalcWinpercent(w,l) {
    if (w+l === 0) {
        return 0.000.toFixed(3);
    }
    else {
        return (w/(w+l)).toFixed(3);
    }
}

function CalcKper9(k,ip) {
    if (ip === 0) {
        return 0.00.toFixed(2)
    }
    else {
        return (k/ip*9).toFixed(2);
    }
}

function CalcKperBB(k,bb) {
    if (bb === 0) {
        return "Inf";
    }
    else {
        return (k/bb).toFixed(2);
    }
}

var AlexTorpeyp = [
    0, /* W                 0*/
    1, /* L                 1*/
    1, /* G                 2*/
    0, /* GS                3*/
    0, /* CG                4*/
    0, /* SV                5*/
    0, /* SVO               6*/
    1 + 1/3, /* IP decimal  7*/
    1.1, /* IP clean        8*/
    1, /* H                 9*/
    1, /* R                 10*/
    0, /* ER                11*/
    0, /* HR                12*/
    1, /* BB                13*/
    0, /* SO                14*/
    0, /* SHO               15*/
    0, /* HBP               16*/
    0, /* IBB               17*/
    0, /* WP                18*/
]

document.getElementById("AlexTorpeyw").innerHTML = AlexTorpeyp[0];
document.getElementById("AlexTorpeyl").innerHTML = AlexTorpeyp[1];
document.getElementById("AlexTorpeyg").innerHTML = AlexTorpeyp[2];
document.getElementById("AlexTorpeygs").innerHTML = AlexTorpeyp[3];
document.getElementById("AlexTorpeycg").innerHTML = AlexTorpeyp[4];
document.getElementById("AlexTorpeysv").innerHTML = AlexTorpeyp[5];
document.getElementById("AlexTorpeysvo").innerHTML = AlexTorpeyp[6];
document.getElementById("AlexTorpeyip").innerHTML = AlexTorpeyp[8];
document.getElementById("AlexTorpeyph").innerHTML = AlexTorpeyp[9];
document.getElementById("AlexTorpeypr").innerHTML = AlexTorpeyp[10];
document.getElementById("AlexTorpeyer").innerHTML = AlexTorpeyp[11];
document.getElementById("AlexTorpeyphr").innerHTML = AlexTorpeyp[12];
document.getElementById("AlexTorpeypbb").innerHTML = AlexTorpeyp[13];
document.getElementById("AlexTorpeypso").innerHTML = AlexTorpeyp[14];
document.getElementById("AlexTorpeysho").innerHTML = AlexTorpeyp[15];
document.getElementById("AlexTorpeyphbp").innerHTML = AlexTorpeyp[16];
document.getElementById("AlexTorpeypibb").innerHTML = AlexTorpeyp[17];
document.getElementById("AlexTorpeywp").innerHTML = AlexTorpeyp[18];
document.getElementById("AlexTorpeyera").innerHTML = CalcEra(AlexTorpeyp[11],AlexTorpey[7]);
document.getElementById("AlexTorpeywhip").innerHTML = CalcWhip(AlexTorpeyp[9],AlexTorpeyp[13],AlexTorpeyp[7]);
document.getElementById("AlexTorpeywinpercent").innerHTML = CalcWinpercent(AlexTorpeyp[0], AlexTorpey[1]);
document.getElementById("AlexTorpeykper9").innerHTML = CalcKper9(AlexTorpeyp[14], AlexTorpeyp[7]);
document.getElementById("AlexTorpeykperbb").innerHTML = CalcKperBB(AlexTorpeyp[14],AlexTorpeyp[13]);










var BrettOConnorp = [
    0, /* W                 0*/
    0, /* L                 1*/
    1, /* G                 2*/
    1, /* GS                3*/
    0, /* CG                4*/
    0, /* SV                5*/
    0, /* SVO               6*/
    2 + 2/3, /* IP decimal  7*/
    2.2, /* IP clean        8*/
    6, /* H                 9*/
    7, /* R                 10*/
    4, /* ER                11*/
    0, /* HR                12*/
    3, /* BB                13*/
    2, /* SO                14*/
    0, /* SHO               15*/
    0, /* HBP               16*/
    0, /* IBB               17*/
    0, /* WP                18*/
]

document.getElementById("BrettOConnorw").innerHTML = BrettOConnorp[0];
document.getElementById("BrettOConnorl").innerHTML = BrettOConnorp[1];
document.getElementById("BrettOConnorg").innerHTML = BrettOConnorp[2];
document.getElementById("BrettOConnorgs").innerHTML = BrettOConnorp[3];
document.getElementById("BrettOConnorcg").innerHTML = BrettOConnorp[4];
document.getElementById("BrettOConnorsv").innerHTML = BrettOConnorp[5];
document.getElementById("BrettOConnorsvo").innerHTML = BrettOConnorp[6];
document.getElementById("BrettOConnorip").innerHTML = BrettOConnorp[8];
document.getElementById("BrettOConnorph").innerHTML = BrettOConnorp[9];
document.getElementById("BrettOConnorpr").innerHTML = BrettOConnorp[10];
document.getElementById("BrettOConnorer").innerHTML = BrettOConnorp[11];
document.getElementById("BrettOConnorphr").innerHTML = BrettOConnorp[12];
document.getElementById("BrettOConnorpbb").innerHTML = BrettOConnorp[13];
document.getElementById("BrettOConnorpso").innerHTML = BrettOConnorp[14];
document.getElementById("BrettOConnorsho").innerHTML = BrettOConnorp[15];
document.getElementById("BrettOConnorphbp").innerHTML = BrettOConnorp[16];
document.getElementById("BrettOConnorpibb").innerHTML = BrettOConnorp[17];
document.getElementById("BrettOConnorwp").innerHTML = BrettOConnorp[18];
document.getElementById("BrettOConnorera").innerHTML = CalcEra(BrettOConnorp[11],BrettOConnorp[7]);
document.getElementById("BrettOConnorwhip").innerHTML = CalcWhip(BrettOConnorp[9],BrettOConnorp[13],BrettOConnorp[7]);
document.getElementById("BrettOConnorwinpercent").innerHTML = CalcWinpercent(BrettOConnorp[0], BrettOConnorp[1]);
document.getElementById("BrettOConnorkper9").innerHTML = CalcKper9(BrettOConnorp[14], BrettOConnorp[7]);
document.getElementById("BrettOConnorkperbb").innerHTML = CalcKperBB(BrettOConnorp[14],BrettOConnorp[13]);