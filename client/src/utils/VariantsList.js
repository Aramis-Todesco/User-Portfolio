export const VariantsList = {
  toBottom: {
    hidden: { opacity: 0, y: -50 }, // Inizialmente invisibile e spostato verso l'alto
    visible: { opacity: 1, y: 0 }, // Visibile nella posizione originale
  },
  toRight: {
    hidden: { opacity: 0, x: -50 }, // Inizialmente invisibile e spostato a sinistra
    visible: { opacity: 1, x: 0 }, // Visibile nella posizione originale
  },
  popIn: {
    hidden: { opacity: 0, scale: 0 }, // Inizialmente invisibile e scalato a zero
    visible: { opacity: 1, scale: 1 }, // Visibile nella dimensione originale
  },
};
