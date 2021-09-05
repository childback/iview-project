const routers = [
    {
        path: '/',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/index.vue'], resolve)
    },
    {
        path: '/test',
        meta: {
            title: 'test component'
        },
        component: (resolve) => require(['./views/test.vue'], resolve)
    },
    {
        path: '/ics-fc',
        meta: {
            title: 'calendar component'
        },
        component: (resolve) => require(['./views/ics-fc.vue'], resolve)
    },
    {
        path: '/ics-vue-fc',
        meta: {
            title: 'calendar component'
        },
        component: (resolve) => require(['./views/ics-vue-fc.vue'], resolve)
    }
];
export default routers;