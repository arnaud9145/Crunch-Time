const initialState = {
  games: [
    {
      key: 0,
      type: 'drag',
      image: 'start.png',
      text: 'ceci est un text 1',
      lines: [
        {
          key: 1,
          line: 'Si A > B'
        },
        {
          key: 2,
          line: 'A = 3'
        },
        {
          key: 3,
          line: 'B = 4'
        },
        {
          key: 4,
          line: 'Fin Si'
        },
        {
          key: 5,
          line: 'Afficher A est plus grand que B'
        },
        {
          key: 6,
          line: 'Afficher B est plus grand que A'
        },
        {
          key: 7,
          line: 'Sinon'
        }
      ],
      combinations: [[2, 3, 1, 5, 7, 6, 4], [3, 2, 1, 5, 7, 6, 4]],
      link: '/history/1'
    },
    {
      key: 1,
      type: 'drag',
      image: 'start.png',
      text: 'ceci est un text 2',
      lines: [
        {
          key: 1,
          line: 'Si A > B'
        },
        {
          key: 2,
          line: 'A = 3'
        },
        {
          key: 3,
          line: 'B = 4'
        },
        {
          key: 4,
          line: 'Fin Si'
        },
        {
          key: 5,
          line: 'Afficher A est plus grand que B'
        },
        {
          key: 6,
          line: 'Afficher B est plus grand que A'
        },
        {
          key: 7,
          line: 'Sinon'
        }
      ],
      combinations: [[2, 3, 1, 5, 7, 6, 4], [3, 2, 1, 5, 7, 6, 4]],
      link: '/history/2'
    },
    {
      key: 2,
      type: 'button',
      image: 'start.png',
      text: 'ceci est un text 3',
      buttons: [
        {
          key: 1,
          text: 'bouton 1'
        },
        {
          key: 2,
          text: 'bouton 2',
          link: '/history/3'
        },
        {
          key: 3,
          text: 'bouton 3'
        }
      ]
    }
  ]
}

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}
