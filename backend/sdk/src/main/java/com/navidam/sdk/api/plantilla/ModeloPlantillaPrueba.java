package com.navidam.sdk.api.plantilla;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class ModeloPlantillaPrueba {

    private static final DateTimeFormatter FMT = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm");

    private String destinatario;
    private String remitente;
    private String mensaje;
    private String melodia;
    private String fecha;     // ya formateada para la plantilla
    private String midiUrl;   // opcional (si DAM2 sirve un enlace al .mid)

    public ModeloPlantillaPrueba() {
    	
    }

    public ModeloPlantillaPrueba(String destinatario, String remitente, String mensaje, String melodia, LocalDateTime fechaCreacion) {
        this.destinatario = destinatario;
        this.remitente = remitente;
        this.mensaje = mensaje;
        this.melodia = melodia;
        this.fecha = (fechaCreacion != null) ? fechaCreacion.format(FMT) : "";
    }

    // ---------- Builder cómodo (opcional, pero útil) ----------
    public static ModeloPlantillaPrueba of(String destinatario, String remitente, String mensaje, String melodia) {
        return new ModeloPlantillaPrueba(destinatario, remitente, mensaje, melodia, LocalDateTime.now());
    }

    // ---------- Getters / Setters ----------
    public String getDestinatario() {
        return destinatario;
    }

    public void setDestinatario(String destinatario) {
        this.destinatario = destinatario;
    }

    public String getRemitente() {
        return remitente;
    }

    public void setRemitente(String remitente) {
        this.remitente = remitente;
    }

    public String getMensaje() {
        return mensaje;
    }

    public void setMensaje(String mensaje) {
        this.mensaje = mensaje;
    }

    public String getMelodia() {
        return melodia;
    }

    public void setMelodia(String melodia) {
        this.melodia = melodia;
    }

    public String getFecha() {
        return fecha;
    }

    public void setFecha(LocalDateTime fechaCreacion) {
        this.fecha = (fechaCreacion != null) ? fechaCreacion.format(FMT) : "";
    }

    public String getMidiUrl() {
        return midiUrl;
    }

    public void setMidiUrl(String midiUrl) {
        this.midiUrl = midiUrl;
    }
}
