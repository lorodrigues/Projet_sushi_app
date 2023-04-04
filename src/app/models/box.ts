export interface Box {
    id: number;
    nom: string;
    description: string;
    contenu: string[];
    prix: number;
    saveurs: string;
    aliments: {nom: string; quantite: string;};
    image: string;
  }
