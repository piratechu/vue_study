//composition api
import { ref } from "vue";

export default function useCounter() {
    let count = ref(0);
    function increment() {
        count.value++;
    }
    return { count, increment };
}
