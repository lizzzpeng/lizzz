// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
// import MainContain from '../components/MainContain'
// import DeviceRecord from '../pages/DeviceRecord'
// import DeviceStatus from '../pages/DeviceStatus'


//创建并暴露一个路由器
export default new VueRouter({
	
			routes: [
				{
					name: 'MainContain',
					path: '/MainContain',
					component: () => import('../components/MainContain.vue'),
					children: [
						{
							name: "DeviceRecord",
							path: 'DeviceRecord',
							component: () => import('../pages/DeviceRecord.vue'),
						},
						{
							name: "DeviceStatus",
							path: 'DeviceStatus',
							component: () => import('../pages/DeviceStatus.vue'),
						}
					]
				},
				{
					name: "MainContain2",
					path: '/MainContain2',
					component: () => import('../components/MainContain.vue'),
				},
				]

		}
	
)
