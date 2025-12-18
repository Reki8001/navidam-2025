package com.navidam.sdk.api.plantilla;

import com.navidam.sdk.internal.meme.MemeTemplate;
import com.navidam.sdk.internal.meme.Memegen;

public class MemeNoah {
	String url = Memegen.of(
			MemeTemplate.NOAH.id(),
			"Navidad",
			"DAM",
			"NaviDAM",
			"¿Qué demonios es es esto?").url();
}
