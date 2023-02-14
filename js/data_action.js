data_action = [
    {
        title: "Ataque",
        icon: "crossed-swords",
        subtitle: "Ataque melé o rango",
        description: "Realiza un ataque cuerpo-a-cuerpo o a distancia contra un objetivo.",
        reference: "PHB, pgs. 192,194-195.",
        bullets: [
            "Ciertas funciones, como la función <i>Ataque Extra</i> del luchador, te permiten realizar más de un ataque con esta acción. Cada uno de estos ataques es una tirada separada y puede tener como objetivo diferentes criaturas. Puedes mientras haces estos ataques.",
            "Cuando atacas con un arma cuerpo-a-cuerpo ligera, puedes usar una acción adicional para atacar con la otra mano (consulta el elemento de <i>Ataque secundario</i> en la sección de \"acción adicional\").",
            "Puedes reemplazar uno de tus ataques cuerpo-a-cuerpo con un <i>Agarre</i> o un <i>Empujón</i>.",
            "Algunas condiciones otorgan ventaja en el ataque, como: ataques contra objetivos cegados, paralizados, petrificados, inmovilizados, aturdidos o inconscientes; ataques cuerpo a cuerpo contra objetivos postrados; ataques de atacantes invisibles u ocultos",
            "Algunas condiciones dan desventaja en el ataque, como: ataques contra objetivos invisibles u ocultos; ataques a distancia contra objetivos postradoss; ataques de atacantes cegados, asustados, envenenados o restringidos"
        ]
    },
    {
        title: "Agarre",
        icon: "grab",
        subtitle: "Ataque especial",
        description: "Intentas agarrar una criatura",
        reference: "PHB, pg. 195.",
        bullets: [
            "Puedes usar la acción <i>Atacar</i> para hacer un ataque cuerpo-a-cuerpo especial, un agarre. Si puedes hacer múltiples ataques con la acción Atacar, este ataque reemplaza a uno de ellos.",
            "El objetivo de tu agarre no debe ser más de un tamaño más grande que tú, y debe estar a tu alcance.",
            "Usando al menos una mano libre, intenta agarrar al objetivo haciendo una prueba de agarre: una prueba de Atletismo contra una prueba de Atletismo o Acrobacias del objetivo (el objetivo elige la habilidad a usar).",
            "Si tienes éxito, sometes a tu objetivo a la condición de agarre (su velocidad queda en 0)."
        ]
    },
    {
        title: "Empujón",
        icon: "hand",
        subtitle: "Ataque especial",
        description: "Empuja una criatura, sea para tirarla al piso o para alejarla de ti.",
        reference: "PHB, pg. 195.",
        bullets: [
            "Usando la acción de <i>Ataque</i>, puedes hacer un ataque cuerpo-a-cuerpo especial para empujar a una criatura. Si puedes hacer múltiples ataques con la acción de Ataque, este ataque reemplaza a uno de ellos.",
            "El objetivo de tu empujón no debe ser más de un tamaño más grande que tú, y debe estar a tu alcance.",
            "Haces una prueba de Atletismo contra una prueba de Atletismo o Acrobacias del objetivo (el objetivo elige la habilidad que usará).",
            "Si tienes éxito, tiras a tu objetivo al piso o lo empujas 5ft lejos de ti."
        ]
    },
    {
        title: "Conjurar",
        icon: "magic-swirl",
        subtitle: "Lanzamiento de 1 acción",
        description: "Lanza un conjuto con un tiempo de conjuración de 1 acción",
        reference: "PHB, pg. 192.",
        bullets: [
            "No puedes lanzar un conjuro con tu acción y un conjuro diferente con tu acción adicional en el mismo turno, excepto si la acción se usa para lanzar un truco.",
            "El objetivo de un conjuro debe estar dentro del alcance de éste. Para apuntarle a algo, debes tener un camino despejado hacia él, por lo que no puede estar detrás de una cobertura total.",
            "Los conjuros con componentes materiales no consumen los materiales en cuestión a menos que se indique explícitamente. A menos que se indique el costo de un material, puedes asumir que el costo es insignificante y que el material simplemente está disponible en una bolsa de componentes",
            "Algunos conjuros requieren que mantengas la concentración para mantener su magia activa. Si pierdes la concentración, ese conjuro termina. Pierdes la concentración en un conjuro si lanzas otro conjuro que requiere concentración o cuando quedes incapacitado. Cada vez que recibes daño, debes hacer una tirada de salvación de Constitución para mantener tu concentración. La CD es igual a 10 o la mitad del daño que recibes, el número que sea mayor"
        ]
    },
    {
        title: "Correr",
        icon: "sprint",
        subtitle: "Duplica velocidad",
        description: "Adquieres movimiento extra",
        reference: "PHB, pg. 192.",
        bullets: [
            "El aumento es igual a tu velocidad, incluyendo modificadores."
        ]
    },
    {
        title: "Retirarse",
        icon: "journey",
        subtitle: "Previene atks de oportunidad",
        description: "Tu movimiento no provoca ataques de oportunidad en tu turno.",
        reference: "PHB, pg. 192.",
        bullets: [
        ]
    },
    {
        title: "Esquivar",
        icon: "aura",
        subtitle: "Aumenta defensas",
        description: "Te concentras completamente en esquivar ataques.",
        reference: "PHB, pg. 192.",
        bullets: [
            "Hasta el comienzo de tu próximo turno, cualquier tirada de ataque contra ti tiene desventaja si puedes ver al atacante, y haces tiradas de salvación de Destreza con ventaja.",
            "Pierdes este beneficio si estás <i>incapacitado</i> o si tu velocidad cae a 0."
        ]
    },
    {
        title: "Escapar",
        icon: "manacles",
        subtitle: "Escapa un agarre",
        description: "Escapa un agarre",
        reference: "PHB, pg. 195.",
        bullets: [
            "Para escapar de un agarre, debes tener éxito en una prueba de Atletismo o Acrobacias contra la tirada de Atletismo de la criatura que te agarra.",
            "Escapar de otras condiciones que te restrinjan (como las esposas) puede requerir una prueba de Destreza o Fuerza, según lo especificado por la condición en cuestión."
        ]
    },
    {
        title: "Ayudar",
        icon: "telepathy",
        subtitle: "Ventaja a un aliado",
        description: "Dale ventaja a un aliado en una prueba de habilidad o en un ataque",
        reference: "PHB, pg. 192.",
        bullets: [
            "El aliado en cuestión obtiene ventaja en la próxima prueba de habilidad que haga para realizar la tarea con la que estás ayudando.",
            "Alternativamente, el objetivo obtiene ventaja en la siguiente tirada de ataque contra una criatura a 5ft de ti.",
            "La ventaja dura hasta el inicio de tu próximo turno."
        ]
    },
    {
        title: "Usar objeto",
        icon: "snatch",
        subtitle: "Interactuar o habilidades esp.",
        description: "Interactua con algún objeto o usa habilidades especiales que involucren objetos",
        reference: "PHB, pg. 193.",
        bullets: [
            "Puedes interactuar con un objeto gratis durante tu turno (como sacar un arma o abrir una puerta). Si quieres interactuar con un segundo objeto, debes usar esta acción.",
            "Cuando un objeto requiera tu acción durante tu turno, usas esta acción."
        ]
    },
    {
        title: "Usar escudo",
        icon: "round-shield",
        subtitle: "Equipar o desequipar escudo",
        description: "Equipar o desequipar un escudo",
        reference: "PHB, pgs. 144-146.",
        bullets: [
            "Un escudo siempre usa una acción para equipar o desequipar.",
            "La armadura toma varius minutos en equiparse y desequiparse."
        ]
    },
    {
        title: "Esconderse",
        icon: "hood",
        subtitle: "",
        description: "Intentar escodenrse",
        reference: "PHB, pg. 192.",
        bullets: [
            "No puedes esconderte de una criatura que puede verte. Debes tener cobertura total, estar en un área muy oscura, ser invisible o bloquear la visión del enemigo de alguna otra forma.",
            "Si haces ruido (como gritar algo o tirar un jarrón, por ejemplo), delatas tu posición.",
            "Cuando intentes esconderte, haz una prueba de Sigilo y anota el resultado. Hasta que te descubran o dejes de esconderte, el total de esa prueba es impugnado por la prueba de Percepción de cualquier criatura que busque activamente señales de tu presencia.",
            "Una criatura te descubre incluso si no te está buscando, a menos que tu prueba de Sigilo sea más alta que su Percepción Pasiva.",
            "Fuera de combate, también puedes usar una prueba de Sigilo para actos como ocultarte de los enemigos, escabullirte de los guardias, escabullirte sin ser notado o acercarte sigilosamente a alguien sin ser visto ni escuchado."
        ]
    },
    {
        title: "Buscar",
        icon: "magnifying-glass",
        subtitle: "",
        description: "Dedica tu atención a buscar algo o alguien",
        reference: "PHB, pg. 193.",
        bullets: [
            "Dependiendo de la naturaleza de tu búsqueda, el DM puede pedirte que hagas una prueba de Percepción o una prueba de Investigación."
        ]
    },
    {
        title: "Preparar",
        icon: "stopwatch",
        subtitle: "Escoje evento y acción",
        description: "Escoje un evento y describe la acción en respuesta a dicho evento",
        reference: "PHB, pg. 193.",
        bullets: [
            "Primero, tú decides qué circunstancia perceptible desencadenará tu reacción.",
            "Luego, eliges la acción que tomarás en respuesta a la circumstancia previamente descrita, o también puedes elegir usar tu velocidad para moverte en respuesta a eso.",
            "Cuando la circunstancia en cuestión ocurra, puedes usar tu reacción apenas ocurra el evento, o ignorarlo.",
            "Cuando preparas un conjuro, lo lanzas normalmente pero retienes su energía, la cual liberas con tu reacción cuando ocurre el evento. Para prepararlo, un conjuro debe tener un tiempo de lanzamiento de 1 acción, y mantener la magia del conjuro requiere concentración."
        ]
    },
    {
        title: "Usar rasgo de clase",
        icon: "embrassed-energy",
        subtitle: "Algunos rasgos usan 1acción",
        description: "Usa un rasgo racial o de clase que requiera 1 acción.",
        reference: "Veanse los detalles de la respectiva clase o raza para más información.",
        bullets: [

        ]
    },
    {
        title: "Estabilizar criatura",
        icon: "first-aid",
        subtitle: "Dar primeros auxilios",
        description: "Puedes detener a una criatura de hacer tiradas de salvación de muerte.",
        reference: "PHB, pg. 197.",
        bullets: [
            "Haz una prueba de Medicina de CD10",
            "Si es exitosa, la criatura se estabiliza y no necesita hacer tiradas de salvación de muerte",
            "Una criatura estable recupera 1hp después de 1d4 horas."
        ]
    },
    {
        title: "Improvisar",
        icon: "juggler",
        subtitle: "No están en esta lista",
        description: "Realiza cualquier acción que te puedas imaginar",
        reference: "PHB, pg. 193.",
        bullets: [
            "Cuando describes una acción que no se detalla en ninguna otra parte de las reglas, el DM te dice si esa acción es posible y qué tipo de tiradas necesitas hacer, si son necesarias, para determinar éxito o fracaso."
        ]
    }
]
