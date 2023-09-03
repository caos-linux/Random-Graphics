class Rand {
    constructor(seed) {
        this.idum = seed;
        this.NTAB = 32;
        this.EPS = Number.MIN_VALUE;
        this.RNMX = 1.0 - this.EPS;
        this.iy = 0;
        this.iv = new Array(this.NTAB);
        this.IA1 = 16807;
        this.IM1 = 2147483647;
        this.AM1 = 1.0 / this.IM1;
        this.IQ1 = 127773;
        this.IR1 = 2836;
        this.NDIV1 = 1 + (this.IM1 - 1) / this.NTAB;
        this.IA2_1 = 40014;
        this.IA2_2 = 40692;
        this.IM2_1 = 2147483563;
        this.IM2_2 = 2147483399;
        this.AM2 = 1.0 / this.IM2_1;
        this.IMM2 = this.IM2_1 - 1;
        this.IQ2_1 = 53668;
        this.IQ2_2 = 52774;
        this.IR2_1 = 12211;
        this.IR2_2 = 3791;
        this.NDIV2 = 1 + (this.IMM2 - 1) / this.NTAB;
        this.idum2 = 123456789;
        this.MBIG = 100000000000000000;
        this.MSEED = 161803398;
        this.MZ = 0;
        this.FAC = 1.0 / this.MBIG;
        this.inext = 0;
        this.inextp = 0;
        this.ma = new Array(56);
        this.iff = 0;
    }
    
}

class Rand1 extends Rand {

    random () {
        let j;
        let k;
        let temp;

        if (this.idum <= 0 || this.iy == 0) {
            if (-(this.idum) < 1) this.idum = 1;
            else this.idum = -this.idum;
            for (j = this.NTAB + 7; j >= 0; j--) {
                k = Math.floor(this.idum / this.IQ1);
                this.idum = this.IA1 * (this.idum - k * this.IQ1) - this.IR1 * k;
                if (this.idum < 0) this.idum += this.IM1;
                if (j < this.NTAB) this.iv[j] = this.idum;
            }
            this.iy = this.iv[0];
        }
        k = Math.floor(this.idum / this.IQ1);
        this.idum = this.IA1 * (this.idum - k * this.IQ1) - this.IR1 * k;
        if (this.idum < 0) this.idum += this.IM1;
        j = Math.floor(this.iy / this.NDIV1);
        this.iy = this.iv[j];
        this.iv[j] = this.idum;
        if ((temp = this.AM1 * this.iy) > this.RNMX) return (this.RNMX);
        else return (temp);
    }


}

class Rand2 extends Rand {
    random () {
	let j;
	let k;
	let temp;
	if (this.idum <= 0) {
            if (-(this.idum) < 1) this.idum = 1;
            else this.idum = -this.idum;
            this.idum2 = this.idum;
            for (j = this.NTAB + 7; j >= 0; j--) {
		k = Math.floor(this.idum / this.IQ2_1);
		this.idum = this.IA2_1 * (this.idum - k * this.IQ2_1) - this.IR2_1 * k;
		if (this.idum < 0) this.idum += this.IM2_1;
		if (j < this.NTAB) this.iv[j] = this.idum;
            }
            this.iy = this.iv[0];
	}
	k = Math.floor(this.idum / this.IQ2_1);
	this.idum = this.IA2_1 * (this.idum - k * this.IQ2_1) - this.IR2_1 * k;
	if (this.idum < 0) this.idum += this.IM2_1;
	k = Math.floor(this.idum2 / this.IQ2_2);
	this.idum2 = this.IA2_2 * (this.idum2 - k * this.IQ2_2) - k * this.IR2_2;
	if (this.idum2 < 0) this.idum2 += this.IM2_2;
	j = Math.floor(this.iy / this.NDIV2);
	this.iy = this.iv[j] - this.idum2;
	this.iv[j] = this.idum;
	if (this.iy < 1) this.iy += this.IMM2;
	if ((temp = this.AM2 * this.iy) > this.RNMX) return (this.RNMX);
	else return (temp);
    }
}

