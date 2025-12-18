package com.navidam.sdk.api.melodia;

import com.navidam.sdk.internal.melodia.Figura;
import com.navidam.sdk.internal.melodia.Instrumento;
import com.navidam.sdk.internal.melodia.Melodia;
import com.navidam.sdk.internal.melodia.Nota;

public class main {
	public static void main(String[] args) {
		try {
				new Melodia("Ejemplo")
	    .instrumento(Instrumento.BAJO_ELECTRICO_DEDO)
	    .tempo(1)
	    .nota(Nota.DO, Figura.CORCHEA)
	    .nota(Nota.DO, Figura.CORCHEA)
	    .nota(Nota.RE, Figura.CORCHEA)
	    .nota(Nota.SOL, Figura.CORCHEA)
	    .nota(Nota.SOL, Figura.CORCHEA)
	    .nota(Nota.FA, Figura.CORCHEA)
	    .nota(Nota.SOL, Figura.CORCHEA)
	    .nota(Nota.FA, Figura.CORCHEA)
	    .nota(Nota.MI, Figura.CORCHEA)
	    .nota(Nota.MI, Figura.CORCHEA)
	    .nota(Nota.DO, Figura.CORCHEA)
	    .nota(Nota.DO, Figura.CORCHEA)
	    .nota(Nota.RE, Figura.CORCHEA)
	    .nota(Nota.SOL, Figura.CORCHEA)
	    .nota(Nota.SOL, Figura.CORCHEA)
	    .nota(Nota.FA, Figura.CORCHEA)
	    .nota(Nota.SOL, Figura.CORCHEA)
	    .nota(Nota.FA, Figura.CORCHEA)
	    .nota(Nota.MI, Figura.CORCHEA)
	    .nota(Nota.MI, Figura.CORCHEA).escuchar();
		} catch (Exception e) {
			// TODO: handle exception
		}
	
		try {
			new Melodia("Ejemplo")
    .instrumento(Instrumento.FLAUTA_PAN)
    .tempo(1)
    .nota(Nota.DO, Figura.CORCHEA)
    .nota(Nota.DO, Figura.CORCHEA)
    .nota(Nota.RE, Figura.CORCHEA)
    .nota(Nota.SOL, Figura.CORCHEA)
    .nota(Nota.SOL, Figura.CORCHEA)
    .nota(Nota.FA, Figura.CORCHEA)
    .nota(Nota.SOL, Figura.CORCHEA)
    .nota(Nota.FA, Figura.CORCHEA)
    .nota(Nota.MI, Figura.CORCHEA)
    .nota(Nota.MI, Figura.CORCHEA)
    .nota(Nota.LA, Figura.CORCHEA)
    .nota(Nota.SI, Figura.CORCHEA)
    .nota(Nota.RE, Figura.CORCHEA)
    .nota(Nota.DO, Figura.CORCHEA)
    .nota(Nota.SOL, Figura.CORCHEA)
    .nota(Nota.RE, Figura.CORCHEA)
    .nota(Nota.MI, Figura.CORCHEA).escuchar();
	} catch (Exception e) {
		// TODO: handle exception
	}

	}

}
