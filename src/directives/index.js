// 定義進入動畫插件
import { useIntersectionObserver } from '@vueuse/core'
export const enterAni = {
    install(app) {
        app.directive('enter', {
            mounted(el, binding) {
                const { stop } = useIntersectionObserver(
                    el,
                    ([{ isIntersecting }]) => {
                        if (isIntersecting) {
                            el.className += binding.value
                            stop()
                        }
                        
                    },
                )
            }
        })
    }
}