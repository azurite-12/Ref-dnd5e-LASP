data_condition = [
    {
        title: "Cegado",
        icon: "one-eyed",
        subtitle: "No puedes ver",
        description: "No puedes ver nada",
        reference: "PHB, pg. 290.",
        bullets: [
            "Fallas automáticamente toda prueba de habilidad que requiera visión.",
            "Tienes desventaja en tiradas de ataque.",
            "Las tiradas de ataque contra ti tienen ventaja."
        ]
    },
    {
        title: "Encantado",
        icon: "smitten",
        subtitle: "Estás encantado",
        description: "Estás encantado por otra criatura",
        reference: "PHB, pg. 290.",
        bullets: [
            "No puedes atacar a la criatura que te encantó o dirigirle habilidades o efectos dañinos mágicos.",
            "La criatura que te encantó tiene ventaja en pruebas de habilidades a la hora de interactuar socialmente contigo."
        ]
    },
    {
        title: "Ensordecido",
        icon: "elf-ear",
        subtitle: "No puedes escuchar",
        description: "No puedes oír",
        reference: "PHB, pg. 290.",
        bullets: [
            "Fallas automáticamente toda prueba de habilidad que requiera escuchar."
        ]
    },
    {
        title: "Fatiga",
        icon: "crawl",
        subtitle: "Estás exhausto",
        description: "La fatiga se mide en 6 niveles",
        reference: "PHB, pg. 291.",
        bullets: [
            "<table><tr><th>Nivel</th><th></th><th></th><th style='text-align:left'>Efecto</th></tr><tr><td>1</td><td></td><td></td><td>Desventaja en pruebas de habilidad.</td></tr><tr><td>2</td><td></td><td></td><td>Velocidad reducida a la mitad.</td></tr><tr><td>3</td><td></td><td></td><td>Desventaja en tiradas de ataque y de salvación.</td></tr><tr><td>4</td><td></td><td></td><td>HP máximo reducido a la mitad.</td></tr><tr><td>5</td><td></td><td></td><td>Velocidad reducida a 0.</td></tr><tr><td>6</td><td></td><td></td><td>Muerte.</td></tr></table>",
            "Tu sufres los efectos de tu actual nivel de fatiga y también los efectos de todos los niveles anteriores.",
            "Tomar un descanso largo reduce tu nivel de fatiga en 1, siempre y cuando hayas comido antes.",
            "También, haber sido revivido reduce el nivel de fatiga de una criatura por 1."
        ]
    },
    {
        title: "Aterrado",
        icon: "sharp-smile",
        subtitle: "Estás aterrado",
        description: "Estás aterrado",
        reference: "PHB, pg. 290.",
        bullets: [
            "Tienes desventaja en las pruebas de habilidad y tiradas de ataque mientras la fuente de tu terror está dentro de tu campo de visión.",
            "No puedes moverte voluntariamente hacia la fuente de tu terror."
        ]
    },
    {
        title: "Agarrado",
        icon: "grab",
        subtitle: "Estás agarrado",
        description: "Una criatura te tiene agarrado",
        reference: "PHB, pg. 290.",
        bullets: [
            "Tu velocidad se reduce a 0, y no puedes recibir bonos a tu velocidad.",
            "Esta condición termina si la criatura que te tiene agarrado es incapacitada.",
            "La condición también termina si te remueven del alcance de la criatura que te agarra.",
            "Alternativamente, puedes tomar la <b>acción</b> <i>Escapar</i>. Vease esta acción en la sección de acciones.",
            "Estar agarrado no te permite atacar con armas de dos manos, pero si con armas de una mano."
        ]
    },
    {
        title: "Incapacitado",
        icon: "internal-injury",
        subtitle: "No hay acciones y reacciones",
        description: "No puedes usar acciones ni reacciones",
        reference: "PHB, pg. 290.",
        bullets: [
        ]
    },
    {
        title: "Invisible",
        icon: "invisible",
        subtitle: "No te pueden ver",
        description: "No te pueden ver sin ayuda de magía o de un sentido especial",
        reference: "PHB, pg. 291.",
        bullets: [
            "Para propositos de esconderse, cuentas como muy oscurecido.",
            "De todas formas te pueden detectar por los sonidos que haces o por las huellas que dejes.",
            "Tienes ventaja en tiradas de ataque.",
            "Las tiradas de ataque contra ti tienen desventaja."
        ]
    },
    {
        title: "Paralizado",
        icon: "internal-injury",
        subtitle: "Estás paralizado",
        description: "No puedes hacer nada",
        reference: "PHB, pg. 291.",
        bullets: [
            "Estás incapacitado y no te puedes mover ni hablar.",
            "Las tiradas de ataque contra ti tienen ventaja.",
            "Todos los ataques que te den son críticos automáticamente si tu atacante está a 5ft de ti.",
            "Fallas automáticamente tiradas de salvación de Fuerza y Destreza."
        ]
    },
    {
        title: "Petrificado",
        icon: "stone-pile",
        subtitle: "Transformado en piedra",
        description: "Tu y todos tus objetos no-mágicas son transformados a una sustancia sólida (usualmente piedra)",
        reference: "PHB, pg. 291.",
        bullets: [
            "Tu peso se multiplica por 10, y dejas de envejecer.",
            "Quedas incapacitado, no puedes moverte ni hablar, y no te percatas de tu entorno.",
            "Las tiradas de ataque contra ti tienen ventaja.",
            "Fallas automáticamente tiradas de salvación de Fuerza y Destreza.",
            "Tienes resistencia a todo tipo de daño.",
            "Eres inmune al veneno y a las enfermedades. Aunque el veneno y/o enfermedades que ya estaban en tu cuerpo a la hora de la petrificación quedan suspendidas, no anuladas."
        ]
    },
    {
        title: "Envenenado",
        icon: "deathcab",
        subtitle: "Estás envenenado",
        description: "Estás envenenado",
        reference: "PHB, pg. 292.",
        bullets: [
            "Tienes desventaja en tiradas de ataque y en pruebas de habilidades."
        ]
    },
    {
        title: "Postrado",
        icon: "crawl",
        subtitle: "Estás postrado",
        description: "Estás tirado al piso",
        reference: "PHB, pg. 292.",
        bullets: [
            "Tu única opción de movimiento es arrastrarse, a menos que te levantes.",
            "Tienes desventaja en tiradas de ataque.",
            "Las tiradas de ataque contra ti tienen ventaja si tu atacante está a 5ft de ti, si no, la tirada de ataque en cuestión tiene desventaja."
        ]
    },
    {
        title: "Contenido",
        icon: "imprisoned",
        subtitle: "Estás contenido",
        description: "Te tienen contenido con algún objeto, conjuro, u otro efecto",
        reference: "PHB, pg. 292.",
        bullets: [
            "Tu velocidad se reduce a 0, y no puedes recibir bonos a tu velocidad.",
            "Tienes desventaja en tiradas de ataque.",
            "Las tiradas de ataque contra ti tienen ventaja.",
            "Tienes desventaja en tiradas de salvación de Destreza."
        ]
    },
    {
        title: "Aturdido",
        icon: "internal-injury",
        subtitle: "Estás aturdido",
        description: "Estás aturdido",
        reference: "PHB, pg. 292.",
        bullets: [
            "Estás incapacitado, no puedes moverte y solo puedes hablar de manera vacilante.",
            "Las tiradas de ataque contra ti tienen ventaja.",
            "Fallas automáticante tiradas de salvación de Fuerza y Destreza."
        ]
    },
    {
        title: "Inconsciente",
        icon: "coma",
        subtitle: "Estás inconsciente",
        description: "Estás inconsciente",
        reference: "PHB, pg. 292.",
        bullets: [
            "Estás incapacitado, no puedes moverte ni hablar, y no te percatas de tu entorno.",
            "Tu sueltas lo que sea que estés sujetando y caes al piso.",
            "Las tiradas de ataque contra ti tienen ventaja.",
            "Cualquier ataque que te dé es un crítico automáticamente si el atacante está a 5ft de ti.",
            "Fallas automáticamente tiradas de salvación de Fuerza y Destreza.",
        ]
    },
    {
        title: "Agonizando",
        icon: "dead-head",
        subtitle: "Estás muriendo",
        description: "Tu HP ha sido reducida a 0 y estás muriendo",
        reference: "PHB, pg. 197.",
        bullets: [
            "Si tu HP se reduce a 0 por daño que no te mata instantaneamente, caes inconsciente y empiezas a agonizar.",
            "Si recibes cualquier tipo de curación, recuperas tu consciencia y dejas de agonizar.",
            "Cuando agonizas, al inicio de cada uno de tus turnos, haces una tirada de salvación de muerte. Tira un d20 sin añadir ningún modificador.",
            "Un 10 o mayor es un éxito, un 9 o menor es un fracaso",
            "En tu tercer éxito, te estabilizas.",
            "En tu tercer fracaso, mueres.",
            "Un 1 cuenta como dos fracasos.",
            "Un 20 inmediatamente provoca que recuperes 1HP.",
            "Un aliado también puede estabilizarte si éste toma la <b>acción</b> de <i>Estabilizar criatura</i> y tiene éxito en una tirada de Medicina CD10.",
            "Una vez estable, recuperas 1HP después de 1d4 horas."
        ]
    }
]
