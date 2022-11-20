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
        'book_dr_who',
        'locked_safe',
        'book_game_thrones_vol2',
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
      get: true,
    },
    sharpener: {
      description:
        'This pen sharpener reminds me of the time when people could write their name correctly',
      get: true,
    },
    book_dr_who: {
      description: 'An old book called Dr Who tv series Anthology',
      get: true,
    },
    locked_safe: {
      description: 'A mini safe in the wall',
    },
    book_game_thrones_vol2: {
      description: 'An illustrated edition of Game of Thrones Vol.2',
      get: true,
    },
    scale: {
      description: 'A portable scale that mesures from 0.01gr to 100gr',
      get: true,
    },
    dream_theater_poster: {
      description: 'An old poster from Dream Theater',
      get: true,
    },
    cat_asking_food: {
      description: 'A tabby cat meowing cause he is hungry',
    },
    aspirin: {
      description: 'An aspirin',
      get: true,
    },
  },
  rules: [
    {
      action: 'use',
      param1: 'pencil',
      param2: 'sharpener',
      outcomes: [
        {
          type: 'show_text',
          params: [
            'You try to sharpen the pencil and although your coordination is a little bit off you manage to have a sharpened pencil and some residual graphite powder.',
          ],
        },
        {
          type: 'enable_object',
          params: ['graphite powder'],
        },
        {
          type: 'swap_object',
          params: ['pencil', 'sharpened_pencil'],
        },
      ],
    },
    {
      action: 'inspect',
      param1: 'dream_theater_poster',
      outcomes: [
        {
          type: 'show_text',
          params: [
            "It's a poster from the album Awake from 1992. It has some loose tape that you manage to remove from the poster",
          ],
        },
        {
          type: 'enable_object',
          params: ['tape'],
        },
        {
          type: 'swap_object',
          params: ['dream_theater_poster', 'dream_theater_poster_no_tape'],
        },
      ],
    },
    {
      action: 'use',
      param1: 'tape',
      param2: 'book_dr_who',
      outcomes: [
        {
          type: 'show_text',
          params: [
            'You carefully look for fingerprints in the old book and with the help of the tape you get a fingerprint on the tape',
          ],
        },
        {
          type: 'swap_object',
          params: ['tape', 'tape_with_fingerprint'],
        },
      ],
    },
    {
      action: 'use',
      param1: 'graphite_powder',
      param2: 'tape_with_fingerprint',
      outcomes: [
        {
          type: 'show_text',
          params: [
            'Putting the graphite powder over the tape and blowing abit you end up having a visible fingerprinton the tape',
          ],
        },
        {
          type: 'swap_object',
          params: ['tape_with_fingerprint', 'tape_with_clear_fingerprint'],
        },
      ],
    },
  ],
};
