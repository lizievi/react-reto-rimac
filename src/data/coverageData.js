import IconStolen from "../assets/icons/icon_llanta.svg";
import IconCrash from "../assets/icons/icon_choque.svg";
import IconHit from "../assets/icons/icon_atropello.svg";

export const initialCoverages = [
  {
    id: "stolenTire",
    icon: IconStolen,
    title: "Llanta robada",
    description: "He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que esta en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una piton a un sitio de esos de poner las bicis y mucho mds",
    mountUnit: 15,
    isAdded: true,
  },
  {
    id: "crash",
    icon: IconCrash,
    title: "Choque y/o pasarte la luz roja",
    description: "He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que esta en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una piton a un sitio de esos de poner las bicis y mucho mds",
    mountUnit: 20,
    isAdded: false,
  },
  {
    id: "hit",
    icon: IconHit,
    title: "Atropello en la vía Evitamiento",
    description: "He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que esta en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una piton a un sitio de esos de poner las bicis y mucho mds",
    mountUnit: 50,
    isAdded: false,
  },
];