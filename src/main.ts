import { createApp } from 'vue'
import { globalRegister } from './global'
import 'normalize.css'
import './assets/css/index.less'

import App from './App.vue'

import router from './router'
import store from './store'
import { setupStore } from './store'

import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'

// import dRequest from './service'

const app = createApp(App)

app.component('PageContent', PageContent)
app.component('PageModal', PageModal)

// 注册element-plus/其他
app.use(globalRegister)
app.use(store)
setupStore()

// path: /user -> user
app.use(router)

app.mount('#app')

// interface DataType {
//   data: any
//   returnCode: string
//   success: boolean
// }

// dRequest
//   .get<DataType>({
//     url: '/home/multidata'
//   })
//   .then((res) => {
//     console.log(res.data)
//     console.log(res.returnCode)
//     console.log(res.success)
//   })
