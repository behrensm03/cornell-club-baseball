var AnthonyCharles = [
    2, /* ab            0*/
    2, /* h             1*/
    0, /* double        2*/
    1, /* triple        3*/
    0, /* hr            4*/
    1, /* rbi           5*/
    2, /* r             6*/
    0, /* bb            7*/
    0, /* so            8*/
    0, /* sb            9*/
    0, /* cs            10*/
    0, /* ibb           11*/
    2, /* hbp           12*/
    1, /* sacf          13*/
    0, /* sacb          14*/
]

var AnthonyCharlespa = AnthonyCharles[0] + AnthonyCharles[7] + AnthonyCharles[12] + AnthonyCharles[14] + AnthonyCharles[13];
var AnthonyCharlesavg = AnthonyCharles[1] / AnthonyCharles[0];
var AnthonyCharlesobp = (AnthonyCharles[1] + AnthonyCharles[7] + AnthonyCharles[12]) / (AnthonyCharles[0] + AnthonyCharles[7] + AnthonyCharles[12] + AnthonyCharles[13]);
var AnthonyCharlesxbh = AnthonyCharles[2] + AnthonyCharles[3] + AnthonyCharles[4];
var AnthonyCharlessingle = AnthonyCharles[1] - (AnthonyCharlesxbh);
var AnthonyCharlestb = AnthonyCharlessingle + (2 * AnthonyCharles[2]) + (3 * AnthonyCharles[3]) + (4 * AnthonyCharles[4]);
var AnthonyCharlesslg = AnthonyCharlestb / AnthonyCharles[0];
var AnthonyCharlesops = AnthonyCharlesobp + AnthonyCharlesslg;

AnthonyCharlesavg = AnthonyCharlesavg || 0;
AnthonyCharlesobp = AnthonyCharlesobp || 0;
AnthonyCharlesslg = AnthonyCharlesslg || 0;
AnthonyCharlesops = AnthonyCharlesops || 0;
AnthonyCharlespa = AnthonyCharlespa || 0;

document.getElementById("AnthonyCharlesab").innerHTML = AnthonyCharles[0];
document.getElementById("AnthonyCharlespa").innerHTML = AnthonyCharlespa;
document.getElementById("AnthonyCharlesh").innerHTML = AnthonyCharles[1];
document.getElementById("AnthonyCharlesavg").innerHTML = AnthonyCharlesavg.toFixed(3);
document.getElementById("AnthonyCharlesdouble").innerHTML = AnthonyCharles[2];
document.getElementById("AnthonyCharlestriple").innerHTML = AnthonyCharles[3];
document.getElementById("AnthonyCharleshr").innerHTML = AnthonyCharles[4];
document.getElementById("AnthonyCharlesobp").innerHTML = AnthonyCharlesobp.toFixed(3);
document.getElementById("AnthonyCharlesrbi").innerHTML = AnthonyCharles[5];
document.getElementById("AnthonyCharlesr").innerHTML = AnthonyCharles[6];
document.getElementById("AnthonyCharlesbb").innerHTML = AnthonyCharles[7];
document.getElementById("AnthonyCharlesso").innerHTML = AnthonyCharles[8];
document.getElementById("AnthonyCharlesslg").innerHTML = AnthonyCharlesslg.toFixed(3);
document.getElementById("AnthonyCharlesops").innerHTML = AnthonyCharlesops.toFixed(3);
document.getElementById("AnthonyCharlessb").innerHTML = AnthonyCharles[9];
document.getElementById("AnthonyCharlescs").innerHTML = AnthonyCharles[10];
document.getElementById("AnthonyCharlesibb").innerHTML = AnthonyCharles[11];
document.getElementById("AnthonyCharleshbp").innerHTML = AnthonyCharles[12];
document.getElementById("AnthonyCharlessacf").innerHTML = AnthonyCharles[13];
document.getElementById("AnthonyCharlessacb").innerHTML = AnthonyCharles[14];
document.getElementById("AnthonyCharlestb").innerHTML = AnthonyCharlestb;
document.getElementById("AnthonyCharlesxbh").innerHTML = AnthonyCharlesxbh;










var BrandonReyes = [
    7, /* ab            0*/
    2, /* h             1*/
    0, /* double        2*/
    0, /* triple        3*/
    0, /* hr            4*/
    2, /* rbi           5*/
    0, /* r             6*/
    0, /* bb            7*/
    2, /* so            8*/
    0, /* sb            9*/
    0, /* cs            10*/
    0, /* ibb           11*/
    0, /* hbp           12*/
    0, /* sacf          13*/
    0, /* sacb          14*/
]

