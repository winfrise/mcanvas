<template>
    <div class="left">
        <div class="left__title">MERGE IMAGE: </div>
        <div class="left__img">
            <img class="origin js-result" src="http://mtapplet.meitudata.com/596c72073971d86b5128.jpg" alt="">
        </div>
        <div class="left__btns">
            <span class="button js-addImage" @click="handleAdd('image')">Add Image</span>
            <span class="button js-addWm" @click="handleAdd('watermark')">Watermark</span>
            <span class="button js-addText" @click="handleAdd('text')">Add Text</span>
            <span class="button js-addRect" @click="handleAdd('rect')">Add Rect</span>
            <span class="button js-addCircle" @click="handleAdd('circle')">Add Circle</span>
            <span class="button clear js-clear" @click="handleAdd('reset')">Reset</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LeftBox',
    methods: {
        handleAdd(type) {
            this.$emit('showDialog', {type})
        }
    }
}
</script>

<style lang="scss" scoped>
.left {
    display: inline-block;
    width: 50%;
    text-align: center;
    vertical-align: top;
    &__title{
        font-size: 26px;
        color: #8566aa;
        margin-bottom: 20px;
    }
    &__img{
        display: inline-block;
        border: 2px solid #8566aa;
        width: 60%;
        max-width: 400px;
        padding: 5px;
        box-sizing: border-box;
        border-radius: 5px;

        .origin{
            width: 100%;
        }
        .result{
            width: 100%;
        }
    }

    &__btns{
        margin-top: 20px;
        display: inline-block;
        width: 70%;
    }
}

</style>