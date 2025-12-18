package com.navidam.sdk.api.melodia;

import com.navidam.sdk.internal.melodia.Figura;
import com.navidam.sdk.internal.melodia.Instrumento;
import com.navidam.sdk.internal.melodia.Melodia;
import com.navidam.sdk.internal.melodia.Nota;

public class CampanitasDeInvierno {

    public static  Melodia crear() {

            return new Melodia("CampanitasDeInvierno")
                .instrumento(Instrumento.PIANO_ACUSTICO)
                .tempo(230)

                .nota(Nota.DO, Figura.NEGRA)
                .nota(Nota.MI, Figura.NEGRA)
                .nota(Nota.SOL, Figura.BLANCA)

                .nota(Nota.SOL, Figura.NEGRA)
                .nota(Nota.LA, Figura.NEGRA)
                .nota(Nota.SOL, Figura.BLANCA)

                
                .nota(Nota.FA, Figura.NEGRA)
                .nota(Nota.MI, Figura.NEGRA)
                .nota(Nota.RE, Figura.BLANCA)

                .nota(Nota.MI, Figura.NEGRA)
                .nota(Nota.FA, Figura.NEGRA)
                .nota(Nota.MI, Figura.BLANCA)

                .nota(Nota.DO, Figura.NEGRA)
                .nota(Nota.MI, Figura.NEGRA)
                .nota(Nota.SOL, Figura.BLANCA)

                .nota(Nota.LA, Figura.NEGRA)
                .nota(Nota.SOL, Figura.NEGRA)
                .nota(Nota.MI, Figura.BLANCA)

                .nota(Nota.FA, Figura.NEGRA)
                .nota(Nota.MI, Figura.NEGRA)
                .nota(Nota.RE, Figura.NEGRA)
                .nota(Nota.DO, Figura.BLANCA);
        
    }
}