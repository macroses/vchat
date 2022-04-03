import { createRouter, createWebHistory } from 'vue-router'
import VContactList from "@/components/contacts/v-contact-list";
import VContactUserInfo from "@/components/contacts/v-contact-user-info";
import VUsersList from "@/components/users/v-users-list";
import VUserChat from "@/components/users/chat/v-user-chat";

const routes = [
  {
    path: '/',
    name: 'contacts',
    component: VContactList
  },
  {
    path: '/contact',
    name: 'contact',
    component: VContactUserInfo
  },
  {
    path: '/chats',
    name: 'chats',
    component: VUsersList
  },
  {
    path: '/chat',
    name: 'chat',
    props: true,
    component: VUserChat
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
