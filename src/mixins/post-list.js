export default {
  computed: {
    posts() {
      return [
        {
          id: '1',
          title: 'Название поста',
          description: 'Текст',
          claps: '0',
          createdAt: '2019-09-29T00:00:00.000Z',
          updateAt: '2019-09-29T00:00:00.000Z',
          userId: '1',
        },
        {
          id: '2',
          title: 'Название поста',
          description: 'Текст',
          claps: '0',
          createdAt: '2019-09-29T00:00:00.000Z',
          updateAt: '2019-09-29T00:00:00.000Z',
          userId: '1',
        },
      ];
    },
  },
  methods: {
    linkPost({ id, userId }) {
      return { name: 'article', params: { id, userId } };
    },
  },
};
