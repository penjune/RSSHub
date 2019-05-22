const axios = require('@/utils/axios');

module.exports = async (ctx) => {
    const { new_anime } = await axios.get('https://api.gamer.com.tw/mobile_app/anime/v1/index.php').then((r) => r.data);
    ctx.state.data = {
        title: 'aniforz',
        link: 'https://ani.gamer.com.tw/',
        item: new_anime.date.map((item) => {
            return {
                title: item.title,
                description: item.info,
                link: `https://ani.gamer.com.tw/animeVideo.php?sn=${item.video_sn}`,
                pubDate: new Date().toUTCString(),
            };
        }),
    };
};
