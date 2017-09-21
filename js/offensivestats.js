function CalcBattingAvg(h,ab) {
    if (ab === 0) {
        return 0.000;
    }
    else {
        return h / ab;
    }
}

function CalcPA(ab,bb,hbp,sacb,sacf) {
    return ab + bb + hbp + sacb + sacf;
}

function CalcObp(h,bb,hbp,ab,sacf) {
    if (ab+bb+hbp+sacf === 0) {
        return 0.000;
    }
    else {
        return (h+bb+hbp) / (ab+bb+hbp+sacf);
    }
}

function CalcXbh(double,triple,hr) {
    return double + triple + hr;
}

function CalcTb(single,double,triple,hr) {
    return single + (2*double) + (3*triple) + (4*hr);
}

function CalcSlg(tb,ab) {
    if (ab === 0) {
        return 0.000;
    }
    else {
        return tb / ab;
    }
}

function CalcOps(obp,slg) {
    return obp + slg;
}









var AaronNeeck = [
    0, /* ab            0*/
    0, /* h             1*/
    0, /* double        2*/
    0, /* triple        3*/
    0, /* hr            4*/
    0, /* rbi           5*/
    0, /* r             6*/
    0, /* bb            7*/
    0, /* so            8*/
    0, /* sb            9*/
    0, /* cs            10*/
    0, /* ibb           11*/
    0, /* hbp           12*/
    0, /* sacf          13*/
    0, /* sacb          14*/
]

var AaronNeecksingle = AaronNeeck[1] - (CalcXbh(AaronNeeck[2],AaronNeeck[3],AaronNeeck[4]));

document.getElementById("AaronNeeckab").innerHTML = AaronNeeck[0];
document.getElementById("AaronNeeckpa").innerHTML = CalcPA(AaronNeeck[0],AaronNeeck[7],AaronNeeck[12],AaronNeeck[14],AaronNeeck[13]);
document.getElementById("AaronNeeckh").innerHTML = AaronNeeck[1];
document.getElementById("AaronNeeckavg").innerHTML = CalcBattingAvg(AaronNeeck[1], AaronNeeck[0]).toFixed(3);
document.getElementById("AaronNeeckdouble").innerHTML = AaronNeeck[2];
document.getElementById("AaronNeecktriple").innerHTML = AaronNeeck[3];
document.getElementById("AaronNeeckhr").innerHTML = AaronNeeck[4];
document.getElementById("AaronNeeckobp").innerHTML = CalcObp(AaronNeeck[1],AaronNeeck[7],AaronNeeck[12],AaronNeeck[0],AaronNeeck[13]).toFixed(3);
document.getElementById("AaronNeeckrbi").innerHTML = AaronNeeck[5];
document.getElementById("AaronNeeckr").innerHTML = AaronNeeck[6];
document.getElementById("AaronNeeckbb").innerHTML = AaronNeeck[7];
document.getElementById("AaronNeeckso").innerHTML = AaronNeeck[8];
document.getElementById("AaronNeeckslg").innerHTML = CalcSlg(CalcTb(AaronNeecksingle,AaronNeeck[2],AaronNeeck[3],AaronNeeck[4]),AaronNeeck[0]).toFixed(3);
document.getElementById("AaronNeeckops").innerHTML =CalcOps(CalcObp(AaronNeeck[1],AaronNeeck[7],AaronNeeck[12],AaronNeeck[0],AaronNeeck[13]),CalcSlg(CalcTb(AaronNeecksingle,AaronNeeck[2],AaronNeeck[3],AaronNeeck[4]),AaronNeeck[0])).toFixed(3);
document.getElementById("AaronNeecksb").innerHTML = AaronNeeck[9];
document.getElementById("AaronNeeckcs").innerHTML = AaronNeeck[10];
document.getElementById("AaronNeeckibb").innerHTML = AaronNeeck[11];
document.getElementById("AaronNeeckhbp").innerHTML = AaronNeeck[12];
document.getElementById("AaronNeecksacf").innerHTML = AaronNeeck[13];
document.getElementById("AaronNeecksacb").innerHTML = AaronNeeck[14];
document.getElementById("AaronNeecktb").innerHTML = CalcTb(AaronNeecksingle,AaronNeeck[2],AaronNeeck[3],AaronNeeck[4]);
document.getElementById("AaronNeeckxbh").innerHTML = CalcXbh(AaronNeeck[2],AaronNeeck[3],AaronNeeck[4]);










var AlexTorpey = [
    4, /* ab            0*/
    3, /* h             1*/
    1, /* double        2*/
    0, /* triple        3*/
    0, /* hr            4*/
    2, /* rbi           5*/
    2, /* r             6*/
    0, /* bb            7*/
    0, /* so            8*/
    0, /* sb            9*/
    0, /* cs            10*/
    0, /* ibb           11*/
    0, /* hbp           12*/
    0, /* sacf          13*/
    0, /* sacb          14*/
]

var AlexTorpeysingle = AlexTorpey[1] - (CalcXbh(AlexTorpey[2],AlexTorpey[3],AlexTorpey[4]));

