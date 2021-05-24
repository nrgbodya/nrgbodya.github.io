var tavole = new Array;
var parti  = new Array;

tavole[0] = new Array("001","ATR","ATR00260","Attrezzi speciali per stazioni di servizio","Workshop service tools","Outils speciaux pour stations-services","Servicewerkzeug Für Tankstellen","Herramientas esp. para estac. de serv.","/Streetfighter_848_12_C_4_4_00.13.1.html");
tavole[1] = new Array("001a","ATR","ATR00261","Attrezzi speciali per stazioni di servizio","Workshop service tools","Outils speciaux pour stations-services","Servicewerkzeug Für Tankstellen","Herramientas esp. para estac. de serv.","/Streetfighter_848_12_C_4_4_00.13.1.html");
tavole[2] = new Array("001b","ATR","ATR00262","Attrezzi speciali per stazioni di servizio","Workshop service tools","Outils speciaux pour stations-services","Servicewerkzeug Für Tankstellen","Herramientas esp. para estac. de serv.","/Streetfighter_848_12_C_4_4_00.13.1.html");
tavole[3] = new Array("001c","ATR","ATR00266","Tester di diagnosi dds (2)","Dds (2) tester","Tester pour diagnostic dds (2)","Diagnosetester Dds (2)","Instrumento de diagnóstico dds (2)","/Streetfighter_848_12_D_5_5_00.19.1.html");
tavole[4] = new Array("002","CMB","CMB00325","Comando cambio","Gearchange control","Sélecteur de vitesses","Schaltsteuerung","Mando cambio","/Streetfighter_848_12_N_7A9_00.72.1.html");
tavole[5] = new Array("003","CMB","CMB00240","Cambio","Gearbox","Boîte de vitesses","Schaltgetriebe","Cambio","/Streetfighter_848_12_N_7B9_00.73.1.html");
tavole[6] = new Array("004","CMB","CMB00274","Frizione","Clutch","Embrayage","Kupplung","Embrague","/Streetfighter_848_12_N_6A9_00.69.1.html");
tavole[7] = new Array("005","CRT","CRT00567","Coperchio frizione","Clutch-side crankcase cover","Couvercle d'embrayage","Kupplungsdeckel","Tapa embrague","/Streetfighter_848_12_N_6B9_00.70.1.html");
tavole[8] = new Array("006","IMB","IMB00168","Imbiellaggio","Connecting rods","Vilebrequin","Baugruppe Kurbelwelle","Grupo bielas","/Streetfighter_848_12_N_9C9_00.77.1.html");
tavole[9] = new Array("007","IMB","IMB00169","Cilindri - pistoni","Cylinders - pistons","Cylindres - pistons","Zylinder - Kolben","Cilindros - pistones","/Streetfighter_848_12_N_5_9_00.68.1.html");
tavole[10] = new Array("008","TST","TST00461","Distribuzione","Timing system","Distribution","Ventilsteuerung","Distribución","/Streetfighter_848_12_N_4B9_00.65.1.html");
tavole[11] = new Array("009","RAF","RAF00437","Filtri e pompa olio","Filters and oil pump","Filtres et pompe a huile","Ölfilter Und -pumpe","Filtros y bomba de aceite","/Streetfighter_848_12_N_2A9_00.59.1.html");
tavole[12] = new Array("010","CRT","CRT00568","Coppia semicarters","Crankcase halves","Paire de demi-carters","Paar Gehäusehälften","Par semicárteres","/Streetfighter_848_12_N_9B9_00.76.1.html");
tavole[13] = new Array("010a","CRT","CRT00569","Coppia semicarters","Crankcase halves","Paire de demi-carters","Paar Gehäusehälften","Par semicárteres","/Streetfighter_848_12_N_9B9_00.76.1.html");
tavole[14] = new Array("011","CRT","CRT00523","Pompa acqua - coperchio alternatore","Water pump-altr-side crnkcse cover","Pompe à eau - couvercle d'alternateur","Wasserpumpe - Lichtmaschinendeckel","Bomba agua - tapa alternador","/Streetfighter_848_12_N_8_9_00.74.1.html");
tavole[15] = new Array("012","IMP","IMP00752","Avviamento elettrico e accensione","Electric starting and ignition","Démarrage électrique et allumage","Elektrischer Anlasser Und Zündung","Arranque eléctrico y encendido","/Streetfighter_848_12_P_3_10_00.82.1.html");
tavole[16] = new Array("013","TST","TST00358","Testa : distribuzione","Cylinder head : timing system","Culasse : distribution","Zylinderkopf: Ventilsteuerung","Culata: distribución","/Streetfighter_848_12_N_4D9_00.66.1.html");
tavole[17] = new Array("014","TST","TST00410","Testa verticale","Vertical cylinder head","Culasse verticale","Senkrechter Zylinderkopf","Culata vertical","/Streetfighter_848_12_N_4E9_00.67.1.html");
tavole[18] = new Array("015","TST","TST00411","Testa orizzontale","Horizontal cylinder head","Culasse horizontale","Waagrechter Zylinderkopf","Culata horizontal","/Streetfighter_848_12_N_4E9_00.67.1.html");
tavole[19] = new Array("016","RAF","RAF00438","Scambiatore di calore","Heat exchanger","Échangeur de chaleur","Wärmetauscher","Intercambiador de calor","/Streetfighter_848_12_N_2B9_00.60.1.html");
tavole[20] = new Array("017","IMP","IMP00754","Corpo farfallato","Throttle body","Corps de papillon","Drosselklappenkörper","Cuerpo mariposa","/Streetfighter_848_12_L6_10_00.50.1.html");
tavole[21] = new Array("018","IMP","IMP00753","Supporto batteria","Battery support","Support de batterie","Batteriehalter","Soporte batería","/Streetfighter_848_12_P_2_10_00.81.1.html");
tavole[22] = new Array("018a","IMP","IMP00751","Impianto elettrico","Electrical system","Circuit électrique","Elektrische Anlage","Sistema eléctrico","/Streetfighter_848_12_P_1A10_00.79.1.html");
tavole[23] = new Array("019","SCR","SCR00158","Gruppo scarico","Exhaust system","Échappement","Auspuffsystem","Grupo escape","/Streetfighter_848_12_L8_10_00.52.1.html");
tavole[24] = new Array("020","FAN","FAN00218","Fanale anteriore e cruscotto","Headlight & instr. panel","Phare avant et tableau de bord","Scheinwerfer Und Cockpit","Faro delantero y salpicadero","/Streetfighter_848_12_H_8_7_00.47.1.html");
tavole[25] = new Array("021","SOS","SOS00599","Manubrio e comandi","Handlebar and controls","Guidon et commandes","Lenker Und Steuerungen","Manillar y mandos","/Streetfighter_848_12_H_1_7_00.41.1.html");
tavole[26] = new Array("021a","SOS","SOS00602","Forcella anteriore","Front forks","Fourche avant","Vorderradgabel","Horquilla delantera","/Streetfighter_848_12_G_2_8_00.33.1.html");
tavole[27] = new Array("022","TEL","TEL00688","Telaio","Frame","Cadre","Rahmen","Bastidor","/Streetfighter_848_12_H_6_7_00.45.1.html");
tavole[28] = new Array("022a","TEL","TEL00691","Cavalletto","Stand","Béquille","Ständer","Caballete","/Streetfighter_848_12_H_5_7_00.44.1.html");
tavole[29] = new Array("023","BRB","BRB00374","Comando frizione","Clutch control","Commande d'embrayage","Kupplungssteuerung","Mando embrague","/Streetfighter_848_12_F_02_6_00.27.1.html");
tavole[30] = new Array("024","BRB","BRB00372","Freno anteriore","Front brake","Frein avant","Vorderradbremse","Freno delantero","/Streetfighter_848_12_G_3_8_00.34.1.html");
tavole[31] = new Array("025","BRB","BRB00373","Freno posteriore","Rear brake","Frein arrière","Hinterradbremse","Freno trasero","/Streetfighter_848_12_F_04_6_00.29.1.html");
tavole[32] = new Array("026","TEL","TEL00689","Ruota anteriore e posteriore","Front and rear wheels","Roues avant et arrière","Vorder- Und Hinterrad","Ruedas delantera y trasera","/Streetfighter_848_12_G_1_8_00.32.1.html");
tavole[33] = new Array("026a","TEL","TEL00690","Perno ruota posteriore","Rear wheel axle","Axe de roue arrière","Hinterradachse","Perno rueda trasera","/Streetfighter_848_12_G_8_8_00.39.1.html");
tavole[34] = new Array("027","TEL","TEL00692","Telaietto posteriore","Rear subframe","Cadre arrière","Hinterer Rahmenaufsatz","Bastidor trasero","/Streetfighter_848_12_H_6_7_00.45.1.html");
tavole[35] = new Array("027a","TEL","TEL00638","Portatarga","Number plate holder","Support plaque immatricul.","Kennzeichenhalter","Portamatrícula","/Streetfighter_848_12_H_7_7_00.46.1.html");
tavole[36] = new Array("028","SOS","SOS00600","Sospensione posteriore","Rear suspension","Suspension arrière","Hinterradaufhängung","Suspensión trasera","/Streetfighter_848_12_G_7_8_00.38.1.html");
tavole[37] = new Array("028a","SOS","SOS00601","Forcellone posteriore","Swingarm","Bras oscillant","Hinterradschwinge","Basculante trasero","/Streetfighter_848_12_G_5_8_00.36.1.html");
tavole[38] = new Array("029","RAF","RAF00439","Aspirazione aria - sfiato olio","Air intake - oil breather","Aspiration d'air - reniflard","Lufteinlass - Ölentlüftung","Aspiración aire - purga aceite","/Streetfighter_848_12_L7_10_00.51.1.html");
tavole[39] = new Array("030","RAF","RAF00399","Radiatore acqua","Radiator","Radiateur d'eau","Wasserkühler","Radiador agua","/Streetfighter_848_12_N_3B9_00.62.1.html");
tavole[40] = new Array("031","RAF","RAF00400","Circuito di raffreddamento","Cooling system","Circuit de refroidissement","Kühlsystem","Circuito refrigerador","/Streetfighter_848_12_N_3A9_00.61.1.html");
tavole[41] = new Array("032","VST","VST01105","Serbatoio","Fuel tank","Réservoir carburant","Kraftstofftank","Depósito","/Streetfighter_848_12_L2_10_00.49.1.html");
tavole[42] = new Array("032a","VST","VST00968","Impianto alimentazione","Fuel system","Systeme d'alimentation","Kraftstoffsystem","Sistema de alimentación","/Streetfighter_848_12_L2_10_00.49.1.html");
tavole[43] = new Array("033","VST","VST01060","Sella","Seat","Selle","Sitzbank","Asiento","/Streetfighter_848_12_E_3_4_00.23.1.html");
tavole[44] = new Array("034","VST","VST01061","Semicarenatura","Half fairing","Demi-carénage","Halbverkleidet","Semicarenado","/Streetfighter_848_12_E_2_4_00.22.1.html");
tavole[45] = new Array("035","IMP","IMP00755","Filtro canister","Evaporative emissions canister","Filtre à charbon actif / canister","Canister Filter","Filtro canister","/Streetfighter_848_12_L10_10_00.53.1.html");
tavole[46] = new Array("036","VST","VST01062","Posizionamento targhette","Data plate positions","Position décalcomanies","Schilderanordnung","Posición etiquetas","-");


