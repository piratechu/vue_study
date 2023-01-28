import { reactive, onMounted, onBeforeUnmount } from "vue";

export default function () {
    //物件建議採用 reactive 進行響應式數據定義
    let point = reactive({ x: 0, y: 0 });

    function getPoint(event) {
        point.x = event.pageX;
        point.y = event.pageY;
    }
    onMounted(() => {
        window.addEventListener("click", getPoint);
    });
    onBeforeUnmount(() => {
        window.removeEventListener("click", getPoint);
    });
    return point;
}
