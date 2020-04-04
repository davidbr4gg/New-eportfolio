import Vue from 'vue'
import { KinesisContainer, KinesisElement } from 'vue-kinesis'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowRight, faUserAlt, faArrowUp, faLink, faAward, faDownload, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faArrowRight, faUserAlt, faArrowUp, faGithub, faYoutube, faLink, faAward, faDownload, faEnvelope, faLinkedin)

import { MdField } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import '~/assets/css/app.scss'

Vue.use(MdField)



Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('kinesis-container', KinesisContainer)
Vue.component('kinesis-element', KinesisElement)
