import { ref, isRef, unref, watchEffect } from "vue";

export function useFetch(url){
    const data = ref(null);
    const error = ref(null);

    const getData = async () => {
        //reset data before fetching
        data.value = null;
        error.value = null;
        try {
            //unref() returns the inner value if the argument is a ref, otherwise return the argument itself 
            const res = await fetch(unref(url));
            const resData = await res.json();
            data.value = resData;  
        } catch (err) {
            error.value = err;
        }       
    }
    //isRef() checks if a value is a ref object.
    if(isRef(url)){
        //setup reactive re-fetch if input URL is a ref
        watchEffect(getData)
    }else{
        //otherwise just fetch once and avoid the overhead of a watcher
        getData();
    }
    
    return { data, error };
}
//Using Promise then
// export function useFetch(url){
//     const data = ref(null);
//     const error = ref(null);
//     fetch(url)
//         .then((res) => res.json())
//         .then((json) => (data.value = json))
//         .catch((err) => (error.value = err))

//     return { data, error };
// }