parti[0] = new Array("001","","1","88713.2676","Chiave per bloccaggio dadi testa M10","M10 Head nuts holder wrench","Clé pour blocage écrous culasse M10","Schlüssel zum Feststellen der Zylinderkopfmuttern M10","Llave para bloqueo tuercas culata M10","","1");
parti[1] = new Array("001","","2","88713.2442","Attrezzo per piantaggio anello tenuta valvole ø7","Tool to drive valve seal ring ø7","Outil d'ajustement sans jeu pour joint de soupape ø7","Werkzeug zum setzen des ventildichtrings ø7","Herramiental para la colocacìon del anillo de astanqueidad vàlvulas ø7","","1");
parti[2] = new Array("001","","3","88765.1298","Distanziale controllo registro inferiore valvola","Spacer for checking lower valve shim","Entretoise contrôle régleur inférieur soupape","Distanzstück zur Kontrolle der Einstellschraube des unteren Ventils","Distanciador control registro inferior válvula","","1");
parti[3] = new Array("001","","4","88765.1657","Attrezzo porta disco graduato per controllo anticipo con disco","Degree wheel holder tool for ignition advance check","Outil porte-disque gradué pour contrôle avance avec disque","Haltewerkzeug für Maßscheibe für Verstellungskontrolle mit Scheibe","Herramienta porta-disco graduado para control avance con disco","","1");
parti[4] = new Array("001","","5","88713.2878","Distanziale e spessimetro a forchetta 0,2/0,3 mm","Spacer and fork feeler gauge 0,2/0,3 mm","Entretoise et jauge d'épaisseur à fourche 0,2/0,3 mm","Distanzstück und stärkemessergabel 0,2/0,3 mm","Distancial y calibre de espesores a horquilla 0,2/0,3 mm","","1");
parti[5] = new Array("001","","6","88713.2092","Estrattore ingranaggio coppia primaria","Extractor for primary drive gear","Outil pour démonter le engrenage transm. primaire","Abzieher für den Ausbau von Zahnräd des Hauptantriebs","Estractor para engranaje transmisión primaria","","1");
parti[6] = new Array("001","","7","88713.2103","Base per montaggio testa","Head mounting base","Base pour le montage de la tête","Unterlage für Kopfzusam- menbau","Base para montaje culata","","1");
parti[7] = new Array("001","","8","88713.3367","Chiave volano","Flywheel Wrench","Clè Volant","Schwungrad schlüssel","Liave volante","","1");
parti[8] = new Array("001","","9","88713.1832","Banco lavoro per riparazione motore","Bench for engine repair","Banc de travail pour réparation moteur","Werkbank für motorreparatur","Bancada de trabajo para reparación motor","","1");
parti[9] = new Array("001","","10","88713.1886","Telo coprimotore","Engine canvas","Housse de protection moteur","Abdecktuch für motor","Funda cubremotor","","1");
parti[10] = new Array("001","","11","88713.3334","Piastrino per posizionamento forcella innesto marce","Plate for positioning gear engagement fork","Plaquette pour le positionnement de la fourche d'embrayage des vitesses","Plättchen zur Positionierung d. Gangeinlegegabel","Lámina para posicionado horquilla inserta marchas","","1");
parti[11] = new Array("001","","12","88713.3417","Chiave di reazione","Torque wrench","Clé de réaction","Reaktionsschlüssel","Llave de reacción","","1");
parti[12] = new Array("001","","13","88765.1000","Spessimetro a forchetta 0,1 mm","Fork feeler gauge 0.1 mm","Jauge d'épaisseur à fourche 0,1 mm","Stärkemessergabel 0,1 mm","Calibre de espesores a horquilla 0,1 mm","","1");
parti[13] = new Array("001","","13","88765.1005","Spessimetro a forchetta 0,2 mm","Fork feeler gauge 0,2 mm","Jauge d'épaisseur à fourche 0,2 mm","Stärkemessergabel 0,2 mm","Calibre de espesores a horquilla 0,2 mm","","1");
parti[14] = new Array("001","","13","88765.1006","Spessimetro a forchetta 0,3 mm","Fork feeler gauge 0.3 mm","Jauge d'épaisseur à fourche 0,3 mm","Stärkemessergabel 0,3 mm","Calibre de espesores a horquilla 0,3 mm","","1");
parti[15] = new Array("001","","14","88700.5749","Cappuccio assemblaggio semicarter","Crankcases assembling cap","Capuchonassemblage des demi-carters","Stecker für Gehäusehälftezusammenbau","Capucha ensamblaje semicarter","","1");
parti[16] = new Array("001","","15","88713.0869","Attrezzo montaggio tenuta frontale pompa acqua","Tool for assembling water pump front seal","Outil montage joint d'étanchéité frontale pompe eau","Werkzeug für Montage der vorderen Wasserpumpendichtung","Herramienta montaje estanqueidad frontal bomba de agua","","1");
parti[17] = new Array("001","","16","88713.0870","Attrezzo montaggio controfaccia per tenuta frontale pompa acqua","Tool for assembling water pump front seal","Outil montage joint d'étanchéité frontale pompe à eau","Werkzeug für Montage der vorderen hydraulischen Dichtung der Wasserpumpe","Herramienta montaje estanqueidad hidráulico para frontal bomba de agua","","1");
parti[18] = new Array("001","","17","88713.0944","Chiave serraggio cartuccia olio","Wrench to tighten oil filter cartridge","Clé de serrage cartouche d'huile","Spannschlüssel für Ölfiltereinsatz","Llave ajuste cartucho aceite","","1");
parti[19] = new Array("001","","18","88713.2906","Chiave serraggio cartuccia olio","Wrench to tighten oil filter cartridge","Clé de serrage cartouche d'huile","Spannschlüssel für Ölfiltereinsatz","Llave ajuste cartucho aceite","","1");
parti[20] = new Array("001","","19","88713.2069","Kit per tensionare molle bilancieri","Rocker spring pre-load compound kit","Kit composé précontrainte des ressorts des culbuteurs","Kit fur Spanner der Kipphebelfedern","Kit para tensar muelles balancines compuesto","","1");
parti[21] = new Array("001","","20","88713.2422","Chiave serraggio ghiera pignone primaria","Wrench for tightening primary transmission ring nut","Clé de serrage écrou annulaire pignon transmission primaire","Schlüssel Anzug Mutter Ritzel Primärantrieb","Llave ajuste virola piñon primaria","","1");
parti[22] = new Array("001","","21","88713.2651","Attrezzo di reazione campana frizione 'FCC' a bagno d'olio","Reaction tool for wet 'FCC' clutch","Outil de réaction cloche d'embrayage 'FCC' en bain d'huile","Reaktionswerkzeug für Glocke der im 'FCC'-Ölbadkupplung","Herramienta de reacción caja embrague 'FCC' en baño de aceite","","1");
parti[23] = new Array("001a","","1","88713.3497","Chiave tensionamento tenditore cinghia mobile","Wrench for tensioning mobile belt tensioner ","Clé de mise en tension galet tendeur courroie mobile","Spannschlüssel für beweglichen Riemenspanner","Llave tensado tensor correa móvil","","1");
parti[24] = new Array("001a","","2","88713.1010","Raccordo prelievo gas di scarico","Union for exhaust gas suction","Raccord pour le prèlévement du gaz d'échappement","Anschluss fur Entnahme des Auspuffgases","Empalme de toma de los gases de escape","","1");
parti[25] = new Array("001a","","3","88713.1805","Attrezzo serraggio puleggia motrice","Driving roller tightening tool","Outil de serrage poulie de transmission","Spannwerkzeug fur Antriebsriemenscheibe","Herramienta ajuste polea motriz","","1");
parti[26] = new Array("001a","","4","88713.1980","Punzone piantaggio scodellini su alberi","Drift to drive retainers onto shafts","Outil de mise en place coupelles sur arbres","Dorn zum Setzen der Tellerscheiben auf Wellen","Punzón para clavar platillos en arboles","","1");
parti[27] = new Array("001a","","5","88765.1506","Calibro alzata valvola","Valve lift gauge","Calibre levée de soupape","Lehre f. Ventilhubhöhe","Calibre para elevación de la válvula","","1");
parti[28] = new Array("001a","","6","88713.1806","Attrezzo di reazione per serraggio pulegge","Reaction tool for belt roller tightening","Outil de réaction pour le serrage des poulies","Hebelwerkzeug für Riemenscheibenanzug","Herramienta de reacción para apriete poleas","","1");
parti[29] = new Array("001a","","7","88713.2011","Attrezzo per bloccaggio albero motore al PMS","Tool to hold crankshaft in TDC position","Outil d'immobilisation du vilebrequin au PMH","Werkzeug für Kurbelwellenblockierung am OT","Herramienta para bloqueo cigüeñal al PMS","","1");
parti[30] = new Array("001a","","8","88713.1920","Attrezzo inserimento anelli OR su prigionieri","Tool to fit O-rings onto stud bolts","Outil de montage des joints toriques sur les goujons","Werkzeug für Einsetzen der O-Ringe auf Stiftschrauben","Herramienta inserción anillos OR en espárragos","","1");
parti[31] = new Array("001a","","9","88713.1821","Chiave serraggio perni tenditori","Wrench to tighten tensioning bolts","Clé de serrage axes des tendeurs","Spannschlüssel für Spannerstifte","Llave ajuste pernos de tensado","","1");
parti[32] = new Array("001a","","10","88713.2870","Attrezzo guida biella","Con-rod guiding tool","Outil de guidage bielle","Werkzeug für Pleuelführung","Herramienta guía biela","","1");
parti[33] = new Array("001a","","11","88713.2877","Chiave per candele","Spark plug tool","Clé à bougies","Zündkerzenschlüssel","Llave para bujías","","1");
parti[34] = new Array("001a","","12","88713.2090","Calibro controllo P.M.S.","T.D.C. control gauge","Calibre contrôle point mort haut","Körner f. Kontrolle des OTS","Calibre de control P.M.S.","","1");
parti[35] = new Array("001a","","13","88713.1749","Estrattore per puleggia motrice","Drive roller puller","Extracteur poulie de transmission","Auszieher für Antriebsriemenscheibe","Extractor para polea motriz","","1");
parti[36] = new Array("001a","","14","88765.1623","Attrezzo fasatura pulegge distribuzione","Belt roller timing tool","Outil de mise en phase poulies de distribution","Werkzeug für Steuerzeiteneinstellung Nockenwellenräder","Herramienta sincronización polea distribución","","1");
parti[37] = new Array("001a","","15","88713.2861","Attrezzo per montare anelli di tenuta su alberi a cammes","Tool to fit seals on camshafts","Outil de montage des bagues d'étanchéité sur les arbres à cames","Werkzeug für Dichtringmontage auf Nockenwellen","Herramienta para montar los anillos de estanqueidad en los árboles de levas","","1");
parti[38] = new Array("001a","","16","88713.1994","Estrattore per perni bilanciere","Rocker shaft extractor","Extracteur pour axes culbuteur","Abzieher für Kipphebelbolzen","Extractor para eje balancín","","1");
parti[39] = new Array("001a","","17","88713.2834","Punzone montaggio anello elastico","Snap ring installation tool","Poinçon de montage circlip","Dorn für Spannringmontage","Punzón montaje anillo elástico","","1");
parti[40] = new Array("001a","","18","88713.3521","Punzone per piantaggio anello tenuta","Punch tool for driving seal ring","Poinçon d'ancrage bague d'étanchéité","Stempel zum Setzen des Dichtrings","Punzón para fijación anillo de retén","","1");
parti[41] = new Array("001a","","19","88713.3219","Attrezzo di reazione per serraggio pulegge","Reaction tool for belt roller tightening","Outil de réaction pour le serrage des poulies","Hebelwerkzeug für Riemenscheibenanzug","Herramienta de reacción para apriete poleas","","1");
parti[42] = new Array("001b","","1","88713.1072","Tampone piantaggio semicuscinetto base di sterzo","Stopper for driving the half bearing of the steering head base","Tampon d'ancrage demi-coussinet base direction","Stopfen zum Setzen des Halblagers des Gabelschafts","Punzón de fijación semi-cojinete tija inferior","","1");
parti[43] = new Array("001b","","2","88713.1068","Tampone montaggio cuscinetti a rullini del forcellone","Stopper for assembling the rear fork roller bearings","Tampon de montage des coussinets à rouleaux de la fourche postérieure","Montage-Stopfen für Hintergabel-Nadellager","Tapón montaje cojinetes de agujas del basculante","","1");
parti[44] = new Array("001b","","3","88713.3203","Barra di trazione per revisione forcella MARZOCCHI","Draw bar for MARZOCCHI forks overhauling","Barre de traction pour révision fourche MARZOCCHI","Zugstange zur Überholung der MARZOCCHI-Gabel","Barra de tracción para revisión horquilla MARZOCCHI","","1");
parti[45] = new Array("001b","","4","88713.1074","Tampone smontaggio perno forcellone","Stopper for disassembling the swingarm pivot","Tampon démontage pivot fourche AR.","Stopfen für den Ausbau des Schwingenzapfens","Punzón desmontaje eje de basculante","","1");
parti[46] = new Array("001b","","5","88713.1038","Chiave regolazione mozzo eccentrico","Wrench for adjusting the eccentric hub","Clef de réglage du moyeu excentrique","Einstellschlüssel für Exzenternabe","Llave regulación cubo excéntrico","","1");
parti[47] = new Array("001b","","6","88713.1515","Supporto telaio/motore","Frame/engine mount","Support cadre/moteur","Halterung für Rahmen/Motor","Soporte chasis/motor","","1");
parti[48] = new Array("001b","","7","88713.1058","Chiave montaggio tappo cannotto di sterzo","Wrench for assembling the steering head cap","Clef de montage du bouchon du fourreau de direction","Montageschlüssel für Lenkrohrverschluß","Llave montaje tapón tubo de dirección","","1");
parti[49] = new Array("001b","","8","8000.70139","Chiave perno ruota anteriore","Wrench for front wheel spindle","Clé pivot roue AV.","Schlüssel für Vorderradzapfen","Llave eje rueda delantera","","1");
parti[50] = new Array("001b","","9","88713.1062","Attrezzo montaggio cuscinetti del cannotto di sterzo","Tool for assembling the steering head bearings","Dispositif de montage des roulements du fourreau de direction","Montagewerkzeug für Lager des Lenkrohrs","Herramienta montaje cojinetes del tubo de dirección","","1");
parti[51] = new Array("001b","","10","88713.1071","Tampone montaggio cuscinetti a rullini del bilanciere","Stopper for assembling the rocker needle bearings","Tampon de montage des roulements à rouleaux du culbuteur","Montagestopfen für Nadellager des Kipphebels","Empujador montaje cojinetes de rodillos del balancín","","1");
parti[52] = new Array("001b","","11","88713.2951","Attrezzo equilibratura ruota posteriore","Tool for balancing rear wheel","Dispositif d'équilibrage roue AR.","Auswuchtgerät für Hinterrad","Herramienta equilibrado rueda trasera","","1");
parti[53] = new Array("001b","","12","88713.1073","Attrezzo equilibratura ruota posteriore","Tool for balancing rear wheel","Dispositif d'équilibrage roue AR.","Auswuchtgerät für Hinterrad","Herramienta equilibrado rueda trasera","","1");
parti[54] = new Array("001b","","13","88713.3396","Banco lavoro per riparazione motore","Bench for engine repair","Banc de travail pour réparation moteur","Werkbank für motorreparatur","Bancada de trabajo para reparación motor","","1");
parti[55] = new Array("001b","","14","88713.3204","Attrezzo per revisione forcelle MARZOCCHI - montaggio anello di tenuta","Tool for overhauling MARZOCCHI forks - assembling seal ring","Outil pour révision fourches MARZOCCHI - montage anneau d'étanchéité","Werkzeug zur Überholung der MARZOCCHI -Gabeln - Dichtringmontage","Herramienta para revisión horquillas MARZOCCHI - montaje anillo de retén","","1");
parti[56] = new Array("001b","","15","88713.2409","Attrezzo montaggio cuscinetti a sfere del forcellone","Tool for assembling the swingarm ball bearings","Outil de montage des roulements à billes de la fourche","Montagewerkzeug für Kugellager der Schwinge","Herramienta montaje rodamiento de bolas de la basculante","","1");
parti[57] = new Array("001c","","1","97900.0252","DDS 2 (Ducati Diagnosis System 2.0)","DDS 2 (Ducati Diagnosis System 2.0)","DDS 2 (Ducati Diagnosis System 2.0)","DDS 2 (Ducati Diagnosis System 2.0)","DDS 2 (Ducati Diagnosis System 2.0)","","1");
parti[58] = new Array("001c","","2","97900.0253","Kit tensionamento cinghie","Belt tensioning kit","Kit mise en tension des courroies","Riemenspannungskit","Kit tensado correas","","1");
parti[59] = new Array("001c","","3","97900.0254","Cavo alimentazione e diagnosi (Seriale)","Main cable (Serial)","Cable alimentation (Sériel)","Speisekabel (Serielle)","Cable de alimentacion (Serial)","","1");
parti[60] = new Array("001c","","4","97900.0255","Cavo alimentazione e diagnosi (CAN)","Main cable (CAN)","Cable alimentation (CAN)","Speisekabel (CAN)","Cable de alimentacion (CAN)","","1");
parti[61] = new Array("001c","","5","97900.0256","Cavo alimentazione da batteria","Battery mains cable","Cable alimentation de batterie","Speisekabel aus Batterie","Cable de alimentacion para baterias","","1");
parti[62] = new Array("002","","1","799.1.049.1A","Molla ritorno","Return spring","Ressort de retour","Rückschlagfeder","Muelle de retorno","","1");
parti[63] = new Array("002","","2","852.1.053.2A","Rosetta","Washer","Rosette","Unterlegscheibe","Arandela","","1");
parti[64] = new Array("002","","3","779.1.039.1A","Vite speciale","Special screw","Vis spéciale","Spezialschraube","Tornillo especial","","1");
parti[65] = new Array("002","","4","455.2.003.1A","Assieme saltarello fissa marce","Gear stopper assembly","Ensemble cliquet fixe-vitesses","Fallklinkengruppe","Grupo trinquete fija marchas","","1");
parti[66] = new Array("002","","5","852.5.024.1A","Guarnizione sp.1","Gasket th.1","Garniture èp.1","Dichtung stàrke 1","Junta esp.1","","1");
parti[67] = new Array("002","","6","539.1.021.1B","Interruttore spia folle","Neutral indicator switch","Contacteur de point mort","Leerlaufschalter","Interruptor de punto muerto","","1");
parti[68] = new Array("002","","7","779.1.203.3A","Vite speciale","Special screw","Vis spéciale","Spezialschraube","Tornillo especial","","1");
parti[69] = new Array("002","","8","0272.91.090","Guarnizione","Gasket","Garniture","Dichtung","Junta","","1");
parti[70] = new Array("002","","9","0660.13.143","Molla scatto marce","Gear selector spring","Ressort déclenchement vitesses","Ganglösefeder","Muelle embrague marchas","","1");
parti[71] = new Array("002","","10","76835.1134","Sfera","Ball","Bille","Kugel","Esfera","","1");
parti[72] = new Array("002","","11","180.Z.003.1A","Forcella inn. marce 1°,4°-2°,3°","1st,4th-2nd,3rd gear selector fork","Fourche engrènement 1ère, 4ème-2ème et 3ème vitesse","Einlegegabel für 1.,4.-2.,3.Gang","Horquilla embrague marchas 1°,4°-2°,3°","","2");
parti[73] = new Array("002","","12","180.Z.004.1A","Forcella innesto 5°,6°","5th,6th gear selector fork","Fourche engrènement 5ème, 6ème vitesse","Einlegegabel für 5., 6. Gang","Horquilla embrague 5°,6°","","1");
parti[74] = new Array("002","","13","821.1.268.1A","Perno per forcella","Fork pin","Goujon pour fourche","Bolzen für Gabel","Perno para horquilla","","2");
parti[75] = new Array("002","","14","852.1.005.1A","Rosetta rasamento sp. 1","Shim th. 1","Rosette de butée épaisseur 1","Distanzscheibe Stärke 1","Arandela de espesoración 1","","1");
parti[76] = new Array("002","","15","73500.1542","Anello seeger","Circlip","Circlip","Seegerring","Anillo seeger","","1");
parti[77] = new Array("002","","16","826.1.029.2A","Piastrina fine corsa","Stopper plate","Plaquette fin de course","Endanschlagplättchen","Placa final de carrera","","1");
parti[78] = new Array("002","","17","881.1.012.1A","Anello di centraggio","Centering ring","Bague de centrage","Zentrierring","Anillo de centrado","","1");
parti[79] = new Array("002","","18","182.Z.001.1A","Tamburo cambio completo","Complete gearbox drum","Tambour complet boîte de vitesses","Schalttrommel komplett","Tambor cambio completo","","1");
parti[80] = new Array("002","","19","852.1.094.1A","Rosetta rasamento sp. 0,9","Shim th. 0.9","Rosette de butée épaisseur 0,9","Distanzscheibe Stärke 0,9","Arandela de espesoración 0,9","","1");
parti[81] = new Array("002","","20","799.1.482.1A","Molla ritorno forcella","Fork return spring","Ressort retour fourche","Gabelrückschlagfeder","Muelle retorno horquilla","","1");
parti[82] = new Array("002","","21","0400.09.050","Rosetta rasamento sp. 0,5","Shim th. 0.5","Rosette de butée épaisseur 0,5","Distanzscheibe Stärke 0,5","Arandela de espesoración 0,5","","1");
parti[83] = new Array("002","","21","0765.92.205","Rosetta rasamento sp. 0,2","Shim th. 0.2","Rosette de butée épaisseur 0,2","Distanzscheibe Stärke 0,2","Arandela de espesoración 0,2","","2");
parti[84] = new Array("002","","22","884.5.034.1A","Anello","Ring","Bague","Ring","Anillo","","1");
parti[85] = new Array("002","","23","748.1.040.1A","Dado","Nut","Ecrou","Mutter","Tuerca","","1");
parti[86] = new Array("002","","24","180.1.008.1A","Forcella comando tamburo cambio","Gearbox drum control fork","Fourche de commande tambour boîte de vitesses","Steuergabel für Wechselgetriebetrommel","Horquilla mando tambor cambio","","1");
parti[87] = new Array("002","","25","0660.13.165","Perno per leva cambio","Gearchange lever pin","Goujon pour levier boîte de vitesses","Schalthebelstift","Perno para leva cambio","","1");
parti[88] = new Array("002","","26","821.1.001.1A","Perno con leva cambio","Pin with gearchange lever","Goujon avec levier boîte de vitesses","Stift mit Schalthebel","Perno con leva cambio","","1");
parti[89] = new Array("002","","27","0799.13.110","Molla ritorno leva cambio","Gearchange lever return spring","Ressort retour levier boîte de vitesses","Schalthebelrückholfeder","Muelle retorno leva cambio","","1");
parti[90] = new Array("002","","28","771.5.067.0Z","Vite","Screw","Vis","Schraube","Tornillo","","1");
parti[91] = new Array("002","","29","713.1.915.1A","Distanziale","Spacer","Entretoise","Distanzstück","Distancial","","1");
parti[92] = new Array("002","","30","771.5.125.0Z","Vite","Screw","Vis","Schraube","Tornillo","","1");
parti[93] = new Array("002","","31","0400.29.125","Rosetta rasamento sp. 0,2","Shim th. 0.2","Rosette de butée épaisseur 0,2","Distanzscheibe Stärke 0,2","Arandela de espesoración 0,2","","2");
parti[94] = new Array("002","","31","0400.29.126","Rosetta rasamento sp. 0,5","Shim th. 0.5","Rosette de butée épaisseur 0,5","Distanzscheibe Stärke 0,5","Arandela de espesoración 0,5","","1");
parti[95] = new Array("003","","1","0251.47.054","Rosetta rasamento sp. 1,2","Shim th. 1.2","Rosette de butée épaisseur 1,2","Distanzscheibe Stärke 1,2","Arandela de espesoración 1,2","","1");
parti[96] = new Array("003","","2","149.1.046.1A","Albero primario cambio","Gearbox main shaft","Arbre primaire boîte de vitesses","Wechselgetriebehauptwelle","Arbol primario cambio","","1");
parti[97] = new Array("003","","3","0670.16.150","Rosetta rasamento sp. 0,5","Shim th. 0.5","Rosette de butée épaisseur 0,5","Distanzscheibe Stärke 0,5","Arandela de espesoración 0,5","","2");
parti[98] = new Array("003","","4","701.4.005.1A","Gabbia a rullini","Needle bearing","Boîte à aiguilles","Nadelkäfig","Jaula de rodillos","","5");
parti[99] = new Array("003","","5","172.1.004.3C","Ingranaggio conduttore 5° vel.","Driving gear 5th sp.","Engrenage conducteur 5ème vitesse","Antriebszahnrad 5.Geschwindigkeit","Engranaje accionador 5° velocidad","","1");
parti[100] = new Array("003","","6","856.1.001.1A","Rosetta scanalata sp. 0,5","Grooved washer th. 0.5","Rosette rainurée épaisseur 0,5","Genutete Scheibe Stärke 0,5","Arandela ranurada esp. 0,5","","6");
parti[101] = new Array("003","","7","0670.16.145","Anello elastico","Snap ring","Bague élastique","Sprengring","Seager","","6");
parti[102] = new Array("003","","8","172.1.003.3C","Ingranaggio conduttore 3°/4° vel.","Driving gear 3rd/4th sp.","Engrenage conducteur 3ème/4ème vitesse","Leiterzahnrad für 3.,4. Geschwindigkeit","Engranaje accionador 3°/4° velocidad","","1");
parti[103] = new Array("003","","9","172.1.005.3C","Ingranaggio conduttore 6° vel.","Driving gear 6th sp.","Engrenage conducteur 6ème vitesse","Antriebszahnrad 6.Geschwindigkeit","Engranaje accionador 6° velocidad","","1");
parti[104] = new Array("003","","10","172.1.002.1B","Ingranaggio conduttore 2° vel.","Driving gear 2nd sp.","Engrenage conducteur 2ème vitesse","Antriebszahnrad 2.Geschwindigkeit","Engranaje accionador 2° velocidad","","1");
parti[105] = new Array("003","","11","713.1.014.1E","Rosetta rasamento sp. 1,6","Shim th. 1.6","Rosette de butée épaisseur 1,6","Distanzscheibe Stärke 1,6","Arandela de espesoración 1,6","","1");
parti[106] = new Array("003","","12","449.1.053.1A","Pignone catena","Chain sprocket","Pignon chaîne","Kettenritzel","Piñón cadena","","1");
parti[107] = new Array("003","","13","713.1.393.1A","Distanziale","Spacer","Entretoise","Distanzstück","Distancial","","1");
parti[108] = new Array("003","","14","463.2.053.7A","Guarnizione OR","O-ring","Joint d'étanchéité","Dichtung OR","Junta OR","","1");
parti[109] = new Array("003","","15","713.1.266.1A","Distanziale sp. 3,15","Spacer th. 3,15","Entretoise épaisseur 3,15","Distanzstück Stärke 3,15","Distanciador esp. 3,15","","1");
parti[110] = new Array("003","","16","856.1.031.1A","Rosetta scanalata sp. 0,5","Grooved washer th. 0.5","Rosette rainurée épaisseur 0,5","Genutete Scheibe Stärke 0,5","Arandela ranurada esp. 0,5","","1");
parti[111] = new Array("003","","17","76402.0002","Gabbia a rullini","Needle bearing","Boîte à aiguilles","Nadelkäfig","Jaula de rodillos","","1");
parti[112] = new Array("003","","18","172.1.218.2A","Ingranaggio condotto 1° vel.","Driven gear 1st sp.","Engrenage entraîné 1ère vitesse","Angetriebenes Zahnrad 1. Geschwindigkeit","Engranaje conducido 1° velocidad","","1");
parti[113] = new Array("003","","19","0670.16.155","Rosetta rasamento sp. 1","Shim th. 1","Rosette de butée épaisseur 1","Distanzscheibe Stärke 1","Arandela de espesoración 1","","1");
parti[114] = new Array("003","","20","172.1.010.3C","Ingranaggio condotto 5° vel.","Driven gear 5th sp.","Engrenage entraîné 5ème vitesse","Angetriebenes Zahnrad 5. Geschwindigkeit","Engranaje conducido 5° velocidad","","1");
parti[115] = new Array("003","","21","172.1.009.1C","Ingranaggio condotto 4° vel.","Driven gear 4th sp.","Engrenage entraîné 4ème vitesse","Angetriebenes Zahnrad 4. Geschwindigkeit","Engranaje conducido 4° velocidad","","1");
parti[116] = new Array("003","","22","172.1.008.1C","Ingranaggio condotto 3° vel.","Driven gear 3rd sp.","Engrenage entraîné 3ème vitesse","Angetriebenes Zahnrad 3. Geschwindigkeit","Engranaje conducido 3° velocidad","","1");
parti[117] = new Array("003","","23","172.1.011.3C","Ingranaggio condotto 6° vel.","Driven gear 6th sp.","Engrenage entraîné 6ème vitesse","Angetriebenes Zahnrad 6. Geschwindigkeit","Engranaje conducido 6° velocidad","","1");
parti[118] = new Array("003","","24","172.1.219.2A","Ingranaggio condotto 2° vel.","Driven gear 2nd sp.","Engrenage entraîné 2ème vitesse","Angetriebenes Zahnrad 2. Geschwindigkeit","Engranaje conducido 2° velocidad","","1");
parti[119] = new Array("003","","25","149.1.061.1A","Albero secondario cambio","Gearbox lay shaft","Arbre secondaire boîte de vitesses","Vorgelegewelle des Wechselgetriebes","Arbol secundario cambio","","1");
parti[120] = new Array("003","","26","0670.16.170","Rosetta rasamento sp. 0,8","Shim th. 0.8","Rosette de butée épaisseur 0,8","Distanzscheibe Stärke 0,8","Arandela de espesoración 0,8","","1");
parti[121] = new Array("003","","27","150.2.098.2A","Albero primario completo","Complete main shaft","Arbre primaire complet","Komplette Hauptwelle","Arbol primario completo","","1");
parti[122] = new Array("003","","28","150.2.092.3A","Albero secondario completo","Complete lay shaft","Arbre secondaire complet","Komplette Vorgelegewelle","Arbol secundario completo","","1");
parti[123] = new Array("003","","29","851.1.004.1A","Rosetta di sicurezza","Lock washer","Rosette de sécurité","Sicherungsblech","Arandela de seguridad","","1");
parti[124] = new Array("003","","30","750.1.007.1A","Dado","Nut","Ecrou","Mutter","Tuerca","","1");
parti[125] = new Array("004","","1","797.1.032.1A","Molla frizione","Clutch spring","Ressort embrayage","Kupplungsfeder","Muelle embrague","","5");
parti[126] = new Array("004","","2","841.1.046.1A","Scodellino","Retainer","Cuvette","Teller","Platillo","","5");
parti[127] = new Array("004","","3","771.5.072.8C","Vite","Screw","Vis","Schraube","Tornillo","","5");
parti[128] = new Array("004","","4","194.1.027.1A","Spingidisco 'FCC'","Pressure plate 'FCC'","Pousse-disque 'FCC'","Scheibendrücker 'FCC'","Empuja-disco 'FCC'","","1");
parti[129] = new Array("004","","5","818.1.016.2A","Perno comando frizione 'FCC'","Clutch control pin 'FCC'","Axe commande embrayage 'FCC'","Kupplungssteuerstift 'FCC'","Perno mando embrague 'FCC'","","1");
parti[130] = new Array("004","","6","771.5.065.2BB","Vite","Screw","Vis","Schraube","Tornillo","","3");
parti[131] = new Array("004","","7","748.1.013.1A","Dado esagonale","Hexagon nut","Ecrou hexagonal","Sechskantmutter","Tuerca hexagonal","","1");
parti[132] = new Array("004","","8","799.5.001.2A","Molla a tazza","Spring washer","Belleville","Tellerfeder","Arandela de muelle","","1");
parti[133] = new Array("004","","9","190.2.013.1A","Serie dischi frizione","Clutch plates set","Série de disques embrayage","Kupplungsscheibensatz","Serie discos embrague","","1");
parti[134] = new Array("004","","10","799.1.191.1A","Molla a tazza 'FCC'","Spring washer 'FCC'","Belleville 'FCC'","Tellerfeder 'FCC'","Arandela de muelle 'FCC'","","1");
parti[135] = new Array("004","","11","190.1.017.1A","Molla","Spring","Ressort","Feder","Muelle","","1");
parti[136] = new Array("004","","12","196.1.035.1A","Mozzo portadischi 'FCC'","Plate holder hub 'FCC'","Moyeu porte-disque 'FCC'","Scheibenhaltenabe 'FCC'","Cubo porta-discos 'FCC'","","1");
parti[137] = new Array("004","","13","713.1.309.1A","Distanziale","Spacer","Entretoise","Distanzstück","Distancial","","1");
parti[138] = new Array("004","","14","198.2.036.2A","Campana frizione","Clutch housing","Cloche embrayage","Kupplungsglocke","Campana embrague","","1");
parti[139] = new Array("004","","15","713.1.483.1A","Distanziale","Spacer","Entretoise","Distanzstück","Distancial","","1");
parti[140] = new Array("004","","16","117.2.119.1A","Asta comando frizione","Clutch control rod","Tige de commande embrayage","Kupplungssteuerungsstab","Varilla mando embrague","","1");
parti[141] = new Array("004","","17","886.4.173.1A","Guarnizione OR","O-ring","Joint d'étanchéité","Dichtung OR","Junta OR","","2");
parti[142] = new Array("004","","18","713.1.926.1A","Inserto antirotazione","Anti-rotation insert","Insert anti-rotation","Drehschutzeinsatz","Inserto anti-rotación","","1");
parti[143] = new Array("004","","19","195.4.003.1C","Gruppo pistoncino (inserto antirotazione)","Piston assembly (anti-rotation insert)","Groupe piston (l'insert anti-rotation)","Kolbenaggregat (Drehschutzeinsatz)","Grupo pistón (inserto anti-rotación)","","1");
parti[144] = new Array("004","","20","860.5.025.1A","Rullino","Roller","Rouleau","Rolle","Rodillo","","1");
parti[145] = new Array("005","","1","243.2.133.1BE","Coperchio lato frizione","Cover clutch side","Couvercle cotè embrayage","Deckel an kupplungsseite","Tapa lado emburague","","1");
parti[146] = new Array("005","","2","771.5.083.3B","Vite","Screw","Vis","Schraube","Tornillo","","1");
parti[147] = new Array("005","","3","771.5.081.3B","Vite","Screw","Vis","Schraube","Tornillo","","3");
parti[148] = new Array("005","","4","254.4.001.2A","Oblò ispezione livello olio","Oil level sight glass","Hublot d'inspection niveau huile","Ölkontrollschauglas","Visor de inspección nivel aceite","","1");
parti[149] = new Array("005","","5","771.5.069.3B","Vite","Screw","Vis","Schraube","Tornillo","","5");
parti[150] = new Array("005","","6","852.5.024.1A","Guarnizione sp.1","Gasket th.1","Garniture èp.1","Dichtung stàrke 1","Junta esp.1","","1");
parti[151] = new Array("005","","7","779.1.501.1A","Vite","Screw","Vis","Schraube","Tornillo","","1");
parti[152] = new Array("005","","8","0665.49.680","Boccola","Bush","Douille","Buchse","Casquillo","","1");
parti[153] = new Array("005","","9","930.4.021.1A","Anello di tenuta","Seal ring","Bague d'étanchéité","Dichtring","Anillo de retén","","1");
parti[154] = new Array("005","","10","852.1.135.1A","Rosetta rasamento sp. 1","Shim th. 1","Rosette de butée épaisseur 1","Distanzscheibe Stärke 1","Arandela de espesoración 1","","1");
parti[155] = new Array("005","","11","884.5.013.1A","Anello seeger","Circlip","Circlip","Seegerring","Anillo seeger","","1");
parti[156] = new Array("005","","12","886.4.132.1A","Guarnizione OR","O-ring","Joint d'étanchéité","Dichtung OR","Junta OR","","1");
parti[157] = new Array("005","","13","711.1.160.1A","Boccola di riferimento","Locating bush","Douille de référence","Bezugsbuchse","Centrador","","1");
parti[158] = new Array("005","","14","827.1.433.1A","Piastrino","Plate","Plaquette","Plättchen","Lámina","","1");
parti[159] = new Array("005","","15","893.2.012.1A","Tappo completo","Complete cap","Bouchon complet","Verschluß komplett","Tapón completo","","1");
parti[160] = new Array("005","","16","486.1.072.1A","Pannello","Panel","Panneau","Tafel","Panel","","1");
parti[161] = new Array("005","","17","539.4.030.2A","Sensore pressione olio motore","Engine oil pressure sensor","Capteur pression d'huile moteur","Motoröldrucksensor","Sensor presión aceite motor","","1");
parti[162] = new Array("005","","18","886.4.089.1A","Guarnizione OR","O-ring","Joint d'étanchéité","Dichtung OR","Junta OR","","1");
parti[163] = new Array("005","","19","852.1.195.1A","Rosetta","Washer","Rosette","Unterlegscheibe","Arandela","","1");
parti[164] = new Array("006","","1","146.2.166.2A","Albero motore","Crankshaft","Arbre moteur","Antriebswelle","Cigüeñal","","1");
parti[165] = new Array("006","","2","779.1.109.2A","Vite speciale","Special screw","Vis spéciale","Spezialschraube","Tornillo especial","","1");
parti[166] = new Array("006","","3","852.1.269.1A","Rondella","Washer","Rondelle","Unterlegscheibe","Arandela","","1");
parti[167] = new Array("006","","4","779.1.547.1A","Vite speciale","Special screw","Vis spéciale","Spezialschraube","Tornillo especial","","2");
parti[168] = new Array("006","","5","158.2.020.3A","Coppia bielle","Connecting rods pair","Jeu de bielles","Pleuelpaar","Par de bielas","","1");
parti[169] = new Array("006","","6","711.1.089.1A","Boccola","Bush","Douille","Buchse","Casquillo","","2");
parti[170] = new Array("006","","7","170.2.081.1A","Pignone primaria","Primary drive front sprocket","Pignon transmission primaire","Pimärantribsritzel","Piñón primario","","1");
parti[171] = new Array("006","","8","112.1.012.1AB","Semicuscinetto (BLU)","Half-bearing (BLUE)","Demi-roulement (BLEU)","Halblager (BLAU)","Semi-cojinete (AZUL)","","2");
parti[172] = new Array("006","","8","112.1.012.1AC","Semicuscinetto (GIALLO)","Half-bearing (YELLOW)","Demi-roulement (JAUNE)","Halblager (GELB)","Semi-cojinete (AMARILLO)","","2");
parti[173] = new Array("006","","9","779.1.404.3B","Vite speciale","Special screw","Vis spéciale","Spezialschraube","Tornillo especial","","4");
parti[174] = new Array("006","","10","680.1.013.1A","Linguetta","Woodruff key","Languette","Federkeil","Chaveta","","2");
parti[175] = new Array("006","","11","852.1.104.2A","Rosetta rasamento sp. 1,9","Shim th. 1.9","Rosette de butée épaisseur 1,9","Distanzscheibe Stärke 1,9","Arandela de espesoración 1,9","","2");
parti[176] = new Array("006","","11","852.1.104.2B","Rosetta rasamento sp. 1,95","Shim th. 1.95","Rosette de butée épaisseur 1,95","Distanzscheibe Stärke 1,95","Arandela de espesoración 1,95","","2");
parti[177] = new Array("006","","11","852.1.104.1H","Rosetta rasamento sp. 2,25","Shim th. 2.25","Rosette de butée épaisseur 2,25","Distanzscheibe Stärke 2,25","Arandela de espesoración 2,25","","2");
parti[178] = new Array("006","","11","852.1.104.1K","Rosetta rasamento sp. 2,4","Shim th. 2,4","Rosette de butée épaisseur 2,4","Distanzscheibe Stärke 2,4","Arandela de espesoración 2,4","","2");
parti[179] = new Array("006","","11","852.1.104.1L","Rosetta rasamento sp. 2,45","Shim th. 2,45","Rosette de butée épaisseur 2,45","Distanzscheibe Stärke 2,45","Arandela de espesoración 2,45","","2");
parti[180] = new Array("006","","11","852.1.104.1M","Rosetta rasamento sp. 2,5","Shim th. 2.5","Rosette de butée épaisseur 2,5","Distanzscheibe Stärke 2,5","Arandela de espesoración 2,5","","2");
parti[181] = new Array("006","","11","852.1.104.1N","Rosetta rasamento sp. 2,55","Shim th. 2.55","Rosette de butée épaisseur 2,55","Distanzscheibe Stärke 2,55","Arandela de espesoración 2,55","","2");
parti[182] = new Array("006","","11","852.1.104.2C","Rosetta rasamento sp. 2","Shim th. 2","Rosette de butée épaisseur 2","Distanzscheibe Stärke 2","Arandela de espesoración 2","","2");
parti[183] = new Array("006","","11","852.1.104.2D","Rosetta rasamento sp. 2,05","Shim th. 2,05","Rosette de butée épaisseur 2,05","Distanzscheibe Stärke 2,05","Arandela de espesoración 2,05","","2");
parti[184] = new Array("006","","11","852.1.104.2E","Rosetta rasamento sp. 2,1","Shim th. 2,1","Rosette de butée épaisseur 2,1","Distanzscheibe Stärke 2,1","Arandela de espesoración 2,1","","2");
parti[185] = new Array("006","","11","852.1.104.2F","Rosetta rasamento sp. 2,15","Shim th. 2,15","Rosette de butée épaisseur 2,15","Distanzscheibe Stärke 2,15","Arandela de espesoración 2,15","","2");
parti[186] = new Array("006","","11","852.1.104.2G","Rosetta rasamento sp. 2,2","Shim th. 2.2","Rosette de butée épaisseur 2,2","Distanzscheibe Stärke 2,2","Arandela de espesoración 2,2","","2");
parti[187] = new Array("006","","11","852.1.104.2I","Rosetta rasamento sp. 2,3","Shim th. 2.3","Rosette de butée épaisseur 2,3","Distanzscheibe Stärke 2,3","Arandela de espesoración 2,3","","2");
parti[188] = new Array("006","","11","852.1.104.2J","Rosetta rasamento sp. 2,35","Shim th. 2.35","Rosette de butée épaisseur 2,35","Distanzscheibe Stärke 2,35","Arandela de espesoración 2,35","","2");
parti[189] = new Array("006","","12","851.4.003.1A","Rosetta di sicurezza","Lock washer","Rosette de sécurité","Sicherungsblech","Arandela de seguridad","","1");
parti[190] = new Array("006","","13","750.1.113.1A","Ghiera","Ring nut","Embout","Nutmutter","Tuerca","","1");
parti[191] = new Array("006","","14","750.1.012.1D","Dado speciale","Special nut","Ecrou spéciale","Spezialmutter","Tuerca especial","","1");
parti[192] = new Array("007","","1","122.2.163.1A","Pistone completo","Complete piston","Piston complet","Kompletter Kolben","Pistón completo","","2");
parti[193] = new Array("007","","2","121.1.079.1A","Anello elastico ferma-spinotto","Piston pin circlip","Bague élastique bloque-axe","Sprengring zur Bolzenfeststellung","Anillo elástico bloquea-clavija","","4");
parti[194] = new Array("007","","3","121.1.078.2A","Spinotto per pistone","Piston pin","Axe de piston","Kolbenbolzen","Bulón","","2");
parti[195] = new Array("007","","4","121.2.040.1A","Busta segmenti","Piston rings set","Etui segments","Beutel mit Kolbenringen","Serie de segmentos","","2");
parti[196] = new Array("007","","5","120.Z.001.1AB","Accoppiamento cilindro pistone (orizzontale)","Cylinder-piston fit (horizontal)","Couplage cylindre piston (horizontal)","Paarung Kolben/Zylinder (waagrechter)","Conjunto cilindro-pistón (horizontal)","","1");
parti[197] = new Array("007","","6","791.2.045.1A","Busta guarnizioni","Gaskets set","Etui garnitures","Beutel mit Dichtungen","Serie juntas","","1");
parti[198] = new Array("007","","7","741.4.192.1A","Fascetta","Clamp","Collier","Schelle","Abrazadera","","4");
parti[199] = new Array("007","","8","800.1.174.3A","Manicotto entrata acqua cilindro orizzontale","Horizontal cylinder water inlet hose","Manchon entrée d'eau cylindre horizontal","Muffe am Wassereinlaß des waagerechten Zylinders","Mangueta entrada agua cilindro horizontal","","1");
parti[200] = new Array("007","","9","800.1.175.2A","Manicotto entrata acqua cilindro verticale","Vertical cylinder water inlet hose","Manchon entrée d'eau cylindre vertical","Muffe am Wassereinlaß des senkrechten Zylinders","Mangueta entrada agua cilindro vertical","","1");
parti[201] = new Array("007","","10","120.Z.002.1AB","Accoppiamento cilindro pistone (verticale)","Cylinder-piston fit (vertical)","Couplage cylindre piston (vertical)","Paarung Kolben/Zylinder (senkrechter)","Conjunto cilindro-pistón (vertical)","","1");
parti[202] = new Array("007","","11","786.1.096.1A","Guarnizione cilindro-testa","Head-cylinder gasket","Garniture cylindre tête","Dichtung Zylinder-Kopf","Junta cilindro-culata","","2");
parti[203] = new Array("007","","12","711.1.219.1A","Boccola","Bush","Douille","Buchse","Casquillo","","4");
parti[204] = new Array("007","","13","786.1.094.1A","Guarnizione cilindro carter","Cylinder-crankcase gasket","Garniture cylindre carter","Zylinder/Gehäusedichtung","Junta cilindro carter","","2");
parti[205] = new Array("007","","14","668.1.001.4A","Bocchettone mandata pompa acqua","Water pump delivery filler","Goulotte de refoulement pompe à eau","Stutzen für Wasserpumpenzulauf","Boca alimentación bomba agua","","2");
parti[206] = new Array("008","","1","245.1.135.1A","Coperchio esterno cinghia verticale","Vertical belt outer cover","Couvercle externe courroie verticale","Äußerer Deckel des senkrechten Riemens","Tapa exterior correa vertical","","1");
parti[207] = new Array("008","","2","245.1.105.2A","Coperchio esterno cinghia orizzontale","Horizontal belt outer cover","Couvercle externe courroie horizontale","Äußerer Deckel des waagrechten Riemens","Tapa exterior correa horizontal","","1");
parti[208] = new Array("008","","3","147.1.014.2A","Albero rinvio distribuzione","Timing lay shaft","Arbre renvoi distribution","Verteilervorgelegewelle","Eje reenvio distribución","","1");
parti[209] = new Array("008","","4","451.1.046.1A","Perno tenditore","Tensioner roller pin","Goujon tendeur","Bolzen für Spanner","Perno tensor","","2");
parti[210] = new Array("008","","5","737.4.025.1A","Cinghia dentata comando distribuzione","Timing drive toothed belt","Courroie dentée commande distribution","Zahnriemen der Ventilsteuerung","Correa dentada mando distribución","","2");
parti[211] = new Array("008","","6","771.1.380.1A","Vite","Screw","Vis","Schraube","Tornillo","","13");
parti[212] = new Array("008","","7","749.4.008.1A","Dado","Nut","Ecrou","Mutter","Tuerca","","2");
parti[213] = new Array("008","","8","852.1.174.1A","Rosetta","Washer","Rosette","Unterlegscheibe","Arandela","","2");
parti[214] = new Array("008","","9","451.1.018.2A","Bussola tenditore fisso","Fixed tensioner bush","Douille tendeur fixe","Buchse für festen Spanner","Polea tensor fijo","","2");
parti[215] = new Array("008","","10","702.4.058.1A","Cuscinetto","Bearing","Roulement","Lager","Cojinete","","4");
parti[216] = new Array("008","","11","882.1.003.1A","Anello elastico di arresto","Snap ring","Bague élastique d'arrêt","Feststellsprengring","Anillo elástico de bloqueo","","1");
parti[217] = new Array("008","","12","680.1.013.1A","Linguetta","Woodruff key","Languette","Federkeil","Chaveta","","3");
parti[218] = new Array("008","","13","171.Z.003.1A","Coppia ingr. distribuzione","Timing gears pair","Jeu d'engrenages distribution","Ventilsteuerungsräderpaar","Par engranajes distribución","","1");
parti[219] = new Array("008","","14","851.1.013.1A","Rosetta di sicurezza","Lock washer","Rosette de sécurité","Sicherungsblech","Arandela de seguridad","","1");
parti[220] = new Array("008","","15","750.1.160.1A","Dado","Nut","Ecrou","Mutter","Tuerca","","1");
parti[221] = new Array("008","","16","451.1.043.1A","Eccentrico tenditore","Tensioner eccentric","Excentrique tendeur","Spannerexzenter","Excentrico tensor","","2");
parti[222] = new Array("008","","17","716.1.128.1A","Distanziale","Spacer","Entretoise","Distanzstück","Distancial","","1");
parti[223] = new Array("008","","18","255.1.010.4B","Puleggia distribuzione","Timing belt roller","Poulie de distribution","Steuerriemenscheibe","Polea distribución","","2");
parti[224] = new Array("008","","19","856.1.062.2A","Rosetta di divisione pulegge","Belt roller separating washer","Rosette de division poulies","Unterlegscheibe","Arandela de separación poleas","","1");
parti[225] = new Array("008","","20","716.1.072.2A","Distanziale","Spacer","Entretoise","Distanzstück","Distancial","","1");
parti[226] = new Array("008","","21","703.5.006.2A","Ghiera elastic-stop","Elastic-stop ring nut","Embout élastique stop","Stop-Elastiknutmutter","Tuerca de seguridad","","1");
parti[227] = new Array("008","","22","451.1.017.1A","Perno tenditore fisso","Fixed tensioner roller pin","Goujon tendeur fixe","Bolzen für festen Spanner","Perno tensor fijo","","2");
parti[228] = new Array("008","","23","779.1.187.1A","Vite di fermo","Setscrew","Vis de blocage","Feststellschraube","Tornillo de bloqueo","","2");
parti[229] = new Array("008","","24","713.1.409.1A","Distanziale","Spacer","Entretoise","Distanzstück","Distancial","","2");
parti[230] = new Array("008","","25","451.1.047.1A","Bussola tenditore mobile","Movable tensioner roller bush","Douille tendeur mobile","Buchse für beweglichen Spanner","Polea tensor móvil","","2");
parti[231] = new Array("008","","26","73503.3804","Anello elastico di arresto","Snap ring","Bague élastique d'arrêt","Feststellsprengring","Anillo elástico de bloqueo","","4");
parti[232] = new Array("008","","27","73500.2054","Anello elastico","Snap ring","Bague élastique","Sprengring","Seager","","2");
parti[233] = new Array("008","","28","830.1.494.1B","Passacavo","Fairlead","Passe-câble","Kabeldurchführung","Pasa-cable","","1");
parti[234] = new Array("008","","29","245.2.107.1A","Filtro e supporto","Filter and holder","Filtre et support","Filter und Halterung","Filtro y soporte","","1");
parti[235] = new Array("008","","30","772.5.034.1C","Vite","Screw","Vis","Schraube","Tornillo","","2");
parti[236] = new Array("009","","1","174.Z.002.1A","Pompa olio completa","Complete oil pump","Pompe à huile complète","Komplette Ölpumpe","Bomba aceite completa","","1");
parti[237] = new Array("009","","2","778.4.004.1A","Grano filettato","Threaded dowel","Vis sans tête filetée","Gewindestift","Tapón","","1");
parti[238] = new Array("009","","3","894.1.020.1A","Filtro olio a rete","Oil net filter","Filtre à huile à filet","Siebölfilter","Filtro aceite de red","","1");
parti[239] = new Array("009","","4","886.4.033.1A","Guarnizione OR","O-ring","Joint d'étanchéité","Dichtung OR","Junta OR","","1");
parti[240] = new Array("009","","5","886.4.132.1A","Guarnizione OR","O-ring","Joint d'étanchéité","Dichtung OR","Junta OR","","1");
parti[241] = new Array("009","","6","886.4.037.1A","Anello OR","O-Ring","Bague d'étanchéité","O-Ring","Anillo OR","","1");
parti[242] = new Array("009","","7","852.1.195.1A","Rosetta","Washer","Rosette","Unterlegscheibe","Arandela","","1");
parti[243] = new Array("009","","8","771.5.129.8B","Vite","Screw","Vis","Schraube","Tornillo","","2");
parti[244] = new Array("009","","9","852.1.174.1A","Rosetta","Washer","Rosette","Unterlegscheibe","Arandela","","2");
parti[245] = new Array("009","","10","771.5.069.8B","Vite","Screw","Vis","Schraube","Tornillo","","1");
parti[246] = new Array("009","","11","852.1.172.1A","Rosetta","Washer","Rosette","Unterlegscheibe","Arandela","","1");
parti[247] = new Array("009","","12","815.1.028.1A","Nipplo","Nipple","Nipple","Nippel","Niple","","1");
parti[248] = new Array("009","","13","779.1.162.2A","Tappo","Cap","Bouchon","Verschluß","Tapón","","1");
parti[249] = new Array("009","","14","799.2.077.2A","Molla by-pass","Bypass spring","Ressort by-pass","By-Pass-Feder","Muelle by-pass","","1");
parti[250] = new Array("009","","15","0759.49.280","Boccola di riferimento","Locating bush","Douille de référence","Bezugsbuchse","Centrador","","2");
parti[251] = new Array("009","","16","777.1.002.1B","Vite","Screw","Vis","Schraube","Tornillo","","4");
parti[252] = new Array("009","","17","0670.49.310","Boccola riduzione","Reduction bush","Douille de réduction","Reduzierbuchse","Casquillo reducción","","1");
parti[253] = new Array("009","","18","886.4.034.1A","Guarnizione OR","O-ring","Joint d'étanchéité","Dichtung OR","Junta OR","","1");
parti[254] = new Array("009","","19","247.1.351.1B","Coperchio (NERO)","Cover (BLACK)","Couvercle (NOIR)","Deckel (SCHWARZ)","Tapa (NEGRO)","","1");
parti[255] = new Array("009","","20","444.4.003.5A","Cartuccia olio","Oil filter cartridge","Cartouche à huile","Ölfiltereinsatz","Cartucho aceite","","1");
parti[256] = new Array("010","","1","225.2.272.1A","Coppia semicarter completi","Complete half-crankcases pair","Paire demi-carters complets","Gehäusehälftenpaar komplett","Par semi-carter completos","","1");
parti[257] = new Array("010","","2","552.4.132.1B","Sensore giri/fase","Rpm/timing sensor","Capteur de régime/phase","Drehzahl-/Steuerzeitensensor","Sensor de revoluciones/fase","","1");
parti[258] = new Array("010","","3","886.5.013.1A","Anello OR","O-Ring","Bague d'étanchéité","O-Ring","Anillo OR","","1");
parti[259] = new Array("010","","4","702.4.092.1A","Cuscinetto","Bearing","Roulement","Lager","Cojinete","","1");
parti[260] = new Array("010","","5","852.5.042.1A","Guarnizione in rame sp. 1,5","Copper gasket sp. 1,5","Garniture en cuivre sp. 1,5","Kupferdichtung sp. 1,5","Junta de cobre sp. 1,5","","1");
parti[261] = new Array("010","","6","702.5.008.1A","Cuscinetto","Bearing","Roulement","Lager","Cojinete","","1");
parti[262] = new Array("010","","7","893.2.006.2A","Tappo","Cap","Bouchon","Verschluß","Tapón","","1");
parti[263] = new Array("010","","8","886.4.132.1A","Guarnizione OR","O-ring","Joint d'étanchéité","Dichtung OR","Junta OR","","1");
parti[264] = new Array("010","","9","73503.3380","Anello seeger","Circlip","Circlip","Seegerring","Anillo seeger","","1");
parti[265] = new Array("010","","10","771.5.139.8B","Vite","Screw","Vis","Schraube","Tornillo","","2");
parti[266] = new Array("010","","11","593.2.042.1A","Valvola di sfiato","Breather valve","Soupape de décharge","Entlüftungsventil","Válvula respiradero","","1");
parti[267] = new Array("010","","12","463.2.022.2A","Anello OR","O-Ring","Bague d'étanchéité","O-Ring","Anillo OR","","2");
parti[268] = new Array("010","","13","886.4.118.1A","Anello OR","O-Ring","Bague d'étanchéité","O-Ring","Anillo OR","","8");
parti[269] = new Array("010","","14","748.1.050.1A","Dado","Nut","Ecrou","Mutter","Tuerca","","8");
parti[270] = new Array("010","","15","856.1.064.2A","Rondella speciale","Special washer","Rondelle spéciale","Spezial-Unterlegscheibe","Arandela especial","","8");
parti[271] = new Array("010","","16","766.1.055.3B","Prigioniero fissaggio cilindro testa","Stud bolt for fastening head cylinder","Goujon de fixation cylindre culasse","Stiftschraube für Zylinderkopfbefestigung","Tornillo sin fin fijación cilindro culata","","8");
parti[272] = new Array("010","","17","72094.1616","Vite","Screw","Vis","Schraube","Tornillo","","2");
parti[273] = new Array("010","","18","826.1.012.1A","Piastrina di fermo","Keep plate","Plaquette d'arrêt","Feststellplatte","Placa de bloqueo","","1");
parti[274] = new Array("010","","19","702.4.013.1A","Cuscinetto","Bearing","Roulement","Lager","Cojinete","","1");
parti[275] = new Array("010","","20","930.4.022.1A","Anello di tenuta","Seal ring","Bague d'étanchéité","Dichtring","Anillo de retén","","1");
parti[276] = new Array("010","","21","702.4.033.1A","Cuscinetto","Bearing","Roulement","Lager","Cojinete","","1");
parti[277] = new Array("010","","22","930.4.093.1A","Anello di tenuta","Seal ring","Bague d'étanchéité","Dichtring","Anillo de retén","","1");
parti[278] = new Array("010","","23","886.4.033.1A","Guarnizione OR","O-ring","Joint d'étanchéité","Dichtung OR","Junta OR","","2");
parti[279] = new Array("010","","24","875.1.146.1A","Getto","Jet","Gicleur","Düse","Chiclé","","1");
parti[280] = new Array("010","","25","775.1.031.1B","Vite","Screw","Vis","Schraube","Tornillo","","1");
parti[281] = new Array("010","","26","860.1.005.1B","Grano di centraggio","Locating dowel","Vis sans tête de centrage","Zentrierstift","Clavija de centrado","","2");
parti[282] = new Array("010","","27","886.1.024.1A","Anello OR","O-Ring","Bague d'étanchéité","O-Ring","Anillo OR","","2");
parti[283] = new Array("010","","28","853.1.003.1A","Rosetta elastica","Spring washer","Rosette élastique","Federscheibe","Arandela de presión","","1");
parti[284] = new Array("010","","29","775.5.021.1B","Vite","Screw","Vis","Schraube","Tornillo","","1");
parti[285] = new Array("010a","","1","702.5.019.1A","Cuscinetto","Bearing","Roulement","Lager","Cojinete","","1");
parti[286] = new Array("010a","","2","702.4.033.1A","Cuscinetto","Bearing","Roulement","Lager","Cojinete","","1");
parti[287] = new Array("010a","","3","94247.0014","Guarnizione liquida","Fluid sealant","Colle liquide pour joint","Flüssige Dichtung","Sellador junta líquida","","1");
parti[288] = new Array("010a","","4","713.1.140.1A","Distanziale","Spacer","Entretoise","Distanzstück","Distancial","","2");
parti[289] = new Array("010a","","5","770.5.250.8B","Vite","Screw","Vis","Schraube","Tornillo","","2");
parti[290] = new Array("010a","","6","780.1.072.1A","Tappo","Cap","Bouchon","Verschluß","Tapón","","1");
parti[291] = new Array("010a","","7","711.1.095.1A","Boccola","Bush","Douille","Buchse","Casquillo","","2");
parti[292] = new Array("010a","","8","930.4.123.1A","Anello di tenuta","Seal ring","Bague d'étanchéité","Dichtring","Anillo de retén","","1");
parti[293] = new Array("010a","","9","75794.1542","Cuscinetto","Bearing","Roulement","Lager","Cojinete","","1");
parti[294] = new Array("010a","","10","73503.3380","Anello seeger","Circlip","Circlip","Seegerring","Anillo seeger","","1");
parti[295] = new Array("010a","","11","702.4.093.1A","Cuscinetto","Bearing","Roulement","Lager","Cojinete","","1");
parti[296] = new Array("010a","","12","779.5.062.1A","Grano filettato","Threaded dowel","Vis sans tête filetée","Gewindestift","Tapón","","1");
parti[297] = new Array("010a","","13","773.5.061.8B","Vite","Screw","Vis","Schraube","Tornillo","","1");
parti[298] = new Array("010a","","14","771.5.072.3B","Vite","Screw","Vis","Schraube","Tornillo","","8");
parti[299] = new Array("010a","","15","771.5.080.8B","Vite","Screw","Vis","Schraube","Tornillo","","2");
parti[300] = new Array("010a","","16","852.5.023.1A","Guarnizione","Gasket","Garniture","Dichtung","Junta","","1");
parti[301] = new Array("010a","","17","771.5.139.8B","Vite","Screw","Vis","Schraube","Tornillo","","2");
parti[302] = new Array("010a","","18","886.5.013.1A","Anello OR","O-Ring","Bague d'étanchéité","O-Ring","Anillo OR","","1");
parti[303] = new Array("010a","","19","875.1.146.1A","Getto","Jet","Gicleur","Düse","Chiclé","","1");
parti[304] = new Array("010a","","20","775.1.031.1B","Vite","Screw","Vis","Schraube","Tornillo","","1");
parti[305] = new Array("010a","","21","771.5.136.3B","Vite","Screw","Vis","Schraube","Tornillo","","3");
parti[306] = new Array("011","","1","264.4.061.1A","Alternatore 'KOKUSAN'","Generator 'KOKUSAN'","Alternateur 'KOKUSAN'","Drehstromgenerator 'KOKUSAN'","Alternador 'KOKUSAN'","","1");
parti[307] = new Array("011","","2","779.1.675.1A","Vite","Screw","Vis","Schraube","Tornillo","","8");
parti[308] = new Array("011","","3","771.5.067.3B","Vite","Screw","Vis","Schraube","Tornillo","","2");
parti[309] = new Array("011","","4","702.5.008.1A","Cuscinetto","Bearing","Roulement","Lager","Cojinete","","1");
parti[310] = new Array("011","","5","771.5.064.8B","Vite","Screw","Vis","Schraube","Tornillo","","2");
parti[311] = new Array("011","","6","770.5.250.8B","Vite","Screw","Vis","Schraube","Tornillo","","2");
parti[312] = new Array("011","","7","852.1.172.1A","Rosetta","Washer","Rosette","Unterlegscheibe","Arandela","","2");
parti[313] = new Array("011","","8","884.5.011.1A","Anello A 10","A 10 Ring","Bague A 10","A 10 Ring","Anillo A 10","","1");
parti[314] = new Array("011","","9","702.4.010.2A","Cuscinetto","Bearing","Roulement","Lager","Cojinete","","1");
parti[315] = new Array("011","","10","779.1.026.2A","Vite","Screw","Vis","Schraube","Tornillo","","1");
parti[316] = new Array("011","","11","702.4.009.1A","Cuscinetto","Bearing","Roulement","Lager","Cojinete","","1");
parti[317] = new Array("011","","12","94247.0014","Guarnizione liquida","Fluid sealant","Colle liquide pour joint","Flüssige Dichtung","Sellador junta líquida","","1");
parti[318] = new Array("011","","13","242.2.088.1BC","Coperchio alternatore (NERO)","Generator cover (BLACK)","Couvercle alternateur (NOIR)","Deckel des Drehstromgenerators (SCHWARZ)","Tapa alternador (NEGRO)","","1");
parti[319] = new Array("011","","14","711.1.160.1A","Boccola di riferimento","Locating bush","Douille de référence","Bezugsbuchse","Centrador","","2");
parti[320] = new Array("011","","15","771.5.071.8B","Vite","Screw","Vis","Schraube","Tornillo","","3");
parti[321] = new Array("011","","16","668.1.001.4A","Bocchettone mandata pompa acqua","Water pump delivery filler","Goulotte de refoulement pompe à eau","Stutzen für Wasserpumpenzulauf","Boca alimentación bomba agua","","2");
parti[322] = new Array("011","","17","73503.3380","Anello seeger","Circlip","Circlip","Seegerring","Anillo seeger","","1");
parti[323] = new Array("011","","18","93783.1524","Anello di tenuta","Seal ring","Bague d'étanchéité","Dichtring","Anillo de retén","","1");
parti[324] = new Array("011","","19","771.5.069.3B","Vite","Screw","Vis","Schraube","Tornillo","","9");
parti[325] = new Array("011","","20","771.5.066.3B","Vite","Screw","Vis","Schraube","Tornillo","","4");
parti[326] = new Array("011","","21","860.1.004.1A","Grano di centraggio","Locating dowel","Vis sans tête de centrage","Zentrierstift","Clavija de centrado","","2");
parti[327] = new Array("011","","22","886.1.095.1A","Guarnizione OR","O-ring","Joint d'étanchéité","Dichtung OR","Junta OR","","1");
parti[328] = new Array("011","","23","247.1.305.1AF","Coperchio (NERO)","Cover (BLACK)","Couvercle (NOIR)","Deckel (SCHWARZ)","Tapa (NEGRO)","","1");
parti[329] = new Array("011","","24","777.5.049.3C","Vite","Screw","Vis","Schraube","Tornillo","","2");
parti[330] = new Array("011","","25","852.5.026.1A","Guarnizione alluminio sp.1,5","Aluminium gasket th.1,5","Garniture aluminium ép.1,5","Aluminium-Dichtung stärke 1,5","Junta aluminio esp.1,5","","1");
parti[331] = new Array("011","","26","930.5.005.1A","Controfaccia","Seal","Etanchéité hydraulique","Hydraulikdichtung","Retén hidráulico","","1");
parti[332] = new Array("011","","27","713.1.128.1B","Distanziale","Spacer","Entretoise","Distanzstück","Distancial","","1");
parti[333] = new Array("011","","28","930.5.006.2B","Tenuta meccanica","Mechanical seal","Tenue mécanique","Mechanische Dichtung","Junta mecánica","","1");
parti[334] = new Array("011","","29","251.2.008.1A","Girante pompa acqua","Water pump fan","Couronne pompe eau","Läuferrad der Wasserpumpe","Rotor bomba agua","","1");
parti[335] = new Array("011","","30","852.5.023.1A","Guarnizione","Gasket","Garniture","Dichtung","Junta","","1");
parti[336] = new Array("011","","31","247.2.130.1AC","Coperchio pompa acqua completo (NERO)","Complete water pump cover (BLACK)","Couvercle pompe à eau complet (NOIR)","Wasserpumpendeckel komplett (SCHWARZ)","Tapa bomba agua completa (NEGRO)","","1");
parti[337] = new Array("011","","32","852.5.024.1A","Guarnizione sp.1","Gasket th.1","Garniture èp.1","Dichtung stàrke 1","Junta esp.1","","1");
parti[338] = new Array("011","","33","780.5.001.2A","Tappo","Cap","Bouchon","Verschluß","Tapón","","1");
parti[339] = new Array("011","","34","852.1.114.1A","Rosetta","Washer","Rosette","Unterlegscheibe","Arandela","","1");
parti[340] = new Array("011","","35","830.1.235.1A","Staffa","Bracket","Bride","Bügel","Soporte","","1");
parti[341] = new Array("011","","36","771.5.071.3B","Vite","Screw","Vis","Schraube","Tornillo","","1");
parti[342] = new Array("012","","1","270.4.010.3A","Motorino avviamento completo","Complete starter motor","Démarreur complet","Elektrischer Anlaßmotor komplett","Motor de arranque completo","","1");
parti[343] = new Array("012","","2","853.1.003.1A","Rosetta elastica","Spring washer","Rosette élastique","Federscheibe","Arandela de presión","","1");
parti[344] = new Array("012","","3","750.1.121.1A","Dado","Nut","Ecrou","Mutter","Tuerca","","1");
parti[345] = new Array("012","","4","788.1.054.2A","Guarnizione motorino","Starter motor gasket","Garniture démarreur","Anlaßmotordichtung","Junta motor","","1");
parti[346] = new Array("012","","5","771.1.049.1A","Vite","Screw","Vis","Schraube","Tornillo","","2");
parti[347] = new Array("012","","6","771.1.052.1A","Vite","Screw","Vis","Schraube","Tornillo","","1");
parti[348] = new Array("012","","7","881.1.034.1A","Anello interno","Inner ring","Bague interne","Innenliegender Ring","Anillo interior","","1");
parti[349] = new Array("012","","8","821.1.347.1A","Perno ingranaggio intermedio","Intermediate gear pin","Axe engrenage intermédiaire","Zahnradzwischenstift","Perno engranaje intermedio","","1");
parti[350] = new Array("012","","9","713.1.919.1A","Distanziale","Spacer","Entretoise","Distanzstück","Distancial","","1");
parti[351] = new Array("012","","10","176.Z.002.1A","Gruppetto ingranaggio intermedio","Intermediate gear assembly","Groupe engrenage intermédiaire","Zwischenzahnrädersatz","Grupo engranaje intermedio","","1");
parti[352] = new Array("012","","11","701.4.035.1A","Ruota libera","Starter clutch","Roue libre","Freilauf","Rueda libre","","1");
parti[353] = new Array("012","","12","700.1.036.1A","Boccola elastica","Flexible bush","Douille élastique","Elastische Buchse","Casquillo elástico","","1");
parti[354] = new Array("012","","13","160.Z.001.1A","Flangia","Flange","Bride","Flansch","Brida","","1");
parti[355] = new Array("012","","14","173.Z.002.1A","Ingranaggio condotto avviamento elettrico","Electric starter driven gear","Engrenage entraîné démarrage électrique","Angetriebenes Zahnrad für elektrischen Anlaß","Engranaje conducido arranque eléctronico","","1");
parti[356] = new Array("012","","15","702.4.018.1A","Gabbia a rullini","Needle bearing","Boîte à aiguilles","Nadelkäfig","Jaula de rodillos","","1");
parti[357] = new Array("012","","16","276.Z.002.1A","Volano per accensione","Ignition flywheel","Volant pour allumage","Zündungsschwungrad","Volante para encendido","","1");
parti[358] = new Array("012","","17","856.1.075.1A","Rosetta rasamento","Shim","Rosette de butée","Distanzscheibe","Arandela de espesoración","","1");
parti[359] = new Array("013","","1","886.5.051.1A","Guarnizione OR","O-ring","Joint d'étanchéité","Dichtung OR","Junta OR","","8");
parti[360] = new Array("013","","2","703.5.002.2A","Ghiera","Ring nut","Embout","Nutmutter","Tuerca","","4");
parti[361] = new Array("013","","3","779.1.509.3A","Vite speciale","Special screw","Vis spéciale","Spezialschraube","Tornillo especial","","8");
parti[362] = new Array("013","","4","856.1.074.3A","Rondella speciale","Special washer","Rondelle spéciale","Spezial-Unterlegscheibe","Arandela especial","","4");
parti[363] = new Array("013","","5","247.1.287.1B","Coperchio orizzontale","Horizontal cover","Couvercle horizontal","Deckel waagrechten","Tapa horizontal","","1");
parti[364] = new Array("013","","6","247.1.288.1B","Coperchio verticale","Vertical cover","Couvercle vertical","Deckel senkrechten","Tapa vertical","","1");
parti[365] = new Array("013","","7","255.1.019.3A","Puleggia distribuzione","Timing belt roller","Poulie de distribution","Steuerriemenscheibe","Polea distribución","","4");
parti[366] = new Array("013","","8","788.1.094.1A","Guarnizione","Gasket","Garniture","Dichtung","Junta","","2");
parti[367] = new Array("013","","9","788.1.093.1A","Guarnizione testa","Head gasket","Garniture tête","Dichtung Kopf","Junta culata","","2");
parti[368] = new Array("013","","10","160.1.094.1A","Distanziale","Spacer","Entretoise","Distanzstück","Distancial","","4");
parti[369] = new Array("013","","11","148.2.433.1A","Albero distribuzione aspirazione verticale","Vertical intake camshaft","Arbre distribution aspiration verticale","Verteilerwelle der senkrechten Ansaugung","Arbol distribución aspiración vertical","","1");
parti[370] = new Array("013","","12","680.5.006.1A","Linguetta","Woodruff key","Languette","Federkeil","Chaveta","","4");
parti[371] = new Array("013","","13","873.1.005.1A","Tappo","Cap","Bouchon","Verschluß","Tapón","","4");
parti[372] = new Array("013","","14","148.2.434.1A","Albero distribuzione scarico orizzontale","Horizontal exhaust camshaft","Arbre distribution échappement horizontal","Verteilerwelle waagrechter Auslaß","Arbol distribución descarga horizontal","","1");
parti[373] = new Array("013","","15","148.2.432.1A","Albero distribuzione aspirazione orizzontale","Horizontal intake camshaft","Arbre distribution aspiration horizontale","Verteilerwelle der waagrechten Ansaugung","Arbol distribución aspiración horizontal","","1");
parti[374] = new Array("013","","16","779.5.030.2A","Vite","Screw","Vis","Schraube","Tornillo","","12");
parti[375] = new Array("013","","17","930.5.007.1A","Anello di tenuta","Seal ring","Bague d'étanchéité","Dichtring","Anillo de retén","","4");
parti[376] = new Array("013","","18","148.2.435.1A","Albero distribuzione scarico verticale","Vertical exhaust camshaft","Arbre distribution échappement vertical","Verteilerwelle senkrechter Auslaß","Arbol distribución descarga vertical","","1");
parti[377] = new Array("014","","1","..........","Vedi tavola","See table","Voir planche","Siehe Tafel","Ver tabla","","4");
parti[378] = new Array("014","","2","..........","Vedi tavola","See table","Voir planche","Siehe Tafel","Ver tabla","","4");
parti[379] = new Array("014","","3","208.1.032.1A","Bilanciere apertura","Opening rocker","Culbuteur ouverture","Öffnungsschlepphebel","Balancín abertura","","4");
parti[380] = new Array("014","","4","209.1.050.1A","Bilanciere chiusura (sinistro)","Closing rocker (L.H.)","Culbuteur fermeture (gauche)","Schliesskipphebel (link)","Balancín de cierre (izquierdo)","","2");
parti[381] = new Array("014","","5","211.1.074.1A","Valvola scarico","Exhaust valve","Soupape d'échappement","Auslaßventil","Válvula de escape","","2");
parti[382] = new Array("014","","6","669.1.001.1E","Semianelli","Split rings","Demi-bagues","Halbringe","Semianillos","","8");
parti[383] = new Array("014","","7","303.1.063.1BB","Guidavalvola magg. 0,03","Oversize valve guide 0.03","Guide-soupape majoré 0,03","Um 0,03 überdimensionierte Ventilführung","Guía-válvula may. 0,03","","4");
parti[384] = new Array("014","","7","303.1.063.1BC","Guidavalvola magg. 0,06","Oversize valve guide 0.06","Guide-soupape majoré 0,06","Um 0,06 überdimensionierte Ventilführung","Guía-válvula may. 0,06","","4");
parti[385] = new Array("014","","7","303.1.063.1BD","Guidavalvola magg. 0,09","Oversize valve guide 0.09","Guide-soupape majoré 0,09","Um 0,09 überdimensionierte Ventilführung","Guía-válvula may. 0,09","","4");
parti[386] = new Array("014","","8","764.1.087.1A","Gommino per valvola","Valve seal","Joint en caoutchouc pour soupape","Gummistück für Ventil","Reten de válvula","","4");
parti[387] = new Array("014","","9","713.1.292.1A","Distanziale","Spacer","Entretoise","Distanzstück","Distancial","","2");
parti[388] = new Array("014","","10","304.1.085.1A","Sede valvola scarico","Exhaust valve seat","Siège soupape d'échappement","Sitz des Auslaßventils","Asiento válvula escape","","2");
parti[389] = new Array("014","","10","304.1.085.1AB","Sede valvola scar. magg. 0,03","Oversize exhaust valve seat 0.03","Siège soupape échappement majoré 0,03","Um 0,03 überdimensionierter Sitz des Auslaßventils","Asiento válvula escape may. 0,03","","2");
parti[390] = new Array("014","","10","304.1.085.1AC","Sede valvola scar. magg. 0,06","Oversize exhaust valve seat 0.06","Siège soupape échappement majoré 0,06","Um 0,06 überdimensionierter Sitz des Auslaßventils","Asiento válvula escape may. 0,06","","2");
parti[391] = new Array("014","","11","852.5.026.1B","Guarnizione alluminio sp.1,5","Aluminium gasket th.1,5","Garniture aluminium ép.1,5","Aluminium-Dichtung stärke 1,5","Junta aluminio esp.1,5","","8");
parti[392] = new Array("014","","12","780.1.051.2A","Tappo","Cap","Bouchon","Verschluß","Tapón","","8");
parti[393] = new Array("014","","13","304.1.084.1A","Sede valvola aspirazione","Intake valve seat","Siège soupape admission","Sitz des Einlaßventils","Asiento válvula aspiración","","2");
parti[394] = new Array("014","","13","304.1.084.1AB","Sede valvola asp. magg. 0,03","Oversize intake valve seat 0.03","Siège soupape admission majorée 0,03","Um 0,03 überdimensionierter Sitz des Einlaßventils","Asiento válvula aspiración may. 0,03","","2");
parti[395] = new Array("014","","13","304.1.084.1AC","Sede valvola asp. magg. 0,06","Oversize intake valve seat 0.06","Siège soupape admission majoré 0,06","Um 0,06 überdimensionierter Sitz des Einlaßventils","Asiento válvula aspiración may. 0,06","","2");
parti[396] = new Array("014","","14","210.1.074.1E","Valvola aspirazione","Intake valve","Soupape d'aspiration","Einlaßventil","Válvula de aspiración","","2");
parti[397] = new Array("014","","15","821.1.223.1B","Perno bilanciere chiusura","Closing rocker shaft","Axe culbuteur fermeture","Schleppkipphebel-Federwelle","Eje balancín cierre","","4");
parti[398] = new Array("014","","16","209.1.049.1A","Bilanciere chiusura (destro)","Closing rocker (R.H.)","Culbuteur fermeture (droit)","Schliesskipphebel (recht)","Balancín de cierre (derecho)","","2");
parti[399] = new Array("014","","17","821.1.222.1B","Perno bilanciere apertura","Opening rocker shaft","Axe culbuteur ouverture","Öffnungskipphebel-Federwelle","Eje balancín apertura","","4");
parti[400] = new Array("014","","18","799.1.486.1A","Molla ritorno valvola (destra)","Valve return spring (R.H.)","Ressort retour soupape (droite)","Rückholfeder für Ventil (rechter)","Muelle retorno válvula (derecha)","","1");
parti[401] = new Array("014","","19","799.1.485.1A","Molla ritorno valvola (sinistra)","Valve return spring (L.H.)","Ressort retour soupape (gauche)","Rückholfeder für Ventil (linker)","Muelle retorno válvula (izquierda)","","1");
parti[402] = new Array("014","","20","773.5.061.8B","Vite","Screw","Vis","Schraube","Tornillo","","1");
parti[403] = new Array("014","","21","766.4.019.1A","Prigioniero","Stud bolt","Goujon","Stiftschraube","Tornillo sin fin","","3");
parti[404] = new Array("014","","22","301.2.330.1AB","Testa verticale completa","Complete vertical head","Culasse verticale complète","Senkrechter Zylinderkopf komplett","Culata vertical completa","","1");
parti[405] = new Array("014","","23","779.1.421.1A","Vite speciale","Special screw","Vis spéciale","Spezialschraube","Tornillo especial","","8");
parti[406] = new Array("014","","24","860.5.006.1A","Spina","Pin","Goupille","Stift","Pasador","","4");
parti[407] = new Array("014","","25","713.1.292.1B","Distanziale","Spacer","Entretoise","Distanzstück","Distancial","","2");
parti[408] = new Array("014","","26","799.1.518.1A","Molla ritorno valvola (sinistra)","Valve return spring (L.H.)","Ressort retour soupape (gauche)","Rückholfeder für Ventil (linker)","Muelle retorno válvula (izquierda)","","1");
parti[409] = new Array("014","","27","799.1.519.1A","Molla ritorno valvola (destra)","Valve return spring (R.H.)","Ressort retour soupape (droite)","Rückholfeder für Ventil (rechter)","Muelle retorno válvula (derecha)","","1");
parti[410] = new Array("014","","28","852.5.023.1A","Guarnizione","Gasket","Garniture","Dichtung","Junta","","1");
parti[411] = new Array("015","","1","..........","Vedi tavola","See table","Voir planche","Siehe Tafel","Ver tabla","","4");
parti[412] = new Array("015","","2","..........","Vedi tavola","See table","Voir planche","Siehe Tafel","Ver tabla","","4");
parti[413] = new Array("015","","3","208.1.032.1A","Bilanciere apertura","Opening rocker","Culbuteur ouverture","Öffnungsschlepphebel","Balancín abertura","","4");
parti[414] = new Array("015","","4","209.1.050.1A","Bilanciere chiusura (sinistro)","Closing rocker (L.H.)","Culbuteur fermeture (gauche)","Schliesskipphebel (link)","Balancín de cierre (izquierdo)","","2");
parti[415] = new Array("015","","5","211.1.074.1A","Valvola scarico","Exhaust valve","Soupape d'échappement","Auslaßventil","Válvula de escape","","2");
parti[416] = new Array("015","","6","669.1.001.1E","Semianelli","Split rings","Demi-bagues","Halbringe","Semianillos","","8");
parti[417] = new Array("015","","7","303.1.063.1BB","Guidavalvola magg. 0,03","Oversize valve guide 0.03","Guide-soupape majoré 0,03","Um 0,03 überdimensionierte Ventilführung","Guía-válvula may. 0,03","","4");
parti[418] = new Array("015","","7","303.1.063.1BC","Guidavalvola magg. 0,06","Oversize valve guide 0.06","Guide-soupape majoré 0,06","Um 0,06 überdimensionierte Ventilführung","Guía-válvula may. 0,06","","4");
parti[419] = new Array("015","","7","303.1.063.1BD","Guidavalvola magg. 0,09","Oversize valve guide 0.09","Guide-soupape majoré 0,09","Um 0,09 überdimensionierte Ventilführung","Guía-válvula may. 0,09","","4");
parti[420] = new Array("015","","8","764.1.087.1A","Gommino per valvola","Valve seal","Joint en caoutchouc pour soupape","Gummistück für Ventil","Reten de válvula","","4");
parti[421] = new Array("015","","9","713.1.292.1A","Distanziale","Spacer","Entretoise","Distanzstück","Distancial","","2");
parti[422] = new Array("015","","10","304.1.085.1A","Sede valvola scarico","Exhaust valve seat","Siège soupape d'échappement","Sitz des Auslaßventils","Asiento válvula escape","","2");
parti[423] = new Array("015","","10","304.1.085.1AB","Sede valvola scar. magg. 0,03","Oversize exhaust valve seat 0.03","Siège soupape échappement majoré 0,03","Um 0,03 überdimensionierter Sitz des Auslaßventils","Asiento válvula escape may. 0,03","","2");
parti[424] = new Array("015","","10","304.1.085.1AC","Sede valvola scar. magg. 0,06","Oversize exhaust valve seat 0.06","Siège soupape échappement majoré 0,06","Um 0,06 überdimensionierter Sitz des Auslaßventils","Asiento válvula escape may. 0,06","","2");
parti[425] = new Array("015","","11","852.5.026.1B","Guarnizione alluminio sp.1,5","Aluminium gasket th.1,5","Garniture aluminium ép.1,5","Aluminium-Dichtung stärke 1,5","Junta aluminio esp.1,5","","8");
parti[426] = new Array("015","","12","780.1.051.2A","Tappo","Cap","Bouchon","Verschluß","Tapón","","8");
parti[427] = new Array("015","","13","304.1.084.1A","Sede valvola aspirazione","Intake valve seat","Siège soupape admission","Sitz des Einlaßventils","Asiento válvula aspiración","","2");
parti[428] = new Array("015","","13","304.1.084.1AB","Sede valvola asp. magg. 0,03","Oversize intake valve seat 0.03","Siège soupape admission majorée 0,03","Um 0,03 überdimensionierter Sitz des Einlaßventils","Asiento válvula aspiración may. 0,03","","2");
parti[429] = new Array("015","","13","304.1.084.1AC","Sede valvola asp. magg. 0,06","Oversize intake valve seat 0.06","Siège soupape admission majoré 0,06","Um 0,06 überdimensionierter Sitz des Einlaßventils","Asiento válvula aspiración may. 0,06","","2");
parti[430] = new Array("015","","14","210.1.074.1E","Valvola aspirazione","Intake valve","Soupape d'aspiration","Einlaßventil","Válvula de aspiración","","2");
parti[431] = new Array("015","","15","821.1.223.1B","Perno bilanciere chiusura","Closing rocker shaft","Axe culbuteur fermeture","Schleppkipphebel-Federwelle","Eje balancín cierre","","4");
parti[432] = new Array("015","","16","209.1.049.1A","Bilanciere chiusura (destro)","Closing rocker (R.H.)","Culbuteur fermeture (droit)","Schliesskipphebel (recht)","Balancín de cierre (derecho)","","2");
parti[433] = new Array("015","","17","821.1.222.1B","Perno bilanciere apertura","Opening rocker shaft","Axe culbuteur ouverture","Öffnungskipphebel-Federwelle","Eje balancín apertura","","4");
parti[434] = new Array("015","","18","799.1.486.1A","Molla ritorno valvola (destra)","Valve return spring (R.H.)","Ressort retour soupape (droite)","Rückholfeder für Ventil (rechter)","Muelle retorno válvula (derecha)","","1");
parti[435] = new Array("015","","19","799.1.485.1A","Molla ritorno valvola (sinistra)","Valve return spring (L.H.)","Ressort retour soupape (gauche)","Rückholfeder für Ventil (linker)","Muelle retorno válvula (izquierda)","","1");
parti[436] = new Array("015","","20","852.5.023.1A","Guarnizione","Gasket","Garniture","Dichtung","Junta","","1");
parti[437] = new Array("015","","21","766.4.019.1A","Prigioniero","Stud bolt","Goujon","Stiftschraube","Tornillo sin fin","","3");
parti[438] = new Array("015","","22","301.2.329.1AB","Testa orizzontale completa","Complete horizontal head","Culasse horizontale complète","Waagrechter Zylinderkopf komplett","Culata horizontal completa","","1");
parti[439] = new Array("015","","23","779.1.421.1A","Vite speciale","Special screw","Vis spéciale","Spezialschraube","Tornillo especial","","8");
parti[440] = new Array("015","","24","860.5.006.1A","Spina","Pin","Goupille","Stift","Pasador","","4");
parti[441] = new Array("015","","25","814.1.188.1A","Raccordo","Union","Raccord","Anschluß","Empalme","","1");
parti[442] = new Array("015","","26","713.1.292.1B","Distanziale","Spacer","Entretoise","Distanzstück","Distancial","","2");
parti[443] = new Array("015","","27","799.1.518.1A","Molla ritorno valvola (sinistra)","Valve return spring (L.H.)","Ressort retour soupape (gauche)","Rückholfeder für Ventil (linker)","Muelle retorno válvula (izquierda)","","1");
parti[444] = new Array("015","","28","799.1.519.1A","Molla ritorno valvola (destra)","Valve return spring (R.H.)","Ressort retour soupape (droite)","Rückholfeder für Ventil (rechter)","Muelle retorno válvula (derecha)","","1");
parti[445] = new Array("016","","1","787.1.011.1A","Guarnizione alluminio sp.2","Aluminium gasket th.2","Garniture aluminium ép.2","Aluminium-Dichtung stärke 2","Junta aluminio esp.2","","2");
parti[446] = new Array("016","","2","815.1.022.1A","Nipplo","Nipple","Nipple","Nippel","Niple","","4");
parti[447] = new Array("016","","3","549.1.090.1A","Tubo mandata olio","Oil delivery pipe","Tuyau de refoulement huile","Ölzufuhrleitung","Tubo alimentación aceite","","1");
parti[448] = new Array("016","","4","549.1.091.1A","Tubo ritorno olio","Oil return pipe","Tube retour huile","Ölrücklaufleitung","Tubo retorno aceite","","1");
parti[449] = new Array("016","","5","420.2.006.4A","Guarnizione alluminio","Aluminium gasket","Garniture aluminium","Aluminium-Dichtung","Junta aluminio","","2");
parti[450] = new Array("016","","6","547.1.001.1A","Scambiatore di calore","Heat exchanger","Échangeur de chaleur","Wärmetauscher","Intercambiador de calor","","1");
parti[451] = new Array("016","","7","830.1.530.1A","Staffa","Bracket","Bride","Bügel","Soporte","","1");
parti[452] = new Array("016","","8","772.1.089.3B","Vite","Screw","Vis","Schraube","Tornillo","","2");
parti[453] = new Array("016","","9","771.5.668.8B","Vite","Screw","Vis","Schraube","Tornillo","","2");
parti[454] = new Array("016","","10","716.1.003.1A","Distanziale","Spacer","Entretoise","Distanzstück","Distancial","","2");
parti[455] = new Array("016","","11","764.1.022.1A","Gommino antivibrante","Vibration damper pad","Joint en caoutchouc anti-vibration","Schwingungsdämpfergummi","Junta de goma anti-vibración","","2");
parti[456] = new Array("016","","12","881.1.058.1A","Guidacavo","Cable guide","Guide-câble","Kabelführung","Guía-cable","","1");
parti[457] = new Array("016","","13","852.1.176.1A","Rosetta","Washer","Rosette","Unterlegscheibe","Arandela","","1");
parti[458] = new Array("016","","14","716.1.412.1A","Distanziale","Spacer","Entretoise","Distanzstück","Distancial","","1");
parti[459] = new Array("017","","1","140.1.048.1B","Collettore aspirazione","Intake manifold","Collecteur aspiration","Ansaugkrümmer","Colector aspiración","","2");
parti[460] = new Array("017","","2","771.5.065.8B","Vite","Screw","Vis","Schraube","Tornillo","","4");
parti[461] = new Array("017","","3","758.4.017.1A","Fascetta","Clamp","Collier","Schelle","Abrazadera","","1");
parti[462] = new Array("017","","4","827.1.543.1A","Piastrina ferma cavo","Cable keep plate","Plaquette bloque-câble","Kabelfeststellplättchen","Placa bloquea cable","","1");
parti[463] = new Array("017","","5","850.4.043.1A","Fissaggio rapido","Quik fastening","Fixation rapide","Schnellbefestigung","Fijaciòn ràpida","","1");
parti[464] = new Array("017","","6","771.1.233.1A","Vite","Screw","Vis","Schraube","Tornillo","","4");
parti[465] = new Array("017","","7","135.1.023.2A","Condotto aspirazione","Intake duct","Conduit aspiration","Ansaugleitung","Tubo aspiración","","2");
parti[466] = new Array("017","","8","772.1.085.2A","Vite speciale","Special screw","Vis spéciale","Spezialschraube","Tornillo especial","","6");
parti[467] = new Array("017","","9","788.1.096.2A","Guarnizione","Gasket","Garniture","Dichtung","Junta","","2");
parti[468] = new Array("017","","10","788.1.097.2A","Guarnizione","Gasket","Garniture","Dichtung","Junta","","2");
parti[469] = new Array("017","","11","282.4.088.1A","Corpo farfallato completo","Complete throttle body","Corps à papillon complet","Drosselkörper ganz","Cuerpo mariposa completo","","1");
parti[470] = new Array("017","","12","775.1.017.1C","Vite","Screw","Vis","Schraube","Tornillo","","6");
parti[471] = new Array("017","","13","280.4.016.1A","Iniettore","Injector","Injecteur","Einspritzdüse","Inyector","","2");
parti[472] = new Array("017","","14","772.1.110.1A","Vite","Screw","Vis","Schraube","Tornillo","","2");
parti[473] = new Array("017","","15","283.4.011.1A","Motorino passo passo","Stepper motor","Moteur pas-à-pas","Schrittmotor","Motor paso paso","","1");
parti[474] = new Array("017","","16","852.4.013.1A","Rosetta","Washer","Rosette","Unterlegscheibe","Arandela","","2");
parti[475] = new Array("017","","17","886.4.089.1A","Guarnizione OR","O-ring","Joint d'étanchéité","Dichtung OR","Junta OR","","2");
parti[476] = new Array("017","","18","758.1.039.2A","Passatubo","Hose guide","Passe-tube","Leitungsführung","Pasatubo","","1");
parti[477] = new Array("017","","19","773.1.005.1A","Vite","Screw","Vis","Schraube","Tornillo","","4");
parti[478] = new Array("017","","20","590.2.025.4A","Giro tubi completo","Complete pipe set","Tour/parcours tuyaux complet","Komplette Rohreinheit","Giro tubos completo","","1");
parti[479] = new Array("017","","21","741.4.189.1A","Fascetta","Clamp","Collier","Schelle","Abrazadera","","2");
parti[480] = new Array("018","","1","850.4.055.1A","Dado a graffetta","Nut with clip","Ecrou à collier","Klemmutter","Tuerca de grapa","","2");
parti[481] = new Array("018","","2","750.5.001.1B","Dado","Nut","Ecrou","Mutter","Tuerca","","2");
parti[482] = new Array("018","","3","540.4.019.1A","Regolatore","Regulator","Régulateur","Regler","Regulador","","1");
parti[483] = new Array("018","","4","771.5.639.8B","Vite","Screw","Vis","Schraube","Tornillo","","2");
parti[484] = new Array("018","","5","716.1.144.1A","Distanziale","Spacer","Entretoise","Distanzstück","Distancial","","2");
parti[485] = new Array("018","","6","829.1.985.3A","Supporto batteria","Battery box mount","Support batterie","Batteriehalterung","Soporte bateria","","1");
parti[486] = new Array("018","","7","829.1.A68.2AA","Staffa","Bracket","Bride","Bügel","Soporte","","1");
parti[487] = new Array("018","","8","771.5.645.8B","Vite","Screw","Vis","Schraube","Tornillo","","2");
parti[488] = new Array("018","","9","764.1.130.1A","Gommino","Rubber pad","Joint en caoutchouc","Gummistück","Junta de goma","","2");
parti[489] = new Array("018","","10","593.4.039.2A","Motore valvola scarico","Exhaust valve engine","Moteur soupape d'échappement","Auslaßventil motor","Motor válvula de escape","","1");
parti[490] = new Array("018","","11","852.1.160.1B","Rosetta","Washer","Rosette","Unterlegscheibe","Arandela","","2");
parti[491] = new Array("018","","12","771.1.369.1A","Vite","Screw","Vis","Schraube","Tornillo","","5");
parti[492] = new Array("018","","13","286.4.220.1C","Centralina iniezione","Injection control unit","Centrale injection","Steuergehäuse der Einspritzung","Centralita inyección","","1");
parti[493] = new Array("018","","14","771.5.672.8B","Vite","Screw","Vis","Schraube","Tornillo","","2");
parti[494] = new Array("018","","15","514.1.062.1A","Cavo teleruttore - motorino avviamento","Solenoid starter - starter motor cable","Câble télérupteur - démarreur","Kabel für Fernschalter -  Anlaßmotor","Cable teleruptor - motor de accionamiento","","1");
parti[495] = new Array("018","","16","772.1.046.1B","Vite","Screw","Vis","Schraube","Tornillo","","1");
parti[496] = new Array("018","","17","830.1.549.1A","Piastrino","Plate","Plaquette","Plättchen","Lámina","","1");
parti[497] = new Array("018","","18","397.4.007.1A","Teleruttore","Remote switch","Télérupteur","Fernschalter","Telerruptor","","1");
parti[498] = new Array("018","","19","389.4.025.1A","Fusibile 30A","Fuse 30A","Fusible 30A","Sicherung 30A","Fusible 30A","","1");
parti[499] = new Array("018","","20","853.5.010.1A","Rosetta elastica","Spring washer","Rosette élastique","Federscheibe","Arandela de presión","","2");
parti[500] = new Array("018","","21","771.5.662.8B","Vite","Screw","Vis","Schraube","Tornillo","","2");
parti[501] = new Array("018","","22","514.1.063.1A","Cavo batteria - teleruttore","Battery - solenoid starter cable","Câble batterie - télérupteur","Kabel für Batterie - Fernschalter","Cable bateria - teleruptor","","1");
parti[502] = new Array("018","","23","395.2.013.1C","Batteria","Battery","Batterie","Batterie","Batería","","1");
parti[503] = new Array("018","","24","866.1.098.1A","Tappeto batteria","Battery carpet","Moquette batterie","Batterie teppich","Alfombra baterìa","","1");
parti[504] = new Array("018","","25","716.1.401.1A","Distanziale","Spacer","Entretoise","Distanzstück","Distancial","","3");
parti[505] = new Array("018","","26","830.1.550.1A","Piastrino","Plate","Plaquette","Plättchen","Lámina","","1");
parti[506] = new Array("018","","27","830.1.556.1A","Supporto","Holder","Support","Halterung","Soporte","","1");
parti[507] = new Array("018","","28","716.1.428.1A","Distanziale","Spacer","Entretoise","Distanzstück","Distancial","","2");
parti[508] = new Array("018a","","1","510.1.694.1C","Cablaggio elettrico (anteriore)","Electric wiring (front)","Câblage électrique (avant)","Elektroverkabelung (vorderes)","Cableado eléctrico (delantero)","","1");
parti[509] = new Array("018a","","2","510.1.776.1A","Cablaggio elettrico","Electric wiring","Câblage électrique","Elektroverkabelung","Cableado eléctrico","","1");
parti[510] = new Array("018a","","3","541.4.010.1A","Relais","Relay","Relais","Relais","Relé","","3");
parti[511] = new Array("018a","","4","853.5.009.1A","Rosetta elastica","Spring washer","Rosette élastique","Federscheibe","Arandela de presión","","1");
parti[512] = new Array("018a","","5","389.4.019.1A","Fusibile 5A","Fuse 5A","Fusible 5A","Sicherung 5A","Fusible 5A","","2");
parti[513] = new Array("018a","","5","389.4.020.1A","Fusibile 10A","Fuse 10A","Fusible 10A","Sicherung 10A","Fusible 10A","","1");
parti[514] = new Array("018a","","5","389.4.021.1A","Fusibile 15A","Fuse 15A","Fusible 15A","Sicherung 15A","Fusible 15A","","1");
parti[515] = new Array("018a","","5","389.4.022.1A","Fusibile 20A","Fuse 20A","Fusible 20A","Sicherung 20A","Fusible 20A","","1");
parti[516] = new Array("018a","","5","389.4.024.1A","Fusibile 7,5A","Fuse 7.5A","Fusible 7,5A","Sicherung 7,5A","Fusible 7,5A","","1");
parti[517] = new Array("018a","","6","286.2.040.1B","Kit acquisizione dati","Data acquisition kit","Kit saise donnees","Kit-datenerfassung","Kit adquisicion datos","","1");
parti[518] = new Array("018a","","7","741.1.040.1A","Fascetta","Clamp","Collier","Schelle","Abrazadera","","1");
parti[519] = new Array("018a","","8","872.1.053.1A","Tappo (DDA)","Cap (DDA)","Bouchon (DDA)","Verschluß (DDA)","Tapón (DDA)","","1");
parti[520] = new Array("018a","","9","771.5.066.3B","Vite","Screw","Vis","Schraube","Tornillo","","2");
parti[521] = new Array("018a","","10","852.1.264.1A","Rosetta","Washer","Rosette","Unterlegscheibe","Arandela","","2");
parti[522] = new Array("018a","","11","380.1.014.4B","Bobina","Coil","Bobine","Zündspule","Bobina","","2");
parti[523] = new Array("018a","","12","670.4.038.1A","Candela","Spark plug","Bougie","Zündkerze","Bujia","","2");
parti[524] = new Array("018a","","13","741.1.012.1A","Passatubo","Hose guide","Passe-tube","Leitungsführung","Pasatubo","","6");
parti[525] = new Array("018a","","14","850.4.067.1A","Fascetta","Clamp","Collier","Schelle","Abrazadera","","11");
parti[526] = new Array("018a","","15","741.4.038.1A","Passatubo","Hose guide","Passe-tube","Leitungsführung","Pasatubo","","23");
parti[527] = new Array("018a","","16","8000.53724","Passatubo","Hose guide","Passe-tube","Leitungsführung","Pasatubo","","10");
parti[528] = new Array("018a","","17","0691.91.030","Passatubo","Hose guide","Passe-tube","Leitungsführung","Pasatubo","","23");
parti[529] = new Array("018a","","18","855.5.000.1B","Rosetta elastica","Spring washer","Rosette élastique","Federscheibe","Arandela de presión","","1");
parti[530] = new Array("018a","","19","772.1.050.1C","Vite","Screw","Vis","Schraube","Tornillo","","1");
parti[531] = new Array("018a","","20","516.4.004.2B","Claxon","Horn","Klaxon","Hupe","Claxon","","1");
parti[532] = new Array("018a","","21","510.1.570.1A","Cavo acquisizione dati","Data acquisition cable","Câble de saisie des données","Cable adquisición datos","Datenerfassungskabel","","1");
parti[533] = new Array("018a","","22","771.1.229.1A","Vite","Screw","Vis","Schraube","Tornillo","","1");
parti[534] = new Array("018a","","23","286.1.117.1I","Centralina DTC","DTC unit","Centrale DTC","DTC Steuergehäuse","Centralita DTC","","1");
parti[535] = new Array("019","","1","748.1.036.1A","Dado","Nut","Ecrou","Mutter","Tuerca","","2");
parti[536] = new Array("019","","2","460.1.286.2B","Paracalore","Heat guard","Pare-chaleur","Wärmeschutz","Protección calor","","1");
parti[537] = new Array("019","","3","748.1.024.1A","Dado","Nut","Ecrou","Mutter","Tuerca","","6");
parti[538] = new Array("019","","4","790.1.015.1A","Guarnizione scarico","Exhaust gasket","Joint de décharge","Auspuffdichtung","Junta escape","","2");
parti[539] = new Array("019","","5","850.4.158.1A","Dado a graffetta","Nut with clip","Ecrou à collier","Klemmutter","Tuerca de grapa","","3");
parti[540] = new Array("019","","6","852.1.072.1A","Rondella","Washer","Rondelle","Unterlegscheibe","Arandela","","6");
parti[541] = new Array("019","","7","716.1.422.1A","Distanziale","Spacer","Entretoise","Distanzstück","Distancial","","6");
parti[542] = new Array("019","","8","772.1.089.3B","Vite","Screw","Vis","Schraube","Tornillo","","3");
parti[543] = new Array("019","","9","780.2.001.1A","Kit tappi","Caps kit","Kit bouchons","Verschlußkit","Kit tapón","","2");
parti[544] = new Array("019","","10","852.5.009.1A","Rosetta","Washer","Rosette","Unterlegscheibe","Arandela","","1");
parti[545] = new Array("019","","11","570.1.313.1A","Tubo scarico testa orizzontale","Horizontal head exhaust pipe","Tube de décharge tête horizontal","Auspuffrohr des waagrechten Zylinderkopfes","Tubo de escape culata horiz.","","1");
parti[546] = new Array("019","","12","552.1.111.1A","Sonda lambda","Lambda sensor","Lambda sonde","Lambda sonde","Sonda lambda","","2");
parti[547] = new Array("019","","13","799.1.263.2A","Molla","Spring","Ressort","Feder","Muelle","","5");
parti[548] = new Array("019","","14","571.1.307.2A","Tubo scarico testa verticale","Vertical head exhaust pipe","Tube de décharge tête vertical","Auspuffrohr des senkrechten Zylinderkopfes","Tubo de escape culata vertical","","1");
parti[549] = new Array("019","","15","749.4.031.1A","Dado","Nut","Ecrou","Mutter","Tuerca","","1");
parti[550] = new Array("019","","16","852.1.186.1A","Rosetta","Washer","Rosette","Unterlegscheibe","Arandela","","2");
parti[551] = new Array("019","","17","772.5.038.1AB","Vite","Screw","Vis","Schraube","Tornillo","","1");
parti[552] = new Array("019","","18","716.1.414.1A","Distanziale","Spacer","Entretoise","Distanzstück","Distancial","","2");
parti[553] = new Array("019","","19","764.1.064.1A","Gommino antivibrante","Vibration damper pad","Joint en caoutchouc anti-vibration","Schwingungsdämpfergummi","Junta de goma anti-vibración","","1");
parti[554] = new Array("019","","20","732.2.028.1A","Assieme cavi","Cables unit","Ens. câbles","Zusam. Kabel","Conjunto cables","","1");
parti[555] = new Array("019","","21","771.5.640.8B","Vite","Screw","Vis","Schraube","Tornillo","","3");
parti[556] = new Array("019","","22","716.1.144.1A","Distanziale","Spacer","Entretoise","Distanzstück","Distancial","","1");
parti[557] = new Array("019","","23","799.4.009.1A","Molla a tazza","Spring washer","Belleville","Tellerfeder","Arandela de muelle","","2");
parti[558] = new Array("019","","24","570.1.314.1A","Tubo scarico centrale","Centre exhaust pipe","Tuyau d'échappement central","Mittleres Auspuffrohr","Tubo escape central","","1");
parti[559] = new Array("019","","25","748.1.035.1B","Dado","Nut","Ecrou","Mutter","Tuerca","","1");
parti[560] = new Array("019","","26","460.1.293.1A","Protezione","Protection","Protection","Schutz","Protección","","1");
parti[561] = new Array("019","","27","771.5.661.8B","Vite","Screw","Vis","Schraube","Tornillo","","2");
parti[562] = new Array("019","","28","573.1.324.2A","Silenziatore","Silencer ","Silencieux ","Schalldämpfer ","Silenciador ","","2");
parti[563] = new Array("019","","29","771.5.725.8B","Vite","Screw","Vis","Schraube","Tornillo","","1");
parti[564] = new Array("019","","30","741.1.047.1A","Fascetta","Clamp","Collier","Schelle","Abrazadera","","2");
parti[565] = new Array("019","","31","749.4.112.8B","Dado","Nut","Ecrou","Mutter","Tuerca","","2");
parti[566] = new Array("019","","32","788.1.083.1A","Guarnizione fascetta","Clamp gasket","Garniture collier","Schelledichtung","Junta abrazadera","","2");
parti[567] = new Array("019","","33","764.1.001.1A","Gommino","Rubber pad","Joint en caoutchouc","Gummistück","Junta de goma","","2");
parti[568] = new Array("019","","34","713.1.436.1A","Boccola","Bush","Douille","Buchse","Casquillo","","1");
parti[569] = new Array("019","","35","773.5.506.8B","Vite","Screw","Vis","Schraube","Tornillo","","1");
parti[570] = new Array("019","","36","460.2.359.1A","Paracalore","Heat guard","Pare-chaleur","Wärmeschutz","Protección calor","","1");
parti[571] = new Array("019","","37","571.1.306.1A","Collettore di scarico (verticale)","Exhaust manifold (vertical)","Collecteur d'echappement (vertical)","Auspuffkrümmer (senkrechter)","Colector de escape (vertical)","","1");
parti[572] = new Array("019","","38","460.1.275.1A","Protezione","Protection","Protection","Schutz","Protección","","1");
parti[573] = new Array("019","","39","462.4.046.1A","Rosetta elastica","Spring washer","Rosette élastique","Federscheibe","Arandela de presión","","2");
parti[574] = new Array("019","","40","775.5.016.1A","Vite","Screw","Vis","Schraube","Tornillo","","2");
parti[575] = new Array("019","","41","881.1.078.1A","Guidacavo","Cable guide","Guide-câble","Kabelführung","Guía-cable","","1");
parti[576] = new Array("019","","42","764.1.105.1A","Gommino","Rubber pad","Joint en caoutchouc","Gummistück","Junta de goma","","1");
parti[577] = new Array("019","","43","716.1.412.1A","Distanziale","Spacer","Entretoise","Distanzstück","Distancial","","1");
parti[578] = new Array("019","","44","741.1.048.2A","Distanziale","Spacer","Entretoise","Distanzstück","Distancial","","1");
parti[579] = new Array("019","","45","460.1.405.1A","Protezione termoriflettente","Heat-reflecting protection","Protection thermo-réfléchissante","Wärmerückstrahlender Schutz","Protección termo-reflectante","","1");
parti[580] = new Array("019","","46","850.4.038.1A","Dado a graffetta","Nut with clip","Ecrou à collier","Klemmutter","Tuerca de grapa","","1");
parti[581] = new Array("019","","47","771.5.663.8B","Vite","Screw","Vis","Schraube","Tornillo","","1");
parti[582] = new Array("020","","1","764.1.064.1A","Gommino antivibrante","Vibration damper pad","Joint en caoutchouc anti-vibration","Schwingungsdämpfergummi","Junta de goma anti-vibración","","2");
parti[583] = new Array("020","","2","830.1.416.1A","Supporto fanale (superiore)","Headlight holder (upper)","Supporte phare (supérieur)","Scheinwerferhalterung (höher)","Soporte faro (superior)","","2");
parti[584] = new Array("020","","3","827.1.544.1A","Supporto connettore","Connector holder","Support connecteur","Verbinderhalterung","Soporte conector","","1");
parti[585] = new Array("020","","4","852.1.176.1A","Rosetta","Washer","Rosette","Unterlegscheibe","Arandela","","2");
parti[586] = new Array("020","","5","771.1.039.1A","Vite","Screw","Vis","Schraube","Tornillo","","2");
parti[587] = new Array("020","","6","772.1.061.1A","Vite","Screw","Vis","Schraube","Tornillo","","4");
parti[588] = new Array("020","","7","771.5.651.8B","Vite","Screw","Vis","Schraube","Tornillo","","2");
parti[589] = new Array("020","","8","827.1.493.1A","Piastrino","Plate","Plaquette","Plättchen","Lámina","","2");
parti[590] = new Array("020","","9","530.1.022.4A","Indicatore di direzione (anteriore) (sinistro)","Turn indicator (front) (L.H.)","Clignotant (avant) (gauche)","Fahrtrichtungsanzeige (vorderes) (link)","Indicador de dirección (delantero) (izquierdo)","","1");
parti[591] = new Array("020","","10","390.4.021.1A","Lampada 12V-10W RY10W","Bulb 12V-10W RY10W","Lampe 12V-10W RY10W","Birne 12V-10W RY10W","Lámpara 12V-10W RY10W","","2");
parti[592] = new Array("020","","11","758.1.032.1A","Passacavo","Fairlead","Passe-câble","Kabeldurchführung","Pasa-cable","","1");
parti[593] = new Array("020","","12","520.1.018.2A","Proiettore (anteriore)","Headlight (front)","Projecteur avant (avant)","Scheinwerfer (vorderes)","Faro delantero (delantero)","","1");
parti[594] = new Array("020","","13","700.1.048.1B","Antivibrante","Vibration damper","Antivibration","Schwingungsdämpfer","Anti-vibración","","2");
parti[595] = new Array("020","","14","750.5.001.1B","Dado","Nut","Ecrou","Mutter","Tuerca","","2");
parti[596] = new Array("020","","15","829.1.A22.1AA","Supporto fanale (sinistro)","Headlight holder (L.H.)","Support phare (gauche)","Scheinwerferhalterung (link)","Soporte faro (izquierdo)","","1");
parti[597] = new Array("020","","16","829.1.A21.1AA","Supporto fanale (centrale)","Headlight holder (centre)","Support phare (central)","Scheinwerferhalterung (Mittleres)","Soporte faro (central)","","1");
parti[598] = new Array("020","","17","775.1.033.1A","Vite","Screw","Vis","Schraube","Tornillo","","2");
parti[599] = new Array("020","","18","850.4.047.1A","Dado a graffetta","Nut with clip","Ecrou à collier","Klemmutter","Tuerca de grapa","","2");
parti[600] = new Array("020","","19","774.4.004.1A","Vite","Screw","Vis","Schraube","Tornillo","","3");
parti[601] = new Array("020","","20","390.4.026.1A","Calotta","Cap","Calotte","Kappe","Casquete","","1");
parti[602] = new Array("020","","21","390.4.027.1A","Guarnizione","Gasket","Garniture","Dichtung","Junta","","1");
parti[603] = new Array("020","","22","390.4.029.1A","Lampada","Bulb","Lampe","Birne","Lámpara","","1");
parti[604] = new Array("020","","23","829.1.A23.1AA","Supporto fanale (destro)","Headlight holder (R.H.)","Support phare (droit)","Scheinwerferhalterung (recht)","Soporte faro (derecho)","","1");
parti[605] = new Array("020","","24","530.1.023.4A","Indicatore di direzione (anteriore) (destro)","Turn indicator (front) (R.H.)","Clignotant (avant) (droit)","Fahrtrichtungsanzeige (vorderes) (recht)","Indicador de dirección (delantero) (derecho)","","1");
parti[606] = new Array("020","","25","775.5.001.3C","Vite","Screw","Vis","Schraube","Tornillo","","2");
parti[607] = new Array("020","","26","247.1.335.1A","Coperchio cruscotto","Instrument panel cover","Couvercle tableau de bord","Deckler des instrumentenbrett","Tapa tablero de instrumentos","","1");
parti[608] = new Array("020","","27","406.1.097.1A","Cruscotto","Instrument panel","Tableau de bord","Instrumentenbrett","Tablero de instrumentos","","1");
parti[609] = new Array("020","","28","830.1.411.1A","Supporto fanale (inferiore)","Headlight holder (bottom)","Supporte phare (inférieur)","Scheinwerferhalterung (unterst)","Soporte faro (inferior)","","1");
parti[610] = new Array("020","","29","552.4.012.1A","Sensore temperatura aria","Air temperature sensor","Capteur température air","Lufttemperatursensor","Sensor temperatura aire","","1");
parti[611] = new Array("020","","30","764.1.097.1A","Gommino","Rubber pad","Joint en caoutchouc","Gummistück","Junta de goma","","1");
parti[612] = new Array("020","","31","827.1.538.1A","Supporto sensore","Holder sensor","Support capteur","Sensorhalterung","Soporte sensor","","1");
parti[613] = new Array("020","","32","855.5.000.1B","Rosetta elastica","Spring washer","Rosette élastique","Federscheibe","Arandela de presión","","2");
parti[614] = new Array("020","","33","741.4.193.1A","Fascetta","Clamp","Collier","Schelle","Abrazadera","","1");
parti[615] = new Array("020","","34","713.1.459.2A","Distanziale (sinistro)","Spacer (L.H.)","Entretoise (gauche)","Distanzstück (link)","Distancial (izquierdo)","","1");
parti[616] = new Array("020","","35","713.1.458.2A","Distanziale (destro)","Spacer (R.H.)","Entretoise (droit)","Distanzstück (recht)","Distancial (derecho)","","1");
parti[617] = new Array("020","","36","764.1.110.1A","Gomma protezione","Protection rubber","Caoutchouc de protection","Schutzgummi","Goma protección","","1");
parti[618] = new Array("021","","1","747.5.003.1A","Dado","Nut","Ecrou","Mutter","Tuerca","","2");
parti[619] = new Array("021","","2","779.1.298.1A","Vite speciale","Special screw","Vis spéciale","Spezialschraube","Tornillo especial","","2");
parti[620] = new Array("021","","3","342.2.056.1A","Base di sterzo con perno","Steering head base with pin","Socle de direction avec pivot","Gabelkopf mit Bolzen","Tija inferior con perno","","1");
parti[621] = new Array("021","","4","773.1.002.1A","Vite","Screw","Vis","Schraube","Tornillo","","2");
parti[622] = new Array("021","","5","930.1.004.1B","Anello di tenuta","Seal ring","Bague d'étanchéité","Dichtring","Anillo de retén","","2");
parti[623] = new Array("021","","6","702.4.123.1A","Cuscinetto","Bearing","Roulement","Lager","Cojinete","","2");
parti[624] = new Array("021","","7","771.5.725.8B","Vite","Screw","Vis","Schraube","Tornillo","","10");
parti[625] = new Array("021","","8","523.4.022.2A","Specchio retrovisore (destro)","Rear-view mirror (R.H.)","Rétroviseur (droit)","Rückspiegel (recht)","Espejo retrovisor (derecho)","","1");
parti[626] = new Array("021","","9","523.4.023.2A","Specchio retrovisore (sinistro)","Rear-view mirror (L.H.)","Rétroviseur (gauche)","Rückspiegel (link)","Espejo retrovisor (izquierdo)","","1");
parti[627] = new Array("021","","10","700.1.054.1A","Antivibrante","Vibration damper","Antivibration","Schwingungsdämpfer","Anti-vibración","","2");
parti[628] = new Array("021","","11","748.4.024.1AB","Dado","Nut","Ecrou","Mutter","Tuerca","","2");
parti[629] = new Array("021","","12","703.1.013.1A","Ghiera","Ring nut","Embout","Nutmutter","Tuerca","","1");
parti[630] = new Array("021","","13","771.5.727.8B","Vite","Screw","Vis","Schraube","Tornillo","","3");
parti[631] = new Array("021","","14","651.1.011.2C","Commutatore (sinistro)","Switch (L.H.)","Commutateur (gauche)","Lenkerschalter (link)","Conmutador (izquierdo)","","1");
parti[632] = new Array("021","","15","852.5.040.1A","Rosetta","Washer","Rosette","Unterlegscheibe","Arandela","","2");
parti[633] = new Array("021","","16","360.1.136.2AA","Manubrio","Handlebar","Guidon","Lenker","Manillar","","1");
parti[634] = new Array("021","","17","771.1.374.1A","Vite","Screw","Vis","Schraube","Tornillo","","1");
parti[635] = new Array("021","","18","598.4.029.1A","Chiave senza Transponder","Wrench without Transponder","Clè sans Transponder","Schlussel ohne Transponder","Llave sin Transponder","","1");
parti[636] = new Array("021","","19","771.1.373.1A","Vite (sinistra)","Screw (L.H.)","Vis (gauche)","Schraube (linker)","Tornillo (izquierda)","","1");
parti[637] = new Array("021","","20","654.2.016.1A","Comando gas","Throttle control","Contrôle gaz","Gassteuerung","Mando acelerador","","1");
parti[638] = new Array("021","","21","872.1.058.1A","Tappo","Cap","Bouchon","Verschluß","Tapón","","2");
parti[639] = new Array("021","","22","851.4.006.1A","Rosetta elastica","Spring washer","Rosette élastique","Federscheibe","Arandela de presión","","2");
parti[640] = new Array("021","","23","341.2.091.2AA","Testa di sterzo","Steering head","Tête de direction","Gabelkopf","Tija superior","","1");
parti[641] = new Array("021","","24","360.1.102.2A","Cavallotto unico (superiore)","Single U-bolt (upper)","Cavalier unique (supérieur)","Einzelner Bügelbolzen (höher)","Anclaje único (superior)","","1");
parti[642] = new Array("021","","25","650.1.009.2I","Commutatore (destro)","Switch (R.H.)","Commutateur (droit)","Lenkerschalter (recht)","Conmutador (derecho)","","1");
parti[643] = new Array("021","","26","656.2.097.1A","Assieme cavi","Cables unit","Ens. câbles","Zusam. Kabel","Conjunto cables","","1");
parti[644] = new Array("021","","27","700.1.063.1A","Antivibrante","Vibration damper","Antivibration","Schwingungsdämpfer","Anti-vibración","","1");
parti[645] = new Array("021","","28","866.1.116.1A","Tampone","Pad","Tampon","Stopfen","Apoyo","","1");
parti[646] = new Array("021","","29","598.4.034.1A","Chiave con Transponder","Wrench with Transponder","Clè avec Transponder","Schlussel mit Transponder","Llave con Transponder","","1");
parti[647] = new Array("021","","30","652.4.021.1A","Commutatore","Switch","Commutateur","Lenkerschalter","Conmutador","","1");
parti[648] = new Array("021","","31","360.1.135.1AA","Cavallotto unico (inferiore)","Single U-bolt (bottom)","Cavalier unique (inférieur)","Einzelner Bügelbolzen (unterst)","Anclaje único (inferior)","","1");
parti[649] = new Array("021","","32","779.1.706.1AA","Vite speciale","Special screw","Vis spéciale","Spezialschraube","Tornillo especial","","2");
parti[650] = new Array("021","","33","518.4.005.1B","Antenna","Antenna","Antenne","Antenne","Antena","","1");
parti[651] = new Array("021","","34","771.5.940.8B","Vite","Screw","Vis","Schraube","Tornillo","","2");
parti[652] = new Array("021","","35","852.1.049.1B","Rosetta","Washer","Rosette","Unterlegscheibe","Arandela","","2");
parti[653] = new Array("021a","","1","344.2.043.1B","Assieme gamba (destra)","Fork leg assembly (R.H.)","Ensemble fourche (droite)","Federbein komplett (rechter)","Grupo tubo horquilla (derecha)","","1");
parti[654] = new Array("021a","","2","345.2.043.1B","Assieme gamba (sinistra)","Fork leg assembly (L.H.)","Ensemble fourche (gauche)","Federbein komplett (linker)","Grupo tubo horquilla (izquierda)","","1");
parti[655] = new Array("021a","","3","349.2.096.1A","Tappo completo","Complete cap","Bouchon complet","Verschluß komplett","Tapón completo","","2");
parti[656] = new Array("021a","","4","349.2.092.1A","Tubo portante","Stanchion tube","Tube porteur","Tauchrohr","Tubo portador","","2");
parti[657] = new Array("021a","","5","349.1.328.1A","Raschiapolvere","Dust seal","Racle-poussière","Staubabstreifer","Guardapolvo","","2");
parti[658] = new Array("021a","","6","349.1.368.1A","Molla","Spring","Ressort","Feder","Muelle","","2");
parti[659] = new Array("021a","","7","349.1.144.1A","Anello di fermo","Check ring","Bague d'arrêt","Sicherungsring","Anillo de bloqueo","","2");
parti[660] = new Array("021a","","8","349.1.369.1A","Tubetto di precarica","Preload tube","Tube de précharge","Vorspannrohr","Tubo de pre-carga","","2");
parti[661] = new Array("021a","","9","349.1.146.1A","Anello di tenuta","Seal ring","Bague d'étanchéité","Dichtring","Anillo de retén","","2");
parti[662] = new Array("021a","","10","349.1.347.1A","Boccola","Bush","Douille","Buchse","Casquillo","","2");
parti[663] = new Array("021a","","11","349.2.106.1A","Tubo ammortizzatore","Damper tube","Tuyau amortisseur","Stoßdämpferrohr","Tubo amortiguador","","2");
parti[664] = new Array("021a","","12","349.1.249.1A","Vite speciale","Special screw","Vis spéciale","Spezialschraube","Tornillo especial","","2");
parti[665] = new Array("021a","","13","349.1.001.1A","Rondella speciale","Special washer","Rondelle spéciale","Spezial-Unterlegscheibe","Arandela especial","","2");
parti[666] = new Array("021a","","14","349.1.334.1A","Vite","Screw","Vis","Schraube","Tornillo","","2");
parti[667] = new Array("021a","","15","349.2.108.1A","Gruppo piedino + canna forcella (destro)","Fork bottom end + sleeve unit (R.H.)","Unitè pied de forche + fourreau (droit)","Gabelfuß und -rohreinheit (recht)","Grupo pie + tubo externo (derecho)","","1");
parti[668] = new Array("021a","","16","349.2.107.1A","Gruppo piedino + canna forcella (sinistro)","Fork bottom end + sleeve unit (L.H.)","Unitè pied de forche + fourreau (gauche)","Gabelfuß und -rohreinheit (link)","Grupo pie + tubo externo (izquierdo)","","1");
parti[669] = new Array("021a","","17","349.1.150.1A","Boccola inferiore","Lower bush","Douille inférieure","Untere Buchse","Casquillo inferior","","2");
parti[670] = new Array("021a","","18","349.2.067.1A","Vite di regolazione","Adjusting screw","Vis de réglage","Einstellschraube","Tornillo de regulación","","2");
parti[671] = new Array("021a","","19","349.1.315.1A","Dado","Nut","Ecrou","Mutter","Tuerca","","2");
parti[672] = new Array("021a","","20","349.1.147.1A","Anello OR","O-Ring","Bague d'étanchéité","O-Ring","Anillo OR","","2");
parti[673] = new Array("021a","","21","349.1.250.1A","Anello OR","O-Ring","Bague d'étanchéité","O-Ring","Anillo OR","","2");
parti[674] = new Array("021a","","22","349.1.151.1A","Boccola superiore","Upper bush","Douille supérieure","Obere Buchse","Casquillo superior","","2");
parti[675] = new Array("021a","","23","349.1.152.1A","Scodellino","Retainer","Cuvette","Teller","Platillo","","2");
parti[676] = new Array("021a","","24","349.1.370.1A","Anello OR","O-Ring","Bague d'étanchéité","O-Ring","Anillo OR","","2");
parti[677] = new Array("021a","","25","349.1.350.1A","Kit revisione","Overhaul kit","Collection reparation","Reparaturkit","Kit revision","","1");
parti[678] = new Array("021a","","26","349.1.351.1A","Kit tenuta","Seal kit","Kit joints d'etanchèitè","Dichtungskit","Kit estanqeidad","","1");
parti[679] = new Array("021a","","27","529.1.001.2A","Catadiottro (AMBRA)","Cat's eye (AMBER)","Catadioptre (AMBRE)","Rückstrahler (BERNSTEIN)","Catadióptrico (ÁMBAR)","","2");
parti[680] = new Array("022","","1","470.1.216.2AA","Telaio (ROSSO)","Frame (RED)","Cadre (ROUGE)","Rahmen (ROT)","Chasis (ROJO)","","1");
parti[681] = new Array("022","","1","470.1.216.2AB","Telaio (RACINGBLACK)","Frame (RACINGBLACK)","Cadre (RACINGBLACK)","Rahmen (RACINGBLACK)","Chasis (RACINGBLACK)","","1");
parti[682] = new Array("022","","2","748.4.002.1A","Dado","Nut","Ecrou","Mutter","Tuerca","","2");
parti[683] = new Array("022","","3","799.1.166.1B","Molla","Spring","Ressort","Feder","Muelle","","2");
parti[684] = new Array("022","","4","821.1.051.1AB","Perno","Pin","Pivot","Zapfen","Perno","","2");
parti[685] = new Array("022","","5","464.1.056.1A","Pedana (anteriore) (destra)","Foot peg (front) (R.H.)","Repose-pied (avant) (droite)","Fussraste (vorderes) (rechter)","Estribera (delantero) (derecha)","","1");
parti[686] = new Array("022","","6","775.1.051.1B","Vite","Screw","Vis","Schraube","Tornillo","","2");
parti[687] = new Array("022","","7","772.1.087.1CA","Vite speciale","Special screw","Vis spéciale","Spezialschraube","Tornillo especial","","4");
parti[688] = new Array("022","","8","117.1.088.2A","Astina rinvio cambio","Gearbox transmission rod","Tige renvoi boîte de vitesses","Stab für Wechselgetriebevorgelege","Varilla reenvío cambio","","1");
parti[689] = new Array("022","","9","824.1.155.1A","Piastra portapedana (anteriore) (destra)","Foot peg holder plate (front) (R.H.)","Plaque porte-repose-pied (avant) (droite)","Platte für Fußrastenhalter (vorderes) (rechter)","Soporte estribera (delantero) (derecha)","","1");
parti[690] = new Array("022","","10","884.5.003.1A","Anello seeger","Circlip","Circlip","Seegerring","Anillo seeger","","2");
parti[691] = new Array("022","","11","460.1.331.1A","Paratacco (anteriore) (sinistro)","Heel guard (front) (L.H.)","Pare-talon (avant) (gauche)","Fersenschutz (vorderes) (link)","Protección taco (delantero) (izquierdo)","","1");
parti[692] = new Array("022","","12","464.1.055.1A","Pedana (anteriore) (sinistra)","Foot peg (front) (L.H.)","Repose-pied (avant) (gauche)","Fussraste (vorderes) (linker)","Estribera (delantero) (izquierda)","","1");
parti[693] = new Array("022","","13","821.1.170.1B","Perno","Pin","Pivot","Zapfen","Perno","","1");
parti[694] = new Array("022","","14","771.5.667.8B","Vite","Screw","Vis","Schraube","Tornillo","","2");
parti[695] = new Array("022","","15","852.1.151.1A","Rosetta","Washer","Rosette","Unterlegscheibe","Arandela","","1");
parti[696] = new Array("022","","16","848.5.001.1A","Snodo sferico","Ball joint","joint à rotule","Kugelgelenk","Articulación esférica","","1");
parti[697] = new Array("022","","17","712.1.034.1A","Boccola","Bush","Douille","Buchse","Casquillo","","1");
parti[698] = new Array("022","","18","764.1.011.2A","Gommino","Rubber pad","Joint en caoutchouc","Gummistück","Junta de goma","","1");
parti[699] = new Array("022","","19","456.1.203.1A","Leva comando cambio","Gearchange lever","Levier de commande vitesses","Schalthebel","Leva mando cambio","","1");
parti[700] = new Array("022","","20","456.1.212.1AA","Levetta comando cambio","Gearchange control lever","Levier de commande vitesses","Schalthebelchen","Leva mando cambio","","1");
parti[701] = new Array("022","","21","749.4.004.1A","Dado","Nut","Ecrou","Mutter","Tuerca","","2");
parti[702] = new Array("022","","22","848.5.002.1A","Snodo sferico","Ball joint","joint à rotule","Kugelgelenk","Articulación esférica","","1");
parti[703] = new Array("022","","23","747.5.010.1A","Dado","Nut","Ecrou","Mutter","Tuerca","","1");
parti[704] = new Array("022","","24","779.1.484.2B","Vite speciale","Special screw","Vis spéciale","Spezialschraube","Tornillo especial","","2");
parti[705] = new Array("022","","25","764.1.051.1A","Gommino","Rubber pad","Joint en caoutchouc","Gummistück","Junta de goma","","1");
parti[706] = new Array("022","","26","764.1.050.1A","Gommino","Rubber pad","Joint en caoutchouc","Gummistück","Junta de goma","","1");
parti[707] = new Array("022","","27","886.4.116.1A","Guarnizione OR","O-ring","Joint d'étanchéité","Dichtung OR","Junta OR","","2");
parti[708] = new Array("022","","28","824.1.154.1A","Piastra portapedana (anteriore) (sinistra)","Foot peg holder plate (front) (L.H.)","Plaque porte-repose-pied (avant) (gauche)","Platte für Fußrastenhalter (vorderes) (linker)","Soporte estribera (delantero) (izquierda)","","1");
parti[709] = new Array("022","","29","747.5.001.1AB","Dado (sinistro)","Nut (L.H.)","Ecrou (gauche)","Mutter (link)","Tuerca (izquierdo)","","1");
parti[710] = new Array("022","","30","771.1.019.1A","Vite","Screw","Vis","Schraube","Tornillo","","1");
parti[711] = new Array("022","","31","713.1.955.1AA","Distanziale","Spacer","Entretoise","Distanzstück","Distancial","","4");
parti[712] = new Array("022a","","1","556.2.063.1AA","Piastra","Plate","Plaque","Platte","Soporte","","1");
parti[713] = new Array("022a","","2","771.1.043.1A","Vite","Screw","Vis","Schraube","Tornillo","","2");
parti[714] = new Array("022a","","3","556.1.062.1AB","Cavalletto laterale (NERO)","Side stand (BLACK)","Béquille laterale (NOIR)","Seitenständer (SCHWARZ)","Caballete lateral (NEGRO)","","1");
parti[715] = new Array("022a","","4","779.4.005.3A","Vite","Screw","Vis","Schraube","Tornillo","","1");
parti[716] = new Array("022a","","5","539.1.023.4B","Interruttore cavalletto","Stand switch","Contacteur béquille","Seitenständerschalter","Interruptor caballete","","1");
parti[717] = new Array("022a","","6","799.1.158.1B","Molla interna","Inner spring","Ressort interne","Innere Feder","Muelle interior","","1");
parti[718] = new Array("022a","","7","799.2.159.1B","Molla completa","Complete spring","Ressort complet","Komplette Feder","Muelle completo","","1");
parti[719] = new Array("022a","","8","829.1.260.2A","Piastrino","Plate","Plaquette","Plättchen","Lámina","","1");
parti[720] = new Array("022a","","9","821.1.103.2A","Perno di rotazione","Pivot","Pivot de rotation","Drehbolzen","Perno de rotación","","1");
parti[721] = new Array("022a","","10","750.1.048.1A","Dado","Nut","Ecrou","Mutter","Tuerca","","1");
parti[722] = new Array("023","","1","630.4.048.2A","Pompa comando frizione","Clutch drive pump","Pompe commande embrayage","Kupplungssteuerungspumpe","Bomba mando embrague","","1");
parti[723] = new Array("023","","2","631.4.034.1A","Leva comando frizione","Clutch control lever","Levier de commande embrayage","Kupplungshebel","Leva mando embrague","","1");
parti[724] = new Array("023","","3","187.1.002.1A","Spurgo","Bleed","Vidange","Ablaß","Purga","","1");
parti[725] = new Array("023","","4","612.4.005.1A","Parapolvere","Dust seal","Protection anti-poussières","Staubschutz","Guardapolvo","","1");
parti[726] = new Array("023","","5","779.1.397.1A","Vite speciale","Special screw","Vis spéciale","Spezialschraube","Tornillo especial","","1");
parti[727] = new Array("023","","6","632.4.054.1A","Tubo comando frizione (TRECCIA METALLICA)","Clutch control pipe (METAL PLAITED)","Tube commande embrayage (TRESSE METALLIQUE)","Kupplungssteuerungsleitung (DRAHTGEFLECHT)","Tubo mando embrague (TREZA METALICA)","","1");
parti[728] = new Array("023","","7","779.1.092.1A","Vite","Screw","Vis","Schraube","Tornillo","","1");
parti[729] = new Array("023","","8","0370.72.020","Gommino antivibrante","Vibration damper pad","Joint en caoutchouc anti-vibration","Schwingungsdämpfergummi","Junta de goma anti-vibración","","1");
parti[730] = new Array("023","","9","829.1.978.1A","Staffa","Bracket","Bride","Bügel","Soporte","","1");
parti[731] = new Array("023","","10","773.5.062.3B","Vite","Screw","Vis","Schraube","Tornillo","","1");
parti[732] = new Array("023","","11","893.4.008.1A","Tappo","Cap","Bouchon","Verschluß","Tapón","","1");
parti[733] = new Array("023","","12","585.4.010.1A","Serbatoio olio completo","Complete oil tank","Réservoir d'huile complet","Kompletter Öltank","Depósito aceite completo","","1");
parti[734] = new Array("023","","13","8000.56443","Dado","Nut","Ecrou","Mutter","Tuerca","","1");
parti[735] = new Array("023","","14","741.4.043.1A","Passatubo","Hose guide","Passe-tube","Leitungsführung","Pasatubo","","2");
parti[736] = new Array("023","","15","877.1.138.1A","Tubo","Tube","Tube","Rohr","Tubo","","1");
parti[737] = new Array("023","","16","779.1.366.1AB","Vite speciale","Special screw","Vis spéciale","Spezialschraube","Tornillo especial","","1");
parti[738] = new Array("023","","17","852.5.024.1A","Guarnizione sp.1","Gasket th.1","Garniture èp.1","Dichtung stàrke 1","Junta esp.1","","4");
parti[739] = new Array("023","","18","626.4.056.1A","Perno","Pin","Pivot","Zapfen","Perno","","1");
parti[740] = new Array("023","","19","626.4.066.1A","Ricambio cavallotto","Spare bracket","Kit cavalier","Ersatzteil Bock","Recambio fijación","","1");
parti[741] = new Array("023","","20","631.4.028.1A","Ricambio spurgo","Spare bleed union","Kit vidange","Ersatzteil Ablaß","Recambio purga","","1");
parti[742] = new Array("023","","21","539.4.036.1A","Microinterruttore","Microswitch","Micro-interrupteur","Mikroschalter","Microinterruptor","","1");
parti[743] = new Array("023","","22","631.4.008.1A","Ricambio raccordo","Spare union","Raccord de rechange","Ersatzteil Anschluß","Recambio empalme","","1");
parti[744] = new Array("023","","23","852.1.250.1A","Distanziale","Spacer","Entretoise","Distanzstück","Distancial","","1");
parti[745] = new Array("024","","1","624.4.057.2A","Pompa freno anteriore","Front brake pump","Pompe frein AV.","Pumpe für Vorderradbremse","Bomba freno delantero","","1");
parti[746] = new Array("024","","2","631.4.033.1A","Leva comando freno","Brake control lever","Levier de commande frein","Bremshebel","Leva mando freno","","1");
parti[747] = new Array("024","","3","779.1.415.1A","Vite speciale","Special screw","Vis spéciale","Spezialschraube","Tornillo especial","","1");
parti[748] = new Array("024","","4","852.5.024.1A","Guarnizione sp.1","Gasket th.1","Garniture èp.1","Dichtung stàrke 1","Junta esp.1","","7");
parti[749] = new Array("024","","5","539.4.035.1A","Microinterruttore","Microswitch","Micro-interrupteur","Mikroschalter","Microinterruptor","","1");
parti[750] = new Array("024","","6","631.4.008.1A","Ricambio raccordo","Spare union","Raccord de rechange","Ersatzteil Anschluß","Recambio empalme","","1");
parti[751] = new Array("024","","7","626.4.056.1A","Perno","Pin","Pivot","Zapfen","Perno","","1");
parti[752] = new Array("024","","8","613.4.093.1A","Coppia pastiglie","Pads pair","Paire de plaquettes","Paar Bremsbeläge","Par pastillas","","2");
parti[753] = new Array("024","","9","610.4.121.1AB","Pinza freno (sinistra)","Brake caliper (L.H.)","Pince frein (gauche)","Bremszange (linker)","Pinza freno (izquierda)","","1");
parti[754] = new Array("024","","10","773.5.062.3B","Vite","Screw","Vis","Schraube","Tornillo","","1");
parti[755] = new Array("024","","11","829.1.979.1A","Staffa","Bracket","Bride","Bügel","Soporte","","1");
parti[756] = new Array("024","","12","0370.72.020","Gommino antivibrante","Vibration damper pad","Joint en caoutchouc anti-vibration","Schwingungsdämpfergummi","Junta de goma anti-vibración","","1");
parti[757] = new Array("024","","13","779.1.092.1A","Vite","Screw","Vis","Schraube","Tornillo","","1");
parti[758] = new Array("024","","14","893.4.007.1A","Tappo serbatoio","Tank cap","Bouchon de réservoir","Tankverschluß","Tapón depósito","","1");
parti[759] = new Array("024","","15","585.4.011.1A","Serbatoio olio completo","Complete oil tank","Réservoir d'huile complet","Kompletter Öltank","Depósito aceite completo","","1");
parti[760] = new Array("024","","16","741.4.043.1A","Passatubo","Hose guide","Passe-tube","Leitungsführung","Pasatubo","","2");
parti[761] = new Array("024","","17","877.1.138.1A","Tubo","Tube","Tube","Rohr","Tubo","","1");
parti[762] = new Array("024","","18","8000.56443","Dado","Nut","Ecrou","Mutter","Tuerca","","1");
parti[763] = new Array("024","","19","618.4.095.1B","Tubo pompa pinze","Caliper pump pipe","Tube pompe pinces","Bremspumpenleitung","Tubo bomba pinzas","","1");
parti[764] = new Array("024","","20","618.4.075.1B","Tubo freno anteriore","Front brake line","Tube frein AV.","Vordere bremsleitung","Tubo freno delantero","","1");
parti[765] = new Array("024","","21","612.4.005.1A","Parapolvere","Dust seal","Protection anti-poussières","Staubschutz","Guardapolvo","","2");
parti[766] = new Array("024","","22","187.1.002.1A","Spurgo","Bleed","Vidange","Ablaß","Purga","","2");
parti[767] = new Array("024","","23","779.1.397.1A","Vite speciale","Special screw","Vis spéciale","Spezialschraube","Tornillo especial","","1");
parti[768] = new Array("024","","24","626.4.067.1A","Ricambio cavallotto","Spare bracket","Kit cavalier","Ersatzteil Bock","Recambio fijación","","1");
parti[769] = new Array("024","","25","779.1.331.1D","Vite","Screw","Vis","Schraube","Tornillo","","4");
parti[770] = new Array("024","","26","610.4.122.1AB","Pinza freno (destra)","Brake caliper (R.H.)","Pince frein (droite)","Bremszange (rechter)","Pinza freno (derecha)","","1");
parti[771] = new Array("024","","27","830.1.479.1A","Staffa","Bracket","Bride","Bügel","Soporte","","1");
parti[772] = new Array("024","","28","779.1.465.1A","Vite speciale","Special screw","Vis spéciale","Spezialschraube","Tornillo especial","","1");
parti[773] = new Array("024","","29","775.1.054.1A","Vite","Screw","Vis","Schraube","Tornillo","","1");
parti[774] = new Array("024","","30","612.4.017.1A","Lamierino","Plate","Tole","Blech","Chapa","","2");
parti[775] = new Array("024","","31","631.4.028.1A","Ricambio spurgo","Spare bleed union","Kit vidange","Ersatzteil Ablaß","Recambio purga","","1");
parti[776] = new Array("024","","32","713.1.364.1A","Distanziale","Spacer","Entretoise","Distanzstück","Distancial","","4");
parti[777] = new Array("024","","33","852.1.250.1A","Distanziale","Spacer","Entretoise","Distanzstück","Distancial","","1");
parti[778] = new Array("024","","34","552.4.265.1A","Sensore velocità","Speed sensor","Capteur vitesse","Sensor Geschwindigkeit","Sensor velocidad","","1");
parti[779] = new Array("024","","35","713.1.192.1A","Distanziale","Spacer","Entretoise","Distanzstück","Distancial","","3");
parti[780] = new Array("024","","36","758.4.060.1A","Passacavo","Fairlead","Passe-câble","Kabeldurchführung","Pasa-cable","","9");
parti[781] = new Array("024","","37","772.4.042.3C","Vite","Screw","Vis","Schraube","Tornillo","","1");
parti[782] = new Array("024","","38","758.1.069.1A","Passacavo","Fairlead","Passe-câble","Kabeldurchführung","Pasa-cable","","1");
parti[783] = new Array("024","","39","775.5.021.3C","Vite","Screw","Vis","Schraube","Tornillo","","2");
parti[784] = new Array("024","","40","612.4.014.1A","Ricambio perni e molletta","Spare pins and spring","Kit goujons et ressort","Ersatzteile Bolzen mit Feder","Recambios pernos y resorte","","2");
parti[785] = new Array("025","","1","829.1.984.1A","Piastra","Plate","Plaque","Platte","Soporte","","1");
parti[786] = new Array("025","","2","771.1.043.1A","Vite","Screw","Vis","Schraube","Tornillo","","2");
parti[787] = new Array("025","","3","852.1.151.1A","Rosetta","Washer","Rosette","Unterlegscheibe","Arandela","","1");
parti[788] = new Array("025","","4","799.1.256.1A","Molla","Spring","Ressort","Feder","Muelle","","1");
parti[789] = new Array("025","","5","539.4.003.2B","Interruttore","Switch","Interrupteur","Schalter","Interruptor","","1");
parti[790] = new Array("025","","6","457.1.047.1A","Leva comando freno (posteriore)","Brake control lever (rear)","Levier de commande frein (arriere)","Bremshebel (hinterers)","Leva mando freno (trasero)","","1");
parti[791] = new Array("025","","7","741.4.038.1A","Passatubo","Hose guide","Passe-tube","Leitungsführung","Pasatubo","","3");
parti[792] = new Array("025","","8","779.1.237.1B","Vite di regolazione","Adjusting screw","Vis de réglage","Einstellschraube","Tornillo de regulación","","1");
parti[793] = new Array("025","","9","821.1.170.1B","Perno","Pin","Pivot","Zapfen","Perno","","1");
parti[794] = new Array("025","","10","712.1.034.1A","Boccola","Bush","Douille","Buchse","Casquillo","","1");
parti[795] = new Array("025","","11","886.4.116.1A","Guarnizione OR","O-ring","Joint d'étanchéité","Dichtung OR","Junta OR","","2");
parti[796] = new Array("025","","12","764.1.011.2A","Gommino","Rubber pad","Joint en caoutchouc","Gummistück","Junta de goma","","1");
parti[797] = new Array("025","","13","821.1.273.1A","Perno","Pin","Pivot","Zapfen","Perno","","1");
parti[798] = new Array("025","","14","612.4.016.1A","Ricambio perni e molletta","Spare pins and spring","Kit goujons et ressort","Ersatzteile Bolzen mit Feder","Recambios pernos y resorte","","1");
parti[799] = new Array("025","","15","747.5.003.1A","Dado","Nut","Ecrou","Mutter","Tuerca","","2");
parti[800] = new Array("025","","16","625.4.018.1B","Pompa freno posteriore","Rear brake pump","Pompe frein AR.","Pumpe für Hinterradbremse","Bomba freno trasero","","1");
parti[801] = new Array("025","","17","741.4.043.1A","Passatubo","Hose guide","Passe-tube","Leitungsführung","Pasatubo","","2");
parti[802] = new Array("025","","18","117.1.044.1A","Asta di registro","Adjuster rod","Tige de réglage","Einstellstab","Varilla de regulación","","1");
parti[803] = new Array("025","","19","772.1.063.1A","Vite","Screw","Vis","Schraube","Tornillo","","1");
parti[804] = new Array("025","","20","184.1.010.2A","Snodo sferico","Ball joint","joint à rotule","Kugelgelenk","Articulación esférica","","1");
parti[805] = new Array("025","","21","877.1.139.1A","Tubo","Tube","Tube","Rohr","Tubo","","1");
parti[806] = new Array("025","","22","779.1.366.1AB","Vite speciale","Special screw","Vis spéciale","Spezialschraube","Tornillo especial","","2");
parti[807] = new Array("025","","23","852.5.024.1A","Guarnizione sp.1","Gasket th.1","Garniture èp.1","Dichtung stàrke 1","Junta esp.1","","4");
parti[808] = new Array("025","","24","773.5.062.8B","Vite","Screw","Vis","Schraube","Tornillo","","1");
parti[809] = new Array("025","","25","631.4.016.1A","Spurgo","Bleed","Vidange","Ablaß","Purga","","1");
parti[810] = new Array("025","","26","585.4.001.1A","Serbatoio olio completo","Complete oil tank","Réservoir d'huile complet","Kompletter Öltank","Depósito aceite completo","","1");
parti[811] = new Array("025","","27","893.4.005.1A","Tappo","Cap","Bouchon","Verschluß","Tapón","","1");
parti[812] = new Array("025","","28","619.4.042.2B","Tubo freno posteriore","Rear brake line","Tube frein AR.","Hintere Bremsleitung","Tubo freno trasero","","1");
parti[813] = new Array("025","","29","611.4.020.1A","Pinza freno posteriore","Rear brake caliper","Pince frein AR.","Hintere Bremszange","Pinza freno trasero","","1");
parti[814] = new Array("025","","30","613.4.038.1A","Coppia pastiglie","Pads pair","Paire de plaquettes","Paar Bremsbeläge","Par pastillas","","1");
parti[815] = new Array("025","","31","612.4.008.1A","Parapolvere","Dust seal","Protection anti-poussières","Staubschutz","Guardapolvo","","1");
parti[816] = new Array("025","","32","771.5.723.8B","Vite","Screw","Vis","Schraube","Tornillo","","2");
parti[817] = new Array("025","","33","713.1.192.1A","Distanziale","Spacer","Entretoise","Distanzstück","Distancial","","3");
parti[818] = new Array("025","","34","552.4.037.3E","Sensore velocità","Speed sensor","Capteur vitesse","Sensor Geschwindigkeit","Sensor velocidad","","1");
parti[819] = new Array("025","","35","771.5.665.8B","Vite","Screw","Vis","Schraube","Tornillo","","1");
parti[820] = new Array("025","","36","420.2.000.8A","Guarnizione in rame sp. 1","Copper gasket sp. 1","Garniture en cuivre sp. 1","Kupferdichtung sp. 1","Junta de cobre sp. 1","","1");
parti[821] = new Array("026","","1","748.1.014.1C","Dado","Nut","Ecrou","Mutter","Tuerca","","1");
parti[822] = new Array("026","","2","713.1.197.3A","Distanziale (sinistro)","Spacer (L.H.)","Entretoise (gauche)","Distanzstück (link)","Distancial (izquierdo)","","1");
parti[823] = new Array("026","","3","497.2.001.2A","Valvola","Valve","Soupape","Ventil","Válvula","","1");
parti[824] = new Array("026","","4","779.1.399.1A","Vite","Screw","Vis","Schraube","Tornillo","","10");
parti[825] = new Array("026","","5","492.4.101.1A","Disco freno (destro)","Brake disc (R.H.)","Disque frein (droit)","Bremsscheibe (recht)","Disco freno (derecho)","","1");
parti[826] = new Array("026","","6","759.1.009.1A","Fermaglio","Clip","Agrafe","Klammer","Bloqueo","","1");
parti[827] = new Array("026","","7","502.1.149.1AB","Cerchio ruota (posteriore)","Wheel rim (rear)","Jante roue (arriere)","Radfelge (hinterers)","Llanta rueda (trasero)","","1");
parti[828] = new Array("026","","8","702.5.045.1A","Cuscinetto","Bearing","Roulement","Lager","Cojinete","","2");
parti[829] = new Array("026","","9","714.1.332.1A","Distanziale (interno)","Spacer (internal)","Entretoise (interne)","Distanzstück (inner)","Distancial (interno)","","1");
parti[830] = new Array("026","","10","501.2.153.1AB","Cerchio ruota (anteriore)","Wheel rim (front)","Jante roue (avant)","Radfelge (vorderes)","Llanta rueda (delantero)","","1");
parti[831] = new Array("026","","11","819.1.043.1A","Perno ruota anteriore (anteriore)","Front wheel spindle (front)","Pivot roue AV. (avant)","Vorderradzapfen (vorderes)","Perno rueda delantera (delantero)","","1");
parti[832] = new Array("026","","12","492.4.119.1A","Disco freno (sinistro)","Brake disc (L.H.)","Disque frein (gauche)","Bremsscheibe (link)","Disco freno (izquierdo)","","1");
parti[833] = new Array("026","","13","750.1.159.1AA","Dado","Nut","Ecrou","Mutter","Tuerca","","1");
parti[834] = new Array("026","","14","852.1.057.1A","Rosetta","Washer","Rosette","Unterlegscheibe","Arandela","","1");
parti[835] = new Array("026","","15","714.1.027.1A","Rondella speciale","Special washer","Rondelle spéciale","Spezial-Unterlegscheibe","Arandela especial","","1");
parti[836] = new Array("026","","16","497.2.003.1A","Valvola","Valve","Soupape","Ventil","Válvula","","1");
parti[837] = new Array("026","","17","713.1.196.1A","Distanziale (destro)","Spacer (R.H.)","Entretoise (droit)","Distanzstück (recht)","Distancial (derecho)","","1");
parti[838] = new Array("026","","18","930.4.052.1A","Anello di tenuta","Seal ring","Bague d'étanchéité","Dichtring","Anillo de retén","","2");
parti[839] = new Array("026a","","1","676.2.080.1A","Kit trasmissione posteriore","Final drive kit","Kit transmission secondaire","Kit Sekundärantriebs","Kit transmisión secundaria","","1");
parti[840] = new Array("026a","","2","750.1.158.1AA","Dado","Nut","Ecrou","Mutter","Tuerca","","1");
parti[841] = new Array("026a","","3","852.1.055.1A","Rosetta","Washer","Rosette","Unterlegscheibe","Arandela","","1");
parti[842] = new Array("026a","","4","748.1.076.1A","Dado","Nut","Ecrou","Mutter","Tuerca","","5");
parti[843] = new Array("026a","","5","160.1.422.1A","Flangia portacorona","Rear sprocket flange","Bride porte-couronne","Kranzhalteflansch","Brida porta-corona","","1");
parti[844] = new Array("026a","","6","819.Z.001.1B","Perno ruota (posteriore)","Wheel spindle (rear)","Pivot de roue (arriere)","Radzapfen (hinterers)","Perno rueda (trasero)","","1");
parti[845] = new Array("026a","","7","881.1.054.1A","Anello interno","Inner ring","Bague interne","Innenliegender Ring","Anillo interior","","1");
parti[846] = new Array("026a","","8","676.4.073.1A","Catena","Chain","Chaîne","Kette","Cadena","","1");
parti[847] = new Array("026a","","9","700.1.057.1A","Parastrappi","Rubber cush drive hub","Joint flexible","Elastische Kupplung","Junta amortigüadora","","5");
parti[848] = new Array("026a","","10","494.1.151.1AA","Corona","Ring gear","Couronne","Kranz","Corona","","1");
parti[849] = new Array("026a","","11","771.1.039.1B","Vite","Screw","Vis","Schraube","Tornillo","","2");
parti[850] = new Array("026a","","12","714.1.075.1A","Distanziale","Spacer","Entretoise","Distanzstück","Distancial","","1");
parti[851] = new Array("026a","","13","756.2.008.1A","Mozzo","Hub","Moyeu","Nabe","Cubo","","1");
parti[852] = new Array("026a","","14","460.1.255.1A","Coperchietto catena","Chain cover","Carter chaîne","Kettenabdeckung","Carter cadena","","1");
parti[853] = new Array("026a","","15","852.1.159.1A","Rosetta","Washer","Rosette","Unterlegscheibe","Arandela","","1");
parti[854] = new Array("026a","","16","886.5.003.1A","Anello OR","O-Ring","Bague d'étanchéité","O-Ring","Anillo OR","","2");
parti[855] = new Array("026a","","17","825.1.038.1A","Piastra portapinza","Caliper holder plate","Plaque porte-pince","Bremszangenplatte","Lámina porta-pinza","","1");
parti[856] = new Array("026a","","18","884.5.004.1A","Anello seeger","Circlip","Circlip","Seegerring","Anillo seeger","","1");
parti[857] = new Array("026a","","19","492.4.076.1A","Disco freno posteriore","Rear brake disc","Disque frein AR.","Hintere Bremsscheibe","Disco freno trasero","","1");
parti[858] = new Array("026a","","20","759.1.008.1A","Fermaglio","Clip","Agrafe","Klammer","Bloqueo","","1");
parti[859] = new Array("026a","","21","771.1.231.1A","Vite","Screw","Vis","Schraube","Tornillo","","4");
parti[860] = new Array("026a","","22","677.4.014.1A","Giunto catena","Drive chain joint","Joint de chiane","Kettenkupplung","Empalme cadena","","1");
parti[861] = new Array("026a","","23","852.1.233.1A","Rosetta","Washer","Rosette","Unterlegscheibe","Arandela","","1");
parti[862] = new Array("026a","","24","852.1.058.2A","Rosetta","Washer","Rosette","Unterlegscheibe","Arandela","","1");
parti[863] = new Array("026a","","25","711.1.067.1A","Boccola","Bush","Douille","Buchse","Casquillo","","1");
parti[864] = new Array("026a","","26","712.1.018.1A","Boccola","Bush","Douille","Buchse","Casquillo","","1");
parti[865] = new Array("026a","","27","863.1.001.1D","Spina","Pin","Goupille","Stift","Pasador","","4");
parti[866] = new Array("026a","","28","772.1.005.1B","Vite","Screw","Vis","Schraube","Tornillo","","4");
parti[867] = new Array("027","","1","470.1.705.1AA","Telaietto posteriore","Rear frame","Cadre arriere","Hint. rahmen","Chassis trasero","","1");
parti[868] = new Array("027","","2","772.1.087.3AB","Vite","Screw","Vis","Schraube","Tornillo","","4");
parti[869] = new Array("027","","3","749.4.112.8B","Dado","Nut","Ecrou","Mutter","Tuerca","","4");
parti[870] = new Array("027","","4","830.1.543.1A","Staffa","Bracket","Bride","Bügel","Soporte","","1");
parti[871] = new Array("027","","5","771.1.369.1A","Vite","Screw","Vis","Schraube","Tornillo","","2");
parti[872] = new Array("027","","6","464.1.055.1A","Pedana (posteriore) (sinistra)","Foot peg (rear) (L.H.)","Repose-pied (arriere) (gauche)","Fussraste (hinterers) (linker)","Estribera (trasero) (izquierda)","","1");
parti[873] = new Array("027","","7","821.1.051.1AB","Perno","Pin","Pivot","Zapfen","Perno","","2");
parti[874] = new Array("027","","8","824.1.156.1A","Piastra portapedana (posteriore) (sinistra)","Foot peg holder plate (rear) (L.H.)","Plaque porte-repose-pied (arriere) (gauche)","Platte für Fußrastenhalter (hinterers) (linker)","Soporte estribera (trasero) (izquierda)","","1");
parti[875] = new Array("027","","9","824.1.157.1A","Piastra portapedana (posteriore) (destra)","Foot peg holder plate (rear) (R.H.)","Plaque porte-repose-pied (arriere) (droite)","Platte für Fußrastenhalter (hinterers) (rechter)","Soporte estribera (trasero) (derecha)","","1");
parti[876] = new Array("027","","10","799.1.024.1A","Molla","Spring","Ressort","Feder","Muelle","","2");
parti[877] = new Array("027","","11","847.4.002.1A","Sfera","Ball","Bille","Kugel","Esfera","","2");
parti[878] = new Array("027","","12","771.5.721.3B","Vite","Screw","Vis","Schraube","Tornillo","","6");
parti[879] = new Array("027","","13","464.1.056.1A","Pedana (posteriore) (destra)","Foot peg (rear) (R.H.)","Repose-pied (arriere) (droite)","Fussraste (hinterers) (rechter)","Estribera (trasero) (derecha)","","1");
parti[880] = new Array("027","","14","884.5.003.1A","Anello seeger","Circlip","Circlip","Seegerring","Anillo seeger","","2");
parti[881] = new Array("027","","15","696.1.012.1A","Blocchetto","Block","Bloc","Block","Bloque","","2");
parti[882] = new Array("027","","16","852.1.232.1A","Rosetta","Washer","Rosette","Unterlegscheibe","Arandela","","6");
parti[883] = new Array("027","","17","872.4.065.1A","Tappo","Cap","Bouchon","Verschluß","Tapón","","2");
parti[884] = new Array("027a","","1","716.1.154.1A","Distanziale (anteriore)","Spacer (front)","Entretoise (avant)","Distanzstück (vorderes)","Distancial (delantero)","","2");
parti[885] = new Array("027a","","2","716.1.155.1A","Distanziale (posteriore)","Spacer (rear)","Entretoise (arriere)","Distanzstück (hinterers)","Distancial (trasero)","","2");
parti[886] = new Array("027a","","3","530.1.022.4A","Indicatore di direzione (posteriore) (destro)","Turn indicator (rear) (R.H.)","Clignotant (arriere) (droit)","Fahrtrichtungsanzeige (hinterers) (recht)","Indicador de dirección (trasero) (derecho)","","1");
parti[887] = new Array("027a","","4","390.4.021.1A","Lampada 12V-10W RY10W","Bulb 12V-10W RY10W","Lampe 12V-10W RY10W","Birne 12V-10W RY10W","Lámpara 12V-10W RY10W","","2");
parti[888] = new Array("027a","","5","713.1.470.2A","Distanziale","Spacer","Entretoise","Distanzstück","Distancial","","2");
parti[889] = new Array("027a","","6","829.1.981.1A","Portatarga","Number plate holder","Porte-plaque","Nummerschildtafel","Porta-matrícula","","1");
parti[890] = new Array("027a","","7","775.5.013.1A","Vite","Screw","Vis","Schraube","Tornillo","","3");
parti[891] = new Array("027a","","8","561.1.027.1A","Piatto","Plate","Plat","Teller","Platillo","","1");
parti[892] = new Array("027a","","9","529.1.010.1A","Catadiottro","Reflector","Catadioptre","Rückstrahler","Catadióptrico","","3");
parti[893] = new Array("027a","","10","850.4.052.1A","Fissaggio rapido","Quik fastening","Fixation rapide","Schnellbefestigung","Fijaciòn ràpida","","6");
parti[894] = new Array("027a","","11","713.1.924.1A","Distanziale","Spacer","Entretoise","Distanzstück","Distancial","","1");
parti[895] = new Array("027a","","12","772.1.101.1B","Vite","Screw","Vis","Schraube","Tornillo","","2");
parti[896] = new Array("027a","","13","247.1.333.1A","Coperchietto","Cover","Carter","Deckelchen","Tapa","","1");
parti[897] = new Array("027a","","14","390.4.016.2A","Lampada 12V-5W C5W","Bulb 12V-5W C5W","Lampe 12V-5W C5W","Birne 12V-5W C5W","Lámpara 12V-5W C5W","","1");
parti[898] = new Array("027a","","15","772.5.101.8B","Vite","Screw","Vis","Schraube","Tornillo","","2");
parti[899] = new Array("027a","","16","829.1.980.1A","Supporto","Holder","Support","Halterung","Soporte","","1");
parti[900] = new Array("027a","","17","850.4.047.1A","Dado a graffetta","Nut with clip","Ecrou à collier","Klemmutter","Tuerca de grapa","","5");
parti[901] = new Array("027a","","18","764.1.090.1A","Gommino","Rubber pad","Joint en caoutchouc","Gummistück","Junta de goma","","4");
parti[902] = new Array("027a","","19","773.5.039.3B","Vite","Screw","Vis","Schraube","Tornillo","","5");
parti[903] = new Array("027a","","20","247.1.345.1A","Paraspruzzi","Mudflap","Bavette garde-boue","Spritzerschutz","Parasalpicaduras","","1");
parti[904] = new Array("027a","","21","530.1.023.4A","Indicatore di direzione (posteriore) (sinistro)","Turn indicator (rear) (L.H.)","Clignotant (arriere) (gauche)","Fahrtrichtungsanzeige (hinterers) (link)","Indicador de dirección (trasero) (izquierdo)","","1");
parti[905] = new Array("027a","","22","525.1.037.2A","Fanale posteriore","Tail light","Feu AR.","Rückscheinwerfer","Faro trasero","","1");
parti[906] = new Array("027a","","23","775.1.045.1A","Vite","Screw","Vis","Schraube","Tornillo","","2");
parti[907] = new Array("027a","","24","716.1.418.1A","Distanziale","Spacer","Entretoise","Distanzstück","Distancial","","2");
parti[908] = new Array("027a","","25","852.4.173.1A","Rosetta","Washer","Rosette","Unterlegscheibe","Arandela","","3");
parti[909] = new Array("027a","","26","391.1.003.3A","Lamella","Blade","Lamelle","Lamellen","Lámina","","2");
parti[910] = new Array("027a","","27","830.1.548.3A","Staffa","Bracket","Bride","Bügel","Soporte","","1");
parti[911] = new Array("027a","","28","774.4.006.1A","Vite","Screw","Vis","Schraube","Tornillo","","1");
parti[912] = new Array("027a","","29","771.5.639.8B","Vite","Screw","Vis","Schraube","Tornillo","","2");
parti[913] = new Array("028","","1","771.1.031.1A","Vite","Screw","Vis","Schraube","Tornillo","","1");
parti[914] = new Array("028","","2","713.1.239.1A","Rosetta","Washer","Rosette","Unterlegscheibe","Arandela","","1");
parti[915] = new Array("028","","3","748.4.037.1AB","Dado","Nut","Ecrou","Mutter","Tuerca","","1");
parti[916] = new Array("028","","4","779.1.504.1A","Vite","Screw","Vis","Schraube","Tornillo","","2");
parti[917] = new Array("028","","5","715.1.003.1A","Distanziale","Spacer","Entretoise","Distanzstück","Distancial","","1");
parti[918] = new Array("028","","6","930.4.011.1A","Anello di tenuta","Seal ring","Bague d'étanchéité","Dichtring","Anillo de retén","","2");
parti[919] = new Array("028","","7","701.4.004.1A","Astuccio a rullini","Needle bearing","Roulement à rouleaux","Nadellager","Cojinete de agujas","","2");
parti[920] = new Array("028","","8","372.2.062.2A","Assieme bilanciere","Rocker assembly","Ensemble culbuteur","Kipphebelgruppe","Grupo balancín","","1");
parti[921] = new Array("028","","9","771.5.938.8B","Vite","Screw","Vis","Schraube","Tornillo","","2");
parti[922] = new Array("028","","10","365.2.100.2A","Ammortizzatore","Shock absorber","Amortisseur","Stoßdämpfer","Amortiguador","","1");
parti[923] = new Array("028","","11","710.1.132.1A","Bussola","Bush","Douille","Buchse","Casquillo","","4");
parti[924] = new Array("028","","12","372.2.140.1AA","Asta di reazione","Reaction rod","Barre de réaction","Reaktionsstange","Varilla de reacción","","1");
parti[925] = new Array("028","","13","848.4.011.1A","Snodo sferico","Ball joint","joint à rotule","Kugelgelenk","Articulación esférica","","2");
parti[926] = new Array("028a","","1","369.1.120.1A","Perno forcellone","Swingarm pivot","Axe fourche AR.","Schwingenbolzen","Eje basculante","","1");
parti[927] = new Array("028a","","2","852.1.216.1A","Rosetta","Washer","Rosette","Unterlegscheibe","Arandela","","1");
parti[928] = new Array("028a","","3","772.1.078.1A","Dado","Nut","Ecrou","Mutter","Tuerca","","1");
parti[929] = new Array("028a","","4","710.1.109.1A","Bussola","Bush","Douille","Buchse","Casquillo","","1");
parti[930] = new Array("028a","","5","930.5.012.1A","Anello di tenuta","Seal ring","Bague d'étanchéité","Dichtring","Anillo de retén","","2");
parti[931] = new Array("028a","","6","701.4.017.1A","Astuccio a rullini","Needle bearing","Roulement à rouleaux","Nadellager","Cojinete de agujas","","2");
parti[932] = new Array("028a","","7","872.1.054.2A","Tappo","Cap","Bouchon","Verschluß","Tapón","","1");
parti[933] = new Array("028a","","8","370.2.114.1BA","Forcellone completo","Complete swingarm","Fourche AR. complète","Schwinge komplett","Horquilla completa","","1");
parti[934] = new Array("028a","","9","712.1.029.1A","Distanziale","Spacer","Entretoise","Distanzstück","Distancial","","1");
parti[935] = new Array("028a","","10","702.5.045.1A","Cuscinetto","Bearing","Roulement","Lager","Cojinete","","2");
parti[936] = new Array("028a","","11","713.1.187.1A","Distanziale","Spacer","Entretoise","Distanzstück","Distancial","","1");
parti[937] = new Array("028a","","12","712.1.030.1A","Distanziale","Spacer","Entretoise","Distanzstück","Distancial","","1");
parti[938] = new Array("028a","","13","773.5.487.8B","Vite","Screw","Vis","Schraube","Tornillo","","1");
parti[939] = new Array("028a","","14","832.1.047.1A","Piolo","Pin","Pivot","Stift","Espina","","1");
parti[940] = new Array("028a","","15","447.1.079.2A","Pattino Catena Inferiore","Lower chain sliding shoe","Patin chaîne inférieure","Unterer Kettengleitschuh","Patín cadena inferior","","1");
parti[941] = new Array("028a","","16","779.1.440.1B","Vite","Screw","Vis","Schraube","Tornillo","","4");
parti[942] = new Array("028a","","17","447.1.095.1A","Pattino Catena Superiore","Upper chain sliding shoer","Patin chaîne supérieure","Oberer Kettengleitschuh","Patín cadena superior","","1");
parti[943] = new Array("028a","","18","779.1.503.1A","Vite","Screw","Vis","Schraube","Tornillo","","2");
parti[944] = new Array("028a","","19","841.1.050.1A","Scodellino","Retainer","Cuvette","Teller","Platillo","","1");
parti[945] = new Array("028a","","20","433.1.371.1A","Decal. regolaz. catena","Chain adjustment sticker","Décalcomanie réglage chaîne","Aufkleber für Kettenregelung","Adhesivo regulación cadena","","1");
parti[946] = new Array("028a","","21","565.1.044.1B","Parafango posteriore","Rear mudguard","Garde-boue AR.","Hinterers Schutzblech","Guardabarros trasero","","1");
parti[947] = new Array("028a","","22","716.1.401.1A","Distanziale","Spacer","Entretoise","Distanzstück","Distancial","","4");
parti[948] = new Array("028a","","23","850.4.124.1A","Inserto","Insert","Insert","Einsatz","Inserto","","2");
parti[949] = new Array("028a","","24","772.1.088.2C","Vite","Screw","Vis","Schraube","Tornillo","","4");
parti[950] = new Array("028a","","25","872.1.073.1A","Tappo","Cap","Bouchon","Verschluß","Tapón","","1");
parti[951] = new Array("028a","","26","872.1.074.1A","Tappo","Cap","Bouchon","Verschluß","Tapón","","1");
parti[952] = new Array("029","","1","772.1.109.1A","Vite","Screw","Vis","Schraube","Tornillo","","2");
parti[953] = new Array("029","","2","876.1.102.2B","Tubo sfiato","Breather pipe","Tube d'évent","Entlüfterrohr","Tubo respiradero","","1");
parti[954] = new Array("029","","3","484.2.075.1B","Convogliatore aria (esterno) (sinistro)","Air manifold (external) (L.H.)","Convoyeur d'air (externe) (gauche)","Luftförderer (äußere) (link)","Encanalador aire (externo) (izquierdo)","","1");
parti[955] = new Array("029","","4","788.1.098.1A","Guarnizione","Gasket","Garniture","Dichtung","Junta","","2");
parti[956] = new Array("029","","5","484.1.077.2B","Convogliatore aria (interno) (sinistro)","Air manifold (internal) (L.H.)","Convoyeur d'air (interne) (gauche)","Luftförderer (inner) (link)","Encanalador aire (interno) (izquierdo)","","1");
parti[957] = new Array("029","","6","772.1.042.2A","Vite","Screw","Vis","Schraube","Tornillo","","6");
parti[958] = new Array("029","","7","442.1.139.3B","Scatola filtro aria","Air filter box","Boîte filtre à air","Luftfilterkasten","Caja filtro aire","","1");
parti[959] = new Array("029","","8","758.1.036.1A","Passacavo","Fairlead","Passe-câble","Kabeldurchführung","Pasa-cable","","1");
parti[960] = new Array("029","","9","773.1.005.1A","Vite","Screw","Vis","Schraube","Tornillo","","1");
parti[961] = new Array("029","","10","852.4.021.1A","Rosetta","Washer","Rosette","Unterlegscheibe","Arandela","","2");
parti[962] = new Array("029","","11","877.2.006.1B","Tubo","Tube","Tube","Rohr","Tubo","","1");
parti[963] = new Array("029","","12","741.4.063.1A","Passatubo","Hose guide","Passe-tube","Leitungsführung","Pasatubo","","1");
parti[964] = new Array("029","","13","814.1.312.1A","Presa di pressione","Pressure pick-up point","Prise de pression","Drucknehmer","Toma de presión","","1");
parti[965] = new Array("029","","14","934.1.010.1A","Tubo","Tube","Tube","Rohr","Tubo","","1");
parti[966] = new Array("029","","15","442.1.184.1A","Risonatore","Resounder","Boîte","Schachtel","Caja","","1");
parti[967] = new Array("029","","16","791.1.067.1A","Guarnizione","Gasket","Garniture","Dichtung","Junta","","2");
parti[968] = new Array("029","","17","764.1.090.1A","Gommino","Rubber pad","Joint en caoutchouc","Gummistück","Junta de goma","","3");
parti[969] = new Array("029","","18","716.1.143.1A","Distanziale","Spacer","Entretoise","Distanzstück","Distancial","","3");
parti[970] = new Array("029","","19","771.1.226.1A","Vite","Screw","Vis","Schraube","Tornillo","","3");
parti[971] = new Array("029","","20","741.4.186.1A","Fascetta","Clamp","Collier","Schelle","Abrazadera","","1");
parti[972] = new Array("029","","21","484.2.076.1B","Convogliatore aria (esterno) (destro)","Air manifold (external) (R.H.)","Convoyeur d'air (externe) (droit)","Luftförderer (äußere) (recht)","Encanalador aire (externo) (derecho)","","1");
parti[973] = new Array("029","","22","741.4.165.1A","Fascetta","Clamp","Collier","Schelle","Abrazadera","","1");
parti[974] = new Array("029","","23","484.1.078.2B","Convogliatore aria (interno) (destro)","Air manifold (internal) (R.H.)","Convoyeur d'air (interne) (droit)","Luftförderer (inner) (recht)","Encanalador aire (interno) (derecho)","","1");
parti[975] = new Array("029","","24","426.1.020.1A","Filtro aria","Air filter","Filtre à air","Luftfilter","Filtro aire","","1");
parti[976] = new Array("029","","25","716.1.407.1A","Distanziale","Spacer","Entretoise","Distanzstück","Distancial","","2");
parti[977] = new Array("029","","26","772.1.086.1B","Vite speciale","Special screw","Vis spéciale","Spezialschraube","Tornillo especial","","2");
parti[978] = new Array("030","","1","548.4.083.1A","Radiatore acqua (superiore)","Water radiator (upper)","Radiateur d'eau (supérieur)","Wasserkühler (höher)","Radiador agua (superior)","","1");
parti[979] = new Array("030","","2","548.4.084.1A","Radiatore acqua (inferiore)","Water radiator (bottom)","Radiateur d'eau (inférieur)","Wasserkühler (unterst)","Radiador agua (inferior)","","1");
parti[980] = new Array("030","","3","779.1.202.1C","Vite speciale","Special screw","Vis spéciale","Spezialschraube","Tornillo especial","","1");
parti[981] = new Array("030","","4","550.4.020.1A","Elettroventola","Electric fan","Electro-ventilateur","Elektrolüfterrad","Electroventilador","","2");
parti[982] = new Array("030","","5","460.1.366.1AB","Protezione radiatore (destra) (NERA)","Cooler cowling (R.H.) (BLACK)","Protection radiateur (droite) (NOIRE)","Kühlerschutz (rechter) (SCHWARZES)","Protección radiador (derecha) (NEGRA)","","1");
parti[983] = new Array("030","","6","764.1.022.1A","Gommino antivibrante","Vibration damper pad","Joint en caoutchouc anti-vibration","Schwingungsdämpfergummi","Junta de goma anti-vibración","","6");
parti[984] = new Array("030","","7","775.1.054.1A","Vite","Screw","Vis","Schraube","Tornillo","","4");
parti[985] = new Array("030","","8","716.1.419.1A","Distanziale","Spacer","Entretoise","Distanzstück","Distancial","","3");
parti[986] = new Array("030","","9","772.4.046.3C","Vite","Screw","Vis","Schraube","Tornillo","","2");
parti[987] = new Array("030","","10","829.2.766.1A","Supporto (inferiore)","Holder (bottom)","Support (inférieur)","Halterung (unterst)","Soporte (inferior)","","1");
parti[988] = new Array("030","","11","460.1.367.1AB","Protezione radiatore (sinistra) (NERA)","Cooler cowling (L.H.) (BLACK)","Protection radiateur (gauche) (NOIRE)","Kühlerschutz (linker) (SCHWARZES)","Protección radiador (izquierda) (NEGRA)","","1");
parti[989] = new Array("030","","12","771.5.064.8B","Vite","Screw","Vis","Schraube","Tornillo","","2");
parti[990] = new Array("030","","13","800.1.170.2A","Tubo","Tube","Tube","Rohr","Tubo","","1");
parti[991] = new Array("030","","14","741.4.190.1A","Fascetta","Clamp","Collier","Schelle","Abrazadera","","2");
parti[992] = new Array("030","","15","772.1.047.1B","Vite","Screw","Vis","Schraube","Tornillo","","1");
parti[993] = new Array("030","","16","772.1.059.1A","Vite","Screw","Vis","Schraube","Tornillo","","1");
parti[994] = new Array("030","","17","684.1.073.1A","Colonnetta","Stud bolt","Goujon","Stiftschraube","Espárrago","","1");
parti[995] = new Array("030","","18","850.4.038.1A","Dado a graffetta","Nut with clip","Ecrou à collier","Klemmutter","Tuerca de grapa","","1");
parti[996] = new Array("030","","19","881.1.023.1A","Anello","Ring","Bague","Ring","Anillo","","1");
parti[997] = new Array("030","","20","852.5.027.1A","Rosetta","Washer","Rosette","Unterlegscheibe","Arandela","","1");
parti[998] = new Array("030","","21","772.1.061.1A","Vite","Screw","Vis","Schraube","Tornillo","","1");
parti[999] = new Array("030","","22","772.4.048.3C","Vite","Screw","Vis","Schraube","Tornillo","","1");
parti[1000] = new Array("031","","1","585.1.064.1A","Serbatoio acqua","Water tank","Réservoir d'eau","Wassertank","Depósito agua","","1");
parti[1001] = new Array("031","","2","893.1.014.3A","Tappo serbatoio","Tank cap","Bouchon de réservoir","Tankverschluß","Tapón depósito","","1");
parti[1002] = new Array("031","","3","772.1.059.1A","Vite","Screw","Vis","Schraube","Tornillo","","2");
parti[1003] = new Array("031","","4","830.1.441.1A","Staffa","Bracket","Bride","Bügel","Soporte","","1");
parti[1004] = new Array("031","","5","741.4.190.1A","Fascetta","Clamp","Collier","Schelle","Abrazadera","","4");
parti[1005] = new Array("031","","6","741.4.198.1A","Fascetta","Clamp","Collier","Schelle","Abrazadera","","2");
parti[1006] = new Array("031","","7","741.4.001.1A","Passatubo","Hose guide","Passe-tube","Leitungsführung","Pasatubo","","1");
parti[1007] = new Array("031","","8","934.1.006.1A","Tubo sfiato","Breather pipe","Tube d'évent","Entlüfterrohr","Tubo respiradero","","1");
parti[1008] = new Array("031","","9","552.4.013.1A","Sensore","Sensor","Capteur","Sensor","Sensor","","1");
parti[1009] = new Array("031","","10","886.4.103.1A","Guarnizione OR","O-ring","Joint d'étanchéité","Dichtung OR","Junta OR","","2");
parti[1010] = new Array("031","","11","814.1.236.1C","Raccordo uscita acqua (orizzontale)","Water outlet union (horizontal)","Raccord évacuation d'eau (horizontal)","Anschluß für Wasserablauf (waagrechter)","Conexión salida agua (horizontal)","","1");
parti[1011] = new Array("031","","12","8A00.67610","Passatubo","Hose guide","Passe-tube","Leitungsführung","Pasatubo","","1");
parti[1012] = new Array("031","","13","800.1.171.3A","Manicotto radiatore/termost.","Cooler/thermostat hose","Manchon radiateur/thermostat","Muffe Radiator/Thermostat","Mangueta radiador/termóstato","","1");
parti[1013] = new Array("031","","14","814.1.326.1A","Raccordo uscita acqua (verticale)","Water outlet union (vertical)","Raccord évacuation d'eau (vertical)","Anschluß für Wasserablauf (senkrechter)","Conexión salida agua (vertical)","","1");
parti[1014] = new Array("031","","15","772.1.062.3B","Vite","Screw","Vis","Schraube","Tornillo","","4");
parti[1015] = new Array("031","","16","800.1.172.2A","Manicotto termostato/testa (verticale)","Thermostat/pump hose (vertical)","Manchon thermostat/tête (vertical)","Muffe Thermoastat/Zylinderkopf (senkrechter)","Mangueta termóstato/culata (vertical)","","1");
parti[1016] = new Array("031","","17","800.1.173.1A","Manicotto termostato/testa (orizzontale)","Thermostat/pump hose (horizontal)","Manchon thermostat/tête (horizontal)","Muffe Thermoastat/Zylinderkopf (waagrechter)","Mangueta termóstato/culata (horizontal)","","1");
parti[1017] = new Array("031","","18","800.1.169.1A","Manicotto pompa/radiatore","Pump/cooler hose","Manchon pompe/radiateur","Muffe für Pumpe/Kühler","Mangueta bomba/radiador","","1");
parti[1018] = new Array("031","","19","553.4.004.1A","Termostato","Thermostat","Thermostat","Thermostat","Termóstato","","1");
parti[1019] = new Array("031","","20","872.4.060.1A","Tappo","Cap","Bouchon","Verschluß","Tapón","","1");
parti[1020] = new Array("031","","21","668.4.001.1A","Bocchettone","Filler","Goulotte","Stutzen","Boca","","1");
parti[1021] = new Array("031","","22","800.1.177.2A","Manicotto radiatore/tappo","Cooler/cap hose","Manchon radiateur/bouchon","Muffe Radiator/Verschluß","Mangueta radiador/Tapón","","1");
parti[1022] = new Array("031","","23","741.4.156.1A","Fascetta","Clamp","Collier","Schelle","Abrazadera","","1");
parti[1023] = new Array("031","","24","741.4.192.1A","Fascetta","Clamp","Collier","Schelle","Abrazadera","","4");
parti[1024] = new Array("031","","25","741.4.130.1A","Fascetta","Clamp","Collier","Schelle","Abrazadera","","5");
parti[1025] = new Array("031","","26","800.1.176.1A","Manicotto in gomma","Rubber hose","Manchon caoutchouc","Gummimuffe","Mangueta de goma","","1");
parti[1026] = new Array("031","","27","814.1.327.1A","Raccordo 'Y'","Union 'Y'","Raccord 'Y'","Anschluß 'Y'","Empalme 'Y'","","1");
parti[1027] = new Array("031","","28","934.1.012.3A","Tubo sfiato","Breather pipe","Tube d'évent","Entlüfterrohr","Tubo respiradero","","1");
parti[1028] = new Array("031","","29","852.1.176.1A","Rosetta","Washer","Rosette","Unterlegscheibe","Arandela","","2");
parti[1029] = new Array("031","","30","741.4.004.1A","Passatubo","Hose guide","Passe-tube","Leitungsführung","Pasatubo","","2");
parti[1030] = new Array("032","","1","586.1.182.1BA","Serbatoio (corto) (ROSSO)","Tank (short) (RED)","Rèservoir (court) (ROUGE)","Kraftsofftank (kurz) (ROT)","Dèposito (corto) (ROJO)","","1");
parti[1031] = new Array("032","","1","586.1.182.1AT","Serbatoio (corto) (DARK STEALTH)","Tank (short) (DARK STEALTH)","Rèservoir (court) (DARK STEALTH)","Kraftsofftank (kurz) (DARK STEALTH)","Dèposito (corto) (DARK STEALTH)","","1");
parti[1032] = new Array("032","","1","586.1.182.1AY","Serbatoio (corto) (FIGHTER YELLOW)","Tank (short) (FIGHTER YELLOW)","Rèservoir (court) (FIGHTER YELLOW)","Kraftsofftank (kurz) (FIGHTER YELLOW)","Dèposito (corto) (FIGHTER YELLOW)","","1");
parti[1033] = new Array("032","","2","587.1.051.2A","Attacco anteriore serbatoio (destro)","Tank front connection (R.H.)","Fixation avant réservoir (droit)","Vorderer Tankanschluss (recht)","Toma de sujeción delantera depósito (derecho)","","1");
parti[1034] = new Array("032","","3","587.1.052.2A","Attacco anteriore serbatoio (sinistro)","Tank front connection (L.H.)","Fixation avant réservoir (gauche)","Vorderer Tankanschluss (link)","Toma de sujeción delantera depósito (izquierdo)","","1");
parti[1035] = new Array("032","","4","772.1.050.1C","Vite","Screw","Vis","Schraube","Tornillo","","4");
parti[1036] = new Array("032","","5","699.2.633.1A","Kit coperchio","Cover kit","Kit carter","Set deckelchen","Kit tapa","","1");
parti[1037] = new Array("032","","6","866.4.006.1A","Guarnizione","Gasket","Garniture","Dichtung","Junta","","1");
parti[1038] = new Array("032","","7","480.1.544.1A","Coperchietto","Cover","Carter","Deckelchen","Tapa","","1");
parti[1039] = new Array("032","","8","895.2.020.1A","Tappo serbatoio","Tank cap","Bouchon de réservoir","Tankverschluß","Tapón depósito","","1");
parti[1040] = new Array("032","","9","771.5.640.8B","Vite","Screw","Vis","Schraube","Tornillo","","4");
parti[1041] = new Array("032","","10","764.1.001.1A","Gommino","Rubber pad","Joint en caoutchouc","Gummistück","Junta de goma","","2");
parti[1042] = new Array("032","","11","713.1.330.1A","Distanziale","Spacer","Entretoise","Distanzstück","Distancial","","1");
parti[1043] = new Array("032","","12","852.1.099.1A","Rosetta","Washer","Rosette","Unterlegscheibe","Arandela","","1");
parti[1044] = new Array("032","","13","771.5.728.8B","Vite","Screw","Vis","Schraube","Tornillo","","1");
parti[1045] = new Array("032","","14","438.1.365.1BA","Decalcomania 'DUCATI' (per ROSSO)","Sticker 'DUCATI' (for RED)","Décalcomanie 'DUCATI' (pour ROUGE)","Aufkleber 'DUCATI' (fur ROT)","Adhesivo 'DUCATI' (para ROJO)","","2");
parti[1046] = new Array("032","","14","438.1.465.1AT","Decalcomania 'DUCATI' (per DARK STEALTH, FIGHTER YELLOW)","Sticker 'DUCATI' (for DARK STEALTH, FIGHTER YELLOW)","Décalcomanie 'DUCATI' (pour DARK STEALTH, FIGHTER YELLOW)","Aufkleber 'DUCATI' (fur DARK STEALTH, FIGHTER YELLOW)","Adhesivo 'DUCATI' (para DARK STEALTH, FIGHTER YELLOW)","","2");
parti[1047] = new Array("032","","15","486.1.081.1A","Pannello","Panel","Panneau","Tafel","Panel","","1");
parti[1048] = new Array("032","","16","598.2.100.1A","Kit serrature","Locks kit","Gr. serrure","Schloßset","Kit cerraduras","","1");
parti[1049] = new Array("032","","17","480.1.536.1A","Coperchio","Cover","Couvercle","Deckel","Tapa","","1");
parti[1050] = new Array("032","","18","772.1.085.3B","Vite speciale","Special screw","Vis spéciale","Spezialschraube","Tornillo especial","","4");
parti[1051] = new Array("032","","19","775.5.025.1A","Vite","Screw","Vis","Schraube","Tornillo","","2");
parti[1052] = new Array("032","","20","827.1.648.1AA","Piastrino","Plate","Plaquette","Plättchen","Lámina","","2");
parti[1053] = new Array("032","","21","850.4.055.1A","Dado a graffetta","Nut with clip","Ecrou à collier","Klemmutter","Tuerca de grapa","","2");
parti[1054] = new Array("032a","","1","886.1.013.1A","Guarnizione","Gasket","Garniture","Dichtung","Junta","","2");
parti[1055] = new Array("032a","","2","814.1.179.1A","Raccordo","Union","Raccord","Anschluß","Empalme","","2");
parti[1056] = new Array("032a","","3","775.1.051.1A","Vite","Screw","Vis","Schraube","Tornillo","","2");
parti[1057] = new Array("032a","","4","830.1.555.1A","Piastrino (sinistro)","Plate (L.H.)","Plaquette (gauche)","Plättchen (link)","Lámina (izquierdo)","","1");
parti[1058] = new Array("032a","","5","830.1.554.1A","Piastrino (destro)","Plate (R.H.)","Plaquette (droit)","Plättchen (recht)","Lámina (derecho)","","1");
parti[1059] = new Array("032a","","6","886.5.048.1A","Anello OR","O-Ring","Bague d'étanchéité","O-Ring","Anillo OR","","1");
parti[1060] = new Array("032a","","7","771.1.044.1A","Vite","Screw","Vis","Schraube","Tornillo","","6");
parti[1061] = new Array("032a","","8","590.1.360.1A","Tubo","Tube","Tube","Rohr","Tubo","","1");
parti[1062] = new Array("032a","","9","552.4.048.2A","Termistore","Thermistor","Thermistor","Thermistor","Termistor","","1");
parti[1063] = new Array("032a","","10","814.4.010.1A","Raccordo rapido","Quick-coupling union","Raccord rapide","Steckanschluß","Conexión rápida","","2");
parti[1064] = new Array("032a","","11","160.2.399.1A","Flangia","Flange","Bride","Flansch","Brida","","1");
parti[1065] = new Array("032a","","12","699.2.345.1A","Kit fascette","Clamps kit","Jeu collier","Kit schelle","Kit abrazadera","","1");
parti[1066] = new Array("032a","","13","287.4.024.1B","Fascetta","Clamp","Collier","Schelle","Abrazadera","","4");
parti[1067] = new Array("032a","","14","425.4.015.1A","Filtro benzina","Fuel filter","Filtre à essence","Benzinfilter","Filtro gasolina","","1");
parti[1068] = new Array("032a","","15","590.1.362.1A","Tubo","Tube","Tube","Rohr","Tubo","","1");
parti[1069] = new Array("033","","1","595.1.100.2A","Sella pilota","Rider seat","Selle pilote","Fahrersattel","Sillín piloto","","1");
parti[1070] = new Array("033","","2","866.1.104.1A","Tampone in gomma (grande)","Rubber pad (big)","Tampon en caoutchouc (grand)","Gummistopfen (groß)","Apoyo de goma (grande)","","4");
parti[1071] = new Array("033","","3","866.1.118.1A","Tampone in gomma (piccolo)","Rubber pad (little)","Tampon en caoutchouc (petit)","Gummistopfen (klein)","Apoyo de goma (pequeño)","","2");
parti[1072] = new Array("033","","4","850.4.047.1A","Dado a graffetta","Nut with clip","Ecrou à collier","Klemmutter","Tuerca de grapa","","10");
parti[1073] = new Array("033","","5","772.1.084.1A","Vite speciale","Special screw","Vis spéciale","Spezialschraube","Tornillo especial","","2");
parti[1074] = new Array("033","","6","772.1.085.3B","Vite speciale","Special screw","Vis spéciale","Spezialschraube","Tornillo especial","","4");
parti[1075] = new Array("033","","7","483.3.082.1B","Codone (anteriore) (inferiore)","Tail guard (front) (bottom)","Corps de selle (avant) (inférieur)","Heck (vorderes) (unterst)","Cuerpo asiento (delantero) (inferior)","","1");
parti[1076] = new Array("033","","8","866.1.107.1A","Tampone in gomma (posteriore)","Rubber pad (rear)","Tampon en caoutchouc (arriere)","Gummistopfen (hinterers)","Apoyo de goma (trasero)","","4");
parti[1077] = new Array("033","","9","483.1.081.3A","Vaschetta","Chamber","Cuvette","Wanne","Contenedor","","1");
parti[1078] = new Array("033","","10","866.1.030.1A","Tampone in gomma","Rubber pad","Tampon en caoutchouc","Gummistopfen","Apoyo de goma","","2");
parti[1079] = new Array("033","","11","850.4.038.1A","Dado a graffetta","Nut with clip","Ecrou à collier","Klemmutter","Tuerca de grapa","","2");
parti[1080] = new Array("033","","12","483.2.075.1BA","Codone (ROSSO)","Tail guard (RED)","Corps de selle (ROUGE)","Heck (ROT)","Cuerpo asiento (ROJO)","","1");
parti[1081] = new Array("033","","12","483.2.075.1AT","Codone (DARK STEALTH)","Tail guard (DARK STEALTH)","Corps de selle (DARK STEALTH)","Heck (DARK STEALTH)","Cuerpo asiento (DARK STEALTH)","","1");
parti[1082] = new Array("033","","12","483.2.075.1AY","Codone (FIGHTER YELLOW)","Tail guard (FIGHTER YELLOW)","Corps de selle (FIGHTER YELLOW)","Heck (FIGHTER YELLOW)","Cuerpo asiento (FIGHTER YELLOW)","","1");
parti[1083] = new Array("033","","13","772.1.109.1C","Vite","Screw","Vis","Schraube","Tornillo","","2");
parti[1084] = new Array("033","","14","750.1.155.1A","Dado speciale","Special nut","Ecrou spéciale","Spezialmutter","Tuerca especial","","1");
parti[1085] = new Array("033","","15","697.2.025.2A","Borsa attrezzi","Tool bag","Trousse à outils","Werkzeugtasche","Bolsa herramientas","","1");
parti[1086] = new Array("033","","16","595.2.101.2A","Sella passeggero","Pillion rider seat","Selle passager","Beifahrersitz","Sillín pasajero","","1");
parti[1087] = new Array("033","","17","483.1.076.1A","Codone (posteriore) (inferiore)","Tail guard (rear) (bottom)","Corps de selle (arriere) (inférieur)","Heck (hinterers) (unterst)","Cuerpo asiento (trasero) (inferior)","","1");
parti[1088] = new Array("033","","18","827.1.482.1A","Piastrino","Plate","Plaquette","Plättchen","Lámina","","1");
parti[1089] = new Array("033","","19","438.1.609.1A","Decalcomania 'DUCATI' (per ROSSO)","Sticker 'DUCATI' (for RED)","Décalcomanie 'DUCATI' (pour ROUGE)","Aufkleber 'DUCATI' (fur ROT)","Adhesivo 'DUCATI' (para ROJO)","","2");
parti[1090] = new Array("033","","19","438.1.608.1A","Decalcomania 'DUCATI' (per DARK STEALTH, FIGHTER YELLOW)","Sticker 'DUCATI' (for DARK STEALTH, FIGHTER YELLOW)","Décalcomanie 'DUCATI' (pour DARK STEALTH, FIGHTER YELLOW)","Aufkleber 'DUCATI' (fur DARK STEALTH, FIGHTER YELLOW)","Adhesivo 'DUCATI' (para DARK STEALTH, FIGHTER YELLOW)","","2");
parti[1091] = new Array("033","","20","598.1.013.1A","Chiavistello per serratura","Lock latch","Verrou pour serrure","Riegel für Verschluß","Cerrojo para cerradura","","1");
parti[1092] = new Array("033","","21","779.1.498.1A","Vite speciale","Special screw","Vis spéciale","Spezialschraube","Tornillo especial","","2");
parti[1093] = new Array("033","","22","598.2.061.1A","Serratura sella","Seat lock","Serrure selle","Sattelschloß","Cerradura sillín","","1");
parti[1094] = new Array("033","","23","830.1.564.1A","Gancio","Hook","Crochet","Haken","Gancho","","2");
parti[1095] = new Array("033","","24","749.4.031.1A","Dado","Nut","Ecrou","Mutter","Tuerca","","2");
parti[1096] = new Array("033","","25","764.1.054.1A","Gommino","Rubber pad","Joint en caoutchouc","Gummistück","Junta de goma","","2");
parti[1097] = new Array("033","","26","772.1.109.1A","Vite","Screw","Vis","Schraube","Tornillo","","8");
parti[1098] = new Array("033","","27","779.1.499.2A","Vite speciale","Special screw","Vis spéciale","Spezialschraube","Tornillo especial","","2");
parti[1099] = new Array("033","","28","850.4.055.1A","Dado a graffetta","Nut with clip","Ecrou à collier","Klemmutter","Tuerca de grapa","","14");
parti[1100] = new Array("033","","29","913.7.182.1B","Libretto uso e manutenzione","Owner's manual","Manuel d'utilisation et entretien","Anleitungs- und Wartungsheft","Manual de uso y entretenimiento","","1");
parti[1101] = new Array("033","","30","482.1.156.1A","Fianchetto (sinistro)","Body panel (L.H.)","Panneau latéral (gauche)","Seitenabdeckung (link)","Lateral (izquierdo)","","1");
parti[1102] = new Array("033","","31","482.1.157.1A","Fianchetto (destro)","Body panel (R.H.)","Panneau latéral (droit)","Seitenabdeckung (recht)","Lateral (derecho)","","1");
parti[1103] = new Array("033","","32","884.4.025.1A","Anello seeger","Circlip","Circlip","Seegerring","Anillo seeger","","2");
parti[1104] = new Array("033","","33","799.1.175.1A","Molla","Spring","Ressort","Feder","Muelle","","2");
parti[1105] = new Array("033","","34","841.1.037.1A","Scodellino","Retainer","Cuvette","Teller","Platillo","","2");
parti[1106] = new Array("033","","35","866.1.108.2A","Tampone appoggio batteria","Battery resting buffer","Tampon support de batterie","Batterieauflagestopfen","Punzón soporte batería","","1");
parti[1107] = new Array("033","","36","732.1.017.1A","Cavo antifurto casco","Helmet anti-theft wire","Câble antivol casque","Helmsicherungskabel","Cable antirrobo casco","","1");
parti[1108] = new Array("033","","37","772.1.104.1A","Vite","Screw","Vis","Schraube","Tornillo","","3");
parti[1109] = new Array("033","","38","700.1.060.1A","Antivibrante","Vibration damper","Antivibration","Schwingungsdämpfer","Anti-vibración","","3");
parti[1110] = new Array("033","","39","855.4.001.1A","Rosetta elastica","Spring washer","Rosette élastique","Federscheibe","Arandela de presión","","3");
parti[1111] = new Array("033","","40","748.5.006.1A","Dado","Nut","Ecrou","Mutter","Tuerca","","3");
parti[1112] = new Array("034","","1","772.1.089.3B","Vite","Screw","Vis","Schraube","Tornillo","","4");
parti[1113] = new Array("034","","2","716.1.401.1B","Distanziale","Spacer","Entretoise","Distanzstück","Distancial","","4");
parti[1114] = new Array("034","","3","564.2.062.1CA","Parafango anteriore (ROSSO)","Front mudguard (RED)","Garde-boue AV. (ROUGE)","Vorderes Schutzblech (ROT)","Guardabarros delantero (ROJO)","","1");
parti[1115] = new Array("034","","3","564.2.062.1BT","Parafango anteriore (DARK STEALTH)","Front mudguard (DARK STEALTH)","Garde-boue AV. (DARK STEALTH)","Vorderes Schutzblech (DARK STEALTH)","Guardabarros delantero (DARK STEALTH)","","1");
parti[1116] = new Array("034","","3","564.2.062.1BY","Parafango anteriore (FIGHTER YELLOW)","Front mudguard (FIGHTER YELLOW)","Garde-boue AV. (FIGHTER YELLOW)","Vorderes Schutzblech (FIGHTER YELLOW)","Guardabarros delantero (FIGHTER YELLOW)","","1");
parti[1117] = new Array("034","","4","775.1.051.1B","Vite","Screw","Vis","Schraube","Tornillo","","4");
parti[1118] = new Array("034","","5","830.1.494.1B","Passacavo","Fairlead","Passe-câble","Kabeldurchführung","Pasa-cable","","1");
parti[1119] = new Array("034","","6","856.1.042.1A","Rosetta nylon","Nylon washer","Rosette en nylon","Nylon-Unterlegscheibe","Arandela nylon","","4");
parti[1120] = new Array("034","","7","481.2.056.1BA","Cupolino (ROSSO)","Headlight fairing (RED)","Carénage (ROUGE)","Fahrtwindschutz (ROT)","Cúpula (ROJO)","","1");
parti[1121] = new Array("034","","7","481.2.056.1AT","Cupolino (DARK STEALTH)","Headlight fairing (DARK STEALTH)","Carénage (DARK STEALTH)","Fahrtwindschutz (DARK STEALTH)","Cúpula (DARK STEALTH)","","1");
parti[1122] = new Array("034","","7","481.2.056.1AY","Cupolino (FIGHTER YELLOW)","Headlight fairing (FIGHTER YELLOW)","Carénage (FIGHTER YELLOW)","Fahrtwindschutz (FIGHTER YELLOW)","Cúpula (FIGHTER YELLOW)","","1");
parti[1123] = new Array("034","","8","438.1.084.1A","Decal 'Streetfighter 848' (per ROSSO)","Decal 'Streetfighter 848' (for RED)","Décalcomanie 'Streetfighter 848' (pour ROUGE)","Klebebild 'Streetfighter 848' (fur ROT)","Calcomanía 'Streetfighter 848' (para ROJO)","","2");
parti[1124] = new Array("034","","8","438.1.085.1A","Decal 'Streetfighter 848' (per DARK STEALTH)","Decal 'Streetfighter 848' (for DARK STEALTH)","Décalcomanie 'Streetfighter 848' (pour DARK STEALTH)","Klebebild 'Streetfighter 848' (fur DARK STEALTH)","Calcomanía 'Streetfighter 848' (para DARK STEALTH)","","2");
parti[1125] = new Array("034","","8","438.1.086.1A","Decal 'Streetfighter 848' (per FIGHTER YELLOW)","Decal 'Streetfighter 848' (for FIGHTER YELLOW)","Décalcomanie 'Streetfighter 848' (pour FIGHTER YELLOW)","Klebebild 'Streetfighter 848' (fur FIGHTER YELLOW)","Calcomanía 'Streetfighter 848' (para FIGHTER YELLOW)","","2");
parti[1126] = new Array("034","","9","438.1.474.1A","Decalcomania 'DUCATI'","Sticker 'DUCATI'","Décalcomanie 'DUCATI'","Aufkleber 'DUCATI'","Adhesivo 'DUCATI'","","1");
parti[1127] = new Array("034","","10","480.2.271.1BA","Puntale (destro) (ROSSO)","Push rod (R.H.) (RED)","Embout (droit) (ROUGE)","Stösselschaft (recht) (ROT)","Virola (derecho) (ROJO)","","1");
parti[1128] = new Array("034","","10","480.2.281.1AT","Puntale (destro) (DARK STEALTH)","Push rod (R.H.) (DARK STEALTH)","Embout (droit) (DARK STEALTH)","Stösselschaft (recht) (DARK STEALTH)","Virola (derecho) (DARK STEALTH)","","1");
parti[1129] = new Array("034","","10","480.2.281.1AY","Puntale (destro) (FIGHTER YELLOW)","Push rod (R.H.) (FIGHTER YELLOW)","Embout (droit) (FIGHTER YELLOW)","Stösselschaft (recht) (FIGHTER YELLOW)","Virola (derecho) (FIGHTER YELLOW)","","1");
parti[1130] = new Array("034","","11","772.4.026.3C","Vite","Screw","Vis","Schraube","Tornillo","","1");
parti[1131] = new Array("034","","12","772.1.102.1A","Vite","Screw","Vis","Schraube","Tornillo","","4");
parti[1132] = new Array("034","","13","827.1.636.1A","Supporto (destro)","Holder (R.H.)","Support (droit)","Halterung (recht)","Soporte (derecho)","","1");
parti[1133] = new Array("034","","14","779.1.605.1A","Vite speciale","Special screw","Vis spéciale","Spezialschraube","Tornillo especial","","3");
parti[1134] = new Array("034","","15","827.1.530.1A","Supporto (sinistro)","Holder (L.H.)","Support (gauche)","Halterung (link)","Soporte (izquierdo)","","1");
parti[1135] = new Array("034","","16","480.2.270.1BA","Puntale (sinistro) (ROSSO)","Push rod (L.H.) (RED)","Embout (gauche) (ROUGE)","Stösselschaft (link) (ROT)","Virola (izquierdo) (ROJO)","","1");
parti[1136] = new Array("034","","16","480.2.280.1AT","Puntale (sinistro) (DARK STEALTH)","Push rod (L.H.) (DARK STEALTH)","Embout (gauche) (DARK STEALTH)","Stösselschaft (link) (DARK STEALTH)","Virola (izquierdo) (DARK STEALTH)","","1");
parti[1137] = new Array("034","","16","480.2.280.1AY","Puntale (sinistro) (FIGHTER YELLOW)","Push rod (L.H.) (FIGHTER YELLOW)","Embout (gauche) (FIGHTER YELLOW)","Stösselschaft (link) (FIGHTER YELLOW)","Virola (izquierdo) (FIGHTER YELLOW)","","1");
parti[1138] = new Array("034","","17","779.1.618.1A","Vite speciale","Special screw","Vis spéciale","Spezialschraube","Tornillo especial","","1");
parti[1139] = new Array("034","","18","850.4.047.1A","Dado a graffetta","Nut with clip","Ecrou à collier","Klemmutter","Tuerca de grapa","","5");
parti[1140] = new Array("034","","19","772.1.109.1A","Vite","Screw","Vis","Schraube","Tornillo","","4");
parti[1141] = new Array("034","","20","764.1.022.1A","Gommino antivibrante","Vibration damper pad","Joint en caoutchouc anti-vibration","Schwingungsdämpfergummi","Junta de goma anti-vibración","","4");
parti[1142] = new Array("034","","21","716.1.003.1A","Distanziale","Spacer","Entretoise","Distanzstück","Distancial","","4");
parti[1143] = new Array("034","","22","772.4.046.3C","Vite","Screw","Vis","Schraube","Tornillo","","3");
parti[1144] = new Array("034","","23","772.4.044.3C","Vite","Screw","Vis","Schraube","Tornillo","","1");
parti[1145] = new Array("035","","1","426.1.007.1B","Filtro canister","Canister filter","Filtre canister","Filter kanister","Filtro canister","","1");
parti[1146] = new Array("035","","2","590.1.245.1A","Tubo 7x13x335","Tube 7x13x335","Tube 7x13x335","Rohr 7x13x335","Tubo 7x13x335","","1");
parti[1147] = new Array("035","","3","741.4.057.1A","Passatubo","Hose guide","Passe-tube","Leitungsführung","Pasatubo","","1");
parti[1148] = new Array("035","","4","590.1.307.1B","Tubo","Tube","Tube","Rohr","Tubo","","1");
parti[1149] = new Array("035","","5","741.4.063.1A","Passatubo","Hose guide","Passe-tube","Leitungsführung","Pasatubo","","1");
parti[1150] = new Array("035","","6","590.1.350.1A","Tubo","Tube","Tube","Rohr","Tubo","","1");
parti[1151] = new Array("035","","7","741.4.058.1A","Fascetta","Clamp","Collier","Schelle","Abrazadera","","4");
parti[1152] = new Array("035","","8","814.1.183.1A","Raccordo 'T'","Union 'T'","Raccord 'T'","Anschluß 'T'","Empalme 'T'","","1");
parti[1153] = new Array("035","","9","590.1.348.1A","Tubo","Tube","Tube","Rohr","Tubo","","1");
parti[1154] = new Array("035","","10","590.1.349.1A","Tubo","Tube","Tube","Rohr","Tubo","","1");
parti[1155] = new Array("035","","11","741.4.043.1A","Passatubo","Hose guide","Passe-tube","Leitungsführung","Pasatubo","","4");
parti[1156] = new Array("035","","12","814.1.111.3B","Raccordo","Union","Raccord","Anschluß","Empalme","","2");
parti[1157] = new Array("035","","13","852.5.023.1A","Guarnizione","Gasket","Garniture","Dichtung","Junta","","2");
parti[1158] = new Array("035","","14","775.5.021.1A","Vite","Screw","Vis","Schraube","Tornillo","","2");
parti[1159] = new Array("035","","15","590.1.351.1A","Tubo","Tube","Tube","Rohr","Tubo","","1");
parti[1160] = new Array("035","","16","830.1.465.1A","Staffa","Bracket","Bride","Bügel","Soporte","","1");
parti[1161] = new Array("035","","17","827.1.157.1A","Piastrino","Plate","Plaquette","Plättchen","Lámina","","1");
parti[1162] = new Array("035","","18","764.1.029.1A","Gommino","Rubber pad","Joint en caoutchouc","Gummistück","Junta de goma","","2");
parti[1163] = new Array("035","","19","716.1.043.1C","Distanziale","Spacer","Entretoise","Distanzstück","Distancial","","2");
parti[1164] = new Array("035","","20","771.5.064.8B","Vite","Screw","Vis","Schraube","Tornillo","","2");
parti[1165] = new Array("035","","21","749.1.002.1A","Dado speciale","Special nut","Ecrou spéciale","Spezialmutter","Tuerca especial","","2");
parti[1166] = new Array("036","","1","433.1.166.1A","Etichetta","Label","Etiquette","Etikette","Etiqueta","","2");
parti[1167] = new Array("036","","2","433.1.170.1A","Decalcomania","Sticker","Décalcomanie","Aufkleber","Adhesivo","","1");
parti[1168] = new Array("036","","3","433.1.164.1A","Adesivo","Sticker","Décalcomanie","Aufkleber","Adhesivo","","1");
