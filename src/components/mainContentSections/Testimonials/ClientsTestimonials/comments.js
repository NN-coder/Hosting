const images = require.context('./img');
const getImagePath = (name) => images(name).default;

const comments = [
  {
    author: 'Abdhulkalam',
    images: {
      jpg: getImagePath('./abdhulkalam.jpg'),
      webp: getImagePath('./abdhulkalam.webp'),
    },
    comment: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae eveniet odit facere eius, commodi adipisci temporibus molestiae quidem optio hic ipsam tenetur amet voluptates expedita unde magnam neque! Numquam, dignissimos suscipit blanditiis at laborum corrupti fuga tempora asperiores maiores rem.`,
  },
  {
    author: 'Akhil',
    images: {
      jpg: getImagePath('./akhil.jpg'),
      webp: getImagePath('./akhil.webp'),
    },
    comment: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, laborum, perferendis ipsam enim minus officia, ut non nobis vitae numquam illum. Nulla itaque nemo delectus, vitae ipsa eos pariatur vero officiis deleniti reprehenderit tempore eius odio dignissimos soluta temporibus odit voluptatum reiciendis dolorem! Voluptatum delectus, quod est architecto consequatur consectetur eveniet libero voluptates unde autem sed excepturi ducimus nisi atque rerum dolorem voluptas porro odit labore harum. Et, delectus vitae.`,
  },
  {
    author: 'Aneesh Kumar',
    images: {
      jpg: getImagePath('./aneesh-kumar.jpg'),
      webp: getImagePath('./aneesh-kumar.webp'),
    },
    comment: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus voluptatem repellendus facere natus nulla deserunt hic excepturi a sunt quidem.`,
  },
  {
    author: 'Ayizha Nasreem',
    images: {
      jpg: getImagePath('./ayizha-nasreem.jpg'),
      webp: getImagePath('./ayizha-nasreem.webp'),
    },
    comment: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus voluptatem repellendus facere natus nulla deserunt hic excepturi a sunt quidem.`,
  },
  {
    author: 'Krishanunni',
    images: {
      jpg: getImagePath('./krishanunni.jpg'),
      webp: getImagePath('./krishanunni.webp'),
    },
    comment: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit dolorem perferendis, tempora, cupiditate iusto quaerat odit, at facilis obcaecati sunt corporis deserunt. Voluptatem, quia a! Nihil, qui obcaecati error maiores nobis illo cupiditate ipsum accusantium culpa sunt architecto? Ipsam minus expedita cum quidem iste voluptatibus sed itaque nobis obcaecati nam?`,
  },
  {
    author: 'Mercy John',
    images: {
      jpg: getImagePath('./mercy-john.jpg'),
      webp: getImagePath('./mercy-john.webp'),
    },
    comment: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur eligendi qui exercitationem perferendis at nemo, expedita rerum aperiam explicabo, quidem dolorem, ea error possimus corporis natus ipsum et sit? Non, unde. Dignissimos natus vel earum necessitatibus ex deserunt quo molestiae porro dicta, repellat perferendis molestias nulla, a illo adipisci incidunt. Placeat tempora rem aliquam molestiae quibusdam ipsum dolorum, earum excepturi repellendus reprehenderit minus fuga magni quidem illum facilis aspernatur possimus?`,
  },
  {
    author: 'Nimisha John',
    images: {
      jpg: getImagePath('./nimisha-john.jpg'),
      webp: getImagePath('./nimisha-john.webp'),
    },
    comment: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut officiis sequi quas enim, tenetur, similique placeat fugit unde ab magnam repellendus suscipit fugiat obcaecati adipisci. Dignissimos, nisi. Soluta provident corporis optio cupiditate explicabo voluptatibus distinctio expedita! Iure officiis voluptatem magni.`,
  },
  {
    author: 'Sana Nair',
    images: {
      jpg: getImagePath('./sana-nair.jpg'),
      webp: getImagePath('./sana-nair.webp'),
    },
    comment: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam officia enim ratione qui ullam ad laudantium rerum sunt quas ea quos dolorem commodi a, possimus eos. Placeat in voluptates quasi.`,
  },
  {
    author: 'Subash Alpy',
    images: {
      jpg: getImagePath('./subash-alpy.jpg'),
      webp: getImagePath('./subash-alpy.webp'),
    },
    comment: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa animi vitae excepturi a in sapiente tempora quas esse assumenda iure!`,
  },
];

export default comments;
