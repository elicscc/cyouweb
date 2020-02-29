import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _67db8082 = () => import('..\\pages\\friends\\index.vue' /* webpackChunkName: "pages_friends_index" */).then(m => m.default || m)
const _5e1ac8e0 = () => import('..\\pages\\gathering\\index.vue' /* webpackChunkName: "pages_gathering_index" */).then(m => m.default || m)
const _39aeb903 = () => import('..\\pages\\label\\index.vue' /* webpackChunkName: "pages_label_index" */).then(m => m.default || m)
const _73486894 = () => import('..\\pages\\login.vue' /* webpackChunkName: "pages_login" */).then(m => m.default || m)
const _948563d0 = () => import('..\\pages\\manager.vue' /* webpackChunkName: "pages_manager" */).then(m => m.default || m)
const _26bd7b6a = () => import('..\\pages\\manager\\index.vue' /* webpackChunkName: "pages_manager_index" */).then(m => m.default || m)
const _e0651176 = () => import('..\\pages\\manager\\account.vue' /* webpackChunkName: "pages_manager_account" */).then(m => m.default || m)
const _4cc1f457 = () => import('..\\pages\\manager\\dynamic.vue' /* webpackChunkName: "pages_manager_dynamic" */).then(m => m.default || m)
const _0b5fd102 = () => import('..\\pages\\manager\\myanswer.vue' /* webpackChunkName: "pages_manager_myanswer" */).then(m => m.default || m)
const _377b92d4 = () => import('..\\pages\\manager\\mycollect.vue' /* webpackChunkName: "pages_manager_mycollect" */).then(m => m.default || m)
const _cd52ef78 = () => import('..\\pages\\manager\\myfocus.vue' /* webpackChunkName: "pages_manager_myfocus" */).then(m => m.default || m)
const _3b68be2a = () => import('..\\pages\\manager\\myquestion.vue' /* webpackChunkName: "pages_manager_myquestion" */).then(m => m.default || m)
const _5bb0d30e = () => import('..\\pages\\manager\\myreaded.vue' /* webpackChunkName: "pages_manager_myreaded" */).then(m => m.default || m)
const _4c10b06a = () => import('..\\pages\\manager\\myshare.vue' /* webpackChunkName: "pages_manager_myshare" */).then(m => m.default || m)
const _3697a675 = () => import('..\\pages\\qa.vue' /* webpackChunkName: "pages_qa" */).then(m => m.default || m)
const _00dd706d = () => import('..\\pages\\qa\\index.vue' /* webpackChunkName: "pages_qa_index" */).then(m => m.default || m)
const _22628984 = () => import('..\\pages\\qa\\label\\_label.vue' /* webpackChunkName: "pages_qa_label__label" */).then(m => m.default || m)
const _abc7618e = () => import('..\\pages\\recruit\\index.vue' /* webpackChunkName: "pages_recruit_index" */).then(m => m.default || m)
const _5592f7c8 = () => import('..\\pages\\register.vue' /* webpackChunkName: "pages_register" */).then(m => m.default || m)
const _0f9b5a75 = () => import('..\\pages\\spit\\index.vue' /* webpackChunkName: "pages_spit_index" */).then(m => m.default || m)
const _67b69a32 = () => import('..\\pages\\weixinlogin.vue' /* webpackChunkName: "pages_weixinlogin" */).then(m => m.default || m)
const _ee805488 = () => import('..\\pages\\gathering\\edit.vue' /* webpackChunkName: "pages_gathering_edit" */).then(m => m.default || m)
const _3e1df005 = () => import('..\\pages\\spit\\submit.vue' /* webpackChunkName: "pages_spit_submit" */).then(m => m.default || m)
const _c8999924 = () => import('..\\pages\\recruit\\item\\_id.vue' /* webpackChunkName: "pages_recruit_item__id" */).then(m => m.default || m)
const _7ba8696c = () => import('..\\pages\\recruit\\item\\_rid.vue' /* webpackChunkName: "pages_recruit_item__rid" */).then(m => m.default || m)
const _6ffb7eac = () => import('..\\pages\\spit\\item\\_id.vue' /* webpackChunkName: "pages_spit_item__id" */).then(m => m.default || m)
const _7c9241f8 = () => import('..\\pages\\gathering\\_id.vue' /* webpackChunkName: "pages_gathering__id" */).then(m => m.default || m)
const _acbe7506 = () => import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/friends",
			component: _67db8082,
			name: "friends"
		},
		{
			path: "/gathering",
			component: _5e1ac8e0,
			name: "gathering"
		},
		{
			path: "/label",
			component: _39aeb903,
			name: "label"
		},
		{
			path: "/login",
			component: _73486894,
			name: "login"
		},
		{
			path: "/manager",
			component: _948563d0,
			children: [
				{
					path: "",
					component: _26bd7b6a,
					name: "manager"
				},
				{
					path: "account",
					component: _e0651176,
					name: "manager-account"
				},
				{
					path: "dynamic",
					component: _4cc1f457,
					name: "manager-dynamic"
				},
				{
					path: "myanswer",
					component: _0b5fd102,
					name: "manager-myanswer"
				},
				{
					path: "mycollect",
					component: _377b92d4,
					name: "manager-mycollect"
				},
				{
					path: "myfocus",
					component: _cd52ef78,
					name: "manager-myfocus"
				},
				{
					path: "myquestion",
					component: _3b68be2a,
					name: "manager-myquestion"
				},
				{
					path: "myreaded",
					component: _5bb0d30e,
					name: "manager-myreaded"
				},
				{
					path: "myshare",
					component: _4c10b06a,
					name: "manager-myshare"
				}
			]
		},
		{
			path: "/qa",
			component: _3697a675,
			children: [
				{
					path: "",
					component: _00dd706d,
					name: "qa"
				},
				{
					path: "label/:label?",
					component: _22628984,
					name: "qa-label-label"
				}
			]
		},
		{
			path: "/recruit",
			component: _abc7618e,
			name: "recruit"
		},
		{
			path: "/register",
			component: _5592f7c8,
			name: "register"
		},
		{
			path: "/spit",
			component: _0f9b5a75,
			name: "spit"
		},
		{
			path: "/weixinlogin",
			component: _67b69a32,
			name: "weixinlogin"
		},
		{
			path: "/gathering/edit",
			component: _ee805488,
			name: "gathering-edit"
		},
		{
			path: "/spit/submit",
			component: _3e1df005,
			name: "spit-submit"
		},
		{
			path: "/recruit/item/:id?",
			component: _c8999924,
			name: "recruit-item-id"
		},
		{
			path: "/recruit/item/:rid?",
			component: _7ba8696c,
			name: "recruit-item-rid"
		},
		{
			path: "/spit/item/:id?",
			component: _6ffb7eac,
			name: "spit-item-id"
		},
		{
			path: "/gathering/:id",
			component: _7c9241f8,
			name: "gathering-id"
		},
		{
			path: "/",
			component: _acbe7506,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