var BrandonReyespa = BrandonReyes[0] + BrandonReyes[7] + BrandonReyes[12] + BrandonReyes[14] + BrandonReyes[13];
var BrandonReyesavg = BrandonReyes[1] / BrandonReyes[0];
var BrandonReyesobp = (BrandonReyes[1] + BrandonReyes[7] + BrandonReyes[12]) / (BrandonReyes[0] + BrandonReyes[7] + BrandonReyes[12] + BrandonReyes[13]);
var BrandonReyesxbh = BrandonReyes[2] + BrandonReyes[3] + BrandonReyes[4];
var BrandonReyessingle = BrandonReyes[1] - (BrandonReyesxbh);
var BrandonReyestb = BrandonReyessingle + (2 * BrandonReyes[2]) + (3 * BrandonReyes[3]) + (4 * BrandonReyes[4]);
var BrandonReyesslg = BrandonReyestb / BrandonReyes[0];
var BrandonReyesops = BrandonReyesobp + BrandonReyesslg;

BrandonReyesavg = BrandonReyesavg || 0;
BrandonReyesobp = BrandonReyesobp || 0;
BrandonReyesslg = BrandonReyesslg || 0;
BrandonReyesops = BrandonReyesops || 0;
BrandonReyespa = BrandonReyespa || 0;

document.getElementById("BrandonReyesab").innerHTML = BrandonReyes[0];
document.getElementById("BrandonReyespa").innerHTML = BrandonReyespa;
document.getElementById("BrandonReyesh").innerHTML = BrandonReyes[1];
document.getElementById("BrandonReyesavg").innerHTML = BrandonReyesavg.toFixed(3);
document.getElementById("BrandonReyesdouble").innerHTML = BrandonReyes[2];
document.getElementById("BrandonReyestriple").innerHTML = BrandonReyes[3];
document.getElementById("BrandonReyeshr").innerHTML = BrandonReyes[4];
document.getElementById("BrandonReyesobp").innerHTML = BrandonReyesobp.toFixed(3);
document.getElementById("BrandonReyesrbi").innerHTML = BrandonReyes[5];
document.getElementById("BrandonReyesr").innerHTML = BrandonReyes[6];
document.getElementById("BrandonReyesbb").innerHTML = BrandonReyes[7];
document.getElementById("BrandonReyesso").innerHTML = BrandonReyes[8];
document.getElementById("BrandonReyesslg").innerHTML = BrandonReyesslg.toFixed(3);
document.getElementById("BrandonReyesops").innerHTML = BrandonReyesops.toFixed(3);
document.getElementById("BrandonReyessb").innerHTML = BrandonReyes[9];
document.getElementById("BrandonReyescs").innerHTML = BrandonReyes[10];
document.getElementById("BrandonReyesibb").innerHTML = BrandonReyes[11];
document.getElementById("BrandonReyeshbp").innerHTML = BrandonReyes[12];
document.getElementById("BrandonReyessacf").innerHTML = BrandonReyes[13];
document.getElementById("BrandonReyessacb").innerHTML = BrandonReyes[14];
document.getElementById("BrandonReyestb").innerHTML = BrandonReyestb;
document.getElementById("BrandonReyesxbh").innerHTML = BrandonReyesxbh;










var BrettOConnor = [
    2, /* ab            0*/
    1, /* h             1*/
    0, /* double        2*/
    0, /* triple        3*/
    0, /* hr            4*/
    1, /* rbi           5*/
    1, /* r             6*/
    0, /* bb            7*/
    1, /* so            8*/
    0, /* sb            9*/
    0, /* cs            10*/
    0, /* ibb           11*/
    0, /* hbp           12*/
    0, /* sacf          13*/
    0, /* sacb          14*/
]

var BrettOConnorpa = BrettOConnor[0] + BrettOConnor[7] + BrettOConnor[12] + BrettOConnor[14] + BrettOConnor[13];
var BrettOConnoravg = BrettOConnor[1] / BrettOConnor[0];
var BrettOConnorobp = (BrettOConnor[1] + BrettOConnor[7] + BrettOConnor[12]) / (BrettOConnor[0] + BrettOConnor[7] + BrettOConnor[12] + BrettOConnor[13]);
var BrettOConnorxbh = BrettOConnor[2] + BrettOConnor[3] + BrettOConnor[4];
var BrettOConnorsingle = BrettOConnor[1] - (BrettOConnorxbh);
var BrettOConnortb = BrettOConnorsingle + (2 * BrettOConnor[2]) + (3 * BrettOConnor[3]) + (4 * BrettOConnor[4]);
var BrettOConnorslg = BrettOConnortb / BrettOConnor[0];
var BrettOConnorops = BrettOConnorobp + BrettOConnorslg;

