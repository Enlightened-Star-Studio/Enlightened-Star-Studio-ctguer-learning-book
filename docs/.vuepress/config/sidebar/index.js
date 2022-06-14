module.exports = [
    {
        title: '欢迎使用',
        collapsable: true,
        children: [
            { title: '介绍', path: '/welcome/before_learning' },
            { title: '如何添加文档', path: '/welcome/how_to_use' },
            // {
            //     title: '测试',
            //     path: '/welcome/test/test1',
            //     collapsable: true,
            //     children: [
            //         { title: '测试1',path: '/welcome/test/test1' },
            //     ]
            // },
        ]
    },
    {
        title: 'MySQL学习',
        collapsable: true,
        children: [
            { title: 'SQL1', path: '/sql/sql1' },
            { title: 'SQL2', path: '/sql/sql2' }
        ]
    },
    {
        title: 'Java学习',
        collapsable: true,
        children: [
            { title: 'Java1', path: '/java/java1' },
        ]
    },
    {
        title: 'SpringBoot学习',
        collapsable: true,
        children: [
            { title: '开始', path: '/springboot/start_up' },
            { title: '介绍', path: '/springboot/intro' },
        ]
    }
]