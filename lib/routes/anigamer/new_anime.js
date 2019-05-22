const axios = require('@/utils/axios');

module.exports = async (ctx) => {
    const { new_anime } = await axios.get('https://api.gamer.com.tw/mobile_app/anime/v1/index.php').then((r) => r.data);
    ctx.state.data = {
        title: 'aniforz',
        link: 'https://ani.gamer.com.tw/',
        item: new_anime.date.map((item) => {
#            const date = new Date();
#            const month = item.info.split('/')[0] - 1;
#            const day = item.info.split(' ')[0].split('/')[1];
#            const pubdatetemp = new Date(date.getFullYear(), month, day);
#            const pubdate = pubdatetemp > date ? new Date(date.getFullYear() - 1, month, day) : pubdatetemp;
             const pubdate = new Date();
            return {
                title: item.title,
                description: item.info,
                link: `https://ani.gamer.com.tw/animeVideo.php?sn=${item.video_sn}`,
                pubDate: pubdate.toUTCString(),
            };
        }),
    };
};
