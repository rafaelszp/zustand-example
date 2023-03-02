import {create} from 'zustand'
import { mountStoreDevtool } from 'simple-zustand-devtools';

export const useUserStore = create((set)=>({
  user: {logged: false},
  userInfo: undefined,
  login: (user) => set((state) => ({user})),
  logout: () => set({user:{logged: false},userInfo:undefined}),
  getUserInfo: async (login) => {
    const res = await new Promise((resolve,reject)=>{
      const setUserInfo = () =>{
        set((state)=> ({userInfo:{name: "Rafael"}}))
        resolve()
      }
      setTimeout(setUserInfo,300);
    });
  }
}));

if (process.env.NODE_ENV === 'development') {
  mountStoreDevtool('UserStore', useUserStore);
}