document.getElementById("AlexTorpeyab").innerHTML = AlexTorpey[0];
document.getElementById("AlexTorpeypa").innerHTML = CalcPA(AlexTorpey[0],AlexTorpey[7],AlexTorpey[12],AlexTorpey[14],AlexTorpey[13]);
document.getElementById("AlexTorpeyh").innerHTML = AlexTorpey[1];
document.getElementById("AlexTorpeyavg").innerHTML = CalcBattingAvg(AlexTorpey[1], AlexTorpey[0]).toFixed(3);
document.getElementById("AlexTorpeydouble").innerHTML = AlexTorpey[2];
document.getElementById("AlexTorpeytriple").innerHTML = AlexTorpey[3];
document.getElementById("AlexTorpeyhr").innerHTML = AlexTorpey[4];
document.getElementById("AlexTorpeyobp").innerHTML = CalcObp(AlexTorpey[1],AlexTorpey[7],AlexTorpey[12],AlexTorpey[0],AlexTorpey[13]).toFixed(3);
document.getElementById("AlexTorpeyrbi").innerHTML = AlexTorpey[5];
document.getElementById("AlexTorpeyr").innerHTML = AlexTorpey[6];
document.getElementById("AlexTorpeybb").innerHTML = AlexTorpey[7];
document.getElementById("AlexTorpeyso").innerHTML = AlexTorpey[8];
document.getElementById("AlexTorpeyslg").innerHTML = CalcSlg(CalcTb(AlexTorpeysingle,AlexTorpey[2],AlexTorpey[3],AlexTorpey[4]),AlexTorpey[0]).toFixed(3);
document.getElementById("AlexTorpeyops").innerHTML =CalcOps(CalcObp(AlexTorpey[1],AlexTorpey[7],AlexTorpey[12],AlexTorpey[0],AlexTorpey[13]),CalcSlg(CalcTb(AlexTorpeysingle,AlexTorpey[2],AlexTorpey[3],AlexTorpey[4]),AlexTorpey[0])).toFixed(3);
document.getElementById("AlexTorpeysb").innerHTML = AlexTorpey[9];
document.getElementById("AlexTorpeycs").innerHTML = AlexTorpey[10];
document.getElementById("AlexTorpeyibb").innerHTML = AlexTorpey[11];
document.getElementById("AlexTorpeyhbp").innerHTML = AlexTorpey[12];
document.getElementById("AlexTorpeysacf").innerHTML = AlexTorpey[13];
document.getElementById("AlexTorpeysacb").innerHTML = AlexTorpey[14];
document.getElementById("AlexTorpeytb").innerHTML = CalcTb(AlexTorpeysingle,AlexTorpey[2],AlexTorpey[3],AlexTorpey[4]);
document.getElementById("AlexTorpeyxbh").innerHTML = CalcXbh(AlexTorpey[2],AlexTorpey[3],AlexTorpey[4]);










var AndrewGreene = [
    4, /* ab            0*/
    1, /* h             1*/
    0, /* double        2*/
    0, /* triple        3*/
    0, /* hr            4*/
    2, /* rbi           5*/
    0, /* r             6*/
    0, /* bb            7*/
    1, /* so            8*/
    1, /* sb            9*/
    0, /* cs            10*/
    0, /* ibb           11*/
    1, /* hbp           12*/
    0, /* sacf          13*/
    0, /* sacb          14*/
]

var AndrewGreenesingle = AndrewGreene[1] - (CalcXbh(AndrewGreene[2],AndrewGreene[3],AndrewGreene[4]));

document.getElementById("AndrewGreeneab").innerHTML = AndrewGreene[0];
document.getElementById("AndrewGreenepa").innerHTML = CalcPA(AndrewGreene[0],AndrewGreene[7],AndrewGreene[12],AndrewGreene[14],AndrewGreene[13]);
document.getElementById("AndrewGreeneh").innerHTML = AndrewGreene[1];
document.getElementById("AndrewGreeneavg").innerHTML = CalcBattingAvg(AndrewGreene[1], AndrewGreene[0]).toFixed(3);
document.getElementById("AndrewGreenedouble").innerHTML = AndrewGreene[2];
document.getElementById("AndrewGreenetriple").innerHTML = AndrewGreene[3];
document.getElementById("AndrewGreenehr").innerHTML = AndrewGreene[4];
document.getElementById("AndrewGreeneobp").innerHTML = CalcObp(AndrewGreene[1],AndrewGreene[7],AndrewGreene[12],AndrewGreene[0],AndrewGreene[13]).toFixed(3);
document.getElementById("AndrewGreenerbi").innerHTML = AndrewGreene[5];
document.getElementById("AndrewGreener").innerHTML = AndrewGreene[6];
document.getElementById("AndrewGreenebb").innerHTML = AndrewGreene[7];
document.getElementById("AndrewGreeneso").innerHTML = AndrewGreene[8];
document.getElementById("AndrewGreeneslg").innerHTML = CalcSlg(CalcTb(AndrewGreenesingle,AndrewGreene[2],AndrewGreene[3],AndrewGreene[4]),AndrewGreene[0]).toFixed(3);
document.getElementById("AndrewGreeneops").innerHTML =CalcOps(CalcObp(AndrewGreene[1],AndrewGreene[7],AndrewGreene[12],AndrewGreene[0],AndrewGreene[13]),CalcSlg(CalcTb(AndrewGreenesingle,AndrewGreene[2],AndrewGreene[3],AndrewGreene[4]),AndrewGreene[0])).toFixed(3);
document.getElementById("AndrewGreenesb").innerHTML = AndrewGreene[9];
document.getElementById("AndrewGreenecs").innerHTML = AndrewGreene[10];
document.getElementById("AndrewGreeneibb").innerHTML = AndrewGreene[11];
document.getElementById("AndrewGreenehbp").innerHTML = AndrewGreene[12];
document.getElementById("AndrewGreenesacf").innerHTML = AndrewGreene[13];
document.getElementById("AndrewGreenesacb").innerHTML = AndrewGreene[14];
document.getElementById("AndrewGreenetb").innerHTML = CalcTb(AndrewGreenesingle,AndrewGreene[2],AndrewGreene[3],AndrewGreene[4]);
document.getElementById("AndrewGreenexbh").innerHTML = CalcXbh(AndrewGreene[2],AndrewGreene[3],AndrewGreene[4]);