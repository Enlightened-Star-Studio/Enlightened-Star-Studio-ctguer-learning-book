module.exports = [
    { text: '首页', link: '/' },
    { text: '起步', link: '/welcome/before_learning' },
    { text: 'Github', link: 'http://www.baidu.com' },
    { text: 'MySQL', link: '/sql/sql1' },
	{
        text: '碎碎念', link: '/coding/',
		items: [
            {text: 'PAT', link: '/baodian/zero/'},
			{text: '剑指offer', link: '/baodian/zero/'},
            {text: 'LeeCode', link: '/baodian/high/'}
        ]
    },
	{
        text: '爱编程', link: '/coding/',
		items: [
            {text: 'PAT', link: '/coding/pat/'},
			{text: '剑指offer', link: '/coding/offer/'},
            {text: 'LeeCode', link: '/coding/leeCode/'}
        ]
    },
	{
        text: '专栏', link: '/column/',
		items: [
            {text: '群晖NAS Docker系列教程', link: '/column/synology/'},
			{text: 'vuepress系列教程', link: '/column/vuepress/'},
            {text: 'springboot系列教程', link: '/column/springboot/'}
        ]
    },
    {
        text: '后端',
        items: [
			{
                text: 'Mysql',
				items: [
					{text: 'DS918-Mysql', link: 'http://mysql.hepcloud.top'},
					{text: 'DS220-MySql', link: 'http://mysql.huerpu.top'}
				]
            },
			{
                text: 'Redis',
				items: [
					{text: 'DS918-Redis', link: 'http://redis.hepcloud.top'},
					{text: 'DS220-Redis', link: 'http://redis.huerpu.top'}
				]
            },
			{
                text: 'ElasticSearch',
				items: [
					{text: 'DS918-es', link: 'http://es.hepcloud.top'},
					{text: 'DS220-es', link: 'http://es.hepcloud.top'}
				]
            }
        ]
    },
	{
        text: '关于我', link: 'http://www.yuque.com/ctguqmx'
    }
]

