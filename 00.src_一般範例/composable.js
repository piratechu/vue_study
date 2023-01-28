import {ref} from 'vue'

export function useComApi() {
        const resuseMsg = ref("reuseMsg");
        function showMsg(alertMsg){
            //function showMsg(){
                console.log("use Composable replace mixin");
                resuseMsg.value = alertMsg
                alert(resuseMsg.value);
            }
        return {
            resuseMsg,
            showMsg
        }
}