BrettOConnoravg = BrettOConnoravg || 0;
BrettOConnorobp = BrettOConnorobp || 0;
BrettOConnorslg = BrettOConnorslg || 0;
BrettOConnorops = BrettOConnorops || 0;
BrettOConnorpa = BrettOConnorpa || 0;

document.getElementById("BrettOConnorab").innerHTML = BrettOConnor[0];
document.getElementById("BrettOConnorpa").innerHTML = BrettOConnorpa;
document.getElementById("BrettOConnorh").innerHTML = BrettOConnor[1];
document.getElementById("BrettOConnoravg").innerHTML = BrettOConnoravg.toFixed(3);
document.getElementById("BrettOConnordouble").innerHTML = BrettOConnor[2];
document.getElementById("BrettOConnortriple").innerHTML = BrettOConnor[3];
document.getElementById("BrettOConnorhr").innerHTML = BrettOConnor[4];
document.getElementById("BrettOConnorobp").innerHTML = BrettOConnorobp.toFixed(3);
document.getElementById("BrettOConnorrbi").innerHTML = BrettOConnor[5];
document.getElementById("BrettOConnorr").innerHTML = BrettOConnor[6];
document.getElementById("BrettOConnorbb").innerHTML = BrettOConnor[7];
document.getElementById("BrettOConnorso").innerHTML = BrettOConnor[8];
document.getElementById("BrettOConnorslg").innerHTML = BrettOConnorslg.toFixed(3);
document.getElementById("BrettOConnorops").innerHTML = BrettOConnorops.toFixed(3);
document.getElementById("BrettOConnorsb").innerHTML = BrettOConnor[9];
document.getElementById("BrettOConnorcs").innerHTML = BrettOConnor[10];
document.getElementById("BrettOConnoribb").innerHTML = BrettOConnor[11];
document.getElementById("BrettOConnorhbp").innerHTML = BrettOConnor[12];
document.getElementById("BrettOConnorsacf").innerHTML = BrettOConnor[13];
document.getElementById("BrettOConnorsacb").innerHTML = BrettOConnor[14];
document.getElementById("BrettOConnortb").innerHTML = BrettOConnortb;
document.getElementById("BrettOConnorxbh").innerHTML = BrettOConnorxbh;










