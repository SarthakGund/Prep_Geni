import { create } from 'zustand'
import { db } from "./firebase";
import { doc, getDoc } from 'firebase/firestore';

export const useUserStore = create((set) => ({
  currentUser: null,
  isLoading: true,
    fetchUserInfo: async (uid) =>{
        if(!uid){
            return set({currectUser: null, isLoading: false})
        }

        try{
            const docRef = doc(db, "Users", uid);
            const docSnap = await getDoc(docRef);

            if(docSnap.exists()){
                console.log("Document data:", docSnap.data());
                set({currentData: docSnap.data(), isLoading:false})
            }
            else{
            return set({currectUser: null, isLoading: false});            
            }
        }
        catch(error){
            console.log(error)
            return set({currectUser: null, isLoading: false})

        }
    }
}))
