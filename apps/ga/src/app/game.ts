import { GameImport } from '@play/adventure';
export const uicgame: GameImport = {
  title: 'First test game',
  start_scene: 'flat_bedroom',
  scenes: {
    flat_bedroom: {
      name: "Flat's main bedroom",
      exits: [
        { key: 'flat_wc', bothways: true },
        { key: 'flat_bedroom_window', bothways: false },
        { key: 'flat_corridor' },
      ],
      objects: [
        'pencil',
        'sharpener',
        'book_dr_what',
        'locked_safe',
        'book_game_chairs_vol2',
        'scale',
      ],
    },
    flat_wc: {
      name: "Flat's bathroom",
      objects: ['dream_theater_poster', 'cat_asking_food', 'aspirin'],
    },
    flat_bedroom_window: {
      name: "Bedroom's window to the street",
    },
    flat_corridor: {
      name: 'Corridor of 4th floor',
    },
  },
  objects: {
    pencil: {
      description: 'A brand new pencil with a DR WHO logo on it',
    },
    sharpener: {
      description:
        'This pen sharpener reminds me of the time when people could write their name correctly',
    },
    book_dr_what: {
      description: 'An old book called Dr Who tv series Anthology',
    },
    locked_safe: {
      description: 'A mini safe in the wall',
    },
    book_game_chairs_vol2: {
      description: 'An illustrated edition of Game of Thrones Vol.2',
    },
    scale: {
      description: 'A portable scale that mesures from 0.01gr to 100gr',
    },
    dream_theater_poster: {
      description: 'An old poster from Dream Theater',
    },
    cat_asking_food: {
      description: 'A tabby cat meowing cause he is hungry',
    },
    aspirin: {
      description: 'An aspirin',
    },
  },
};