var ConradMcCarthy = [
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

var ConradMcCarthypa = ConradMcCarthy[0] + ConradMcCarthy[7] + ConradMcCarthy[12] + ConradMcCarthy[14] + ConradMcCarthy[13];
var ConradMcCarthyavg = ConradMcCarthy[1] / ConradMcCarthy[0];
var ConradMcCarthyobp = (ConradMcCarthy[1] + ConradMcCarthy[7] + ConradMcCarthy[12]) / (ConradMcCarthy[0] + ConradMcCarthy[7] + ConradMcCarthy[12] + ConradMcCarthy[13]);
var ConradMcCarthyxbh = ConradMcCarthy[2] + ConradMcCarthy[3] + ConradMcCarthy[4];
var ConradMcCarthysingle = ConradMcCarthy[1] - (ConradMcCarthyxbh);
var ConradMcCarthytb = ConradMcCarthysingle + (2 * ConradMcCarthy[2]) + (3 * ConradMcCarthy[3]) + (4 * ConradMcCarthy[4]);
var ConradMcCarthyslg = ConradMcCarthytb / ConradMcCarthy[0];
var ConradMcCarthyops = ConradMcCarthyobp + ConradMcCarthyslg;

ConradMcCarthyavg = ConradMcCarthyavg || 0;
ConradMcCarthyobp = ConradMcCarthyobp || 0;
ConradMcCarthyslg = ConradMcCarthyslg || 0;
ConradMcCarthyops = ConradMcCarthyops || 0;
ConradMcCarthypa = ConradMcCarthypa || 0;

document.getElementById("ConradMcCarthyab").innerHTML = ConradMcCarthy[0];
document.getElementById("ConradMcCarthypa").innerHTML = ConradMcCarthypa;
document.getElementById("ConradMcCarthyh").innerHTML = ConradMcCarthy[1];
document.getElementById("ConradMcCarthyavg").innerHTML = ConradMcCarthyavg.toFixed(3);
document.getElementById("ConradMcCarthydouble").innerHTML = ConradMcCarthy[2];
document.getElementById("ConradMcCarthytriple").innerHTML = ConradMcCarthy[3];
document.getElementById("ConradMcCarthyhr").innerHTML = ConradMcCarthy[4];
document.getElementById("ConradMcCarthyobp").innerHTML = ConradMcCarthyobp.toFixed(3);
document.getElementById("ConradMcCarthyrbi").innerHTML = ConradMcCarthy[5];
document.getElementById("ConradMcCarthyr").innerHTML = ConradMcCarthy[6];
document.getElementById("ConradMcCarthybb").innerHTML = ConradMcCarthy[7];
document.getElementById("ConradMcCarthyso").innerHTML = ConradMcCarthy[8];
document.getElementById("ConradMcCarthyslg").innerHTML = ConradMcCarthyslg.toFixed(3);
document.getElementById("ConradMcCarthyops").innerHTML = ConradMcCarthyops.toFixed(3);
document.getElementById("ConradMcCarthysb").innerHTML = ConradMcCarthy[9];
document.getElementById("ConradMcCarthycs").innerHTML = ConradMcCarthy[10];
document.getElementById("ConradMcCarthyibb").innerHTML = ConradMcCarthy[11];
document.getElementById("ConradMcCarthyhbp").innerHTML = ConradMcCarthy[12];
document.getElementById("ConradMcCarthysacf").innerHTML = ConradMcCarthy[13];
document.getElementById("ConradMcCarthysacb").innerHTML = ConradMcCarthy[14];
document.getElementById("ConradMcCarthytb").innerHTML = ConradMcCarthytb;
document.getElementById("ConradMcCarthyxbh").innerHTML = ConradMcCarthyxbh;







































var _ = [
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

var _single = _[1] - (CalcXbh(_[2],_[3],_[4]));

document.getElementById("_ab").innerHTML = _[0];
document.getElementById("_pa").innerHTML = CalcPA(_[0],_[7],_[12],_[14],_[13]);
document.getElementById("_h").innerHTML = _[1];
document.getElementById("_avg").innerHTML = CalcBattingAvg(_[1], _[0]).toFixed(3);
document.getElementById("_double").innerHTML = _[2];
document.getElementById("_triple").innerHTML = _[3];
document.getElementById("_hr").innerHTML = _[4];
document.getElementById("_obp").innerHTML = CalcObp(_[1],_[7],_[12],_[0],_[13]).toFixed(3);
document.getElementById("_rbi").innerHTML = _[5];
document.getElementById("_r").innerHTML = _[6];
document.getElementById("_bb").innerHTML = _[7];
document.getElementById("_so").innerHTML = _[8];
document.getElementById("_slg").innerHTML = CalcSlg(CalcTb(_single,_[2],_[3],_[4]),_[0]).toFixed(3);
document.getElementById("_ops").innerHTML =CalcOps(CalcObp(_[1],_[7],_[12],_[0],_[13]),CalcSlg(CalcTb(_single,_[2],_[3],_[4]),_[0])).toFixed(3);
document.getElementById("_sb").innerHTML = _[9];
document.getElementById("_cs").innerHTML = _[10];
document.getElementById("_ibb").innerHTML = _[11];
document.getElementById("_hbp").innerHTML = _[12];
document.getElementById("_sacf").innerHTML = _[13];
document.getElementById("_sacb").innerHTML = _[14];
document.getElementById("_tb").innerHTML = CalcTb(_single,_[2],_[3],_[4]);
document.getElementById("_xbh").innerHTML = CalcXbh(_[2],_[3],_[4]);







var _p = [
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

document.getElementById("_w").innerHTML = _p[0];
document.getElementById("_l").innerHTML = _p[1];
document.getElementById("_g").innerHTML = _p[2];
document.getElementById("_gs").innerHTML = _p[3];
document.getElementById("_cg").innerHTML = _p[4];
document.getElementById("_sv").innerHTML = _p[5];
document.getElementById("_svo").innerHTML = _p[6];
document.getElementById("_ip").innerHTML = _p[8];
document.getElementById("_ph").innerHTML = _p[9];
document.getElementById("_pr").innerHTML = _p[10];
document.getElementById("_er").innerHTML = _p[11];
document.getElementById("_phr").innerHTML = _p[12];
document.getElementById("_pbb").innerHTML = _p[13];
document.getElementById("_pso").innerHTML = _p[14];
document.getElementById("_sho").innerHTML = _p[15];
document.getElementById("_phbp").innerHTML = _p[16];
document.getElementById("_pibb").innerHTML = _p[17];
document.getElementById("_wp").innerHTML = _p[18];
document.getElementById("_era").innerHTML = CalcEra(_p[11],_p[7]);
document.getElementById("_whip").innerHTML = CalcWhip(_p[9],_p[13],_p[7]);
document.getElementById("_winpercent").innerHTML = CalcWinpercent(_p[0], _p[1]);
document.getElementById("_kper9").innerHTML = CalcKper9(_p[14], _p[7]);
document.getElementById("_kperbb").innerHTML = CalcKperBB(_p[14],_p[13]);