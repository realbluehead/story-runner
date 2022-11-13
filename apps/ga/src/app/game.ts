import { GameImport } from '@play/adventure';
export const uicgame: GameImport = {
  title: 'First test game',
  scenes: {
    bedroom: {
      exits: [
        { key: 'wc', bothways: true },
        { key: 'window', bothways: false },
      ],
    },
    wc: {},
    window: {},
  },
};
