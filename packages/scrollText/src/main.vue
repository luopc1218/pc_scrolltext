<template>
    <div
            class="ScrollText"
            ref="ScrollText"
            @mouseenter.stop="stopScroll"
            @mouseleave.stop="initScroll"
    >
        <div class="scrollTextBody" ref="scrollTextBody" :style="scrollTextBodyStyle">
            <div :style="{'margin':height+'px 0'}">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "pc-scrollText",
        props: {
            //速度:越低越快
            speed: {
                type: Number,
                default: 10
            },
            //是否支持鼠标移入后暂停
            mouseenter: {
                type: Boolean,
                default: true
            },

        },
        data() {
            return {
                now: Date.now(),
                height: 0,
                scrollAnimation: null,
                scrollTextBodyStyle: {}
            };
        },
        mounted() {
            this.height = this.$refs.ScrollText.clientHeight;
            this.initScroll();
            this.scrollTextBodyStyle = {
                width: "calc(100% + " + this.getScrollbarWidth() + "px)"
            }
            // this.getScrollbarWidth()
        },
        destroyed() {
            window.cancelAnimationFrame(this.scrollAnimation);
        },
        methods: {
            //初始化滚动逻辑
            initScroll() {
                let now = Date.now();
                this.scrollAnimation = window.requestAnimationFrame(() => {
                    if (now - this.now >= this.speed) {
                        let scrollHeight =
                            this.$refs.scrollTextBody.scrollHeight -
                            this.$refs.scrollTextBody.clientHeight;
                        if (this.$refs.scrollTextBody.scrollTop < scrollHeight) {
                            this.$refs.scrollTextBody.scrollTop += 1;
                        } else {
                            this.$refs.scrollTextBody.scrollTop = 0;
                        }
                        this.now = Date.now();
                    }

                    this.initScroll();
                });
            },
            //暂停滚动
            stopScroll() {
                if (this.mouseenter) window.cancelAnimationFrame(this.scrollAnimation);
            },
            //获取滚动条宽度
            getScrollbarWidth() {
                let odiv = document.createElement('div'),//创建一个div
                    styles = {
                        width: '100px',
                        height: '100px',
                        overflowY: 'scroll'//让他有滚动条
                    }, i, scrollbarWidth;
                for (i in styles) odiv.style[i] = styles[i];
                document.body.appendChild(odiv);//把div添加到body中
                scrollbarWidth = odiv.offsetWidth - odiv.clientWidth;//相减
                odiv.remove();//移除创建的div
                console.log(scrollbarWidth)
                return scrollbarWidth;//返回滚动条宽度
            }
        }
    };
</script>

<style scoped>
    .ScrollText {
        overflow: hidden;


    }

    .scrollTextBody {
        width: 100%;
        height: 100%;
        overflow-y: scroll;
        padding: 0 1rem;
        box-sizing: border-box;
    }
</style>