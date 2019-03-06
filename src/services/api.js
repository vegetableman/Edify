const delay = (...args) => {
  return new Promise(function(resolve) {
    setTimeout.apply(null, [resolve].concat(args));
  });
};

const api = {
  async fetchProducts() {
    // await delay(3000);
    return [
      {
        id: 1,
        title: "Figuring",
        cover:
          "https://66.media.tumblr.com/d02e4be5bcf28cccfe9f03307b2740c5/tumblr_pinlp736b51r3ctjno1_r1_100.jpg"
      },
      {
        id: 2,
        title: "A Velocity of Being: Letters to A Young Reader",
        cover:
          "https://66.media.tumblr.com/55422f9630087ec66013f7016b5b5afa/tumblr_pinlmmwY0e1r3ctjno1_r1_100.jpg"
      },
      {
        id: 3,
        title: "Specimen Days and Collect",
        cover:
          "https://66.media.tumblr.com/76a92a3760457e8a53b91c26b0ec23bb/tumblr_p1bs8gVMb71r3ctjno1_r1_100.jpg"
      },
      {
        id: 4,
        title:
          "The Human Use Of Human Beings: Cybernetics And Society (The Da Capo series in science)",
        cover:
          "https://66.media.tumblr.com/90fdba95ecdfb18791d3da0b54c1b099/tumblr_paqrgj0hUq1r3ctjno1_r1_100.jpg"
      },
      {
        id: 5,
        title:
          "Frankenstein: Annotated for Scientists, Engineers, and Creators of All Kinds",
        cover:
          "https://66.media.tumblr.com/a54e013b223aec4dc5daf6d5b4640b56/tumblr_paqr9ab6tQ1r3ctjno1_100.jpg"
      },
      {
        id: 6,
        title: "Be Still, Life",
        cover:
          "https://66.media.tumblr.com/fe2e900e4efba872fe631f1c61459211/tumblr_paqqo1Xcxe1r3ctjno1_r1_100.jpg"
      },
      {
        id: 7,
        title: "The Varieties of Religious Experience: A Study in Human Nature",
        cover:
          "https://66.media.tumblr.com/f8f4e188b093e5ab7e033a9c6e2efc85/tumblr_paqqspD5Wa1r3ctjno1_r1_100.jpg"
      },
      {
        id: 8,
        title: "Walking in the City with Jane: A Story of Jane Jacobs",
        cover:
          "https://66.media.tumblr.com/b1670fd40390083b9bcd3e58f775078a/tumblr_paqrbgZsT11r3ctjno1_r1_100.jpg"
      },
      {
        id: 9,
        title: "Egon Schiele: Poems and Letters 1910-1912",
        cover:
          "https://66.media.tumblr.com/0880a0bde6c54c4596cbbe502be02463/tumblr_paqqqiNU9c1r3ctjno1_r1_100.jpg"
      },
      {
        id: 10,
        title: "Nature Writings",
        cover:
          "https://66.media.tumblr.com/5bc85940ddaacb6dd2a2fabe7dc49373/tumblr_paqqzxYW371r3ctjno1_100.jpg"
      },
      {
        id: 11,
        title:
          "The Man Who Mistook His Wife For A Hat: And Other Clinical Tales",
        cover:
          "https://66.media.tumblr.com/70ea2a62e92c13d4590c8bb93bb9d0ea/tumblr_p3z10g56QB1r3ctjno1_r1_100.jpg"
      },
      {
        id: 12,
        title: "Kenneth Grahame, 1859-1932",
        cover:
          "https://66.media.tumblr.com/a80a05c71f4ab6296b17d54ba158f428/tumblr_p3z0roXvLo1r3ctjno1_r1_100.jpg"
      },
      {
        id: 13,
        title: "House of Life: Rachel Carson at Work",
        cover:
          "https://66.media.tumblr.com/4e34bd36852dbf11ac4b4e4a73a22cd0/tumblr_ovkekwxLxX1r3ctjno1_r1_100.jpg"
      },
      {
        id: 14,
        title: "The Diary of Alice James",
        cover:
          "https://66.media.tumblr.com/04542e37b98d7d981414e3c136123fef/tumblr_ovkf7nojsU1r3ctjno1_r1_100.jpg"
      },
      {
        id: 15,
        title: "The Price of the Ticket: Collected Nonfiction",
        cover:
          "https://66.media.tumblr.com/3b2b9399d7e5de974fc9c90492782262/tumblr_ovkevyj92G1r3ctjno1_r1_100.jpg"
      },
      {
        id: 16,
        title: "Consciousness: Confessions of a Romantic Reductionist",
        cover:
          "https://66.media.tumblr.com/ba3f68f07ab5cc458190d7f751b7b1db/tumblr_orb0nmVg9v1r3ctjno1_100.jpg"
      },
      {
        id: 17,
        title: "Beethoven Letters Journals and Conversations",
        cover:
          "https://66.media.tumblr.com/146310dfedea88d82383536abc4dc1f4/tumblr_oraz7fDlfC1r3ctjno1_r1_100.jpg"
      }
    ];
  },

  async authenticate() {
    // await delay(3000);
    return [null, true];
  },

  async initPayment() {
    // await delay(3000);
    return [null, true];
  }
};

export default api;
